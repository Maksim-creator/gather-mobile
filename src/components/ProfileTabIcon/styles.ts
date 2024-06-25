import {StyleSheet} from 'react-native';
import {black} from '../../assets/colors.ts';

export default StyleSheet.create({
  wrapper: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: black,
  },
});
