import {StyleSheet} from 'react-native';
import {black, disabled, lightGrey, white} from '../../assets/colors.ts';

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
  button_kind_primary_disabled: {
    backgroundColor: disabled,
  },
  button_kind_outline_disabled: {
    backgroundColor: disabled,
    borderWidth: 0,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 44,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
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
  text_kind_primary_disabled: {
    color: lightGrey,
  },
  text_kind_outline_disabled: {
    color: lightGrey,
  },
});
