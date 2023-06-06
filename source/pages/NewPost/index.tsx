import React from 'react'
import { Button, ButtonCancel, Container, Header } from './styles'
import { Title } from '../../components/Text'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { api } from '../../services'
import { useNavigation } from '@react-navigation/native'

export interface PostFormValues {
  comment: string
}

export function NewPost() {
  const navigation = useNavigation()
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
    </Container>
  )
}
