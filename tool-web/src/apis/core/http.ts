import { appendPending, removePending } from '@/apis/core/pending';
import { router } from '@/router';
import { LOGIN_ROUTE } from '@/router/routes';
import { delToken, getToken } from '@/utils/token.ts';
import { message } from 'antd';
import axios, { type AxiosResponse } from 'axios';

/**
 * 请求器
 */
const request = axios.create({
  baseURL: '/api',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    appendPending(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  <T extends HttpResponse>(response: AxiosResponse<T>): T => {
    removePending(response.config);
    if (response.data?.status === 401) {
      delToken();
      router.navigate(LOGIN_ROUTE);
    }
    if (response.data?.status !== 0) {
      throw response.data;
    }
    return response.data;
  },
  (error) => {
    if (error.config) {
      removePending(error.config);
    }
    return Promise.reject({ message: error.message });
  },
);

request.interceptors.response.use(
  <T>(response: T): T => response,
  (error) => {
    message.error(error.message);
    return Promise.reject(error);
  },
);

export default request;
