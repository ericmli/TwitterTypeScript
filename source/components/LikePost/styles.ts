import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/EvilIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'

export const ContainerLike = styled.TouchableOpacity`
  z-index: 1;
  flex-direction: row;
  align-items: center;
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
