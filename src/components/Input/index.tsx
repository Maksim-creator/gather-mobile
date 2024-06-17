import React, {RefObject} from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import styles from './styles.ts';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
  inputRef?: React.RefObject<TextInput>;
}

const Input: React.FC<Props> = ({
  label,
  error,
  touched,
  inputRef,
  ...props
}) => {
  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        {...props}
        ref={inputRef}
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
