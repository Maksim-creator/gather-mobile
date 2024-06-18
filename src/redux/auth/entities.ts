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
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface SignupPayload {
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
}
