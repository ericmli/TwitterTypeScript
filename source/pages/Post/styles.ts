import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'
import { FlatList } from 'react-native'

export const Container = styled.SafeAreaView`
  background: ${(props) => props.theme.colors.mainBg};
  padding: 10px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Icone = styled(Icon)`
  color: ${(props) => props.theme.colors.invertColor};
  font-size: 25px;
`
export const ContainerIcone = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`

export const ContainerUser = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`
export const ImageUser = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  object-fit: contain;
`
export const ContainerUserTitle = styled.View`
  flex-direction: column;
`
export const ContainerImage = styled.View`
  height: 400px;
  margin-bottom: 30px;
  gap: 10px;
`
export const Line = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 0.2px;
  border-color:  ${(props) => props.theme.colors.inputColor};
`
export const ContainerComments = styled.View`
  margin-top: 10px;
`
export const Flat = styled(FlatList as new () => FlatList<any>)`
  height: 100%;
`
export const ContainerFlat = styled.View`
`
