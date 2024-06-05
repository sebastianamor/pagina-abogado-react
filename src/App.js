import React from 'react';
import './App.css';
import Header from './Header';
import Services from './Services';
import Contact from './Contact';
import FloatingButton from './FloatingButton'; // Importa el nuevo componente

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Services />
        <Contact />
      </main>
      <FloatingButton /> {/* Agrega el botón flotante aquí */}
    </div>
  );
}

export default App;

