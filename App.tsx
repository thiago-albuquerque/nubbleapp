import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', height: '100%'}}>
      <Text preset="headingMedium">Hello, word!</Text>
      <Text bold preset="paragraphMedium">
        Hello, word!
      </Text>
    </SafeAreaView>
  );
}
