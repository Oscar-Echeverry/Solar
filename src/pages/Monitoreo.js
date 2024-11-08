// src/pages/Monitoreo.js
import React, { useState } from 'react';
import './Monitoreo.css';

const Monitoreo = () => {
  const [systemsStatus, setSystemsStatus] = useState([
    {
      id: 1,
      location: 'Comunidad A',
      energyGenerated: 300, // kWh
      status: 'Operando correctamente',
      lastMaintenance: '2024-10-10',
    },
    {
      id: 2,
      location: 'Comunidad B',
      energyGenerated: 180, // kWh
      status: 'Requiere revisión',
      lastMaintenance: '2024-09-15',
    },
    {
      id: 3,
      location: 'Comunidad C',
      energyGenerated: 450, // kWh
      status: 'Operando correctamente',
      lastMaintenance: '2024-11-01',
    },
  ]);

  const handleMaintenance = (id) => {
    // Simula la actualización del estado de mantenimiento
    setSystemsStatus((prevStatus) =>
      prevStatus.map((system) =>
        system.id === id
          ? { ...system, status: 'En mantenimiento', lastMaintenance: new Date().toISOString().split('T')[0] }
          : system
      )
    );
  };

  return (
    <div className="monitoreo-section">
      <h2>Monitoreo y Mantenimiento de Sistemas Solares</h2>
      <p>Realiza un seguimiento del rendimiento de los sistemas solares instalados y realiza mantenimiento según sea necesario.</p>

      <table>
        <thead>
          <tr>
            <th>Ubicación</th>
            <th>Generación de Energía (kWh)</th>
            <th>Estado</th>
            <th>Último Mantenimiento</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {systemsStatus.map((system) => (
            <tr key={system.id}>
              <td>{system.location}</td>
              <td>{system.energyGenerated}</td>
              <td>{system.status}</td>
              <td>{system.lastMaintenance}</td>
              <td>
                {system.status !== 'En mantenimiento' ? (
                  <button onClick={() => handleMaintenance(system.id)} className="btn btn-maintenance">
                    Realizar Mantenimiento
                  </button>
                ) : (
                  <span>En mantenimiento</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Monitoreo;
