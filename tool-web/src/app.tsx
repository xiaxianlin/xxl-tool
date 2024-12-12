import '@/assets/styles/global.css';
import PageLoading from '@/components/app/page-loading';
import theme from '@/config/theme';
import { GlobalStyles } from '@/global';
import { router } from '@/router';
import { ConfigProvider } from 'antd';
import { StyleProvider, ThemeProvider } from 'antd-style';
import zhCN from 'antd/locale/zh_CN';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import LayoutLoading from './components/app/layout-loading';
import { useAppModel } from './models/app';

const AppContainer = () => {
  const { loading } = useAppModel();

  return loading ? <LayoutLoading /> : <RouterProvider router={router} fallbackElement={<PageLoading />} />;
};

const App: React.FC = () => {
  const { themeMode } = useAppModel();

  return (
    <StyleProvider speedy prefix="css">
      <ConfigProvider theme={theme} locale={zhCN}>
        <ThemeProvider<AppToken>
          themeMode={themeMode}
          customToken={{ headerHeight: 64 }}
          theme={() => ({ components: { Layout: { headerHeight: 64 } } })}
        >
          <GlobalStyles />
          <AppContainer />
        </ThemeProvider>
      </ConfigProvider>
    </StyleProvider>
  );
};

export default App;
