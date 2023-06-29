import React from 'react'
import { Body, Container, ContainerIcone, ContainerUser, ContainerUserTitle, Header, Icone, ImageUser } from './styles'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Title } from '../../components/Text'
import { LoadImage } from '../../components/Image'

export function Post() {
  const [data, setData] = React.useState<any>()
  const navigation = { navigate: useNavigation(), route: useRoute() }
  React.useEffect(() => {
    setData(navigation.route.params)
  })
  return (
    <Container>
      <Header>
        <ContainerIcone onPress={() => navigation.navigate.goBack()}>
          <Icone name='arrowleft' />
        </ContainerIcone>
        <Title size='medium' family='bold' text='Tweet' color='invertColor' />
      </Header>

      <ContainerUser>
        <ImageUser source={{ uri: data?.photoUser || 'https://i.stack.imgur.com/l60Hf.png' }} />
        <ContainerUserTitle>
          <Title size='xxnano' family='bold' text={data?.name} color='invertColor' />
          <Title size='xnano' family='bold' text={`@${data?.nick}`} color='inputColor' />
        </ContainerUserTitle>
      </ContainerUser>

      <Body>
        <Title size='small' family='bold' text={data?.textArea} color='invertColor' />
        {data?.photo && <LoadImage source={{ uri: data?.photo }}/>}
      </Body>
        <Title size='xnano' family='bold' text={data?.postDate} color='invertColor' />
    </Container>
  )
}
