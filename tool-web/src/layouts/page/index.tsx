import { Layout } from 'antd';
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';

const PageLayout: React.FC = () => {
  return (
    <>
      <ScrollRestoration />
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout hasSider>
          <Sidebar />
          <Layout.Content style={{ padding: 32 }}>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default PageLayout;
