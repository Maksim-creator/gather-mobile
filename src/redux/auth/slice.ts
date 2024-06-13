import {createSlice} from '@reduxjs/toolkit';
import {User} from './entities.ts';
import {loginThunk} from './thunk.ts';

export interface AuthState {
  user?: User;
  loginLoading?: boolean;
  loginError?: string;
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
  },
});

export const {reducer, actions} = authSlice;
