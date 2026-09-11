import React from 'react';
import './Footer.css';
import Logo from '../assets/images/logo.webp';

function Footer() {
  const urlGoogleMaps = "https://maps.google.com/?q=Baterias+BSM,Boulogne+Sur+Mer+2195,+Don+Torcuato,+Buenos+Aires";

  return (
    <footer className="footer-container bg-dark text-white border-top border-secondary border-opacity-25 py-5">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center text-center text-md-start">
          <div className="col-12 col-md-4">
            <img src={Logo} alt="Logo BSM" className="footer-logo mb-3" />
            <p className="text-secondary fs-7 mb-0">
              Venta, control e instalación de baterías y accesorios para todo tipo de vehículos.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="text-danger fw-bold text-uppercase mb-3">Contacto</h6>
            <p className="fs-7 mb-1">
              <a 
                href={urlGoogleMaps} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary text-decoration-none"
              >
                📍 Boulogne Sur Mer 2195, Don Torcuato, Bs.As.
              </a>
            </p>
            <p className="fs-7 mb-1">
              <a 
                href="tel:+5491127373592" 
                className="text-secondary text-decoration-none"
              >
                📞 +54 9 11 2737-3592
              </a>
            </p>
            <p className="text-secondary fs-7 mb-0">
              🕒 Lun - Vie: 9:00 - 18:30 | Sáb: 9:00 - 14:00
            </p>
          </div>

          <div className="col-12 col-md-3 text-center text-md-end">
            <a 
              href="tel:+5491127373592" 
              className="btn btn-danger rounded-pill px-4 py-2 fw-bold text-decoration-none"
            >
              LLAMAR AHORA
            </a>
          </div>
        </div>

        <hr className="my-4 border-secondary border-opacity-25" />

        <div className="row">
          <div className="col-12 text-center text-secondary fs-7">
            <p className="mb-0">&copy; {new Date().getFullYear()} BSM Baterías. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;