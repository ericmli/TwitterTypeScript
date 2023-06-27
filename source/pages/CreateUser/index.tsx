import React from 'react'
import { Body, Container, ContainerCreateAccount, ContainerCreateAccountPress, TextCenter, TextForgot } from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { useNavigation } from '@react-navigation/native'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'
import { AuthContext } from '../../context'
import auth from '@react-native-firebase/auth'

export interface LoginFormValues {
  name: string
  user: string
  email: string
  password: string
}

export function CreateUser() {
  const { login }: any = React.useContext(AuthContext)
  const navigation = useNavigation()
  const { control, handleSubmit, watch } = useForm<LoginFormValues>({
    defaultValues: {
      name: '',
      user: '',
      email: '',
      password: ''
    }
  })

  const userChange = watch('user')
  const passwordChange = watch('password')
  const onSubmit = async (input: LoginFormValues) => {
    if (userChange.length > 0) {
      if (passwordChange.length > 0) {
        const obj = {
          name: input.name,
          email: input.email,
          user: input.user,
          password: input.password
        }
        auth().createUserWithEmailAndPassword(obj.email, obj.password)
          .then((data) => {
            login({
              email: data.user.email,
              uid: data.user.uid,
              photo: data.user.photoURL,
              name: input.name,
              user: input.user
            })
            navigation.reset({
              index: 0,
              routes: [{ name: 'SendHome' }]
            })
          })
          .catch((e) => {
            if (e.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!')
            }

            if (e.code === 'auth/invalid-email') {
              console.log('That email address is invalid!')
            }
            Alert.alert('Erro', 'Erro inesperado')
            console.log(e)
          })
      }
    }
  }

  return (
    <Container>
      <Body>
        <HeaderIcon text='Cancelar' onPress={() => navigation.goBack()} />
        <TextCenter>Criar sua conta</TextCenter>

        <Input
          name="name"
          placeholder='Nome'
          control={control}
        />

        <Input
          name="user"
          placeholder='Usuário'
          control={control}
        />
        <Input
          name="email"
          placeholder='Celular ou e-mail'
          control={control}
        />

        <Input
          name="password"
          placeholder='Senha'
          control={control}
          secureTextEntry={true}
        />

      </Body>

      <ContainerCreateAccount>
        <ContainerCreateAccountPress state={userChange.length > 0} onPress={handleSubmit(onSubmit)}>
          <TextForgot>Avançar</TextForgot>
        </ContainerCreateAccountPress>
      </ContainerCreateAccount>
    </Container>
  )
}
