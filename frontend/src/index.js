import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Navbar from './components/Site/Navbar.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
