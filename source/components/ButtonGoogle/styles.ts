import styled from 'styled-components/native'
import SvgComponent from '../../assets/svg/google.svg'

export const Active = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: 0.4px;
  flex-direction: row;
  gap: 20px;
`

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.dark};
  font-size: 20px;
  font-weight: 800;
`
export const Icone = styled(SvgComponent)`
  width: 30px;
  height: 30px;
`
