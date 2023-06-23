import React from 'react'
import { Button, ButtonCancel, ButtonImage, Container, ContainerImage, Header, Icone, Image, RemoveImage } from './styles'
import { Title } from '../../components/Text'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { api } from '../../services'
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

export interface PostFormValues {
  comment: string
}

export function NewPost() {
  const navigation = useNavigation()
  const [response, setResponse] = React.useState<any>()
  const onButtonPress = React.useCallback((type: string, options?: any) => {
    if (type === 'capture') {
      launchCamera(options, setResponse)
    } else {
      launchImageLibrary(options, setResponse)
    }
  }, [])

  const { control, handleSubmit, watch } = useForm<PostFormValues>({
    defaultValues: {
      comment: ''
    }
  })

  const userChange = watch('comment')
  async function onSubmit(input: PostFormValues) {
    if (userChange.length > 0) {
      const obj = {
        textArea: input.comment
      }
      try {
        api.post('posts', obj)
        if (response) {
          const imageUri = response.assets[0].uri
          const imageType = response.assets[0].type
          const formData = new FormData()
          formData.append('image', {
            uri: imageUri,
            name: 'image.jpg',
            type: imageType
          })

          api.post('files/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        }
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
            <Image source={{ uri: response?.assets[0]?.uri }}/>
          </>
        )}

      </ContainerImage>
    </Container>
  )
}
