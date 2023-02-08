import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /**
   * ＜useEffectについて＞
   *  strictmodeでは厳格に実行するためuseEffectが2回発火する
   *  本番モードでは1回のみ
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
