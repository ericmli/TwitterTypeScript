import React from 'react'
import { Body, Container, ContainerCreateAccount, ContainerCreateAccountPress, Text, TextCenter, TextForgot } from './styles'
import { HeaderIcon } from '../../components/HeaderIcon'
import { useNavigation } from '@react-navigation/native'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { Alert } from 'react-native'
import { AuthContext } from '../../context'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export interface LoginFormValues {
  user: string
  password: string
}

export function LoginUser() {
  const { login }: any = React.useContext(AuthContext)
  const navigation = useNavigation()
  const [switchState, setSwitchState] = React.useState(false)
  const { control, handleSubmit, watch } = useForm<LoginFormValues>({
    defaultValues: {
      user: '',
      password: ''
    }
  })

  const userChange = watch('user')
  const passwordChange = watch('password')
  const onSubmit = async (input: LoginFormValues) => {
    if (userChange.length > 0) {
      if (passwordChange.length > 0) {
        const obj = {
          email: input.user,
          password: input.password
        }
        try {
          const data = await auth().signInWithEmailAndPassword(obj.email, obj.password)

          const response = await firestore().collection('User').doc(data.user.uid).get()
          if (response.exists) {
            await login(response._data)
            navigation.reset({
              index: 0,
              routes: [{ name: 'SendHome' }]
            })
          }
        } catch (error) {
          Alert.alert('Erro', 'Senha incorreta.')
          console.log(error)
        }
      }
      setSwitchState(true)
    }
  }

  return (
    <Container>
      <Body>
        <HeaderIcon text='Cancelar' onPress={() => navigation.goBack()} />
        <TextCenter>Para começar, informe telefone, e-mail ou @nomedeusuario</TextCenter>

        <Input
          name="user"
          placeholder='Celular, e-mail ou nome de usuário'
          control={control}
        />
        {switchState &&
          <Input
            name="password"
            placeholder='Senha'
            control={control}
            secureTextEntry={true}
          />
        }

      </Body>

      <ContainerCreateAccount>
        <Text>Esqueceu sua senha?</Text>
        <ContainerCreateAccountPress state={userChange.length > 0} onPress={handleSubmit(onSubmit)}>
          <TextForgot>Avançar</TextForgot>
        </ContainerCreateAccountPress>
      </ContainerCreateAccount>
    </Container>
  )
}
