import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';


// imports
import Navbar from './components/Site/Navbar.jsx';
import Section_1 from './components/Sections/Homepage/Section-1';
import Section_2 from './components/Sections/Homepage/Section-2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Section_1 />
    <Section_2 />
  </React.StrictMode>
);
