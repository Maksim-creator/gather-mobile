import {Dimensions, StyleSheet} from 'react-native';
import {darkGrey, lightGrey} from '../../assets/colors.ts';

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
    paddingHorizontal: 14,
  },
  imageContainer: {
    height: '40%',
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
  inputsInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
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
    width: Dimensions.get('window').width / 2 - 18,

    borderColor: lightGrey,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
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
    textAlign: 'center',
    paddingTop: 16,
  },
  footerText: {
    color: darkGrey,
  },
});
