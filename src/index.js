import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './Css/base/media.css';
import './Css/components/alerts.css';
import './Css/components/button.css';
import './Css/components/form.css';
import './Css/components/google.css';
import './Css/components/loading.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

