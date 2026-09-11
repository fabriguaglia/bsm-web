import React from 'react';
import './Landing.css';
import FotoFrente from '../assets/images/bsmfrente.webp';

import Marca1 from '../assets/images/moura.webp';
import Marca2 from '../assets/images/varta.webp';
import Marca3 from '../assets/images/bosch.webp';
import Marca4 from '../assets/images/willard.webp';
import Marca5 from '../assets/images/edna.webp';
import Marca6 from '../assets/images/sermat.webp';
import Marca7 from '../assets/images/autobat.webp';

import BateriasImg from '../assets/images/baterias.webp';
import AccesoriosImg from '../assets/images/accesorios.webp';

function Landing() {
  const marcas = [Marca1, Marca2, Marca3, Marca4, Marca5, Marca6, Marca7];

  const numeroWhatsapp = "5491127373592";
  const mensajeVehiculo = encodeURIComponent("Hola, me contacto desde la página web. Quisiera realizar una consulta sobre una batería/servicio para mi vehículo.");
  const urlWaConsultaVehiculo = `https://wa.me/${numeroWhatsapp}?text=${mensajeVehiculo}`;
  const urlGoogleMaps = "https://maps.google.com/?q=Baterias+BSM,Boulogne+Sur+Mer+2195,+Don+Torcuato,+Buenos+Aires";
  const mensajeGeneralWa = encodeURIComponent("Hola, vengo de la página web, me gustaría realizar una consulta.");
  const urlWaGeneral = `https://wa.me/${numeroWhatsapp}?text=${mensajeGeneralWa}`;

  return (
    <div className="hero-landing-container text-white position-relative">
      {/* Hero Body Content */}
      <section 
        className="hero-content position-relative d-flex align-items-center py-5 px-3 px-md-5 border-bottom border-danger border-5"
        style={{ backgroundImage: `url(${FotoFrente})` }}
      >
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="container position-relative z-1 py-4">
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-7 text-center text-md-start">
              <h1 className="hero-title display-3 fw-black mb-3">
                Donde está
                <br />
                la <span className="text-danger">ENERGÍA</span>
                <br />
                de tu auto
              </h1>
              <p className="hero-subtitle lead fw-bold text-light mb-4 tracking-wide">
                CONTROL Y CAMBIO DE BATERÍAS | ACEITES | ACCESORIOS
              </p>
              <div className="cta-group d-flex flex-column flex-sm-row align-items-center gap-3 justify-content-center justify-content-md-start">
                <a 
                  href="tel:+5491127373592" 
                  className="btn btn-danger btn-lg rounded-pill px-4 fw-bold shadow text-decoration-none"
                >
                  LLAMÁNOS
                </a>
                <span className="fw-bold fs-6">O</span>
                <a 
                  href={urlGoogleMaps} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white fw-bold text-decoration-underline fs-6"
                >
                  VENÍ A NUESTRO LOCAL
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel Infinito de Marcas */}
      <section id="baterias" className="brands-carousel-section py-4 overflow-hidden bg-white">
        <div className="brands-track bg-white">
          {[...marcas, ...marcas, ...marcas].map((marca, index) => (
            <div className="brand-slide px-4 d-flex align-items-center justify-content-center bg-white" key={index}>
              <img src={marca} alt={`Marca ${index + 1}`} className="brand-logo" />
            </div>
          ))}
        </div>
      </section>

      {/* Sección 1: Baterías y Servicios */}
      <section id="wheels" className="section-padding bg-dark text-white border-top border-secondary border-opacity-25">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <span className="text-danger fw-bold text-uppercase tracking-wide">Servicio Técnico Especializado</span>
              <h2 className="display-5 fw-black my-3">BATERÍAS Y SERVICIOS</h2>
              <p className="text-secondary lead fs-6 mb-4">
                Ofrecemos diagnóstico gratuito del estado de tu batería, alternador y arranque. Contamos con stock permanente de las mejores marcas del mercado con colocación sin cargo en el acto.
              </p>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                <li className="d-flex align-items-center gap-2">
                  <span className="text-danger fw-bold">✓</span> Instalación en el local sin costo adicional.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-danger fw-bold">✓</span> Control de sistema eléctrico y alternador.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-danger fw-bold">✓</span> Garantía oficial escrita directo de fábrica.
                </li>
              </ul>
              <a 
                href={urlWaConsultaVehiculo} 
                className="btn btn-danger rounded-pill px-4 py-2 fw-bold" 
                target="_blank" 
                rel="noreferrer"
              >
                CONSULTAR POR MI VEHÍCULO
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <div className="image-card-wrapper position-relative overflow-hidden rounded-4 shadow-lg border border-secondary border-opacity-25">
                <img src={BateriasImg} alt="Baterías y Servicios BSM" className="img-fluid w-100 h-100 object-fit-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Accesorios */}
      <section id="blog" className="section-padding bg-black text-white border-top border-secondary border-opacity-10">
        <div className="container">
          <div className="row align-items-center g-5 flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6">
              <div className="image-card-wrapper position-relative overflow-hidden rounded-4 shadow-lg border border-secondary border-opacity-25">
                <img src={AccesoriosImg} alt="Accesorios para Vehículos BSM" className="img-fluid w-100 h-100 object-fit-cover" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <span className="text-danger fw-bold text-uppercase tracking-wide">Equipamiento & Mantenimiento</span>
              <h2 className="display-5 fw-black my-3">ACCESORIOS</h2>
              <p className="text-secondary lead fs-6 mb-4">
                Mantené tu vehículo en óptimas condiciones con nuestra variedad de aceites de primera línea, aditivos, cargadores de batería, cables puente, escobillas y productos para el cuidado automotor.
              </p>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                <li className="d-flex align-items-center gap-2">
                  <span className="text-danger fw-bold">✓</span> Aceites y fluidos de primeras marcas.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-danger fw-bold">✓</span> Cargadores inteligentes y arrancadores portátiles.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="text-danger fw-bold">✓</span> Lámparas, fusibles y accesorios de emergencia.
                </li>
              </ul>
              <a href="/accesorios" className="btn btn-outline-danger text-white rounded-pill px-4 py-2 fw-bold" rel="noreferrer">
                VER ACCESORIOS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Redes Sociales (Fondo Blanco) */}
      <section id="socials" className="social-banner-section py-5 position-relative overflow-hidden bg-white text-dark border-top border-danger border-4">
        <div className="container text-center py-4 position-relative z-1">
          <span className="text-danger fw-bold text-uppercase tracking-wide d-block mb-2">Comunidad BSM</span>
          <h2 className="display-5 fw-black mb-3 text-dark">SEGUINOS EN NUESTRAS REDES</h2>
          <p className="text-secondary max-w-600 mx-auto mb-4 fs-6">
            Enterate de las promociones semanales, consejos para el cuidado de tu batería y todas las novedades directamente en nuestras cuentas oficiales.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 mt-4">
            <a 
              href="https://instagram.com/bsmbaterias" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card d-flex align-items-center gap-3 px-4 py-3 rounded-pill text-decoration-none text-dark border border-dark border-opacity-25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="text-danger">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.298.04 1.138.318 1.944.76 2.45.428.49.92.83 1.488 1.05.51.198 1.09.333 2.238.373 1.137.04 1.41.05 3.582.05 2.17 0 2.444-.01 3.298-.048 1.139-.04 1.944-.318 2.45-.76.49-.428.83-.92 1.05-1.488.198-.51.333-1.09.373-2.238.04-1.137.05-1.41.05-3.582 0-2.17-.01-2.444-.048-3.298-.04-1.139-.318-1.944-.76-2.45a3.91 3.91 0 0 0-1.05-1.488A3.916 3.916 0 0 0 13.24.42c-.51-.198-1.092-.333-2.238-.373C10.148.01 9.875 0 7.703 0h.297zm.11 1.442c2.137 0 2.39.008 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.233-.047zm0 2.445a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22zm0 6.778a2.668 2.668 0 1 1 0-5.336 2.668 2.668 0 0 1 0 5.336zm5.23-6.936a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"/>
              </svg>
              <span className="fw-bold fs-6">Instagram</span>
            </a>
            <a 
              href="https://facebook.com/bsm.baterias" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card d-flex align-items-center gap-3 px-4 py-3 rounded-pill text-decoration-none text-dark border border-dark border-opacity-25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="text-danger">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
              <span className="fw-bold fs-6">Facebook</span>
            </a>
            <a 
              href={urlWaGeneral} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card d-flex align-items-center gap-3 px-4 py-3 rounded-pill text-decoration-none text-dark border border-dark border-opacity-25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className="text-success">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.068-.315-.099-.448.099-.133.197-.513.646-.629.776-.117.133-.232.149-.43.05-.197-.099-.834-.308-1.587-.98-.587-.525-.984-1.173-1.1-1.371-.116-.197-.013-.304.086-.403.089-.089.197-.232.296-.348.1-.117.133-.197.197-.33.067-.133.033-.249-.017-.348-.05-.099-.448-1.08-.614-1.48-.162-.389-.327-.336-.448-.342-.115-.005-.248-.005-.381-.005-.133 0-.35.05-.533.249-.183.198-.7.685-.7 1.67 0 .984.717 1.938.817 2.071.101.133 1.41 2.154 3.415 3.023.477.207.85.33 1.141.423.478.152.913.13 1.257.079.384-.058 1.17-.478 1.336-.94.166-.462.166-.858.116-.94-.05-.082-.183-.133-.38-.232z"/>
              </svg>
              <span className="fw-bold fs-6">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Botón Flotante de WhatsApp */}
      <a 
        href={urlWaGeneral}  
        className="whatsapp-float d-flex align-items-center justify-content-center text-decoration-none shadow-lg"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.068-.315-.099-.448.099-.133.197-.513.646-.629.776-.117.133-.232.149-.43.05-.197-.099-.834-.308-1.587-.98-.587-.525-.984-1.173-1.1-1.371-.116-.197-.013-.304.086-.403.089-.089.197-.232.296-.348.1-.117.133-.197.197-.33.067-.133.033-.249-.017-.348-.05-.099-.448-1.08-.614-1.48-.162-.389-.327-.336-.448-.342-.115-.005-.248-.005-.381-.005-.133 0-.35.05-.533.249-.183.198-.7.685-.7 1.67 0 .984.717 1.938.817 2.071.101.133 1.41 2.154 3.415 3.023.477.207.85.33 1.141.423.478.152.913.13 1.257.079.384-.058 1.17-.478 1.336-.94.166-.462.166-.858.116-.94-.05-.082-.183-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}

export default Landing;