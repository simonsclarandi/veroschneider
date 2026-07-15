import React from 'react';

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content vero-card">
          <div className="modal-header border-0">
            <h5 className="modal-title vero-title">{service.title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>{service.description}</p>
            <hr />
            <p><strong>Duración:</strong> {service.duration}</p>
            <p><strong>Precio:</strong> {service.price}</p>
          </div>
          <div className="modal-footer border-0">
            <a href="#contacto" className="btn vero-btn-nude w-100" onClick={onClose}>Reservar Turno</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;