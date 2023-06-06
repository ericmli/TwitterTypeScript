import styled from 'styled-components/native'
import { PropsApi } from '.'
import { FlatList } from 'react-native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => props.theme.colors.mainBg};
`

export const Flat = styled(FlatList as new () => FlatList<PropsApi>)`
`

export const View = styled.View`
  border-top-width: 0.6px;
  border-color: ${(props) => props.theme.colors.border};
  padding: 10px;
`
