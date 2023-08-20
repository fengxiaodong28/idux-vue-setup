import type { AxiosInstance } from 'axios';

let request: AxiosInstance;

const initAxios = (curRequest: AxiosInstance) => {
  request = curRequest;
};

export { request, initAxios };
