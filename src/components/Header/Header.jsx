import React, { useState } from 'react';
import './Header.css';
import Logo from '../assets/images/logo.webp';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const urlGoogleMaps = "https://maps.google.com/?q=Baterias+BSM,Boulogne+Sur+Mer+2195,+Don+Torcuato,+Buenos+Aires";

  return (
    <header className="header-container text-white">
      {/* Top Utility Bar */}
      <div className="top-bar bg-dark text-secondary py-2 px-3 border-bottom border-secondary border-opacity-25">
        <div className="container-fluid d-flex justify-content-center justify-content-md-between align-items-center fs-7">
          <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
            <span className="text-danger d-none d-md-inline">★★★★⯨</span>
            <span className="d-none d-md-inline">100+ OPINIONES</span>
            <span className="d-none d-md-inline text-muted">|</span>
            <span className="d-none d-md-inline">ABIERTO DE LUN - VIE 9:00 - 18:30 Y SAB 9:00 - 14:00</span>
            <span className="d-none d-md-inline text-muted">|</span>
            <a 
              href={urlGoogleMaps} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="address-text text-secondary text-decoration-none"
            >
              BOULOGNE SUR MER 2195 DON TORCUATO, BS.AS.
            </a>
            <span className="text-muted">|</span>
            <a href="tel:+5491127373592" className="phone-text text-white fw-bold text-decoration-none">
              +54 9 11 2737-3592
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-dark bg-dark px-3 px-md-5 border-bottom border-secondary border-opacity-25 position-relative">
        <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
          <a className="navbar-brand p-0 m-0" href="/">
            <img src={Logo} alt="Logo BSM" className="navbar-logo" />
          </a>

          {/* Botón Hamburguesa Móvil */}
          <button 
            className="navbar-toggler d-md-none border-0 text-white shadow-none" 
            type="button" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            <span className="fs-2">{menuOpen ? '✕' : '☰'}</span>
          </button>

          {/* Menú de navegación */}
          <div className={`nav-menu-wrapper d-md-flex align-items-center gap-4 ${menuOpen ? 'open d-flex' : 'd-none d-md-flex'}`}>
            <ul className="nav-links list-unstyled d-flex flex-column flex-md-row gap-3 gap-md-4 m-0 p-0 text-center">
              <li><a href="/#baterias" className="text-decoration-none text-light fw-bold" onClick={() => setMenuOpen(false)}>BATERÍAS Y SERVICIOS</a></li>
              <li><a href="/accesorios" className="text-decoration-none text-light fw-bold" onClick={() => setMenuOpen(false)}>ACCESORIOS</a></li>
              <li><a href="https://www.instagram.com/bsmbaterias/" className="text-decoration-none text-light fw-bold" onClick={() => setMenuOpen(false)}>NOVEDADES</a></li>
            </ul>
            <a 
              href="tel:+5491127373592" 
              className="call-us-nav btn btn-outline-danger text-white rounded-pill px-4 fw-bold mt-3 mt-md-0 text-decoration-none"
            >
              LLAMÁNOS
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;