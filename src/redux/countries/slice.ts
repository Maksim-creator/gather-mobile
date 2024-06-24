import {createSlice} from '@reduxjs/toolkit';
import {
  getAllCountries,
  getCitiesByState,
  getStatesByCountry,
} from './thunk.ts';
import {ICountry, IState, ICity} from './entities.ts';

interface InitialState {
  countriesLoading: boolean;
  countries: ICountry[];
  statesLoading: boolean;
  states: IState[];
  citiesLoading: boolean;
  cities: ICity[];
}

const initialState: InitialState = {
  countriesLoading: false,
  countries: [],
  statesLoading: false,
  states: [],
  citiesLoading: false,
  cities: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllCountries.pending, state => {
      state.countriesLoading = true;
    });
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.countriesLoading = false;
    });
    builder.addCase(getAllCountries.rejected, state => {
      state.countriesLoading = false;
    });
    builder.addCase(getStatesByCountry.pending, state => {
      state.statesLoading = true;
    });
    builder.addCase(getStatesByCountry.fulfilled, (state, action) => {
      state.states = action.payload;
      state.statesLoading = false;
    });
    builder.addCase(getStatesByCountry.rejected, state => {
      state.statesLoading = false;
    });
    builder.addCase(getCitiesByState.pending, state => {
      state.citiesLoading = true;
    });
    builder.addCase(getCitiesByState.fulfilled, (state, action) => {
      state.cities = action.payload;
      state.citiesLoading = false;
    });
    builder.addCase(getCitiesByState.rejected, state => {
      state.citiesLoading = false;
    });
  },
});

export const {actions, reducer} = countriesSlice;
