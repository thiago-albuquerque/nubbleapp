import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  function navigateToSignUpScreen() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge" mt="s24" mb="s40">
        Home Screen
      </Text>
      <Button onPress={navigateToSignUpScreen} title="Settings" />
    </Screen>
  );
}
