import React, { createContext, useState, ReactNode } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Token = {
  token: string
  user: {
    name: string
    email: string
    _id: string
  }
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
    await AsyncStorage.setItem('token', token.token)
    await AsyncStorage.setItem('name', token.user.name)
    await AsyncStorage.setItem('email', token.user.email)
  }

  async function logout() {
    setToken(null)
    await AsyncStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
