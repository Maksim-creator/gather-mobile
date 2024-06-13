import baseApi from '../index.ts';
import {LoginPayload} from '../../redux/auth/entities.ts';

export default {
  login: (payload: LoginPayload) => baseApi.post('/auth/login', payload),
  signup: (payload: any) => baseApi.post('/auth/signup', payload),
};
