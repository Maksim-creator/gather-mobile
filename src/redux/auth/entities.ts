export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}
