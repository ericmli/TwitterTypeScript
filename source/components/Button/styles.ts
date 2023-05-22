import styled from 'styled-components/native'
import SvgComponent from '../../assets/svg/google.svg'
import { ButtonProps } from '.'

export const Active = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.invertColor};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: 0.4px;
  flex-direction: row;
  gap: 20px;
`

export const Text = styled.Text<ButtonProps>`
  color: ${(props) => props.theme.colors.mainBg};
  font-size: 20px;
  font-weight: 800;
`
export const Icone = styled(SvgComponent)`
  width: 30px;
  height: 30px;
`
