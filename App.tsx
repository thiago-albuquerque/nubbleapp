import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView
        style={{
          backgroundColor: '#fff',
          height: '100%',
          paddingHorizontal: 16,
        }}>
        <Text preset="headingMedium">Nubble App</Text>

        <Box marginVertical="s10">
          <Button title="Entrar" />
        </Box>
        <Box>
          <Button loading title="Loading" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
