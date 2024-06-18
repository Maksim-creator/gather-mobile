import React from 'react';
import styles from './styles.ts';
import {Image, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LogoScreenHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container(insets.top)}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default LogoScreenHeader;
