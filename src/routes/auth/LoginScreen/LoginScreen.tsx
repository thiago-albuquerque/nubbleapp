import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge" mt="s24" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

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

      <Button title="Entrar" mb="s12" />
      <Button title="Criar uma conta" preset="outline" />
    </Screen>
  );
}
