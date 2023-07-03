import React from 'react'
import { ContainerAccess, ContainerAmount, Icone, IconeEntypo } from './styles'
import { Title } from '../Text'

interface TypeBottomPost {
  onPress: () => void
  item: any
  getUser: any
}

export function BottomPost({ onPress, item, getUser }: TypeBottomPost) {
  return (
    <ContainerAccess>
      <ContainerAmount onPress={onPress} >
        {item._data.likeBy.indexOf(getUser.email) !== -1 ?
          <IconeEntypo name='heart' />
          : <Icone name='heart' />}
        <Title size='small' color='inputColor' text={item._data.like} />
      </ContainerAmount>
      <ContainerAmount>
        <Icone name='comment' />
        <Title size='small' color='inputColor' text={item._data.comments.length} />
      </ContainerAmount>
    </ContainerAccess>
  )
}
