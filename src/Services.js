import React from 'react';
import './Services.css';

function Services({onHomeClick}){
  return (
    <section className="services">
      <h2>Servicios</h2>
      <div className="services-buttons">
        <button>Asesoría legal</button>
        <button>Representación en juicios</button>
        <button>Consultoría en derecho corporativo</button>
        <button>Redacción de contratos</button>
        <button className="home-button" onClick={onHomeClick}>Inicio</button>
      </div>
    </section>
  );
}

export default Services;
