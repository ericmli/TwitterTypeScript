import React from 'react'
import { AsideUser, Container, ContainerBody, ContainerImage, ContainerNameUser, Flat, ImageUser, View } from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { Title } from '../../components/Text'
import { ListRenderItem, RefreshControl } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { formatTimeRange, getUserStorage, loadApi } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import { LoadImage } from '../../components/Image'
import { BottomPost } from '../../components/BottomPost'
export interface PropsApi {
  id: string
  textArea: string
  like: number
  liked: boolean
  _data: any
  likeBy: string[]
  likePost: number
}

export function Home() {
  const [data, setData] = React.useState<any>([])
  const [getUser, setGetUser] = React.useState<any>('')
  const [refreshing, setRefreshing] = React.useState<boolean>(false)
  const navigation = useNavigation()

  React.useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const data = await loadApi()
    setData(data)

    setGetUser(await getUserStorage())
  }

  async function likePost(id: string, index: number) {
    const response = data[index]._data
    const hasItem = response.likeBy.indexOf(getUser.email)
    let updatedLikeBy
    let updatedLikePost = response.like
    let obj = {}
    if (hasItem === -1) {
      updatedLikeBy = [...response.likeBy, getUser.email]
      updatedLikePost += 1
      obj = { ...response, likeBy: updatedLikeBy, like: updatedLikePost, liked: !response.liked }
    } else {
      updatedLikeBy = response.likeBy.filter((i: any) => i !== getUser.email)
      updatedLikePost -= 1
      obj = { ...response, likeBy: updatedLikeBy, like: updatedLikePost, liked: !response.liked }
    }
    await firestore().collection('Post').doc(id).set(obj)
    fetchData()
  }

  const renderItem: ListRenderItem<PropsApi> = ({ item, index }) => {
    return (
      <View key={item._data.id} onPress={() => navigation.navigate('Post', item._data)}>

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
           {item?._data?.photo && <LoadImage photo={item._data.photo} />}
          </ContainerImage>
          <BottomPost onPress={() => likePost(item._data.id, index)} item={item} getUser={getUser}/>
        </ContainerBody>
      </View>
    )
  }

  function handleRefresh() {
    setRefreshing(true)
    setTimeout(() => {
      fetchData()
      setRefreshing(false)
    }, 2000)
  }

  return (
    <Container>
      <Flat
        data={data}
        ListHeaderComponent={<HeaderIcon image={true} imageURL={getUser.photo} />}
        renderItem={renderItem}
        keyExtractor={(item: PropsApi) => item.id}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      />
    </Container>
  )
}
