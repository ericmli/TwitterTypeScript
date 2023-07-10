import AsyncStorage from '@react-native-async-storage/async-storage'

export function randomCode(size: number) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from({ length: size }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join('')
}

interface TypeDateFormat {
  date: Date
  nanoseconds: number
  seconds: number
}
export function formatDateTime(date: TypeDateFormat) {
  const nanoseconds = date?.nanoseconds
  const seconds = date?.seconds
  const milliseconds = seconds * 1000 + nanoseconds / 1000000
  const dateForm = new Date(milliseconds)
  const day = String(dateForm.getDate()).padStart(2, '0')
  const month = String(dateForm.getMonth() + 1).padStart(2, '0')
  const year = String(dateForm.getFullYear()).padStart(2, '0')
  const hour = String(dateForm.getHours()).padStart(2, '0')
  const minute = String(dateForm.getMinutes()).padStart(2, '0')
  const formattedDate = `${day}/${month}/${year} ${hour}:${minute}`
  return formattedDate
}

export function formatDateWeeks(date: TypeDateFormat) {
  const currentDate = new Date()
  const nanoseconds = date?.nanoseconds
  const seconds = date?.seconds

  const providedDate = new Date(0) // Data de referência em 01/01/1970
  providedDate.setSeconds(seconds)
  providedDate.setMilliseconds(nanoseconds / 1000000)

  const timeDiffInMilliseconds = currentDate.getTime() - providedDate.getTime()
  const timeDiffInSeconds = Math.floor(timeDiffInMilliseconds / 1000)
  const timeDiffInMinutes = Math.floor(timeDiffInSeconds / 60)
  const timeDiffInHours = Math.floor(timeDiffInMinutes / 60)
  const timeDiffInDays = Math.floor(timeDiffInMinutes / (60 * 24))
  const timeDiffInWeeks = Math.floor(timeDiffInMinutes / (60 * 24 * 7))
  const timeDiffInMonths = Math.floor(timeDiffInMinutes / (60 * 24 * 30))
  const timeDiffInYears = Math.floor(timeDiffInMinutes / (60 * 24 * 365))

  let formattedTime = ''
  switch (true) {
    case timeDiffInSeconds < 60:
      formattedTime = `${timeDiffInSeconds}s`
      break
    case timeDiffInMinutes < 60:
      formattedTime = `${timeDiffInMinutes}m`
      break
    case timeDiffInHours < 24:
      formattedTime = `${timeDiffInHours}h`
      break
    case timeDiffInDays < 7:
      formattedTime = `${timeDiffInDays}d`
      break
    case timeDiffInWeeks < 4:
      formattedTime = `${timeDiffInWeeks}w`
      break
    case timeDiffInMonths < 12:
      formattedTime = `${timeDiffInMonths}mo`
      break
    default:
      formattedTime = `${timeDiffInYears}y`
      break
  }

  return formattedTime
}

export interface TypeGetUserStorage {
  email: string
  name: string
  nick: string
  photoUser: string
}

export async function getUserStorage() {
  const getUser = {
    email: await AsyncStorage.getItem('@email'),
    name: await AsyncStorage.getItem('@name'),
    nick: await AsyncStorage.getItem('@nick'),
    photoUser: await AsyncStorage.getItem('@photo')
  }
  return getUser
}
