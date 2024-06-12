import React from 'react';
import './Home.css';
import profileImag from './imagenes/toledo.jpg'; // Asegúrate de tener una imagen en esta ruta

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img src={profileImag} alt="Perfil" className="profile-imag" />
        <div className="home-text">
        <h2>Inicio</h2>
      <p>
        Somos un Estudio Jurídico especialista principalmente en el Área de Derecho Penal, pero contamos
        con diversos asociados especializados en Familia e Infancia, Responsabilidad Penal Adolescente,
        Derecho Civil y del Trabajo. Y para lograr las mejores soluciones legales, estos han sido formados
        en prestigiosas universidades a nivel nacional como internacional, entre ellas se encuentra la
        Pontificia Universidad Católica de Chile y la Universitat Pompeu Fabra de Barcelona, España.
        Nuestros abogados se enfocan en un servicio legal humano, cercano y de alto nivel, donde la
        relación de confianza con nuestros clientes es la base de todo; además contamos con Trabajadores
        Sociales y Psicólogos, con el fin de atender de manera eficaz y personalizada los requerimientos de
        cada uno de nuestros clientes.
      </p>
      <hr></hr>
      <div><h2>Defensor Penal</h2>
      <h1>Abogado Miguel Toledo</h1></div>
          <ul>
          <li>Defensor Penal</li>
          <li>Abogado Colegiado</li>

<li>Director Académico del Centro de Capacitación "Academia Internacional de Litigación"</li>
<li>Curso internacional de litigación sobre técnicas avanzadas del contraexamne,  California Western School Of Law, de EE.UU.</li>
<li>Certificado por la alianza interamericana de Abogacía oral de EE.UU.</li>
<li>Curso Criminalistica, Certificado por Criminalistic and Applied Criminology International Academy del Perú.</li>
<li>Certificación de la Asociación Chile de Seguridad (ACHS) como relator de Responsabilidad Legal.</li>
<li>Diplomado de Litigación Derecho de Familia de la Pontificia Universidad Católica de Chile.</li>
<li>Diplomado de Litigación de Derecho Penal de la Pontificia Universidad Católica de Chile.</li>
<li>Diplomado de Litigación Delitos Tributarios de la Pontifica Universidad Católica de Chile.</li>
<li>Taller Internacional de Destreza en Litigación Oral, de la Alianza Interamericana de Abogacía Oral de EE.UU.</li>
<li>Taller de Preparación de los Testigos, de la Alianza Interamericana de Abogacía Oral de EE.UU.</li>
<li>Taller de la Teroría del Caso de la Alianza Interamericana de Abogacía Oral de EE.UU.</li>
<li>Taller de Habilidades a la Hora de Litigar, de la Alianza Interamericana de Abogacía Oral EE.UU.</li>
<li>Diplomado Derecho Penal Universidad Pompeu Fabra, De España.</li>
<li>Diplomado Abuso Sexual y Violencia Habitual Infante Juvenil U.A.</li>
<li>C. Magister En Derecho Penal Universidad de Talca.</li>
<li>Magister en Ciencias Penales Universidad Pompe Fabra, De España.</li>
          </ul>
          <p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
