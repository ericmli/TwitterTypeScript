import React from 'react'
import { Active, Text } from './styles'

export interface ButtonProps {
  name?: string
  colorText?: string
  onPress?: () => void
}

export function Button ({ name, colorText, onPress }: ButtonProps) {
  return (
    <Active onPress={onPress}>
      <Text colorText={colorText}>{name}</Text>
    </Active>
  )
}
