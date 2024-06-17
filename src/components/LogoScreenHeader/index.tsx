import React from 'react';
import styles from '../Input/styles.ts';
import {Image, View} from 'react-native';

const LogoScreenHeader = () => {
  return (
    <View style={{width: '100%', height: 48, paddingHorizontal: 14}}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: 100, height: '100%'}}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default LogoScreenHeader;
