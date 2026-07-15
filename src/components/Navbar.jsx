import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark vero-btn-nude bg-primary fixed-top shadow-sm navbar-custom">                                                                               
      <div className="container container-custom flex-nowrap"> 
        
        {/* AGRUPAMOS IMAGEN Y TÍTULO PARA QUE NO SE SEPAREN */}
        <div className="d-flex align-items-center" style={{ maxWidth: '80%' }}>
          <img 
            src="LogoVero.png"
            alt="Vero Schneider" 
            className="rounded-circle border border-2 border-white shadow-sm navbar-img-custom"
          />                                          
          <a className="navbar-brand fw-bold navbar-brand-custom m-0 text-truncate" href="#">
            Vero Schneider Estética
          </a>   
        </div>
                                                                                          
        <button                                                                             
          className="navbar-toggler vero-btn-nude ms-2"                                                        
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
  );
};

export default Navbar;