import React from 'react'
import { createContext } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const shincodeInfo = {
  name: "shincode",
  age: 24,
};

const ShinCodeContext = createContext(shincodeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  /**
   * ＜useEffectについて＞
   *  strictmodeでは厳格に実行するためuseEffectが2回発火する
   *  本番モードでは1回のみ
   * ＜useContextについて＞
   * Providerで囲われた中でデータを使うことができる
   */
  <ShinCodeContext.Provider value={shincodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShinCodeContext.Provider>
);

export default ShinCodeContext;
