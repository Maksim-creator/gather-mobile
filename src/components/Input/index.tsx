import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import styles from './styles.ts';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
}

const Input: React.FC<Props> = ({label, error, ...props}) => {
  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        {...props}
        style={
          error
            ? [styles.input, props.style, styles.errorInput]
            : [styles.input, props.style]
        }
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Input;
