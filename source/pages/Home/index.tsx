import React from 'react'
import { AsideUser, Container, ContainerBody, ContainerImage, ContainerNameUser, Flat, ImageUser, View } from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { Title } from '../../components/Text'
import { ListRenderItem, RefreshControl } from 'react-native'
import { formatTimeRange, getUserStorage } from '../../utils'
import { useNavigation } from '@react-navigation/native'
import { LoadImage } from '../../components/Image'
import { BottomPost } from '../../components/BottomPost'
import { PropsApi, loadApi } from '../../service'

export function Home() {
  const [data, setData] = React.useState<any>([])
  const [getUser, setGetUser] = React.useState<any>('')
  const [refreshing, setRefreshing] = React.useState<boolean>(false)
  const navigation = useNavigation()

  React.useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const data = await loadApi({ route: 'Post', doc: 'idLength', order: 'desc' })
    setData(data)
    setGetUser(await getUserStorage())
  }

  const renderItem: ListRenderItem<PropsApi> = ({ item }) => {
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
          <BottomPost id={item._data.id && item._data.id} />
        </ContainerBody>
      </View>
    )
  }

  function handleRefresh() {
    setRefreshing(true)
    fetchData()
    setRefreshing(false)
  }

  return (
    <Container>
      <Flat
        data={data}
        ListHeaderComponent={<HeaderIcon image={true} imageURL={getUser.photoUser} />}
        renderItem={renderItem}
        keyExtractor={(item: PropsApi) => item.id}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      />
    </Container>
  )
}
