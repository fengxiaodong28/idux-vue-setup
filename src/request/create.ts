import axios, {
  type AxiosRequestConfig,
  type AxiosError,
  type AxiosResponse
} from 'axios';
import { requestInterceptors, responseiInterceptors } from './interceptors';

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 1000 * 10 //10s超时
});

// 请求拦截器
requestInterceptors?.forEach((interceptors) => {
  request.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return interceptors?.resolve(config);
    },
    (error: AxiosError) => {
      return interceptors?.reject(error);
    }
  );
});

// 响应拦截器
responseiInterceptors?.forEach((interceptors) => {
  request.interceptors.response.use(
    (response: AxiosResponse) => {
      return interceptors?.resolve(response);
    },
    (error: AxiosError) => {
      return interceptors?.reject(error);
    }
  );
});

export default request;
