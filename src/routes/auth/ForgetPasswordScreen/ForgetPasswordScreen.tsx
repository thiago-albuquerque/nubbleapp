import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Routes';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({route, navigation}: ScreenProps) {
  function submitForm() {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'LoginScreen'},
        {
          name: 'SuccessScreen',
          params: {
            title: `Enviamos as instruções ${'\n'}para o e-mail informado!`,
            description:
              'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
              name: 'messageRound',
              color: 'primary',
              size: 48,
            },
          },
        },
      ],
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mt="s24" mb="s16">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        {route.params.description}
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button title="Recuperar senha" onPress={submitForm} />
    </Screen>
  );
}
