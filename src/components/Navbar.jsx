import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode.js"
import {Link, Redirect} from "react-router-dom"

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to="/">  <button>Home </button></Link>
    <Link to="/2">  <button>Page 2 </button></Link>            
                            
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
