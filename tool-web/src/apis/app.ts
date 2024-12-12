import request from '@/apis/core/http';

export const getAppConfigs = async () => {
  const { data } = await request.get<AppConfigs>('/configs');
  return data;
};
