import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icons/Icon';
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
        <Text preset="headingMedium" color="backgroundContrast" mb="s10">
          Nubble App
        </Text>
        <Box flexDirection="row">
          <Icon name="arrowLeft" />
          <Icon name="arrowRight" />
          <Icon name="bell" />
          <Icon name="bellOn" />
          <Icon name="bookmark" />
          <Icon name="bookmarkFill" />
          <Icon name="camera" />
          <Icon name="chat" />
          <Icon name="chatOn" />
          <Icon name="check" />
          <Icon name="chevronRight" />
          <Icon name="comment" />
          <Icon name="eyeOff" />
          <Icon name="eyeOn" />
        </Box>
        <Box flexDirection="row">
          <Icon name="flashOff" />
          <Icon name="flashOn" />
          <Icon name="heart" />
          <Icon name="heartFill" />
          <Icon name="home" />
          <Icon name="homeFill" />
          <Icon name="message" />
          <Icon name="more" />
          <Icon name="newPost" />
          <Icon name="profile" />
          <Icon name="profileFill" />
          <Icon name="search" />
          <Icon name="send" />
          <Icon name="settings" />
          <Icon name="trash" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
