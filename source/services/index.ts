import axios from 'axios'
import { host } from './host'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const api = axios.create({
  baseURL: `${host}api/`,
  timeout: 5000
})

api.interceptors.request.use(
  async ({ config }: any) => {
    try {
      const data = await AsyncStorage.getItem('@token')
      if (data) {
        config.headers.Authorization = `Bearer ${data}`
      }
      return config
    } catch (e) {
      console.log(e)
    }
  })
