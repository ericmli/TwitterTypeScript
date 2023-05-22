import React from 'react'
import Navigation from './routes'
import { useColorScheme, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme, { colorsDark, colorsLight } from './themes'

export default function App () {
  const deviceTheme = useColorScheme()
  let statusBar = 'dark-content'
  let themeSelected = {
    ...theme,
    ...colorsLight
  }
  if (deviceTheme === 'dark') {
    themeSelected = {
      ...themeSelected, ...colorsDark
    }
    statusBar = 'light-content'
  }
  return (
    <ThemeProvider theme={themeSelected}>
      <StatusBar backgroundColor={themeSelected.colors.mainBg} barStyle={statusBar} />
      <Navigation />
    </ThemeProvider>
  )
}
