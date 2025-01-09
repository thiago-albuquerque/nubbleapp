import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {LoginScreen} from './src/routes/auth/LoginScreen/LoginScreen';
import {SafeAreaView} from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <LoginScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}
