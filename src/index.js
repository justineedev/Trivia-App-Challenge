import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

//using cors-anywhere proxy due to CORS issue on localhost
axios.defaults.baseURL = `https://corsproxy.io/?${process.env.REACT_APP_AXIOS_BASE_URL}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
