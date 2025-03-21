// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import NotFound from './components/Pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root element

root.render(
    <React.StrictMode>
        <Router>
        <Routes>
            {/* Route for homepage */}
            <Route path="/" element={<Home />} />

            {/* Route for products page */}
            <Route path="/products" element={<Products />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
    </React.StrictMode>
);
