import React from 'react'
import { Active, Icone, Text } from './styles'
// import auth from '@react-native-firebase/auth'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { AuthContext } from '../../context'
import { useNavigation } from '@react-navigation/native'

interface ButtonGoogleProps {
  name?: string
}

export function ButtonGoogle({ name }: ButtonGoogleProps) {
  const { login } : any = React.useContext(AuthContext)
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
      await login(userInfo)
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
      }
    }
  }
  return (
    <Active onPress={() => onGoogleButtonPress()}>
      <Icone />
      <Text>{name}</Text>
    </Active>
  )
}
