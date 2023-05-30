import React from 'react'
import { Button, Container, ContainerImg, Icone, Img, Text } from './styles'

interface PropsHeaderIcon {
  text?: string
  onPress?: () => void
}

export function HeaderIcon({ text, onPress }: PropsHeaderIcon) {
  return (
    <Container>
      <Button onPress={onPress}>
        <Text>
          {text ||
            <ContainerImg>
              <Img source={{ uri: 'https://pbs.twimg.com/profile_images/1561032284391743494/PZlsicxF_400x400.jpg' }} />
            </ContainerImg>}
        </Text>
      </Button>
      <Icone />
    </Container>
  )
}
