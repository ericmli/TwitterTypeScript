/* eslint-disable react-native/no-color-literals */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Home } from '../pages/Home'
import { AreaIcon } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useColorScheme } from 'react-native'

const Tab = createBottomTabNavigator()

export function BottomTabs() {
  const navigation = useNavigation()
  const deviceTheme = useColorScheme()
  let color = ''
  if (deviceTheme === 'dark') {
    color = '#000'
  } else {
    color = '#FFF'
  }
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#009EF7',
          tabBarLabel: '',
          tabBarStyle: {
            padding: 10,
            backgroundColor: color
          }
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return <Icon name='home' size={25} color={color} />
            }
          }}
        />
      </Tab.Navigator>
      <AreaIcon onPress={() => navigation.navigate('NewPost')}>
        <Icon name="plus" size={25} color="white" />
      </AreaIcon>
    </>
  )
}
