import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack, AuthStack} from '@routes';

export function Routes() {
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
