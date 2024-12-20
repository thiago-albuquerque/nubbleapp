import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
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
        <Text preset="headingMedium" color="backgroundContrast" mb="s10">
          Nubble App
        </Text>

        <Icon name="eyeOn" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
