import React from 'react';
import AuthStack from './AuthStack.tsx';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {RootStackParamList} from './enitites.ts';
import screenNames from './screenNames.ts';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (name: screenNames, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomSheetModalProvider>
        <AuthStack />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default Navigation;
