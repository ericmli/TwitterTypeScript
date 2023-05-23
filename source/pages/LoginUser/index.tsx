import React from 'react'
import { Body, Container, ContainerCreateAccount, ContainerCreateAccountPress, Text, TextCenter, TextForgot } from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { useNavigation } from '@react-navigation/native'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'

interface LoginFormValues {
  email: string
}

export function LoginUser () {
  const navigation = useNavigation()
  const [passed, setPassed] = React.useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    defaultValues: {
      email: ''
    }
  })

  const onSubmit = async (input: LoginFormValues) => {
    const obj = {
      email: input.email
    }
    console.log(obj)
  }

  const result = (r: string) => {
    recept(r)
  }
  function recept (i : string) {
    if (i.length > 0) {
      setPassed(true)
    } else {
      setPassed(false)
    }
  }
  return (
    <Container>
      <Body>
        <HeaderIcon text='Cancelar' onPress={() => navigation.goBack()} />
        <TextCenter>Para começar, informe telefone, e-mail ou @nomedeusuario</TextCenter>
        <Input
          name="email"
          placeholder='Celular, e-mail ou nome de usuário'
          control={control}
          errors={errors}
          result={result}
        />
      </Body>

      <ContainerCreateAccount>
        <Text>Esqueceu sua senha?</Text>
        <ContainerCreateAccountPress state={passed} onPress={handleSubmit(onSubmit)}>
          <TextForgot>Avançar</TextForgot>
        </ContainerCreateAccountPress>
      </ContainerCreateAccount>
    </Container>
  )
}
