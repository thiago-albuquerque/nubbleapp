import React from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Controller} from 'react-hook-form';

export function FormTextInput({
  control,
  name,
  rules,
  ...textInputProps
}: TextInputProps & {control: any; name: any; rules: any}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
