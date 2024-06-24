import {StyleSheet} from 'react-native';
import {lightGrey} from '../../../../assets/colors.ts';

export default StyleSheet.create({
  container: {
    paddingTop: 18,
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  content: {
    gap: 14,
  },
  touchable: {
    borderWidth: 1,
    borderColor: lightGrey,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: 44,
  },
});
