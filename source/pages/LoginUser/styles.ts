import styled from 'styled-components/native'
interface TitleProps {
  color?: string
  state?: boolean
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.mainBg};
  align-items: center;
`
export const Body = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`

export const TextCenter = styled.Text`
  margin-top: 5%;
  margin-bottom: 10%;
  color: ${(props) => props.theme.colors.colorText};
  font-size: 26px;
  font-weight: 800;
`
export const Text = styled.Text<TitleProps>`
  font-size: 16px;
  color: ${(props) => props.color || props.theme.colors.colorText};
  font-weight: 400;
`

export const ContainerCreateAccount = styled.View`
  flex-direction: row;
  width: 90%;
  left: 5%;
  position: absolute;
  bottom: 2%;
  justify-content: space-between;
  align-items: center;
`

export const ContainerCreateAccountPress = styled.TouchableOpacity<TitleProps>`
  background: ${(props) => props.state ? props.theme.colors.invertColor : 'grey'};
  justify-content: center;
  border-radius: 30px;
  height: 30px;
  padding-left: 20px;
  padding-right: 20px;
`
export const TextForgot = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.mainBg};
  font-weight: 500;
`
