import React from 'react';
import '../styles/modal.css';

const Modal = ({ servicio, onClose }) => {
  if (!servicio) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          {/* Columna izquierda: imagen */}
          <div className="modal-image-container">
            <img
              src={servicio.imageSrc}
              alt={servicio.title}
              className="modal-img"
            />
          </div>

          {/* Columna derecha: título, opciones o descripción, botón */}
          <div className="modal-details">
            <h2 className="modal-title">{servicio.title}</h2>

            {servicio.options && servicio.options.length > 0 ? (
              <ul className="modal-options-list">
                {servicio.options.map((option, index) => (
                  <li key={index} className="modal-option">{option}</li>
                ))}
              </ul>
            ) : (
              <p className="modal-description">
                Consultanos para conocer más sobre este servicio.
              </p>
            )}

            <button className="modal-reservar-btn" onClick={() => alert(`Reservando turno para: ${servicio.title}`)}>
              Reservar turno
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
