import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import screenNames from './screenNames.ts';
import {RootStackParamList} from './enitites.ts';
import CodeVerification from '../screens/CodeVerification';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.LOGIN}>
      <Stack.Screen
        name={screenNames.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenNames.CODE_VERIFICATION}
        component={CodeVerification}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
