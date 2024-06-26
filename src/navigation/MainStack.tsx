import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from './screenNames.ts';
import Profile from '../screens/Profile';
import {getTabBarIcon} from './utils.tsx';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.PROFILE}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          return getTabBarIcon(size, color, focused, route.name);
        },
        ...tabBarScreenOptions,
      })}>
      <Tab.Screen name={screenNames.SEARCH} component={Search} />
      <Tab.Screen name={screenNames.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default MainStack;

const tabBarScreenOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: 'absolute',
    height: 80,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
  },
} as const;
