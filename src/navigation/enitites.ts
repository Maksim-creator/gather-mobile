import {RouteProp} from '@react-navigation/native';
import screenNames from './screenNames.ts';

export type RootStackParamList = {
  [screenNames.LOGIN]: undefined;
  [screenNames.CODE_VERIFICATION]: {email: string};
  [screenNames.SIGN_UP]: undefined;
  [screenNames.ONBOARDING]: undefined;
  [screenNames.PROFILE]: undefined;
  [screenNames.AUTH_STACK]: undefined;
  [screenNames.MAIN_STACK]: undefined;
  [screenNames.SEARCH]: undefined;
};

export interface ScreenOptionsProps {
  route: RouteProp<RootStackParamList>;
  navigation: any;
}
