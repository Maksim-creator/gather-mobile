import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './enitites.ts';
import screenNames from './screenNames.ts';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.PROFILE}
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
