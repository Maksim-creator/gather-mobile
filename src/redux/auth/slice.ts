import {createSlice} from '@reduxjs/toolkit';
import {User} from './entities.ts';
import {loginThunk, signupThunk} from './thunk.ts';

export interface AuthState {
  user?: User;
  loginLoading?: boolean;
  loginError?: string;
  signUpError?: string;
  signUpLoading?: boolean;
}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, state => {
      state.loginLoading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.loginLoading = false;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loginError = action.error.message;
      state.loginLoading = false;
    });
    builder.addCase(signupThunk.pending, state => {
      state.signUpLoading = true;
    });
    builder.addCase(signupThunk.fulfilled, (state, action) => {
      state.signUpLoading = false;
      state.user = action.payload.user;
    });
    builder.addCase(signupThunk.rejected, (state, action) => {
      state.signUpLoading = false;
      state.signUpError = action.error.message;
    });
  },
});

export const {reducer, actions} = authSlice;
