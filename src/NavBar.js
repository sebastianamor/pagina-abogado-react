import React, { useState } from 'react';
import './NavBar.css';

function NavBar({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="toggle-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><button onClick={() => onSelect('home')}>Inicio</button></li>
        <li><button onClick={() => onSelect('services')}>Servicios</button></li>
        <li><button onClick={() => onSelect('contact')}>Contacto</button></li>
        <li><button onClick={() => onSelect('location')}>Ubicación</button></li>
        <li><button onClick={() => onSelect('blog')}>Blog</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;
