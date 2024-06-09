import React from 'react';
import './Header.css';
import profileImage from './imagenes/logo emp.jpg'; // Ajusta la ruta según la ubicación de tu imagen

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>Toledo & Cia
          </h1>
          <p>Ofreciendo servicios legales de calidad</p>
        </div>
        <img src={profileImage} alt="Perfil" className="profile-image" />
      </div>
      
    </header>
  );
}

export default Header;