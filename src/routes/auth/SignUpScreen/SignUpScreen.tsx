import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  function submitForm() {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'LoginScreen'},
        {
          name: 'SuccessScreen',
          params: {
            title: 'Sua conta foi criada com sucesso!',
            description: 'Agora é só acessar nossa plataforma',
            icon: {name: 'checkRound', color: 'greenSuccess', size: 48},
          },
        },
      ],
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mt="s24" mb="s40">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />

      <TextInput
        label="Nome Completo"
        placeholder="digite seu nome completo"
        boxProps={{mb: 's20'}}
      />

      <TextInput
        label="E-mail"
        placeholder="digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text preset="paragraphSmall" bold color="primary" mb="s48">
        Esqueci minha senha
      </Text>

      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
