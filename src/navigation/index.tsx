import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack.tsx';
import {RootStackParamList} from './enitites.ts';
import screenNames from './screenNames.ts';
import MainStack from './MainStack.tsx';
import {useAppSelector} from '../redux/store.ts';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (name: screenNames, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer ref={navigationRef}>
      <BottomSheetModalProvider>
        <Stack.Navigator initialRouteName={screenNames.LOGIN}>
          {isLoggedIn ? (
            <Stack.Screen
              name={screenNames.MAIN_STACK}
              component={MainStack}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name={screenNames.AUTH_STACK}
              component={AuthStack}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default Navigation;
