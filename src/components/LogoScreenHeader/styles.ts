import {StyleSheet} from 'react-native';

export default StyleSheet.create<any>({
  container: (insetTop: number) => ({
    width: '100%',
    height: 48,
    paddingHorizontal: 14,
    paddingTop: !insetTop ? 15 : 0,
  }),
  image: {
    width: 100,
    height: '100%',
  },
});
