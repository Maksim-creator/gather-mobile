import baseApi from '../index.ts';

export default {
  getAllActivities: () => baseApi.get('/activities'),
};
