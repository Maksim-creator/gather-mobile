import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api/auth';
import {LoginPayload, LoginResponse} from './entities.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setAuthorizationToken} from '../../api';

import {navigate} from '../../navigation';

export const loginThunk = createAsyncThunk<LoginResponse, LoginPayload>(
  'auth/login',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await api.login(payload);

      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      setAuthorizationToken(response.data.accessToken);
      // navigate(screenNames.LOGIN);

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (payload: any, {rejectWithValue}) => {
    try {
      const response = await api.signup(payload);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
