import React from 'react'
import * as Styles from './styles'
import { StatusBar } from 'react-native'

export interface LayoutProps {
  children: React.ReactNode
  statusbarDark?: boolean
  topColor?: 'primary' | 'secondary' | 'white' | 'gray' | 'grayLight'
  bottomColor?: 'primary' | 'secondary' | 'white' | 'gray' | 'grayLight'
}
export default function Layout ({ children, statusbarDark = false, topColor, bottomColor }: LayoutProps) {
  return (
    <>
      <Styles.SafeAreaViewTop topColor={topColor} />
      <Styles.SafeAreaViewBottom bottomColor={bottomColor}>
        <StatusBar barStyle={!statusbarDark ? 'light-content' : 'dark-content'} />
        {children}
      </Styles.SafeAreaViewBottom>
    </>
  )
}
