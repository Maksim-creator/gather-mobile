import React from 'react';
import {DimensionValue, View} from 'react-native';
import styles from './styles.ts';

interface DividerProps {
  width?: DimensionValue;
}

const Divider: React.FC<DividerProps> = ({width = '100%'}) => {
  return <View style={[styles.divider, {width}]} />;
};
export default Divider;
