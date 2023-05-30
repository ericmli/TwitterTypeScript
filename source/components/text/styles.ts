import styled from 'styled-components/native'
import { TitleProps } from '.'

export const Text = styled.Text<Omit<TitleProps, 'text'>>`
  font-size: ${({ theme, size }) => theme.font.size[size || 'small']};
  font-family: ${({ theme, family }) => theme.font[family || 'regular']};
  color: ${({ theme, color }) => theme.colors[color || 'primary']};
  margin-top: ${({ theme, marginTop }) => (marginTop ? theme.spacings[marginTop] : '0px')};
  margin-bottom: ${({ theme, marginBottom }) => marginBottom ? theme.spacings[marginBottom] : '0px'};
  margin-left: ${({ theme, marginLeft }) => (marginLeft ? theme.spacings[marginLeft] : '0px')};
  margin-right: ${({ theme, marginRight }) => (marginRight ? theme.spacings[marginRight] : '0px')};
`
