import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  );
}

export default AppNavigator