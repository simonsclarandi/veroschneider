import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useState, useEffect } from 'react';

function App() {

  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola Vero, soy ${formData.name}. Quiero consultar por: ${formData.service}. Mensaje: ${formData.message}`;
    window.open(`https://wa.me/5493515745470?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const staff = {
    name: "Vero Schneider",
    specialty: "Cosmiatra Senior",
    bio: "Más de 10 años dedicados a la salud y estética de tu piel, combinando tecnología de vanguardia con un trato personalizado.",
    image: "/LogoVero.png" // Asegúrate de tener esta foto en tu carpeta public/
  };

  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">

      {/* Navbar */}                                                                          
      <nav className="navbar navbar-expand-lg navbar-dark vero-btn-nude bg-primary fixed-top shadow-sm navbar-custom">                                                                               
        <div className="container container-custom ">
          <img 
            src={staff.image} 
            alt={staff.name} 
            className="rounded-circle border border-2 border-white shadow-sm"
            style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '10px' }}
          />                                          
          <a className="navbar-brand fw-bold navbar-brand-custom" href="#">Vero Schneider Estética</a>                                                                                  
          <button                                                                             
            className="navbar-toggler vero-btn-nude"                                                        
            type="button"                                                                     
            data-bs-toggle="collapse"                                                         
            data-bs-target="#navbarNav"                                                      
          >                                                                                   
            <span className="navbar-toggler-icon"></span>                                     
          </button>                                                                           
          <div className="collapse navbar-collapse" id="navbarNav">                           
            <ul className="navbar-nav ms-auto">                                               
              <li className="nav-item">                                                       
                <a className="nav-link active nav-link-custom" href="#">Inicio</a>            
              </li>                                                                           
              <li className="nav-item">                                                       
                <a className="nav-link nav-link-custom" href="#servicios">Servicios</a>       
              </li>                                                                           
              <li className="nav-item">                                                       
                <a className="nav-link nav-link-custom" href="#contacto">Contacto</a>         
              </li>                                                                           
            </ul>                                                                             
          </div>                                                                              
        </div>                                                                                
      </nav>

      {/* Hero Section */}
     <section 
          className="vero-hero container-fluid" 
          style={{
            /* ORDEN DE CAPAS: 1. Logo (arriba) | 2. Gradiente (medio) | 3. Foto (fondo) */
            backgroundImage: "url('/LogoVero.png'), linear-gradient(rgba(253, 251, 247, 0.4), rgba(253, 251, 247, 0.4)), url('/Hero.jpg')",
            
            /* TAMAÑOS: 1. Logo (300px) | 2. Gradiente (auto) | 3. Foto (contain) */
            backgroundSize: '300px auto, auto, contain', 
            
            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            
            /* POSICIONES: 1. Logo (derecha) | 2. Gradiente (centro) | 3. Foto (izquierda) */
            backgroundPosition: 'right 10% center, center, left center', 
            
            padding: '120px 0'
          }}
        >
        <div className="container text-center">
          <h1 className="vero-title display-3 mb-4" >Centro Estética Integral</h1>
          <p className="lead mb-5">Bienestar y estética integral con tecnología de vanguardia.</p>
          <a href="#agendar" className="nav-item btn vero-btn-nude btn-lg" rel="noopener noreferrer">
            Reservar Turno
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section className="container py-5">
        <h2 className="vero-title text-center mb-5">Servicios Estrella</h2>
        <div className="row g-4">
          
          {/* Venus Legacy */}
          <div className="col-md-4">
            <div className="card vero-card h-100">
              <img src="/Facial.jpg" className="card-img-top" alt="Venus Legacy Facial" style={{height: '350px', objectFit: 'cover', borderRadius: '20px 20px 0 0'}} />
              <div className="p-4">
                <h3 className="vero-title h4">Venus Legacy Facial 🌸</h3>
                <p>Piel más firme y luminosa con tecnología de alta gama.</p>
                <p className="fw-bold mt-auto">Duración: 1 hora | $28.000</p>
                <button className="btn vero-btn-nude mt-3" onClick={() => setSelectedService({
                  title: 'Venus Legacy Facial 🌸',
                  description: `MANTENÉ TU PIEL SIN ARRUGAS TODO EL AÑO
                      ✨ Piel más firme, luminosa e hidratada

                      ✔️ Venus Legacy
                      ✔️ Punta de Diamante
                      ✔️ Máscara Facial Nutritiva

                      💎 BENEFICIOS

                      • Estimula colágeno y elastina
                      • Reafirma y tonifica la piel
                      • Atenúa líneas de expresión
                      • Mejora la textura y luminosidad
                      • Hidratación profunda y efecto glow`,
                  duration: '1 hora',
                  price: '$28.000'
                })}>
                  Mas información
                </button>
              </div>
            </div>
          </div>
          
          {/* Presoterapia */}
          <div className="col-md-4">
            <div className="card vero-card h-100">
              <img src="/Presoterapia.jpg" className="card-img-top" alt="Presoterapia" style={{height: '350px', objectFit: 'cover', borderRadius: '20px 20px 0 0'}} />
              <div className="p-4">
                <h3 className="vero-title h4">Presoterapia ✨</h3>
                <p>Desinflamación y drenaje linfático con anteojos de relajación.</p>
                <p className="fw-bold mt-auto">Duración: 40 min | $33.000</p>
                <button className="btn vero-btn-nude mt-3" onClick={() => setSelectedService({
                  title: 'Presoterapia ✨',
                  description: `Sentí tus piernas más livianas y tu cuerpo más desinflamado desde la primera sesión.

                    La presoterapia es un tratamiento no invasivo que utiliza presión de aire secuencial para estimular el sistema linfático y mejorar la circulación.

                    🩷Beneficios:
                    ✔️ Reduce la retención de líquidos
                    ✔️ Favorece el drenaje linfático
                    ✔️ Disminuye la sensación de piernas cansadas
                    ✔️ Ayuda a mejorar la celulitis
                    ✔️ Colabora en la eliminación de toxinas
                    ✔️ Genera una agradable sensación de bienestar y relajación.
                    💝 Regalito sesión incorpora anteojos de relajación con presión Barométrica y música que armonizan tus momentos .

                    Ideal para quienes buscan desinflamar, mejorar la circulación y sentirse más livianas.

                    🌿 Regalate un momento para vos y disfrutá de todos sus beneficios.`,
                  duration: '40 min',
                  price: '$33.000'
                })}>
                  Mas información
                </button>
              </div>
            </div>
          </div>

          {/* Limpieza */}
          <div className="col-md-4">
            <div className="card vero-card h-100">
              <img src="/Limpieza.jpg" className="card-img-top" alt="Limpieza Facial" style={{height: '350px', objectFit: 'cover', borderRadius: '20px 20px 0 0'}} />
              <div className="p-4">
                <h3 className="vero-title h4">Limpieza Profunda</h3>
                <p>Renová tu piel con punta de diamante y activos específicos.</p>
                <p className="fw-bold mt-auto">Duración: 60-90 min</p>
                <button className="btn vero-btn-nude mt-3" onClick={() => setSelectedService({
                  title: 'Limpieza Profunda',
                  description: `✨ Renová tu piel y devolvele su luminosidad natural.

                    ✔️ Limpieza profunda y extracción de comedones
                    ✔️ Peeling y exfoliación con punta de diamante
                    ✔️ Cabina LED y activos específicos para tu piel
                    ✔️ Hidratación, nutrición y revitalización facial
                    ✔️ Ayuda a minimizar poros visibles y mejorar la textura

                    🌿 Tratamiento personalizado según las necesidades de cada piel.

                    ⏱️ Duración: 60 a 90 minutos

                    💆‍♀️ Ideal para lucir una piel más limpia, fresca, luminosa y saludable.`,
                  duration: '60-90 min',
                  price: 'Consultar'
                })}>
                  Mas información
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sección Staff (Nueva Integración) */}
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

      {/* Sección de Contacto */}
      <section id="contacto" className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="vero-title mb-4">Envia tu consulta específica por WhatsApp</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="tel" className="form-control" required onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="mb-3">
                <label className="form-label">Servicio</label>
                <select className="form-select" onChange={(e) => setFormData({...formData, service: e.target.value})}>
                  <option value="">Seleccioná un servicio...</option>
                  <option value="Venus Legacy Facial">Venus Legacy</option>
                  <option value="Presoterapia">Presoterapia</option>
                  <option value="Limpieza Facial">Limpieza Facial</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows="3" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="btn vero-btn-nude w-100">Enviar Consulta por WhatsApp</button>
            </form>
          </div>
          
          <div className="col-lg-6">
             <div className="p-3 rounded text-black" style={{backgroundColor: "#D4C4B7"}}>
                <h3 className="vero-title">Ubicación</h3>
                <p>📍 Soldado Ramón Angel Cabrera 6950, Córdoba</p>
                <div className="ratio ratio-16x9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.299747141695!2d-64.27525272341596!3d-31.37829749441275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329fadad7624e5%3A0xd2a846c282629e8!2sBe%20Spa%20M%C3%A9dico!5e0!3m2!1ses-419!2sar!4v1782583233907!5m2!1ses-419!2sar" 
                    title="Mapa de Ubicación"
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <p className="text-dark mt-2 small fw-bold">Ver en Google Maps →</p>
             </div>
          </div>
        </div>
      </section>

      {/* Sección Agendar con Cal.com */}
      <section id="agendar" className="container py-5 text-center">
        <h2 className="vero-title mb-4">¿Preferís agendar online ahora mismo?</h2>
        <button 
          data-cal-link="https://cal.com/simon-sclarandi" 
          className="btn vero-btn-nude btn-lg"
        >
          Agendar Turno Online
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-5 mt-5" style={{backgroundColor: "#f5f2eb"}}>
        <div className="container">
          <h3 className="vero-title h5 mb-3">Tu momento de brillar</h3>
          <p>📍 Soldado Ramón Angel Cabrera 6950, Córdoba</p>
          <a href="https://wa.me/5493515745470" className="btn vero-btn-nude mt-3" >
            WhatsApp 
          </a>
          <span className="mx-2"></span>
          <a href="https://www.instagram.com/veroschneider.estetica/" className="btn vero-btn-nude mt-3">
            Instagram
          </a>
        </div>
      </footer>

      {/* Modal Global */}
      {selectedService && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content vero-card">
              <div className="modal-header border-0">
                <h5 className="modal-title vero-title">{selectedService.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedService(null)}></button>
              </div>
              <div className="modal-body">
                <p style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>{selectedService.description}</p>
                <hr />
                <p><strong>Duración:</strong> {selectedService.duration}</p>
                <p><strong>Precio:</strong> {selectedService.price}</p>
              </div>
              <div className="modal-footer border-0">
                <a href="#agendar" className="btn vero-btn-nude w-100" onClick={() => setSelectedService(null)}>Reservar Turno</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;