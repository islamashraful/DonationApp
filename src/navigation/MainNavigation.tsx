import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './routes';
import Home from '@/screens/Home';
import SingleDonationItem from '@/screens/SingleDonationItem';

const Stack = createStackNavigator<MainStackParamList>();

const MainNaivgation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SingleDonationItem" component={SingleDonationItem} />
  </Stack.Navigator>
);

export default MainNaivgation;
