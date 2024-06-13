import {StyleSheet} from 'react-native';
import {black, darkGrey} from '../../assets/colors.ts';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    flex: 1,
  },
  imageContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    gap: 10,
  },
  inputsContainer: {
    paddingVertical: 17,
    gap: 8,
  },
  buttonsContainer: {
    gap: 8,
  },
  image: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: black,
    fontFamily: 'Inter-Bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    color: black,
    fontFamily: 'Inter-Regular',
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '100%',
    height: 44,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  orTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#787878',
  },
  createButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 44,
  },
  footer: {
    color: black,
    fontFamily: 'Inter-Regular',
  },
  footerHighlightedText: {
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
    paddingTop: 16,
    paddingHorizontal: 14,
    textAlign: 'center',
    color: darkGrey,
  },
});
