import request from '@/apis/core/http';

/**
 * 用户登录
 * @param data
 */
export const login = async (model: LoginData) => {
  const { data } = await request.post<LoginResult>('/login', model);
  return data;
};

export const checkLogin = async () => {
  const { data } = await request.post<UserAccount>('/check_login');
  return data;
};
