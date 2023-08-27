import React from 'react';
import { ConfigProvider, Layout, theme } from 'antd'
import MainPage from './pages/mainPage';
import './App.css';
const { Footer } = Layout;

const App: React.FC = () => {

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm, token: { colorPrimary: '#00b96b' } }}>
      <Layout className="layout" style={{ width: '100vw', height: '100vh' }}>
        <MainPage />
        <Footer style={{ textAlign: 'center' }}>Joaojhgs ©2023</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;