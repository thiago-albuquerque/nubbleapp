import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      height={50}
      paddingHorizontal="s20"
      alignItems="center"
      justifyContent="center"
      borderRadius="s16">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text bold style={{color: '#fff'}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
