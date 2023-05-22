import 'styled-components'
import theme, { colorsLight } from './theme'

declare module 'styled-components' {
  type ThemeColorsType = typeof colorsLight
  type ThemeType = typeof theme
  export interface DefaultTheme extends ThemeType, ThemeColorsType {}
}