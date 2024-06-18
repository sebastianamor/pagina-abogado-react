import React from 'react';
import './Header.css';
import profileImag from './imagenes/logo emp.jpg'; // Ajusta la ruta según la ubicación de tu imagen

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>Toledo & Cia
          </h1>
          <p>Ofreciendo servicios legales de calidad</p>
        </div>
        <img src={profileImag} alt="Perfil" className="profile-imag" />
      </div>
      
    </header>
  );
}

export default Header;