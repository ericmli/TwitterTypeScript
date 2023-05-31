import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'
import { Home } from '../pages/Home'

const Tab = createBottomTabNavigator()

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#009EF7',
        tabBarLabel: '',
        tabBarStyle: {
          padding: 10
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
  )
}
