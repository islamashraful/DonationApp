import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './routes';
import Home from '@/screens/Home';
import SingleDonationItem from '@/screens/SingleDonationItem';
import Login from '@/screens/Login';
import Registration from '@/screens/Registration';

const Stack = createStackNavigator<MainStackParamList>();

const MainNaivgation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SingleDonationItem" component={SingleDonationItem} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Registration" component={Registration} />
  </Stack.Navigator>
);

export default MainNaivgation;
