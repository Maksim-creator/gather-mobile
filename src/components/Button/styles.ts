import {StyleSheet} from 'react-native';
import {black, white} from '../../assets/colors.ts';

export default StyleSheet.create({
  button_kind_primary: {
    backgroundColor: black,
    color: '#fff',
  },
  button_kind_outline: {
    borderColor: black,
    borderWidth: 1,
    color: '#000',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 44,
    borderRadius: 8,
  },
  text: {
    fontFamily: 'Inter-Medium',
  },
  text_kind_primary: {
    color: white,
  },
  text_kind_outline: {
    color: black,
  },
});
