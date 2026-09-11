import React from 'react';
import './Accesorios.css';

import AceitesImg from '../assets/images/aceites.webp'; 
import LucesImg from '../assets/images/lamparas.webp'; 
import CargaImg from '../assets/images/arranca.webp'; 
import EscobillasImg from '../assets/images/escobillas.webp'; 
import LimpiezaImg from '../assets/images/limpieza.webp'; 

function Accesorios() {
  const numeroWhatsapp = "5491127373592";
  const mensajeGeneralWa = encodeURIComponent("Hola, me gustaría realizar una consulta sobre accesorios para mi vehículo.");
  const urlWaGeneral = `https://wa.me/${numeroWhatsapp}?text=${mensajeGeneralWa}`;
  const urlGoogleMaps = "https://maps.google.com/?q=Baterias+BSM,Boulogne+Sur+Mer+2195,+Don+Torcuato,+Buenos+Aires";

  const categorias = [
    {
      id: "aceites",
      titulo: "Aceites & Fluidos",
      descripcion: "Mantené el motor protegido y con el máximo rendimiento.",
      items: [
        "Aceites sintéticos, semisintéticos y minerales",
        "Fluidos de freno y dirección hidráulica",
        "Refrigerantes y anticongelantes de alta concentración"
      ],
      imagen: AceitesImg,
      badge: "Primeras Marcas"
    },
    {
      id: "luces",
      titulo: "Iluminación Halógena & LED",
      descripcion: "Mayor visibilidad y seguridad para tus viajes nocturnos.",
      items: [
        "Luces halógenas y lámparas LED de todo tipo",
        "Kits de cree led para ópticas principales y auxiliares",
        "Lámparas de posición, giros, freno e interior"
      ],
      imagen: LucesImg,
      badge: "Todo Tipo de Focos"
    },
    {
      id: "carga",
      titulo: "Carga & Equipamiento Eléctrico",
      descripcion: "Soluciones prácticas ante cualquier eventualidad en la calle.",
      items: [
        "Cargadores inteligentes y mantenimentores de batería",
        "Arrancadores portátiles multifunción",
        "Cables puente reforzados para arranque"
      ],
      imagen: CargaImg,
      badge: "Emergencias"
    },
    {
      id: "escobillas",
      titulo: "Escobillas Limpiaparabrisas",
      descripcion: "Limpieza impecable del parabrisas para días de lluvia.",
      items: [
        "Escobillas de goma convencionales y siliconadas",
        "Modelos tipo Soft / Flat de máxima adherencia",
        "Medidas y adaptadores para todas las marcas y modelos"
      ],
      imagen: EscobillasImg,
      badge: "Visibilidad Garantizada"
    },
    {
      id: "limpieza",
      titulo: "Aditivos & Cuidado Automotor",
      descripcion: "Productos para mantener la estética y el motor Impecables.",
      items: [
        "Aditivos para combustible y limpia inyectores",
        "Shampoo siliconado, ceras y revividores de negros",
        "Perfumantes, paños de microfibra y limpiadores de interiores"
      ],
      imagen: LimpiezaImg,
      badge: "Estética & Cuidado"
    }
  ];

  return (
    <div className="accesorios-page-container bg-black text-white min-vh-100 position-relative">
      {/* Galería de Categorías con Foto e Items por Producto */}
      <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-danger fw-bold text-uppercase tracking-wide d-block mb-1">Muestra General</span>
            <h2 className="display-6 fw-black text-white">NUESTRAS CATEGORÍAS DE PRODUCTOS</h2>
            <p className="text-secondary fs-6 max-w-600 mx-auto">
              Contamos con componentes y productos seleccionados para asegurar la mayor durabilidad y estética de tu vehículo.
            </p>
          </div>

          <div className="row g-4">
            {categorias.map((cat) => (
              <div key={cat.id} className="col-12 col-md-6 col-lg-4">
                <div className="accessory-card bg-dark rounded-4 overflow-hidden border border-secondary border-opacity-25 h-100 d-flex flex-column">
                  <div className="card-image-box position-relative overflow-hidden">
                    <img src={cat.imagen} alt={cat.titulo} className="w-100 h-100 object-fit-cover" />
                    <span className="badge bg-danger position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fs-7 fw-bold shadow">
                      {cat.badge}
                    </span>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h3 className="h4 fw-bold text-white mb-2">{cat.titulo}</h3>
                      <p className="text-secondary fs-7 mb-3">{cat.descripcion}</p>
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                        {cat.items.map((item, index) => (
                          <li key={index} className="d-flex align-items-start gap-2 fs-7 text-light">
                            <span className="text-danger fw-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a 
                      href={`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(`Hola, quisiera consultar disponibilidad sobre: ${cat.titulo}`)}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-danger text-white rounded-pill w-100 fw-bold fs-7 py-2"
                    >
                      CONSULTAR POR WHATSAPP
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Tarjeta de Contacto Directo */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="accessory-card bg-danger bg-opacity-10 border border-danger rounded-4 p-4 h-100 d-flex flex-column justify-content-center text-center">
                <div className="fs-1 mb-2">🚗</div>
                <h3 className="h4 fw-black text-white mb-2">¿BUSCÁS ALGO ESPECÍFICO?</h3>
                <p className="text-light fs-6 mb-4">
                  Consultanos si tenemos la medida o especificación que necesita tu auto o vení a visitarnos directamente a nuestro local.
                </p>
                <div className="d-flex flex-column gap-2">
                  <a 
                    href={urlGoogleMaps} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-light rounded-pill fw-bold fs-7 py-2 text-dark"
                  >
                    📍 VENÍ A NUESTRO LOCAL
                  </a>
                  <a 
                    href="tel:+5491127373592" 
                    className="btn btn-danger rounded-pill fw-bold fs-7 py-2"
                  >
                    📞 LLAMAR AHORA
                  </a>
                </div>
              </div>
            </div>
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

export default Accesorios;