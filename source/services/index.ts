import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { host } from './host'

export const api = axios.create({
  baseURL: `${host}api/auth/`,
  timeout: 5000
})

// interface TypeConfig {

// }

// api.interceptors.request.use(async (config) => {
//   const useStorage = await AsyncStorage.getItem('token')
//   const data = JSON.parse(useStorage)
//   if (!data) return config
//   if (config?.headers) {
//     config.headers = { Authorization: `Bearer ${data.token}` }
//   }
//   return config
// })

// Incerceptor request - token
// Incerceptor response - trata token 'If(error)'
