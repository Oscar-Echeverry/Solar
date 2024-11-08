// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';  // Importa el componente Home
import Instalacion from './pages/Instalacion';
import Educacion from './pages/Educacion';
import Ciberseguridad from './pages/Ciberseguridad';
import Monitoreo from './pages/Monitoreo';

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          {/* La Home debe ser la página principal */}
          <Route path="/" element={<Home />} />
          <Route path="/instalacion" element={<Instalacion />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/ciberseguridad" element={<Ciberseguridad />} />
          <Route path="/monitoreo" element={<Monitoreo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
