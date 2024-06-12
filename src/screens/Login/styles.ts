import {StyleSheet} from 'react-native';
import {black, darkGrey, lightGrey} from '../../assets/colors.ts';

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
    gap: 5,
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
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    color: black,
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
    alignSelf: 'center',
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
    // textAlign: 'center',
    color: 'black',
  },
  footerHighlightedText: {
    paddingTop: 16,
    paddingHorizontal: 14,
    textAlign: 'center',
    color: darkGrey,
  },
});
