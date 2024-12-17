import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{
          backgroundColor: '#fff',
          height: '100%',
          paddingHorizontal: 16,
        }}>
        <Text preset="headingMedium" color="backgroundContrast">
          Nubble App
        </Text>

        <Button title="Entrar" marginVertical="s20" />

        <Button title="Loading" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
