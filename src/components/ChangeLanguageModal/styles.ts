import {StyleSheet} from 'react-native';
import {black} from '../../assets/colors.ts';

export default StyleSheet.create({
  languageItem: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
  },
  languageItemText: {
    fontFamily: 'Inter-Regular',
    color: black,
  },
  container: {
    paddingVertical: 12,
    flex: 1,
  },
  button: {
    paddingHorizontal: 14,
  },
});
