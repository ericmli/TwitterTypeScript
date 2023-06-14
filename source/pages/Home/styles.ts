import styled from 'styled-components/native'
import { PropsApi } from '.'
import { FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.colors.mainBg};
`

export const Flat = styled(FlatList as new () => FlatList<PropsApi>)`
`

export const View = styled.TouchableOpacity`
  border-top-width: 0.6px;
  border-color: ${(props) => props.theme.colors.border};
  padding: 10px;
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

export const ContainerAccess = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between ;
`

export const ContainerAmount = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`
