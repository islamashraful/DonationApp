import React from 'react';
import { AppStackParamList } from './routes';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/screens/Home';
import SingleDonationItem from '@/screens/SingleDonationItem';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SingleDonationItem" component={SingleDonationItem} />
  </Stack.Navigator>
);

export default AppStack;
