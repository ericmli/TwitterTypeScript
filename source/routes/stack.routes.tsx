import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { LoginUser } from '../pages/LoginUser'

const Stack = createNativeStackNavigator()

export default function StackNavigator () {
  return (
      <Stack.Navigator
        initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginUser"
          component={LoginUser}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
}
