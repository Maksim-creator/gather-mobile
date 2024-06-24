import {StyleSheet} from 'react-native';
import {black} from '../../assets/colors.ts';

export default StyleSheet.create({
  container: {
    paddingTop: 12,
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    paddingBottom: 12,
    color: black,
  },
  content: {
    paddingHorizontal: 14,
  },
  stepsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 30,
    paddingTop: 15,
  },
  stepRowItem: {
    flex: 1,
    height: 4,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: black,
  },
  description: {
    fontFamily: 'Inter-Regular',
    color: black,
  },
});
