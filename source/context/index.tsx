import React, { createContext, useState, ReactNode } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../services'

type Token = {
  token: string
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
    await AsyncStorage.setItem('@token', token.token)
    if (token.token) {
      const response = await api.get('auth/profile')
      await AsyncStorage.setItem('@name', response.data.data.user.name)
      await AsyncStorage.setItem('@email', response.data.data.user.email)
      await AsyncStorage.setItem('@id', response.data.data.user._id)
      await AsyncStorage.setItem('@nick', response.data.data.user.nickName)
    }
  }

  async function logout() {
    setToken(null)
    await AsyncStorage.removeItem('@token')
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
