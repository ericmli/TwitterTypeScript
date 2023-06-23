import styled from 'styled-components/native'
export interface TitleProps {
  color?: string
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
  margin-top: 40%;
  margin-bottom: 30%;
  color: ${(props) => props.theme.colors.colorText};
  font-size: 30px;
  font-weight: 700;
`
export const HR = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
export const LineHR = styled.View`
  width: 40%;
  height: 0.5px;
  background-color: grey;
`

export const ContainerCreateAccount = styled.View`
  flex-direction: row;
  left: 5%;
  position: absolute;
  bottom: 2%;
  gap: 4px;
`

export const ContainerCreateAccountPress = styled.TouchableOpacity`
`
