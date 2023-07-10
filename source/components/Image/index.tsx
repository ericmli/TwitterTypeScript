import React from 'react'
import storage from '@react-native-firebase/storage'
import { Image } from './styles'

export function LoadImage(photo: any) {
  const [image, setImage] = React.useState<string>()
  React.useEffect(() => {
    getImage()
  }, [])
  async function getImage() {
    if (photo.photo) {
      const reference = storage().ref(photo.photo)
      const url = await reference.getDownloadURL()
      setImage(url)
    } else if (photo.source.uri) {
      const reference = storage().ref(photo.source.uri)
      const url = await reference.getDownloadURL()
      setImage(url)
    }
  }

  if (image) {
    return (<Image source={{ uri: image }} />)
  } else {
    return (
      <></>
    )
  }
}
