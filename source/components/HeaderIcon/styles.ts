import styled from 'styled-components/native'
import SvgComponent from '../../assets/svg/icon.svg'
// Fill: bck || Stronk: border

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`
export const Icone = styled(SvgComponent)`
  width: 25px;
  height: 25px;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.colorText};
  font-size: 16px;
`
