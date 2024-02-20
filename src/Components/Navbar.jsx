// Navbar.jsx
import React from 'react';
import '../css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar__logo">
        <a href="https://vitejs.dev/" target="_blank">
            <img src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" />
        </a>
        <a className='no-style-link' href="http://localhost:5173">
            <span className='index-top'>pablo san miguel</span>
        </a>
      </div>

      <div className="navbar__links">
        <NavLink to="/aboutme" className="navbar__link" activeClassName="active">About Me</NavLink>
        <NavLink to="/projects" className="navbar__link" activeClassName="active">Projects</NavLink>
        <NavLink to="/contact" className="navbar__link" activeClassName="active">Contact</NavLink>
      </div>

    </nav>
  );
};

export default Navbar;