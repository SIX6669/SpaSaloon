import React from 'react';
import Etiqueta from '../Formularios/etiquetas.jsx';
import '../../styles/sobre-nosotros.css';

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros-section">
      <div className="sobre-nosotros-container">
        <div className="sobre-nosotros-text-container">
          <Etiqueta 
            text="Sobre Nosotros" 
            fontSize="36px"
            textColor="white"
            padding="0 0 20px 0"
            className="sobre-nosotros-title"
          />
          
          <div className="sobre-nosotros-content">
            <Etiqueta 
              text="En nuestro spa, nos dedicamos a proporcionar una experiencia de relajación y bienestar incomparable. Con más de 10 años de experiencia en el sector, nuestro equipo de profesionales está capacitado para ofrecer los mejores servicios de masajes, tratamientos faciales y corporales."
              fontSize="18px"
              textColor="white"
              padding="10px 0"
              className="sobre-nosotros-paragraph"
            />
            
            <Etiqueta 
              text="Utilizamos productos de alta calidad y técnicas innovadoras para garantizar que cada visita sea especial. Nuestras instalaciones están diseñadas para crear un ambiente de paz y tranquilidad, permitiéndote desconectar del estrés diario y rejuvenecer cuerpo y mente."
              fontSize="18px"
              textColor="white"
              padding="10px 0"
              className="sobre-nosotros-paragraph"
            />
            
            <Etiqueta 
              text="Te invitamos a descubrir por qué somos el destino preferido para quienes buscan un oasis de relajación en la ciudad."
              fontSize="18px"
              textColor="white"
              padding="10px 0"
              className="sobre-nosotros-paragraph"
            />
          </div>
        </div>
        
        <div className="sobre-nosotros-image-container">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Sobre Nosotros" 
            className="sobre-nosotros-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;