import request from '@/apis/core/http';

/**  获取用户列表 */
export const getAllMenus = async (): Promise<Menu[]> => {
  const { data } = await request.get('/menu');
  return data;
};

export const addMenu = async (model: MenuFormModel): Promise<string> => {
  const { data } = await request.post('/menu', model);
  return data;
};

export const modifyMenu = async (model: MenuFormModel): Promise<{ success: boolean }> => {
  const { data } = await request.put(`/menu`, model);
  return data;
};

export const deleteMenu = async (key: string): Promise<{ success: boolean }> => {
  const { data } = await request.delete(`/menu/${key}`);
  return data;
};
