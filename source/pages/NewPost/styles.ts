import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/EvilIcons'

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

export const ButtonCancel = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`

export const ButtonImage = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 90px;
  background-color: ${(props) => props.theme.colors.primary};
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`
export const Icone = styled(Icon)`
  color: ${(props) => props.theme.colors.white};
  font-size: 25px;
`
export const ContainerImage = styled.View`
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 15px;
`

export const RemoveImage = styled.TouchableOpacity`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  left: 50px;
  bottom: 80%;
  z-index: 1;
`
