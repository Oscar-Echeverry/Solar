// src/pages/Ciberseguridad.js
import React, { useState } from 'react';
import '../App.css';

const Ciberseguridad = () => {
  const [incident, setIncident] = useState({
    name: '',
    email: '',
    description: '',
    severity: 'low', // Severa, moderado, bajo
    date: new Date().toLocaleString(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIncident({ ...incident, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reporte de incidente enviado:', incident);

    // Aquí podemos integrar lógica para enviar el incidente al backend, o procesarlo
    alert('Incidente reportado con éxito');
  };

  return (
    <div className="section cybersecurity">
      <div className="section-content">
        <h2>Reporte de Incidentes de Seguridad</h2>
        <p>Por favor, complete el formulario a continuación para reportar cualquier incidente relacionado con la ciberseguridad.</p>

        <form onSubmit={handleSubmit} className="incident-report-form">
          <label htmlFor="name">Nombre del Reportante:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={incident.name}
            onChange={handleInputChange}
            placeholder="Ingrese su nombre"
            required
          />

          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={incident.email}
            onChange={handleInputChange}
            placeholder="Ingrese su correo electrónico"
            required
          />

          <label htmlFor="description">Descripción del Incidente:</label>
          <textarea
            id="description"
            name="description"
            value={incident.description}
            onChange={handleInputChange}
            placeholder="Describa lo que ha ocurrido"
            required
          ></textarea>

          <label htmlFor="severity">Severidad del Incidente:</label>
          <select
            id="severity"
            name="severity"
            value={incident.severity}
            onChange={handleInputChange}
          >
            <option value="low">Bajo</option>
            <option value="medium">Moderado</option>
            <option value="high">Alto</option>
          </select>

          <button type="submit" className="btn btn-primary">Enviar Reporte</button>
        </form>

        {/* Simulación de la gestión de riesgos */}
        <div className="risk-management">
          <h3>Gestión de Riesgos</h3>
          <ul>
            <li><strong>Ciberataques:</strong> Identificación de posibles amenazas de accesos no autorizados a los sistemas solares.</li>
            <li><strong>Fallos Tecnológicos:</strong> Evaluación de posibles fallos en la infraestructura tecnológica de monitoreo.</li>
            <li><strong>Condiciones Climáticas Extremas:</strong> Implementación de protocolos para proteger equipos solares de desastres naturales.</li>
            <li><strong>Falta de Capacitación:</strong> Planificación de talleres de formación en ciberseguridad para el personal local.</li>
            <li><strong>Limitaciones de Recursos:</strong> Priorizar el uso de fondos para mantenimiento y mejora de los sistemas de protección.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ciberseguridad;
