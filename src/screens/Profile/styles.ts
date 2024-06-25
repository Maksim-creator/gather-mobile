import {StyleSheet} from 'react-native';
import {linkBlue, white} from '../../assets/colors.ts';

export default StyleSheet.create<any>({
  container: {
    backgroundColor: white,
    flex: 1,
  },
  content: {
    backgroundColor: white,
    height: '100%',
  },
  indicator: {
    backgroundColor: linkBlue,
    height: 1.4,
  },
  tabBar: {
    backgroundColor: white,
    marginTop: 10,
    shadowOffset: {height: 0, width: 0},
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
  },
  tabBarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: white,
  },
  sceneContainer: {
    borderBottomWidth: 0,
  },
  tabTitle: (focused: boolean) => ({
    color: focused ? linkBlue : '#adaaaa',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
  }),
});
