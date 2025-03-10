import React from 'react';
import './App.css';

const App = () => {
  return (
    <div id="navbar">
        <a href="/" id="logo">Navbar</a>

        <div className="text" id="navbar-right">
            <a>Home</a>
            <a>About</a>
            <a>Store</a>
            <a>Contact</a>
        </div>
    </div>
  );
};

export default App;
