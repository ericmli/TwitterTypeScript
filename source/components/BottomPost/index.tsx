import React from 'react'
import { ContainerAccess, ContainerAmount, Icone, IconeEntypo } from './styles'
import { Title } from '../Text'
import firestore from '@react-native-firebase/firestore'
import { getUserStorage } from '../../utils'

interface TypeBottomPost {
  id: string
}

export function BottomPost({ id }: TypeBottomPost) {
  const [getUser, setGetUser] = React.useState<any>()
  const [item, setItem] = React.useState<any>()
  React.useEffect(() => {
    loadUtils()
  }, [])
  async function loadUtils() {
    setGetUser(await getUserStorage())
    const data = firestore().collection('Post').doc(id)
    setItem((await data.get()).data())
  }
  async function likePost(id: string) {
    const hasItem = item.likeBy.indexOf(getUser.email)
    let updatedLikeBy
    let updatedLikePost = item.like
    let obj = {}
    if (hasItem === -1) {
      updatedLikeBy = [...item.likeBy, getUser.email]
      updatedLikePost += 1
      obj = { ...item, likeBy: updatedLikeBy, like: updatedLikePost, liked: !item.liked }
    } else {
      updatedLikeBy = item.likeBy.filter((i: string) => i !== getUser.email)
      updatedLikePost -= 1
      obj = { ...item, likeBy: updatedLikeBy, like: updatedLikePost, liked: !item.liked }
    }
    await firestore().collection('Post').doc(id).set(obj)
    loadUtils()
  }
  return (
    <ContainerAccess>
      <ContainerAmount onPress={() => likePost(id)} >
        {item?.likeBy.indexOf(getUser?.email) !== -1 ?
          <IconeEntypo name='heart' />
          : <Icone name='heart' />}
        <Title size='small' color='inputColor' text={item?.like} />
      </ContainerAmount>
      <ContainerAmount>
        <Icone name='comment' />
        <Title size='small' color='inputColor' text={item?.comments.length} />
      </ContainerAmount>
    </ContainerAccess>
  )
}
