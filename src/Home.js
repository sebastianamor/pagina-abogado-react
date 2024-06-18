import React from 'react';
import './Home.css';
import profileImag from './imagenes/toledo.jpg';
import franLizama from './imagenes/franlizama.jpg';
import ale from './imagenes/ale reyes.jpg';

// Asegúrate de tener una imagen en esta ruta
import { FcDiploma1 } from "react-icons/fc";

function Home() {
  return (
    <section className="home">
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
      <div className="home-item">
        <img src={profileImag} alt="Perfil" className="profile-image" />
        <div className="home-text">
          <div className="inicio" >
      </div>
      <div><h2>Defensor Penal</h2>
      <h1>Abogado Miguel Toledo</h1></div>
          <ul>
          <li><FcDiploma1 /> Defensor Penal</li>
          <li><FcDiploma1 /> Abogado Colegiado</li>

<li><FcDiploma1 /> Director Académico del Centro de Capacitación "Academia Internacional de Litigación"</li>
<li><FcDiploma1 /> Curso internacional de litigación sobre técnicas avanzadas del contraexamne,  California Western School Of Law, de EE.UU.</li>
<li><FcDiploma1 /> Certificado por la alianza interamericana de Abogacía oral de EE.UU.</li>
<li><FcDiploma1 /> Curso Criminalistica, Certificado por Criminalistic and Applied Criminology International Academy del Perú.</li>
<li><FcDiploma1 /> Certificación de la Asociación Chile de Seguridad (ACHS) como relator de Responsabilidad Legal.</li>
<li><FcDiploma1 /> Diplomado de Litigación Derecho de Familia de la Pontificia Universidad Católica de Chile.</li>
<li><FcDiploma1 /> Diplomado de Litigación de Derecho Penal de la Pontificia Universidad Católica de Chile.</li>
<li><FcDiploma1 /> Diplomado de Litigación Delitos Tributarios de la Pontifica Universidad Católica de Chile.</li>
<li><FcDiploma1 /> Taller Internacional de Destreza en Litigación Oral, de la Alianza Interamericana de Abogacía Oral de EE.UU.</li>
<li><FcDiploma1 /> Taller de Preparación de los Testigos, de la Alianza Interamericana de Abogacía Oral de EE.UU.</li>
<li><FcDiploma1 /> Taller de la Teroría del Caso de la Alianza Interamericana de Abogacía Oral de EE.UU.</li>
<li><FcDiploma1 /> Taller de Habilidades a la Hora de Litigar, de la Alianza Interamericana de Abogacía Oral EE.UU.</li>
<li><FcDiploma1 /> Diplomado Derecho Penal Universidad Pompeu Fabra, De España.</li>
<li><FcDiploma1 /> Diplomado Abuso Sexual y Violencia Habitual Infante Juvenil U.A.</li>
<li><FcDiploma1 /> C. Magister En Derecho Penal Universidad de Talca.</li>
<li><FcDiploma1 /> Magister en Ciencias Penales Universidad Pompe Fabra, De España.</li>
          </ul>
          </div>
          <hr></hr>
          <div className="home-item">
          <img src={franLizama} alt="Perfil 2" className="profile-image" />
          <div className="home-text"></div>
          <p>
            <h2>Francisco Eduardo Lizama Acevedo (Abogado Asociado)</h2>
              <p>Abogado por la Excelentísima Corte Suprema</p>
             <h1>Antecedentes Académicos</h1>
             <p>Diplomado en Derecho Penal Sustantivo por la Universidad de Talca.
                Magíster en Derecho Penal Universidad de Talca
                Magíster en Derecho Penal Universitat Pompeau Fabra de España</p>
              <h1>Antecedentes Laborales</h1>
              <p>
                <ul>
              <li>-Tramitación y alegatos ante la Excelentísima Corte Suprema e Ilustrísima Corte de
               Apelaciones de Santiago.</li>
              <li>- Tramitación de causas penales tanto en calidad de querellante como de defensor, en
              todo tipo de procedimientos: Juicios ordinarios, procedimientos abreviados, juicios
              simplificados, audiencias de control de detención.</li>
              <li>- Tramitación de causas civiles, procedimientos ordinarios, sumarios, cobranzas
              Judiciales y tercerías.</li>
              <li>- Tramitación de causas de policía local, especializándose en accidentes de tránsito y
              asuntos de OS10</li>
              <li>-Oficial 4º grado XVI en el Juzgado de Garantía de Coquimbo.</li>
              </ul> </p>
          </p>
          <div className="home-item">
        <img src={ale} alt="Perfil 2" className="profile-image" />
        <div className="home-text">
          <h2>Sra. Alejandra Reyes López 
            (Jefa Departamento de Peritaje )</h2>
          <h1>Psicóloga Clínica Perito Forense</h1>
          <p>
            Ofrecemos una amplia gama de servicios legales para satisfacer las necesidades de nuestros clientes:
          </p>
          <ul>
            <li>Asesoría legal</li>
            <li>Representación en juicios</li>
            <li>Consultoría en derecho corporativo</li>
            <li>Redacción de contratos</li>
          </ul>
        </div>
          </div>
        </div>
       </div>
    </section>
  );
}

export default Home;
