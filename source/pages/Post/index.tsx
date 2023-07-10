import React from 'react'
import { Line, Container, ContainerIcone, ContainerUser, ContainerUserTitle, Header, Icone, ImageUser, ContainerComments, ContainerImage, Flat, ContainerFlat } from './styles'
import { useRoute, useNavigation } from '@react-navigation/native'
import { ListRenderItem } from 'react-native'
import { Title } from '../../components/Text'
import { LoadImage } from '../../components/Image'
import { BottomPost } from '../../components/BottomPost'
import { formatDateTime } from '../../utils'
import firestore from '@react-native-firebase/firestore'

export function Post() {
  const [data, setData] = React.useState<any>()
  const [comment, setComment] = React.useState<any>()
  const navigation = { navigate: useNavigation(), route: useRoute() }
  React.useEffect(() => {
    setData(navigation.route.params)
    firestore()
      .collection('Post')
      .doc(`${data?.id}`)
      .collection('comment')
      .get()
      .then(item => {
        const arr: string[] = []
        item.forEach((data: any) => {
          arr.push(data._data)
          setComment(arr)
        })
      })
  }, [data])
  const renderItem: ListRenderItem<any> = ({ item }: any) => {
    return (
      <ContainerComments key={item.id}>
        <Title size='xnano' family='bold' text={`${item.comment}`} color='invertColor' />
      </ContainerComments>
    )
  }
  return (
    <Container>
      <Header>
        <ContainerIcone onPress={() => navigation.navigate.goBack()}>
          <Icone name='arrowleft' />
        </ContainerIcone>
        <Title size='medium' family='bold' text='Tweet' color='invertColor' />
      </Header>

      <Flat
        data={comment}
        ListHeaderComponent={
          <ContainerFlat>
            <ContainerUser>
              <ImageUser source={{ uri: data?.photoUser || 'https://i.stack.imgur.com/l60Hf.png' }} />
              <ContainerUserTitle>
                <Title size='xxnano' family='bold' text={data?.name} color='invertColor' />
                <Title size='xnano' family='bold' text={`@${data?.nick}`} color='inputColor' />
              </ContainerUserTitle>
            </ContainerUser>

            <ContainerImage>
              <Title size='small' family='bold' text={data?.textArea} color='invertColor' />
              {data?.photo && <LoadImage source={{ uri: data?.photo }} />}
            </ContainerImage>
            <Line>
              <Title size='xnano' family='bold' text={`${formatDateTime(data?.postDate)} de Earth`} color='invertColor' />
            </Line>
            <Line>
              <BottomPost id={data?.id && data?.id} />
            </Line>
          </ContainerFlat>}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
