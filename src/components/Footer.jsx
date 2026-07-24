import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{ backgroundColor: "#f5f2eb", color: "#4a4a4a" }}>
      <div className="container">
        <div className="row text-center text-md-start g-4 align-items-center">

          {/* Columna 1: Marca y Slogan */}
          <div className="col-md-4">
            <h3 className="vero-title h4 mb-1">Vero Schneider</h3>
            <p className="fst-italic mb-0">Tu momento de brillar ✨</p>
          </div>

          {/* Columna 2: Info de Contacto */}
          <div className="col-md-4">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                📍 Soldado Ramón Angel Cabrera 6950, Córdoba
              </li>
              <li>
                📞 +54 9 351 574-5470
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes y Acciones */}
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
            {/* Agregamos flex-wrap para que se acomoden limpios y quitamos padding excesivo en pantallas medianas */}
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <a 
                href="https://wa.me/5493515745470" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn vero-btn-nude"
              >
                WhatsApp 
              </a>
              <a 
                href="https://www.instagram.com/veroschneider.estetica/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn vero-btn-nude"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Línea divisoria y Copyright */}
        <hr className="mt-5 mb-3" style={{ opacity: 0.15 }} />
        <div className="text-center small">
          <p className="mb-0">
            © {new Date().getFullYear()} Vero Schneider Estética. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;