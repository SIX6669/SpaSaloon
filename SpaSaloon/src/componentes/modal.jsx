import React, { useState, useEffect } from 'react';
import '../styles/modal.css';

const Modal = ({ servicio, onClose }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  useEffect(() => {
    // Cada vez que se abre el modal con un nuevo servicio, limpiar la selección previa
    setOpcionSeleccionada(null);
  }, [servicio]);

  if (!servicio) return null;

  const handleSeleccion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const handleReservar = () => {
    if (servicio.options && opcionSeleccionada) {
      alert(`Reservando turno para: ${servicio.title} - ${opcionSeleccionada.nombre}`);
    } else if (!servicio.options) {
      alert(`Reservando turno para: ${servicio.title}`);
    } else {
      alert("Por favor seleccioná una opción primero.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        <div className="modal-body">
          <div className="modal-image-container">
            <img
              src={servicio.imageSrc}
              alt={servicio.title}
              className="modal-img"
            />
          </div>

          <div className="modal-details">
            <h2 className="modal-title">{servicio.title}</h2>

            {servicio.options ? (
              <ul className="modal-options-list">
                {servicio.options.map((option, index) => (
                  <li
                    key={index}
                    className={`modal-option-selectable ${opcionSeleccionada === option ? 'selected' : ''}`}
                    onClick={() => handleSeleccion(option)}
                  >
                    {option.nombre}

                    {opcionSeleccionada === option && (
                      <div className="modal-opcion-detalles">
                        <p><strong>Descripción:</strong> {option.descripcion}</p>
                        <p><strong>Precio:</strong> ${option.precio}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="modal-description">
                <p><strong>Descripción:</strong> {servicio.descripcion}</p>
                <p><strong>Precio:</strong> ${servicio.precio}</p>
              </div>
            )}

            <button className="modal-reservar-btn" onClick={handleReservar}>
              Reservar turno
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;