import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen, Text, Button, Icon} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function goBackToBegin() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24" mb="s16">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        {route.params.description}
      </Text>
      <Button title="Fazer login" onPress={goBackToBegin} />
    </Screen>
  );
}
