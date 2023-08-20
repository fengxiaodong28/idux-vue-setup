// 专门处理失败状态码的拦截器
import type { AxiosError } from 'axios';
import { showErrorMessgae } from '@utils';

const errorStatusReject = (error: AxiosError): Promise<AxiosError> => {
  showErrorMessgae(error);
  return Promise.reject(error);
};

export default errorStatusReject;
