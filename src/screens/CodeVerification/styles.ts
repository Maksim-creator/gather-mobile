import {StyleSheet} from 'react-native';
import {black, darkGrey, lightGrey, linkBlue} from '../../assets/colors.ts';

export default StyleSheet.create({
  safeArea: {
    height: '100%',
  },
  highlightedText: {
    fontFamily: 'Inter-Bold',
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Regular',
    color: black,
    lineHeight: 20,
  },
  container: {
    paddingHorizontal: 14,
    paddingTop: 36,
    height: '100%',
    justifyContent: 'space-between',
    flex: 1,
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
  sendAgainDisabledText: {
    color: darkGrey,
    fontFamily: 'Inter-Light',
  },
  timer: {
    fontFamily: 'Inter-Light',
    letterSpacing: 1,
  },
  input: {
    width: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Inter-Light',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomButton: {
    width: '49%',
  },
});
