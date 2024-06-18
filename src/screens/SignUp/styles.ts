import {Dimensions, StyleSheet} from 'react-native';
import {black, darkGrey, lightGrey} from '../../assets/colors.ts';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 14,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    gap: 5,
  },
  inputsContainer: {
    paddingVertical: 17,
    gap: 8,
  },
  inputsInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    color: black,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: lightGrey,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  inputSmall: {
    width: Dimensions.get('window').width / 2 - 14 - 4,
    height: 44,
  },

  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    height: 40,
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
    alignSelf: 'center',
  },
  createButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
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
  footerText: {
    color: darkGrey,
  },
  keyboardAvoidingView: {
    height: '100%',
    justifyContent: 'space-between',
  },
});
