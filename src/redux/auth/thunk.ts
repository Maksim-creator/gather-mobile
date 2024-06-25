import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/auth';
import {
  LoginPayload,
  LoginResponse,
  SignupPayload,
  VerifyCodePayload,
} from './entities.ts';
import {setAuthorizationToken} from '../../api';
import {navigate} from '../../navigation';
import screenNames from '../../navigation/screenNames.ts';
import {OnboardingData} from '../../screens/Onboarding';
import {actions} from './slice.ts';

export const loginThunk = createAsyncThunk<LoginResponse, LoginPayload>(
  'auth/login',
  async (payload, {rejectWithValue, dispatch}) => {
    try {
      const response = await api.login(payload);

      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      setAuthorizationToken(response.data.accessToken);
      dispatch(actions.setIsLoggedIn(true));

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const signupThunk = createAsyncThunk<LoginResponse, SignupPayload>(
  'auth/signup',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await api.signup(payload);
      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      setAuthorizationToken(response.data.accessToken);
      navigate(screenNames.CODE_VERIFICATION, {email: payload.email});
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const sendVerificationCode = createAsyncThunk(
  'auth/sendVerificationCode',
  async (_, {rejectWithValue}) => {
    try {
      await api.sendVerificationCode();
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const verifyCode = createAsyncThunk<boolean, VerifyCodePayload>(
  'auth/verifyCode',
  async ({code}, {rejectWithValue}) => {
    try {
      const response = await api.verifyCode(code);
      navigate(screenNames.ONBOARDING);
      return response.data.verified;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const finishOnboarding = createAsyncThunk(
  'auth/finishOnboarding',
  async (payload: OnboardingData, {rejectWithValue, dispatch}) => {
    try {
      const response = await api.finishOnboarding(payload);
      dispatch(actions.setIsLoggedIn(true));
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
