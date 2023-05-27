import React from 'react'
import { Container, Text } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { HeaderIcon } from '../../components/HeaderIcon'

export function Home () {
  React.useEffect(() => { getUser() })
  const [name, setName] = React.useState<string | null>('')
  async function getUser() {
    const namee = await AsyncStorage.getItem('@email')
    setName(namee)
  }
  return (
    <Container>
      <HeaderIcon />
      <Text>AAA{name}</Text>
    </Container>
  )
}
