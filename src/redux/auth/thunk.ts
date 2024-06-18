import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api/auth';
import {LoginPayload, LoginResponse, SignupPayload} from './entities.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setAuthorizationToken} from '../../api';

export const loginThunk = createAsyncThunk<LoginResponse, LoginPayload>(
  'auth/login',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await api.login(payload);

      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      setAuthorizationToken(response.data.accessToken);
      /// navigate to main screen

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
      /////// navigate to code verification ///////
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
