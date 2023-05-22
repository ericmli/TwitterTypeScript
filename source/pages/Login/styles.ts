import styled from 'styled-components/native'
import SvgComponent from '../../assets/svg/icon.svg'
export interface TitleProps {
  color?: string
}
// Fill: bck || Stronk: border

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

export const Icone = styled(SvgComponent)`
  width: 25px;
  height: 25px;
`

export const TextCenter = styled.Text`
  margin-top: 40%;
  margin-bottom: 10%;
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
export const TextHR = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.colorText};
`
export const Text = styled.Text<TitleProps>`
  font-size: 12px;
  color: ${(props) => props.color || props.theme.colors.colorText};
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