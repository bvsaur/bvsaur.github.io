import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// i18n
import './i18n'
import ModalProvider from './context/ModalContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
)
