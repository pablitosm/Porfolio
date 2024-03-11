// Navbar.jsx
import React from 'react';
import '../css/Navbar.css';
import { NavLink, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">

      <div className="navbar__logo">
        <Link to="/">
            <img className='image-nav' src={location.pathname === '/' ? "https://i.imgur.com/bQWccHv.png" : "https://i.imgur.com/Uj6pNyc.png"} alt="Logo" title='main page' />
        </Link>
      </div>
      
      <div className="navbar__links">
        <a href="../../files/CV-Pablo-San-Miguel.pdf" className="navbar__link" title='download cv' locale="false" target="_blank" rel="noopener noreferrer">cv</a>
        <NavLink to="/blog" className="navbar__link" title='blog'>blog</NavLink>
      </div>

    </nav>
  );
};

export default Navbar;