import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge" mt="s24" mb="s40">
        Home Screen
      </Text>
      <Button
        onPress={() => navigation.navigate('SettingsScreen')}
        title="Settings"
        mb="s16"
      />
      <Button
        onPress={() => navigation.navigate('FavoriteScreen')}
        title="Favorite"
      />
    </Screen>
  );
}
