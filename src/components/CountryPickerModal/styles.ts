import {StyleSheet} from 'react-native';
import {lightGrey} from '../../assets/colors.ts';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  emptyContent: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContentImage: {
    width: 250,
    height: 250,
    flex: 1,
    alignSelf: 'center',
  },
  emptyContentTitle: {
    textAlign: 'center',
  },
  container: {flex: 1},
  header: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputIcon: {
    position: 'absolute',
    left: 20,
    top: 17,
  },
  input: {
    borderWidth: 1,
    borderColor: lightGrey,
    borderRadius: 8,
    height: 38,
    paddingHorizontal: 35,
  },
  clearInputIcon: {
    position: 'absolute',
    right: 20,
    top: 17,
  },
});
