import { getAppConfigs } from '@/apis/app';
import { checkLogin } from '@/apis/auth';
import { useRequest } from 'ahooks';
import { ThemeMode } from 'antd-style';
import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useAppContainer = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const { loading, data } = useRequest(() => Promise.all([checkLogin(), getAppConfigs()]));

  const [user, configs] = data || [];

  return {
    loading,
    themeMode,
    user,
    configs,
    setThemeMode,
  };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
