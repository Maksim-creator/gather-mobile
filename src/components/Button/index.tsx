import React, {useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles.ts';

interface Props {
  kind?: 'primary' | 'outline';
  text: string;
  onPress?: () => void;
}

const Button: React.FC<Props> = ({text, kind = 'primary', onPress}) => {
  const style = useMemo(
    () => [styles.container, styles[`button_kind_${kind}`]],
    [kind],
  );

  const textStyle = useMemo(
    () => [styles.text, styles[`text_kind_${kind}`]],
    [kind],
  );

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
