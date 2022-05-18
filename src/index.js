import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Info from './Info';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

