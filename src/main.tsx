import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApiProvider } from './utils/apiContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApiProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApiProvider>,
)
