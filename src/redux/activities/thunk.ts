import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api/activities';
import {Activity} from './entities.ts';

export const getAllActivities = createAsyncThunk<Activity[], void>(
  'activities/getAllActivities',
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.getAllActivities();

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
