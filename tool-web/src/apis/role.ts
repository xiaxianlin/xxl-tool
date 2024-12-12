import request from '@/apis/core/http';

/**  获取用户列表 */
export const getAllRoles = async (): Promise<Role[]> => {
  const { data } = await request.get('/role');
  return data;
};

export const addRole = async (model: RoleFormModel): Promise<string> => {
  const { data } = await request.post('/role', model);
  return data;
};

export const modifyRole = async (model: RoleFormModel): Promise<{ success: boolean }> => {
  const { data } = await request.put(`/role`, model);
  return data;
};

export const deleteRole = async (key: string): Promise<{ success: boolean }> => {
  const { data } = await request.delete(`/role/${key}`);
  return data;
};
