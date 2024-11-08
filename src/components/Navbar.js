// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h3>Energia Sin Fronteras</h3>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>  {/* Redirige a Home */}
        <li><Link to="/instalacion">Instalación</Link></li>
        <li><Link to="/educacion">Educación</Link></li>
        <li><Link to="/ciberseguridad">Ciberseguridad</Link></li>
        <li><Link to="/monitoreo">Monitoreo</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
