import React, { createContext, useState, ReactNode } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firestore from '@react-native-firebase/firestore'

type Token = {
  uid: string
  displayName: string
  nick: string
  photoURL: string

  idToken: string
  user: any
  givenName: string
  email: string
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
    // console.log({
    //   idToken: token.uid,
    //   name: token.name,
    //   email: token.email,
    //   nick: token.user,
    //   photo: token.photo
    // })
    if (token.uid) {
      const obj = {
        idToken: token.uid,
        name: token.name,
        email: token.email,
        nick: token.user,
        photo: token.photo
      }
      setUsers(obj)
      firestore()
        .collection('User')
        .doc(token.uid)
        .set(obj)
    }

    if (token.idToken) {
      const obj = {
        idToken: token.idToken,
        name: token.name,
        email: token.email,
        nick: token.nick,
        photo: token.photo
      }
      setUsers(obj)
      firestore()
        .collection('User')
        .doc(token.email)
        .set(obj)
    }
  }

  async function setUsers(item: any) {
    await AsyncStorage.setItem('@token', item.token || '')
    await AsyncStorage.setItem('@name', item.name || '')
    await AsyncStorage.setItem('@email', item.email || '')
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
