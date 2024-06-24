import {StyleSheet} from 'react-native';
import {black} from '../../assets/colors.ts';

export default StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: black,
    paddingHorizontal: 10,
    height: 34,
    gap: 2,
  },
  tagText: {
    color: black,
    fontFamily: 'Inter-Regular',
  },
});
