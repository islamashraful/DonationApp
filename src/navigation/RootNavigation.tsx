import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const RootNavigation = () => {
  const user = useSelector((state: RootState) => state.user);

  return user.userData ? <AppStack /> : <AuthStack />;
};

export default RootNavigation;
