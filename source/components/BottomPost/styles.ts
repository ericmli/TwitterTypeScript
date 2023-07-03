import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/EvilIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'

export const ContainerAccess = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between ;
`

export const ContainerAmount = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`

export const Icone = styled(Icon)`
  color: ${(props) => props.theme.colors.inputColor};
  font-size: 25px;
  height: 25px;
`
export const IconeEntypo = styled(IconEntypo)`
  color: ${(props) => props.theme.colors.error};
  font-size: 25px;
  height: 25px;
`
