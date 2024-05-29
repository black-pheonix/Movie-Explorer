import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchProvider from './context/Search.jsx'
import NotificationProvider from './context/Notification.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider>
      <SearchProvider >
        <App />
      </SearchProvider>
    </NotificationProvider>
  </React.StrictMode>,
)
