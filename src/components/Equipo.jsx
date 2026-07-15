import React from 'react';

const Equipo = () => {
  const staff = {
    name: "Vero Schneider",
    specialty: "Cosmiatra Senior",
    bio: "Más de 10 años dedicados a la salud y estética de tu piel, combinando tecnología de vanguardia con un trato personalizado.",
    image: "/Vero.jpg" 
  };

  return (
    <section id="equipo" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-center">
            <article className="card vero-card p-4 border-0 shadow-sm">
              <div className="mb-4">
                <img 
                  src={staff.image} 
                  alt={staff.name} 
                  className="rounded-circle border border-4 border-white shadow-sm"
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
              </div>
              <h3 className="vero-title h2">{staff.name}</h3>
              <p className="text-uppercase fw-bold small mb-3" style={{ color: '#D4C4B7', letterSpacing: '2px' }}>
                {staff.specialty}
              </p>
              <p className="text-muted fst-italic px-3">{staff.bio}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;