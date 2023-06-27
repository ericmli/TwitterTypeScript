import React from 'react'
import { AsideUser, Container, ContainerAccess, ContainerAmount, ContainerBody, ContainerImage, ContainerNameUser, Flat, Icone, IconeEntypo, Image, ImageUser, View } from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { Title } from '../../components/Text'
import { ListRenderItem, RefreshControl } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import storage from '@react-native-firebase/storage'
import { formatTimeRange } from '../../utils'
export interface PropsApi {
  id: string
  textArea: string
  like: number
  liked: boolean
  _data: any
}

export function Home() {
  const [data, setData] = React.useState<PropsApi[]>([])
  const [photo, setPhoto] = React.useState<any>('')
  const [refreshing, setRefreshing] = React.useState<boolean>(false)

  React.useEffect(() => {
    loadApi()
  }, [])

  function LoadImage(photo: any) {
    const [image, setImage] = React.useState<any>(null)
    React.useEffect(() => {
      getImage()
    }, [])
    async function getImage() {
      if (photo.photo) {
        const reference = storage().ref(photo.photo)
        const url = await reference.getDownloadURL()
        setImage(url)
      }
    }

    if (image) {
      return (<Image source={{ uri: image }} />)
    } else {
      return (
        <></>
      )
    }
  }

  async function loadApi() {
    const arr: PropsApi[] = []
    await firestore().collection('Post').orderBy('postDate', 'desc').get().then((item) => {
      item.forEach((data: any) => {
        arr.push(data)
      })
    })
    const getPhoto = await AsyncStorage.getItem('@photo')
    setPhoto(getPhoto)
    setData(arr)
  }

  async function likePost(id: string, index: number) {
    const newData = [...data]
    const post = newData[index]._data
    console.log(JSON.stringify(post, null, 4))
    if (post.liked) {
      post.like = post.like - 1
      post.userBeLike = null
      post.liked = false
    } else {
      post.like = post.like + 1
      post.userBeLike = id
      post.liked = true
    }
    setData(newData)
  }

  const renderItem: ListRenderItem<PropsApi> = ({ item, index }) => {
    return (
      <View key={item._data.id} onPress={() => console.log(item._data.id)}>

        <AsideUser>
          <ImageUser source={{ uri: item._data.photoUser }} />
        </AsideUser>
        <ContainerBody>
          <ContainerNameUser>
            <Title size='small' color='invertColor' text={item._data.name} />
            <Title size='xnano' color='invertColor' text={`@${item._data.nick} • ${formatTimeRange(item._data.postDate)}`} />
          </ContainerNameUser>
          <Title size='small' color='invertColor' text={item._data.textArea} />

          <ContainerImage>
            <LoadImage photo={item._data.photo} />
          </ContainerImage>

          <ContainerAccess>
            <ContainerAmount>
              {item._data.liked ?
                <IconeEntypo name='heart' onPress={() => likePost(item._data.id, index)} />
                : <Icone name='heart' onPress={() => likePost(item._data.id, index)} />}
              <Title size='small' color='inputColor' text={String(item._data.like)} />
            </ContainerAmount>
            <ContainerAmount>
              <Icone name='comment' />
              <Title size='small' color='inputColor' text={item._data.comments.length} />
            </ContainerAmount>
          </ContainerAccess>
        </ContainerBody>
      </View>
    )
  }

  function handleRefresh() {
    setRefreshing(true)
    setTimeout(() => {
      setData(data)
      setRefreshing(false)
    }, 2000)
  }

  return (
    <Container>
      <Flat
        data={data}
        ListHeaderComponent={<HeaderIcon image={true} imageURL={photo} />}
        renderItem={renderItem}
        keyExtractor={(item: PropsApi) => item.id}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </Container>
  )
}
