import { IEndpoint } from './types';

const endpoints: { [key: string]: IEndpoint } = {
  authorityLogin: {
    path: { v1: 'v1/auth/authority/login' },
    method: 'POST',
    private: true,
  },
  authorityRefresh: {
    path: { v1: 'v1/auth/authority/refresh' },
    method: 'POST',
    private: true,
  },
  authorityAccessGenerate: {
    path: { v1: 'v1/authority/generate-credentials' },
    method: 'POST',
    private: true,
  },
};
export const apiBaseUrl = 'http://127.0.0.1:3344/api';

export default endpoints;
