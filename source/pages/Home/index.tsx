import React from 'react'
import { Container, ContainerAccess, ContainerAmount, Flat, Icone, IconeEntypo, View } from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { api } from '../../services'
import { Title } from '../../components/Text'
import { ListRenderItem } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
export interface PropsApi {
  _id: string
  textArea: string
  like: number
  liked: boolean
  data: any
}

export function Home() {
  const [data, setData] = React.useState<PropsApi[]>([])

  useFocusEffect(
    React.useCallback(() => {
      loadApi()
    }, [])
  )

  async function loadApi() {
    const arr: PropsApi[] = []
    await firestore().collection('Post').get().then((item) => {
      item.forEach((data: any) => {
        arr.push(data)
      })
    })
    console.log(arr)
    // setData(arr)
  }
  async function likePost(id: string, index: number) {
    const response = await api.post(`likes/post/${id}`, {})

    if (response.status === 200) {
      const newData = [...data]
      const post = newData[index]
      if (post.liked) {
        post.like = post.like - 1
        post.liked = false
      } else {
        post.like = post.like + 1
        post.liked = true
      }
      setData(newData)
    }
  }

  const renderItem: ListRenderItem<PropsApi> = ({ item, index }) => {
    return (
      <View key={item._id} onPress={() => console.log(item._id)}>
        <Title size='small' color='invertColor' text={item.textArea} />
        <ContainerAccess>
          <ContainerAmount>
            {item.liked ?
              <IconeEntypo name='heart' onPress={() => likePost(item._id, index)} />
              : <Icone name='heart' onPress={() => likePost(item._id, index)} />}
            <Title size='small' color='inputColor' text={String(item.like)} />
          </ContainerAmount>
          <ContainerAmount>
            <Icone name='comment' />
          </ContainerAmount>
        </ContainerAccess>
      </View>
    )
  }

  return (
    <Container>
      <HeaderIcon />
      <Flat
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: PropsApi) => item._id}
        initialNumToRender={10}
      />
    </Container>
  )
}
