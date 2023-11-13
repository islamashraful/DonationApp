import React from 'react';
import { AuthStackParamList } from './routes';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@/screens/Login';
import Registration from '@/screens/Registration';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Registration" component={Registration} />
  </Stack.Navigator>
);

export default AuthStack;
