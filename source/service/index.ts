import firestore from '@react-native-firebase/firestore'

interface TypeLoadApi {
  route: string
  doc: string
  order: 'asc' | 'desc'
}

export interface PropsApi {
  id: string
  textArea: string
  like: number
  liked: boolean
  _data: any
  likeBy: string[]
  likePost: number
  comments: string[]
}

export async function loadApi({ route, doc, order } : TypeLoadApi) {
  const arr: string[] = []
  await firestore().collection(route).orderBy(doc, order).get().then((item: any) => {
    item.forEach((data: any) => {
      arr.push(data)
    })
  })
  return arr
}
