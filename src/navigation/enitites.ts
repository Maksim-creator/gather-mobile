import screenNames from './screenNames.ts';

export type RootStackParamList = {
  [screenNames.LOGIN]: undefined;
  [screenNames.CODE_VERIFICATION]: {email: string};
  [screenNames.SIGN_UP]: undefined;
  [screenNames.ONBOARDING]: undefined;
};
