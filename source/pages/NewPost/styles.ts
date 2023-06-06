import styled from 'styled-components/native'

interface TitleProps {
  state?: boolean
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.colors.mainBg};
  padding: 10px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.TouchableOpacity<TitleProps>`
  width: 90px;
  height: 35px;
  border-radius: 25px;
  background: ${(props) => props.state ? props.theme.colors.primary : '#B9DCF7'};
  align-items: center;
  justify-content: center;
`

export const ButtonCancel = styled.TouchableOpacity<TitleProps>`
  width: 90px;
  height: 35px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`
