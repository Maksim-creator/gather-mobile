import {StyleSheet} from 'react-native';
import {black, linkBlue} from '../../assets/colors.ts';

export default StyleSheet.create({
  highlightedText: {
    fontFamily: 'Inter-Bold',
  },
  title: {
    fontFamily: 'Inter-Regular',
    color: black,
    lineHeight: 20,
  },
  container: {
    paddingHorizontal: 14,
    paddingVertical: 36,
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 19,
    alignSelf: 'center',
    paddingTop: 50,
    paddingBottom: 35,
  },
  sendAgainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    flexDirection: 'row',
  },
  timerContainer: {flexDirection: 'row', gap: 5},
  sendAgainTitle: {
    fontFamily: 'Inter-Light',
  },
  sendAgainText: {
    color: linkBlue,
    fontFamily: 'Inter-Light',
  },
  timer: {
    fontFamily: 'Inter-Light',
    letterSpacing: 1,
  },
});
