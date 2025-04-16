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
      title: 'Masajes',
      imageSrc: masagesImg,
      options: [
        {
          nombre: 'Anti-stress',
          descripcion: 'Un masaje suave y relajante diseñado para aliviar la tensión muscular y mental, promoviendo una sensación de bienestar general.',
          precio: 10000
        },
        {
          nombre: 'Descontracturantes',
          descripcion: 'Un masaje más profundo enfocado en liberar nudos y tensiones musculares específicas, aliviando dolores y mejorando la movilidad.',
          precio: 12000
        },
        {
          nombre: 'Con piedras calientes',
          descripcion: 'Una terapia relajante que utiliza piedras volcánicas calientes para aliviar la tensión muscular, mejorar la circulación y promover la relajación profunda.',
          precio: 13000
        },
        {
          nombre: 'Circulatorios',
          descripcion: 'Un masaje que estimula el flujo sanguíneo y linfático, ayudando a reducir la hinchazón, la sensación de pesadez y mejorando la oxigenación de los tejidos.',
          precio: 11000
        }
      ],
    },
    {
      title: 'Belleza',
      imageSrc: bellezaImg,
      options: [
        {
          nombre: 'Lifting de pestaña',
          descripcion: 'Un tratamiento que curva y eleva las pestañas naturales desde la raíz, proporcionando una apariencia de ojos más abiertos y definidos sin necesidad de máscara de pestañas.',
          precio: 7000
        },
        {
          nombre: 'Depilación facial',
          descripcion: 'Eliminación del vello no deseado del rostro utilizando diversas técnicas como cera, hilo o pinza, dejando la piel suave y limpia.',
          precio: 5000
        },
        {
          nombre: 'Belleza de manos y pies',
          descripcion: 'Un tratamiento que incluye limado, pulido, hidratación y, opcionalmente, esmaltado de uñas para mantener manos y pies saludables y estéticamente agradables',
          precio: 10000
        },
      ],
    },
    {
      title: 'Tratamientos faciales',
      imageSrc: facialesImg,
      options: [
        {
          nombre: 'Punta de Diamante: Microexfoliación',
          descripcion: 'Un tratamiento que utiliza un cabezal con microcristales de diamante para exfoliar suavemente la capa superior de la piel, eliminando células muertas, mejorando la textura y luminosidad.',
          precio: 15000
        },
        {
          nombre: 'Limpieza profunda + Hidratación',
          descripcion: 'Un tratamiento facial que elimina impurezas, puntos negros y células muertas de la piel, seguido de una hidratación intensa para restaurar el equilibrio y la luminosidad.',
          precio: 13000
        },
        {
          nombre: 'Criofrecuencia facial',
          descripcion: 'Produce el “SHOCK TÉRMICO” logrando resultados instantáneos de efecto lifting. Un tratamiento que combina frío y radiofrecuencia para estimular la producción de colágeno y elastina, tensando la piel y reduciendo la flacidez de forma inmediata.',
          precio: 20000
        },
      ],
    },
    {
      title: 'Tratamientos corporales',
      imageSrc: saunaImg,
      options: [
        {
          nombre: 'VelaSlim',
          descripcion: 'Reducción de la circunferencia corporal y la celulitis: Un tratamiento no invasivo que combina radiofrecuencia, infrarrojos, vacumterapia y masaje de rodillos para reducir la celulitis, moldear el cuerpo y mejorar la textura de la piel.',
          precio: 25000
        },
        {
          nombre: 'DermoHealth',
          descripcion: 'Moviliza los distintos tejidos de la piel y estimula la microcirculación, generando un drenaje linfático. Un tratamiento que utiliza un sistema de succión y rodillos para masajear profundamente la piel, mejorar la circulación, reducir la retención de líquidos y la celulitis.',
          precio: 20000
        },
        {
          nombre: 'Criofrecuencia',
          descripcion: 'Produce un efecto de lifting instantáneo. Similar a la criofrecuencia facial, pero aplicado en zonas corporales para tensar la piel y reducir la flacidez en áreas como abdomen, brazos y piernas.',
          precio: 25000
        },
        {
          nombre: 'Ultracavitación: Técnica reductora',
          descripcion: 'Un tratamiento no invasivo que utiliza ondas de ultrasonido de baja frecuencia para romper las células grasas localizadas, ayudando a reducir la adiposidad y moldear el cuerpo.',
          precio: 26000
        }
      ]
    },
  ];

  const serviciosGrupales = [
    {
      title: 'Hidromasajes',
      imageSrc: hidromasajesImg,
      descripcion: 'Sesiones en bañeras o piscinas con chorros de agua a presión que proporcionan un masaje relajante en todo el cuerpo, aliviando la tensión muscular y promoviendo la circulación.',
      precio: 8000
    },
    {
      title: 'Yoga',
      imageSrc: yogaImg,
      descripcion: 'Clases grupales que combinan posturas físicas (asanas), técnicas de respiración (pranayama) y meditación para mejorar la flexibilidad, la fuerza, el equilibrio y la relajación mental.',
      precio: 20000
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
