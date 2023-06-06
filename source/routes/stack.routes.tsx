import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../pages/Login'
import { LoginUser } from '../pages/LoginUser'
import { BottomTabs } from './bottom.routes'
import { NewPost } from '../pages/NewPost'

const Stack = createNativeStackNavigator()

export function StackNavigator () {
  return (
      <Stack.Navigator
        initialRouteName='SendHome'>
        <Stack.Screen
          name='SendHome'
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='LoginUser'
          component={LoginUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='NewPost'
          component={NewPost}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
}
