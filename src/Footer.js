import React from 'react';
import './Footer.css';
import { FcPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <h3>Sobre Nosotros</h3>
          <p>
            Nuestros abogados penalistas tienen un alto grado de especialización en el ámbito del Derecho Penal, y pueden prestarle la asistencia y el asesoramiento necesario para velar por sus intereses en todos los delitos contemplados por el Código Penal de Chile.
          </p>
        </div>
        <div className="contact-info">
          <h3>Contacto</h3>
          <ul>
            <li><FcPhone /> +569 92930308:</li>
            <li> <FcAddressBook /> mgtoledo@uc.cl </li>
            <li><FcDepartment /> Huérfano N°1147, Of.1025, Santiago Centro, Chile</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

