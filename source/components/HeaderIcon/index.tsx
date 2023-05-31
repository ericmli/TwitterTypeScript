import React from 'react'
import { Button, Container, Icone, Text } from './styles'

interface PropsHeaderIcon {
  text?: string
  onPress?: () => void
}

export function HeaderIcon({ text, onPress }: PropsHeaderIcon) {
  return (
    <Container>
      <Button onPress={onPress}>
        <Text>{text}</Text>
      </Button>
      <Icone />
    </Container>
  )
}
