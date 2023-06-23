import React, { createContext, useState, ReactNode } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../services'

type Token = {
  token: string
  idToken: string
  user: any
  givenName: string
  email: string
  id: string
  name: string
  photo: string
}

type AuthContextProps = {
  token: Token | null
  login: (token: Token) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps | null>(null)

type AuthProviderProps = {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<Token | null>(null)

  async function login(token: Token) {
    setToken(token)

    if (token.token) {
      const response = await api.get('auth/profile')
      setUsers({
        token: token.token,
        name: response.data.data.user.name,
        email: response.data.data.user.email,
        id: response.data.data.user._id,
        nick: response.data.data.user.nick
      })
    }
    if (token.idToken) {
      setUsers({
        token: token.idToken,
        name: token.user.name,
        email: token.user.email,
        id: token.user.id,
        nick: token.user.givenName,
        photo: token.user.photo
      })
    }
  }

  async function setUsers(item: any) {
    await AsyncStorage.setItem('@token', item.token || '')
    await AsyncStorage.setItem('@name', item.name || '')
    await AsyncStorage.setItem('@email', item.email || '')
    await AsyncStorage.setItem('@id', item.id || '')
    await AsyncStorage.setItem('@nick', item.nick || '')
    await AsyncStorage.setItem('@photo', item.photo || '')
  }

  async function logout() {
    setToken(null)
    await AsyncStorage.removeItem('@token')
    await AsyncStorage.removeItem('@email')
    await AsyncStorage.removeItem('@id')
    await AsyncStorage.removeItem('@nick')
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
