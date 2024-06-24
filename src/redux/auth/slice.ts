import {createSlice} from '@reduxjs/toolkit';
import {User} from './entities.ts';
import {
  loginThunk,
  signupThunk,
  sendVerificationCode,
  verifyCode,
  finishOnboarding,
} from './thunk.ts';

export interface AuthState {
  user?: User;
  loginLoading?: boolean;
  loginError?: string;
  verificationCodeSending?: boolean;
  codeVerifying?: boolean;
  signUpError?: string;
  signUpLoading?: boolean;
  finishOnboardingLoading?: boolean;
  isLoggedIn?: boolean;
}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
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
    builder.addCase(sendVerificationCode.pending, state => {
      state.verificationCodeSending = true;
    });
    builder.addCase(sendVerificationCode.fulfilled, state => {
      state.verificationCodeSending = false;
    });
    builder.addCase(sendVerificationCode.rejected, state => {
      state.verificationCodeSending = false;
    });
    builder.addCase(verifyCode.pending, state => {
      state.codeVerifying = true;
    });
    builder.addCase(verifyCode.fulfilled, (state, action) => {
      state.codeVerifying = false;
      if (state.user) {
        state.user.verified = action.payload;
      }
    });
    builder.addCase(verifyCode.rejected, state => {
      state.codeVerifying = false;
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
    builder.addCase(finishOnboarding.pending, state => {
      state.finishOnboardingLoading = true;
    });
    builder.addCase(finishOnboarding.fulfilled, (state, action) => {
      state.finishOnboardingLoading = false;
      state.user = action.payload;
    });
    builder.addCase(finishOnboarding.rejected, state => {
      state.finishOnboardingLoading = false;
    });
  },
});

export const {reducer, actions} = authSlice;
