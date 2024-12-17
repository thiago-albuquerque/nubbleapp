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

        <Button title="Primary" mt="s20" mb="s20" />
        <Button preset="outline" title="Outline" mb="s20" />
        <Button title="Loading" loading mb="s20" />
        <Button preset="outline" loading title="Outline" mb="s20" />
        <Button title="Disabled" disabled mb="s20" />
        <Button preset="outline" disabled loading title="Disabled" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
