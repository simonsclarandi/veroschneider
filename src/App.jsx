import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Importamos los componentes que vamos a crear
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Equipo from './components/Equipo';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';

function App() {
  // El único estado global que necesitamos aquí es el del modal
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Servicios onSelectService={setSelectedService} />
      <Equipo />
      <Contacto />
      <Footer />

      {/* Renderizado condicional del modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
}

export default App;