import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import'./tailwind.css'
import'./tailwind.css'
import{BrowserRouter}from'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Para segunda pagina 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
 );