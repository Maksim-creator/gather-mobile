import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api/countries';

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.getCountries();
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const getStatesByCountry = createAsyncThunk(
  'countries/getStatesByCountry',
  async (payload: any, {rejectWithValue}) => {
    try {
      const response = await api.getStatesByCountry(payload.country);
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const getCitiesByState = createAsyncThunk(
  'countries/getCitiesByState',
  async (payload: any, {rejectWithValue}) => {
    try {
      const response = await api.getCitiesByState(
        payload.country,
        payload.state,
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
