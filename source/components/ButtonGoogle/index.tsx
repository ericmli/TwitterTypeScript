import React from 'react'
import { Active, Icone, Text } from './styles'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { AuthContext } from '../../context'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

interface ButtonGoogleProps {
  name?: string
  create?: boolean
}

export function ButtonGoogle({ name, create }: ButtonGoogleProps) {
  const { login }: any = React.useContext(AuthContext)
  const navigation = useNavigation()

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: '397235494032-e7etsa305in01md03q0fpsni30d3udga.apps.googleusercontent.com'
    })
  }, [])
  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices()
    try {
      const userInfo = await GoogleSignin.signIn()
      login({ ...userInfo.user, idToken: userInfo.idToken, nick: userInfo.user.givenName })
      navigation.reset({
        index: 0,
        routes: [{ name: 'SendHome' }]
      })
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated')
      } else {
        console.log('some other error happened')
        console.log(error)
      }
    }
  }

  async function pushLogin() {
    const userInfo = await GoogleSignin.signIn()
    const getUserEmail = userInfo.user.email
    const user = await firestore().collection('User').doc(getUserEmail).get()
    if (user.exists) {
      await login(user.data())
      navigation.reset({
        index: 0,
        routes: [{ name: 'SendHome' }]
      })
    } else {
      await onGoogleButtonPress()
    }
  }

  return (
    <Active onPress={() => create ? onGoogleButtonPress() : pushLogin()}>
      <Icone />
      <Text>{name}</Text>
    </Active>
  )
}
