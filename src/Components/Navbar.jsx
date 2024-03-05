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
        <NavLink to="/aboutme" className="navbar__link" activeClassName="active" title='about me'>about me</NavLink>
        <NavLink to="/blog" className="navbar__link" activeClassName="active" title='blog'>blog</NavLink>
        <NavLink to="/contact" className="navbar__link" activeClassName="active" title='contact'>contact</NavLink>
      </div>

    </nav>
  );
};

export default Navbar;