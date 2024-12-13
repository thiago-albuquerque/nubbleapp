import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
        <Text preset="headingMedium">Hello, word!</Text>
        <Button title="Entrar" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
