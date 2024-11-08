// src/pages/Instalacion.js
import React from 'react';
import '../App.css';

const Instalacion = () => {
  return (
    <div className="section installation">
      <div className="section-content">
        <h2>Instalación de Energía Solar</h2>
        <p style={{ color: 'white' }}>
          En Energía Sin Fronteras, nuestro proceso de instalación es seguro y eficiente, diseñado para proporcionar energía a las comunidades sin acceso a la red eléctrica.
        </p>
        <ul>
          <li>
            <div className="icon">🔌</div>
            <h3>Evaluación del Sitio</h3>
            <p>
              Realizamos un análisis completo del sitio para garantizar que el sistema solar se adapte a las necesidades y condiciones de la ubicación.
            </p>
          </li>
          <li>
            <div className="icon">🛠️</div>
            <h3>Instalación de Paneles</h3>
            <p>
              Instalamos paneles solares de alta calidad, asegurando que estén correctamente orientados y fijados para un rendimiento óptimo.
            </p>
          </li>
          <li>
            <div className="icon">⚙️</div>
            <h3>Configuración del Sistema</h3>
            <p>
              Configuramos los inversores, baterías y otros componentes necesarios para asegurar que el sistema funcione de manera óptima.
            </p>
          </li>
          <li>
            <div className="icon">📈</div>
            <h3>Pruebas y Monitoreo</h3>
            <p>
              Realizamos pruebas exhaustivas para verificar la eficiencia del sistema y lo conectamos a nuestro sistema de monitoreo para un seguimiento continuo.
            </p>
          </li>
        </ul>
        <a href="/contacto" className="btn btn-primary">Contáctanos para Más Información</a>
      </div>
    </div>
  );
};

export default Instalacion;
