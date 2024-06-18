import axios from 'axios';

const isDevelop = false;

const serverUrl = {
  local: 'https://localhost:3000',
  development:
    'https://gather-backend-rbbd-git-master-maksyms-projects-57747479.vercel.app',
};

const COOKIE =
  '_vercel_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJqZXhtTXNxTjBpcDRoUjNWRWROaVRlYU0iLCJpYXQiOjE3MTgyNzExODIsImF1ZCI6ImdhdGhlci1iYWNrZW5kLXJiYmQtbmhxZm85eTZsLW1ha3N5bXMtcHJvamVjdHMtNTc3NDc0NzkudmVyY2VsLmFwcCIsInVzZXJuYW1lIjoibWFrc2ltLWNyZWF0b3IiLCJzdWIiOiJzc28tcHJvdGVjdGlvbiJ9.A5ED0c_APIsoXs36PR8iH4K5MypBT7VWMgEoib7kw-c';

export const setAuthorizationToken = (token: string) => {
  baseApi.defaults.headers.common.authorization = `Bearer ${token}`;
};

const baseApi = axios.create({
  baseURL: isDevelop ? serverUrl.development : serverUrl.local,
  headers: isDevelop
    ? {
        Cookie: COOKIE,
      }
    : {},
});

export default baseApi;
