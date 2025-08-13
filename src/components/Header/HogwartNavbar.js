import React from 'react';
import './HogwartNavbar.css';
import { Link } from 'react-router-dom'; 

const HogwartNavbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
    </nav>
  );
}


export default HogwartNavbar;
