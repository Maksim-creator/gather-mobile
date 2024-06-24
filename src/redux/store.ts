import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {reducer as auth} from './auth/slice.ts';
import {reducer as activities} from './activities/slice.ts';
import {reducer as countries} from './countries/slice.ts';

export const rootReducer = combineReducers({
  auth,
  activities,
  countries,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
