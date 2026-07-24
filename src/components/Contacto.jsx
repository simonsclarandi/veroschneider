import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hola Vero, soy ${formData.name}. Quiero consultar por: ${formData.service}. Mensaje: ${formData.message}`;
    window.open(`https://wa.me/5493515745470?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
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
                <option value="Venus Legacy Facial">Venus Legacy Facial</option>
                <option value="Venus Legacy Corporal">Venus Legacy Corporal</option>
                <option value="Presoterapia">Presoterapia</option>
                <option value="Limpieza Facial">Limpieza Facial</option>
                <option value="Dermaplaning">Dermaplaning</option>
                <option value="Dermapen">Dermapen</option>
                <option value="Mio-Up">Mio-Up</option>
                <option value="Masajes">Masajes Relajantes</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea className="form-control" rows="3" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <button type="submit" className="btn vero-btn-nude w-100">Enviar Consulta por WhatsApp</button>
          </form>
        </div>
        
        <div className="col-lg-6 mb-4 mb-lg-0">
  
  {/* Agregué h-100 para que la caja quede simétrica si hay otra columna al lado */}
  <div className="p-4 rounded text-black h-100 d-flex flex-column" style={{backgroundColor: "#D4C4B7"}}>
    <h3 className="vero-title">Ubicación</h3>
    <p>📍 Soldado Ramón Angel Cabrera 6950, Córdoba</p>
    
    {/* 🚀 APLICADO: Contenedor 'ratio ratio-4x3' de Bootstrap. Safari ama esta estructura matemática. */}
    <div className="ratio ratio-4x3 rounded shadow-sm mt-2" style={{ overflow: 'hidden' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.299747141695!2d-64.27525272341596!3d-31.37829749441275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329fadad7624e5%3A0xd2a846c282629e8!2sBe%20Spa%20M%C3%A9dico!5e0!3m2!1ses-419!2sar!4v1782583233907!5m2!1ses-419!2sar" 
        title="Mapa de Ubicación Vero Schneider"
        style={{ border: 0 }} 
        allowFullScreen="" 
        /* 🚀 APLICADO: Eliminamos loading="lazy" y alturas fijas manuales */
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    
    {/* 🚀 APLICADO: Convertí el texto en un botón/enlace real que abre la app de Google Maps */}
    <a 
      href="https://maps.app.goo.gl/aM85RnX4hha22FdY9" /* Te dejo un link genérico, cámbialo por el link corto de tu local */
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-dark mt-3 small fw-bold text-decoration-none mt-auto"
    >
      Ver en Google Maps →
    </a>
  </div>
</div>
      </div>
    </section>
  );
};

export default Contacto;