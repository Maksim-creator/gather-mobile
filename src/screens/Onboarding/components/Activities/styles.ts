import {StyleSheet} from 'react-native';
import {black, lightGrey} from '../../../../assets/colors.ts';

export const styles = StyleSheet.create<any>({
  container: {
    gap: 12,
    paddingTop: 12,
    flex: 1,
    justifyContent: 'space-between',
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedActivitiesContent: {
    gap: 12,
  },
  selectedActivitiesTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    paddingLeft: 14,
    color: black,
  },
  selectedActivitiesScroll: {
    gap: 8,
    paddingHorizontal: 14,
  },
  tabsContent: {
    gap: 12,
    paddingTop: 12,
    height: 400,
  },
  sceneContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    maxHeight: 400,
  },
  bottomButtons: {
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    paddingHorizontal: 14,
  },
  scene: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  tabBar: {
    height: 40,
  },
  tabBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
  },
  tabItem: (selected: boolean) => ({
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: selected ? black : lightGrey,
    paddingBottom: 12,
  }),
  bottomButton: {
    paddingHorizontal: 14,
  },
  text: {
    fontFamily: 'Inter-Regular',
    color: black,
  },
});
