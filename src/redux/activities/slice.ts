import {createSlice} from '@reduxjs/toolkit';

import {Activity} from './entities.ts';
import {getAllActivities} from './thunk.ts';

interface InitialState {
  activities?: Activity[];
  activitiesLoading?: boolean;
}

const initialState: InitialState = {};

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllActivities.pending, state => {
      state.activitiesLoading = true;
    });
    builder.addCase(getAllActivities.fulfilled, (state, action) => {
      state.activitiesLoading = false;
      state.activities = action.payload;
    });
    builder.addCase(getAllActivities.rejected, state => {
      state.activitiesLoading = false;
    });
  },
});

export const {reducer, actions} = activitiesSlice;
