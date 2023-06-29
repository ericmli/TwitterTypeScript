import styled from 'styled-components/native'
import { PropsApi } from '.'
import { FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'

export const Container = styled.SafeAreaView`
  background: ${(props) => props.theme.colors.mainBg};
`

export const Flat = styled(FlatList as new () => FlatList<PropsApi>)`
  height: 100%;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const View = styled.TouchableOpacity`
  border-top-width: 0.6px;
  border-color: ${(props) => props.theme.colors.border};
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px ;
  padding-bottom: 10px ;
`

export const AsideUser = styled.View`
  height: 100%;
  width: 10%;
`
export const ImageUser = styled.Image`
  top: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  object-fit: contain;
`

export const ContainerBody = styled.View`
  width: 85%;
`

export const ContainerNameUser = styled.View`
  flex-direction: row;
  gap: 5px;
  align-items: center;
`

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

export const ContainerImage = styled.View`
  max-height: 300px;
`
