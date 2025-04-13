import React from 'react';
import Card from '../cards';
import Etiqueta from '../Formularios/etiquetas.jsx';
import '../../styles/servicios.css';

const Servicios = () => {
  const serviciosIndividuales = [
    { title: 'masajes', imageSrc: 'masajes.jpg' },
    { title: 'belleza', imageSrc: 'belleza.jpg' },
    { title: 'tratamientos faciales', imageSrc: 'faciales.jpg' },
    { title: 'sauna', imageSrc: 'sauna.jpg' }
  ];

  const serviciosGrupales = [
    { title: 'hidromasajes', imageSrc: 'hidromasajes.jpg' },
    { title: 'yoga', imageSrc: 'yoga.jpg' }
  ];

  return (
    <section className="servicios-section">
      <div className="servicios-container">
        <div className="servicios-column">
          <Etiqueta 
            text="servicios individuales" 
            fontSize="28px"
            textColor="white"
            padding="10px 0"
            className="servicios-title"
          />
          <div className="servicios-cards-grid">
            {serviciosIndividuales.map((servicio, index) => (
              <Card 
                key={index} 
                title={servicio.title} 
                imageSrc={servicio.imageSrc} 
              />
            ))}
          </div>
        </div>

        <div className="servicios-column">
          <Etiqueta 
            text="servicios grupales" 
            fontSize="28px" 
            textColor="white"
            padding="10px 0"
            className="servicios-title"
          />
          <div className="servicios-cards-grid servicios-grid-grupales">
            {serviciosGrupales.map((servicio, index) => (
              <Card 
                key={index} 
                title={servicio.title} 
                imageSrc={servicio.imageSrc} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;