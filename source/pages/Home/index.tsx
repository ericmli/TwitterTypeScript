import React from 'react'
import { Container } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { HeaderIcon } from '../../components/HeaderIcon'
import { Title } from '../../components/Text'

export function Home() {
  const [name, setName] = React.useState<string | null>('')

  React.useEffect(() => { getUser() }, [])
  async function getUser() {
    setName(await AsyncStorage.getItem('@email'))
    console.log(await AsyncStorage.getItem('@email'))
  }
  return (
    <Container>
      <HeaderIcon />
      <Title size='medium' color='primary' text={`Nome: ${name}`} />
    </Container>
  )
}
