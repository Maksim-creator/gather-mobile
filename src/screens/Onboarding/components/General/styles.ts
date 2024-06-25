import {StyleSheet} from 'react-native';
import {black, lightGrey} from '../../../../assets/colors.ts';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 10,
    paddingBottom: 29,
  },
  touchable: {
    borderWidth: 1,
    borderColor: lightGrey,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: 44,
    flex: 1,
  },
  content: {
    gap: 14,
  },
  text: {fontFamily: 'Inter-Regular', color: black},
  languageTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: lightGrey,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 44,
  },
});
