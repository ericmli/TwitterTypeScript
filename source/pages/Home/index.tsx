import React from 'react'
import { Container, Flat, View } from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { api } from '../../services'
import { Title } from '../../components/Text'
import { ListRenderItem } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export interface PropsApi {
  _id : string
  textArea: string
}

export function Home() {
  const [data, setData] = React.useState(null)
  useFocusEffect(
    React.useCallback(() => {
      loadApi()
    }, [])
  )

  async function loadApi() {
    const response = await api.get('posts')
    setData(response.data.post)
    console.log(data)
  }

  const renderItem: ListRenderItem<PropsApi> = ({ item }) => {
    return (
      <View key={item._id}>
        <Title size='small' color='invertColor' text={item.textArea} />
      </View>
    )
  }
  return (
    <Container>
      <HeaderIcon />
      <Flat
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item._id}
        initialNumToRender={10}
        initialScrollIndex={2}
      />
    </Container>
  )
}
