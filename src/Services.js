import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [message, setMessage] = useState('');

  const handleButtonClick = (service) => {
    let msg = '';
    switch (service) {
      case 'asesoria':
      msg = <div><p><h1>Derecho Penal</h1></p>
            <p>Dppj se especializa en litigios de alta complejidad a nivel nacional e internacional. El estudio
               otorga asesoría especializada en delitos económicos, tributarios, violaciones a leyes anti-
               corrupción, lavado de activos, e infracciones a leyes de propiedad industrial e intelectual, entre
               otros. </p>
               <p>
               contamos con un equipo penal multidisciplinario, lo que le permite representar a imputados y
               víctimas, desde una etapa temprana, en materia de prevención y análisis de riesgos, así como
               con una adecuada planificación, proceso de investigación interna y reacción estratégica frente
               a una contingencia penal, representando los intereses de los clientes ante instancias
               administrativas y judiciales a lo largo de todo el territorio nacional. </p></div>
            
        break;
      case 'representacion':
        msg = <div><p><h1>Derecho Civil</h1></p>
               <p>Civil, brindamos un completo apoyo a demandantes o demandados en sus causas,
                proporcionando una solución rápida y oportuna a sus problemas y necesidades.
                Juicios de Arrendamiento </p>
                <ul>
                  <li>Prescripción de Deudas</li>
                  <li>Precarios
                  Cambio de nombre</li>
                  <li>Cobro de Honorarios</li>
                  <li>Indemnización de Perjuicios
                      Responsabilidad Extracontractual</li>
                      <li>Asesoría Inmobiliaria</li>
                  </ul></div>
        break;
      case 'consultoria':
        msg = 'Consultoría especializada en derecho corporativo';
        break;
      case 'redaccion':
        msg = <div><p><h1>Derecho Laboral</h1></p>
               <p>En materia sobre derecho laboral, contamos con amplia experiencia en procesos de
                  contratación y terminación de trabajadores (individuales y masivas), paquetes de
                  compensación (incluyendo planes de acciones) cumplimiento legal, subcontrataciones,
                  políticas corporativas, asuntos laborales derivados y/o asociados a fusiones y adquisiciones,
                  investigaciones internas, asuntos de seguridad social e impuestos a los trabajadores.
                  participamos activamente en procesos de negociación colectiva en empresas de diferentes
                  rubros y también asesora a clientes en juicios y reclamaciones laborales, incluyendo litigios
                  y procedimientos administrativos derivados de accidentes laborales y enfermedades 
                  profesionales.
                  En materia de subcontratación de servicios, asesoramos permanentemente a empresas
                  subcontratistas y propietarios en proyectos relativos a estas materias, identificando y
                  mitigando riesgos y responsabilidades legales asociadas.</p>
                  <ul>
                    <li>Asesoría Laboral a Empresas</li>
                    <li>cobranza laboral y previsional</li>
                    <li>Abogados Trabajadores</li>
                    <li>Despido injustificado</li>
                    <li>Accidente laboral y enfermedad Profesional</li>
                    <li>Tutela Laboral</li></ul></div>
        break;
      default:
        msg = '';
    }
    setMessage(msg);
  };

  return (
    <section className="services">
      <h2>Servicios</h2>
      <div className="service-buttons">
        <button onClick={() => handleButtonClick('asesoria')}>Derecho Penal</button>
        <button onClick={() => handleButtonClick('representacion')}>Derecho Civil</button>
        <button onClick={() => handleButtonClick('consultoria')}>Derecho de Familia</button>
        <button onClick={() => handleButtonClick('redaccion')}>Derecho Laboral</button>
      </div>
      {message && <p className="service-message">{message}</p>}
    </section>
  );
}

export default Services;