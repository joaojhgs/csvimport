import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <div className="App">
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      </ConfigProvider>
    </div>
  );
}

export default App;
