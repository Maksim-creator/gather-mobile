import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import styles from './styles.ts';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

const Input: React.FC<Props> = ({label, error, touched, ...props}) => {
  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        {...props}
        style={
          error && touched
            ? [styles.input, props.style, styles.errorInput]
            : [styles.input, props.style]
        }
      />
      {error && touched ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Input;
