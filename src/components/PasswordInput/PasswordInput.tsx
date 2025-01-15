import React, {useState} from 'react';
import {Icon} from '../Icons/Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(rnPasswordInputProps: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...rnPasswordInputProps}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          onPress={toggleSecureEntry}
          color="gray2"
        />
      }
    />
  );
}
