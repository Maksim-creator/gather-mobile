import React from 'react';
import {Text, View} from 'react-native';
import {darkGrey, linkBlue} from '../../assets/colors.ts';
import {useAppSelector} from '../../redux/store.ts';
import styles from './styles.ts';

const ProfileTabIcon = ({focused}: {focused: boolean}) => {
  const {user} = useAppSelector(state => state.auth);

  return (
    <View
      style={[
        styles.wrapper,
        {
          borderColor: focused ? linkBlue : darkGrey,
        },
      ]}>
      <Text style={styles.text}>
        {user?.firstName[0].toUpperCase()}
        {user?.lastName[0].toUpperCase()}
      </Text>
    </View>
  );
};

export default ProfileTabIcon;
