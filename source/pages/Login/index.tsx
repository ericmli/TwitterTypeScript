import React from 'react'
import { Body, Container, ContainerCreateAccount, ContainerCreateAccountPress, HR, Icone, LineHR, Text, TextCenter, TextHR } from './styles'
import { Button } from '../../components/Button'
import { ButtonGoogle } from '../../components/ButtonGoogle'

export function Login() {
  return (
    <Container>
      <Icone />
      <Body>
        <TextCenter>Que bom ver você de novo! Entre na sua conta para ver o que há de mais recente.</TextCenter>
        <ButtonGoogle name='Continuar com Google' />
        <HR>
          <LineHR />
          <TextHR>Ou</TextHR>
          <LineHR />
        </HR>
        <Button name='Entrar' colorText='#FFF' onPress={() => console.log('kk')} />
      </Body>
      <ContainerCreateAccount>
        <Text>Não tem uma conta?</Text>
        <ContainerCreateAccountPress>
          <Text color='#009EF7'>Inscreva-se</Text>
        </ContainerCreateAccountPress>
      </ContainerCreateAccount>
    </Container>
  )
}
