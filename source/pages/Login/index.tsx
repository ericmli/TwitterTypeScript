import React from 'react'
import { Body, Container, ContainerCreateAccount, ContainerCreateAccountPress, HR, LineHR, Text, TextCenter, TextHR } from './styles'
import { Button } from '../../components/Button'
import { ButtonGoogle } from '../../components/ButtonGoogle'
import { HeaderIcon } from '../../components/HeaderIcon'
import { useNavigation } from '@react-navigation/native'

export function Login() {
  const navigation = useNavigation()

  return (
    <Container>
      <Body>
        <HeaderIcon />
        <TextCenter>Que bom ver você de novo! Entre na sua conta para ver o que há de mais recente.</TextCenter>
        <ButtonGoogle name='Continuar com Google' />
        <HR>
          <LineHR />
          <TextHR>Ou</TextHR>
          <LineHR />
        </HR>
        <Button name='Entrar' colorText='#FFF' onPress={() => navigation.navigate('LoginUser')} />
      </Body>
      <ContainerCreateAccount>
        <Text>Não tem uma conta?</Text>
        <ContainerCreateAccountPress onPress={() => navigation.navigate('Create')}>
          <Text color='#009EF7'>Inscreva-se</Text>
        </ContainerCreateAccountPress>
      </ContainerCreateAccount>
    </Container>
  )
}
