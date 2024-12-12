import request from '@/apis/core/http';

/**  获取用户列表 */
export const searchUsers = async (params?: SearchParams): Promise<SearchResult<UserAccount>> => {
  const { data } = await request.get('/user/search', { params });
  return data;
};

export const addUser = async (model: UserFormModel): Promise<string> => {
  const { data } = await request.post('/user', model);
  return data;
};

export const modifyUser = async (uid: string, model: UserFormModel): Promise<{ success: boolean }> => {
  const { data } = await request.put(`/user/${uid}`, model);
  return data;
};

export const modifyUserStatus = async (uid: string, status: number): Promise<{ success: boolean }> => {
  const { data } = await request.patch(`/user/status/${uid}/${status === 1 ? 0 : 1}`);
  return data;
};

export const deleteUser = async (uid: string): Promise<{ success: boolean }> => {
  const { data } = await request.delete(`/user/${uid}`);
  return data;
};
