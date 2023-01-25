import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import AddBaby from '../screens/AddBaby';
import BabyList from '../screens/BabyList';
import TrackListScreen from '../screens/TrackListScreen';
import VideoPlayerScreen from '../screens/VideoPlayerScreen';
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="AddBaby"
        component={AddBaby}
        options={{
          headerShown: true,
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="BabyList"
        component={BabyList}
        options={{
          headerShown: true,
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          headerShown: true,
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayerScreen}
        options={{
          headerShown: true,
          headerBackVisible: true,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
