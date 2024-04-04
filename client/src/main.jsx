import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { OrderConextProvide } from './context/OrderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderConextProvide>
      <App />
    </OrderConextProvide>
  </React.StrictMode>,
)
