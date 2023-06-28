import React from 'react'
import { Button, ButtonCancel, ButtonImage, Container, ContainerImage, Header, Icone, Image, RemoveImage } from './styles'
import { Title } from '../../components/Text'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { formatDateTime, randomCode } from '../../utils'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import storage from '@react-native-firebase/storage'
import { Alert } from 'react-native'

export interface PostFormValues {
  comment: string
}

export function NewPost() {
  const navigation = useNavigation()
  const [response, setResponse] = React.useState<any>()
  const [user, setUser] = React.useState<any>()

  const { control, handleSubmit, watch } = useForm<PostFormValues>({
    defaultValues: {
      comment: ''
    }
  })
  const userChange = watch('comment')

  React.useEffect(() => {
    async function push() {
      const getUser = {
        email: await AsyncStorage.getItem('@email'),
        name: await AsyncStorage.getItem('@name'),
        nick: await AsyncStorage.getItem('@nick'),
        photoUser: await AsyncStorage.getItem('@photo')
      }
      setUser(getUser)
    }
    push()
  })

  const onButtonPress = React.useCallback((type: string, options?: any) => {
    if (type === 'capture') {
      launchCamera(options, setResponse)
    } else {
      launchImageLibrary(options, setResponse)
    }
  }, [])

  async function onSubmit(input: PostFormValues) {
    if (userChange.length > 0) {
      try {
        const imageUri = response?.assets[0].uri
        const imageName = response?.assets[0].fileName
        if (response) {
          storage().ref(imageName).putFile(imageUri).then().catch((e) => Alert.alert(e))
        }
        const code = randomCode(30)
        const currentDate = new Date()
        const time = formatDateTime(currentDate)
        const obj = {
          comments: [],
          id: code,
          like: 0,
          postDate: time,
          textArea: input.comment,
          user: user.email,
          userBeLike: [],
          photo: imageName || null,
          name: user.name,
          nick: user.nick,
          photoUser: user.photoUser
        }
        firestore().collection('Post').doc(code).set(obj)
        navigation.goBack()
      } catch (e) {
        console.log(e)
      }
    }
  }
  return (
    <Container>
      <Header>
        <ButtonCancel onPress={() => navigation.goBack()}>
          <Title text={'Cancelar'} color='invertColor' size='small' />
        </ButtonCancel>
        <Button onPress={handleSubmit(onSubmit)} state={userChange.length > 0}>
          <Title text={'Tweetar'} color='white' size='small' />
        </Button>
      </Header>
      <Input
        name="comment"
        placeholder='O que está acontecendo?'
        control={control}
        multiline={true}
      />
      <ButtonImage onPress={() => onButtonPress('')}>
        <Icone name='image' />
      </ButtonImage>
      <ContainerImage>
        {(response && response.assets) && (
          <>
            <RemoveImage onPress={() => setResponse(null)}>
              <Title text={'X'} color='white' size='xxnano' />
            </RemoveImage>
            <Image source={{ uri: response?.assets[0]?.uri }} />
          </>
        )}

      </ContainerImage>
    </Container>
  )
}
