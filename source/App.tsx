import React from 'react'
import Navigation from './routes'
import { useColorScheme, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme, { colorsDark, colorsLight } from './themes'
import AuthProvider from './context'

export default function App() {
  const deviceTheme = useColorScheme()
  let statusBar: 'dark-content' | 'light-content' = 'dark-content'
  let themeSelected = {
    ...theme,
    ...colorsLight
  }
  if (deviceTheme === 'dark') {
    themeSelected = {
      ...theme,
      ...colorsDark
    }
    statusBar = 'light-content'
  }
  return (
    <ThemeProvider theme={themeSelected}>
      <AuthProvider>
        <StatusBar backgroundColor={themeSelected.colors.mainBg} barStyle={statusBar} />
        <Navigation />
      </AuthProvider>
    </ThemeProvider>
  )
}
