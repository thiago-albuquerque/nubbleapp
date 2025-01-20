import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
  Screen,
} from '@components';
import {AuthScreenProps} from '@routes';

import {signUpSchema, SignUpSchemaType} from './signUpSchema';

export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {control, formState, handleSubmit} = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchemaType) {
    console.log(formValues);
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

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@username"
        autoCapitalize="none"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullname"
        label="Nome completo"
        placeholder="digite seu nome completo"
        autoCapitalize="words"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="digite seu e-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Criar uma conta"
      />
    </Screen>
  );
}
