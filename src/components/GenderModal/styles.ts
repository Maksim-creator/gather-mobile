import {StyleSheet} from 'react-native';
import {black} from '../../assets/colors.ts';

export default StyleSheet.create({
  genderItem: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
  },
  genderItemText: {
    fontFamily: 'Inter-Regular',
    color: black,
  },
  button: {
    paddingHorizontal: 14,
  },
  container: {
    flex: 1,
  },
});
