import React from 'react'
import { Button, Container, ContainerImg, Icone, Img } from './styles'
import { Title } from '../Text'

interface PropsHeaderIcon {
  text?: string
  image?: boolean
  imageURL?: string
  onPress?: () => void
}

export function HeaderIcon({ text, onPress, image, imageURL }: PropsHeaderIcon) {
  return (
    <Container>
      <Button onPress={onPress}>
        {image ?
          <ContainerImg>
            {imageURL ?
              <Img source={{ uri: imageURL }} /> :
              <Img source={{ uri: 'https://i.stack.imgur.com/l60Hf.png' }} />
            }
          </ContainerImg> :
          <Title text={`${text || ''}`} color='invertColor' size='small' />
        }
      </Button>
      <Icone />
    </Container>
  )
}
