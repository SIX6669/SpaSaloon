import React, { useState } from 'react';
import Card from '../cards';
import Etiqueta from '../Formularios/etiquetas.jsx';
import Modal from '../Modal.jsx'; 
import '../../styles/servicios.css';
import '../../styles/modal.css';
import masagesImg from '../../assets/masajes.jpg';
import bellezaImg from '../../assets/belleza.jpg';
import facialesImg from '../../assets/faciales.jpg';
import saunaImg from '../../assets/sauna.jpg';
import hidromasajesImg from '../../assets/hidromasajes.jpg';
import yogaImg from '../../assets/yoga.jpg';

const Servicios = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const serviciosIndividuales = [
    {
      title: 'masajes',
      imageSrc: masagesImg,
      options: [
        'Anti-stress',
        'Descontracturantes',
        'Masajes con piedras calientes',
        'Circulatorios',
      ],
    },
    {
      title: 'belleza',
      imageSrc: bellezaImg,
      options: [
        'Lifting de pestaña',
        'Depilación facial',
        'Belleza de manos y pies',
      ],
    },
    {
      title: 'tratamientos faciales',
      imageSrc: facialesImg,
      options: [
        'Punta de Diamante: Microexfoliación.',
        'Limpieza profunda + Hidratación',
        'Criofrecuencia facial: produce el “SHOCK TÉRMICO” logrando resultados instantáneos de efecto lifting.',
      ],
    },
    {
      title: 'tratamientos corporales',
      imageSrc: saunaImg,
      options: [
        'VelaSlim: Reducción de la circunferencia corporal y la celulitis',
        'DermoHealth: moviliza los distintos tejidos de la piel y estimula la microcirculación, generando un drenajelinfático.',
        'Criofrecuencia: produce un efecto de lifting instantáneo.',
        'Ultracavitación: Técnica reductora',
      ]
    },
  ];
  
  const serviciosGrupales = [
    {
      title: 'hidromasajes',
      imageSrc: hidromasajesImg,
      description: 'Relajación grupal en tinas de hidromasaje con aromaterapia.'
    },
    {
      title: 'yoga',
      imageSrc: yogaImg,
      description: 'Clases grupales de yoga para mejorar cuerpo y mente.'
    },
  ];

  const handleCardClick = (servicio) => {
    setServicioSeleccionado(servicio);
  };

  const cerrarModal = () => {
    setServicioSeleccionado(null);
  };

  return (
    <section className="servicios-section">
      <div className="servicios-container">
        <div className="servicios-column">
          <Etiqueta 
            text="Servicios Individuales" 
            fontSize="40px"
            textColor="white"
            padding="10px 0"
            className="servicios-title"
          />
          <div className="servicios-cards-grid">
            {serviciosIndividuales.map((servicio, index) => (
              <div key={index} onClick={() => handleCardClick(servicio)}>
                <Card 
                  title={servicio.title} 
                  imageSrc={servicio.imageSrc} 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="servicios-column">
          <Etiqueta 
            text="Servicios Grupales" 
            fontSize="40px" 
            textColor="white"
            padding="10px 0"
            className="servicios-title"
          />
          <div className="servicios-cards-grid servicios-grid-grupales">
            {serviciosGrupales.map((servicio, index) => (
              <div key={index} onClick={() => handleCardClick(servicio)}>
                <Card 
                  title={servicio.title} 
                  imageSrc={servicio.imageSrc} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal servicio={servicioSeleccionado} onClose={cerrarModal} />
    </section>
  );
};

export default Servicios;
