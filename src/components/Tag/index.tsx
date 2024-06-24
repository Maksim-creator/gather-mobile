import React from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons.js';
import styles from './styles.ts';

interface Props {
  text: string;
  iconName?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Tag: React.FC<Props> = ({text, iconName, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.tag, style]} onPress={onPress}>
      {iconName ? <Icon name={iconName} size={17} /> : null}
      <Text style={styles.tagText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Tag;
