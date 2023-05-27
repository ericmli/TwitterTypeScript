import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Text = styled.Text`
  font-size: ${(props) => props.theme.font.size.nano};
  color: ${(props) => props.theme.colors.primary};
`
