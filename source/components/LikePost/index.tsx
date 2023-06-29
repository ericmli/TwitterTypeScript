import React from 'react'

import firestore from '@react-native-firebase/firestore'
import { ContainerLike, Icone, IconeEntypo } from './styles'
import { Title } from '../Text'

interface ObjLikes {
  likeBy: string[]
  likePost: number
}

export function LikePost(id: any, getUser: any) {
  const [item, setItem] = React.useState<ObjLikes | undefined>()
  async function getLikes() {
    console.log(getUser, '#@#@#@')
    await firestore().collection(`Post/${id}/likes`).get().then((item) => {
      item.forEach((data: any) => {
        setItem(data.data())
      })
    })
  }
  if (item) {
    const hasItem = item.likeBy.indexOf(getUser.email)
    let updatedLikeBy
    let updatedLikePost = item.likePost
    let obj = {}
    if (hasItem === -1) {
      updatedLikeBy = [...item.likeBy, getUser.email]
      updatedLikePost += 1
      obj = { likeBy: updatedLikeBy, likePost: updatedLikePost }
    } else {
      updatedLikeBy = item.likeBy.filter((i) => i !== getUser.email)
      updatedLikePost -= 1
      obj = { likeBy: updatedLikeBy, likePost: updatedLikePost }
    }
    firestore().collection(`Post/${id}/likes`).doc(id).set(obj)
    getLikes()
  }
  return (
    <ContainerLike onPress={() => getLikes()}>
      {item ?
        <IconeEntypo name='heart' />
        : <Icone name='heart' />}
      <Title size='small' color='inputColor' text='0' />
    </ContainerLike>
  )
}
