// 请求错误时消息提示

import type { AxiosError } from 'axios';
import { Message } from './iduxProviders';

const showErrorMessgae = (error: AxiosError): void => {
  const { response } = error;
  if (!response) {
    return;
  }
  const { status } = response;
  switch (status) {
    case 401:
      Message?.warning('账号没有权限，无法访问资源');
      break;
    case 403:
      Message?.warning('请求的资源无法访问');
      break;
    case 404:
      Message?.error('请求的资源不存在');
      break;
    case 500:
      Message?.error('网络错误，请重试');
      break;
    default:
      Message?.error('网络错误，请重试');
      break;
  }
};

export { showErrorMessgae };
