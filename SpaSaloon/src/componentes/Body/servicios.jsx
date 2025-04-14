import React from 'react';
import Card from '../cards';
import Etiqueta from '../Formularios/etiquetas.jsx';
import '../../styles/servicios.css';
import masagesImg from '../../assets/masajes.jpg';
import bellezaImg from '../../assets/belleza.jpg';
import facialesImg from '../../assets/faciales.jpg';
import saunaImg from '../../assets/sauna.jpg';
import hidromasajesImg from '../../assets/hidromasajes.jpg';
import yogaImg from '../../assets/yoga.jpg';

const Servicios = () => {
  const serviciosIndividuales = [
    { title: 'masajes', imageSrc: `${masagesImg}` },
    { title: 'belleza', imageSrc: `${bellezaImg}` },	
    { title: 'tratamientos faciales', imageSrc: `${facialesImg}` },
    { title: 'sauna', imageSrc: `${saunaImg}` },
  ];

  const serviciosGrupales = [
    { title: 'hidromasajes', imageSrc:`${hidromasajesImg}` },
    { title: 'yoga', imageSrc: `${yogaImg}` },
  ];

  return (
    <section className="servicios-section">
      <div className="servicios-container">
        <div className="servicios-column">
          <Etiqueta 
            text="Servicios Individuales" 
            fontSize= "40px"
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
            fontSize="40px" 
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