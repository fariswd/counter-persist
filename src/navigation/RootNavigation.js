import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeScreen from '../screen/Home'
import CounterScreen from '../screen/Counter'

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  CounterScreen: {
    screen: CounterScreen,
  }
}

const options = {
  initialRouteName: 'HomeScreen',
  navigationOptions: { header: null }
}

export default StackNavigator(screens, options)
