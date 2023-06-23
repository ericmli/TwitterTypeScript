import React from 'react'
import { Body, Container, ContainerCreateAccount, ContainerCreateAccountPress, HR, LineHR, TextCenter } from './styles'
import { Button } from '../../components/Button'
import { ButtonGoogle } from '../../components/ButtonGoogle'
import { HeaderIcon } from '../../components/HeaderIcon'
import { useNavigation } from '@react-navigation/native'
import { Title } from '../../components/Text'

export function Create() {
  const navigation = useNavigation()

  return (
    <Container>
      <Body>
        <HeaderIcon text='Cancelar' onPress={() => navigation.navigate('Login')}/>
        <TextCenter>Veja o que está acontecendo no mundo neste momento.</TextCenter>
        <ButtonGoogle name='Continuar com Google' />
        <HR>
          <LineHR />
          <Title size='xnano' color='invertColor' text='Ou' />
          <LineHR />
        </HR>
        <Button name='Criar conta' colorText='#FFF' onPress={() => navigation.navigate('CreateUser')} />
      </Body>
      <ContainerCreateAccount>
        <Title size='xnano' color='invertColor' text='Já tem uma conta?' />
        <ContainerCreateAccountPress onPress={() => navigation.navigate('Login')}>
          <Title size='xnano' color='primary' text='Entrar' />
        </ContainerCreateAccountPress>
      </ContainerCreateAccount>
    </Container>
  )
}
