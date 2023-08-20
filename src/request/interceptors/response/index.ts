// 响应拦截器

import type { AxiosResponse } from 'axios';
import errorStatusReject from './errorStatus';

const resolve = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const responseiInterceptors = [
  {
    resolve,
    reject: errorStatusReject
  }
];

export default responseiInterceptors;
