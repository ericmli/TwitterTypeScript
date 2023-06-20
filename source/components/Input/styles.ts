import styled from 'styled-components/native'

export const TextInput = styled.TextInput`
  width: 100%;
  border-bottom-width: 0.2px;
  border-color: ${(props) => props.theme.colors.inputColor};
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: ${(props) => props.multiline ? '85%' : '52px'};
  color: ${(props) => props.multiline ? props.theme.colors.invertColor : props.theme.colors.primary};
  text-align-vertical: top;
`

export const TextError = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.TextError};
`
