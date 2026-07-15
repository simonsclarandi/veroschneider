import React from 'react';

const Hero = () => {
  return (
    <section className="vero-hero container-fluid">
      <div className="container text-center position-relative" style={{ zIndex: 10 }}>
        <h1 className="vero-title display-3 mb-4">Centro Estética Integral</h1>
        <p className="lead mb-5 fw-semibold">Bienestar y estética integral con tecnología de vanguardia.</p>
        <a href="#contacto" className="btn vero-btn-nude btn-lg">
          Reservar Turno
        </a>
      </div>
    </section>
  );
};

export default Hero;