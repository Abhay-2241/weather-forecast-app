import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Weatherprovider } from './context/Weather';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Weatherprovider><App /></Weatherprovider>
    
      
    
    
  </React.StrictMode>,
);
