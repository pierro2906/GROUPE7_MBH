import axios from 'axios';
import { apiBaseUrl } from '../api/endpoints';
import requestInterceptor from './requestInterceptors';
import { responseErrorInterceptor } from './responseInterceptors';

function createAxiosInstance() {
  const myAxios = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: true,
    headers: {
      'Content-type': 'application/json',
    },
  });

  myAxios.interceptors.request.use(requestInterceptor, async (error) => {
    return Promise.reject(error);
  });

  myAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      return responseErrorInterceptor(error, myAxios);
    },
  );

  return myAxios;
}

export default createAxiosInstance;
