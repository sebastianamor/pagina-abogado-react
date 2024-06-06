import React from 'react';
import './App.css';
import Header from './Header';
import Services from './Services';
import Contact from './Contact';
import FloatingButton from './FloatingButton';
import Map from './Map';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Services />
        <Contact />
        <Map />
      </main>
      <FloatingButton />
    </div>
  );
}

export default App;
