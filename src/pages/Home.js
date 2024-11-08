import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Bienvenidos a Energía Sin Fronteras</h1>
        <p>
          Energía Sin Fronteras es una iniciativa para proporcionar energía solar a comunidades sin acceso a la red eléctrica.
        </p>
        <div className="hero-buttons">
          <Link to="/instalacion" className="btn btn-primary">Ver Instalación</Link>
          <Link to="/educacion" className="btn btn">Aprender Más</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
