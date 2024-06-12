import {StyleSheet} from 'react-native';
import {error, lightGrey} from '../../assets/colors.ts';

export default StyleSheet.create({
  input: {
    height: 44,
    width: '100%',
    borderColor: lightGrey,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  label: {fontWeight: '700', fontSize: 10, paddingBottom: 4},
  error: {color: error, paddingTop: 4},
  errorInput: {borderColor: error, borderWidth: 1.5},
});
