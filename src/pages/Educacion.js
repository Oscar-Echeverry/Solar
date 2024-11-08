// src/pages/Educacion.js
import React from 'react';
import '../App.css';

const Educacion = () => {
  return (
    <div className="section education">
      <div className="section-content">
        <h2>Programas de Formación en Energía Solar</h2>
        <p style={{ color: 'blue' }}>
        Nuestros cursos están diseñados para ofrecer una comprensión integral de la energía solar, desde los fundamentos hasta la implementación práctica. ¡Aprende a instalar y mantener sistemas solares en comunidades!
        </p>
        <div className="courses-container">
          <div className="course-card">
            <div className="course-icon">📘</div>
            <h3>Fundamentos de Energía Solar</h3>
            <p>
              Un curso introductorio que cubre los principios básicos de la energía solar, su funcionamiento, y la importancia de su uso en el futuro energético sostenible.
            </p>
            <a href="/contacto" className="btn btn-primary">Inscribirse</a>
          </div>

          <div className="course-card">
            <div className="course-icon">⚡</div>
            <h3>Instalación de Paneles Solares</h3>
            <p>
              Aprende los aspectos clave para la instalación de sistemas solares fotovoltaicos, incluyendo la selección de paneles, estructuras, y su conexión a la red eléctrica.
            </p>
            <a href="/contacto" className="btn btn-primary">Inscribirse</a>
          </div>

          <div className="course-card">
            <div className="course-icon">🔧</div>
            <h3>Mantenimiento y Reparación</h3>
            <p>
              Formación práctica sobre cómo mantener y reparar sistemas solares. Aprende a diagnosticar fallos comunes y realizar ajustes para maximizar la eficiencia del sistema.
            </p>
            <a href="/contacto" className="btn btn-primary">Inscribirse</a>
          </div>

          <div className="course-card">
            <div className="course-icon">🌍</div>
            <h3>Impacto Social de la Energía Solar</h3>
            <p>
              Curso centrado en cómo la energía solar puede cambiar las comunidades, promover la sostenibilidad y reducir la huella de carbono en zonas rurales y urbanas.
            </p>
            <a href="/contacto" className="btn btn-primary">Inscribirse</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educacion;
