import {ICity, ICountry, IState} from '../countries/entities.ts';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  verified: boolean;
  dateOfBirth: string;
  gender: string;
  language: string;
  location: {
    city: ICity;
    state: IState;
    country: ICountry;
  };
  activities: {
    id: string;
    name: string;
  }[];
  bio?: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface VerifyCodePayload {
  code: string;
}

export interface SignupPayload {
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
}
