import React from 'react'
import { Button, Container, Icone } from './styles'
import { Title } from '../Text'

interface PropsHeaderIcon {
  text?: string
  onPress?: () => void
}

export function HeaderIcon({ text, onPress }: PropsHeaderIcon) {
  return (
    <Container>
      <Button onPress={onPress}>
        <Title text={`${text || ''}`} color='invertColor' size='small'/>
      </Button>
      <Icone />
    </Container>
  )
}
