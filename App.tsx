import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icons/Icon';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{
          backgroundColor: '#fff',
          height: '100%',
          paddingHorizontal: 16,
        }}>
        <Text preset="headingLarge" mt="s40" mb="s8">
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

        <TextInput
          label="Senha"
          placeholder="digite sua senha"
          RightComponent={<Icon name="eyeOn" color="gray2" />}
          errorMessage="Mensagem de erro"
          boxProps={{mb: 's10'}}
        />

        <Text preset="paragraphSmall" bold color="primary" mb="s48">
          Esqueci minha senha
        </Text>

        <Button title="Entrar" mb="s12" />
        <Button title="Criar uma conta" preset="outline" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
