import React from 'react';
import MainNaivgation from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNaivgation />
    </NavigationContainer>
  );
};

export default App;
