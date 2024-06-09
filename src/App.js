import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Services from './Services';
import Contact from './Contact';
import FloatingButton from './FloatingButton';
import Map from './Map';
import Footer from './Footer';
import Home from './Home'; // Importa el nuevo componente

function App() {
  const [showHome, setShowHome] = useState(false);

  const handleHomeClick = () => {
    setShowHome(!showHome);
  };

  return (
    <div className="App">
      <Header  />
      <main>
        {showHome && <Home />}
        <Services onHomeClick={handleHomeClick} />
        <Contact />
        <Map />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;