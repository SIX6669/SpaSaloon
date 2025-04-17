import React, { useState, useEffect } from 'react';
import '../styles/modal.css';
import '../styles/modalReserva.css'; // Crearemos este archivo con estilos específicos

const ModalReserva = ({ servicio, opcionSeleccionada, onClose, onReservaConfirmada }) => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [profesional, setProfesional] = useState('');
  const [paso, setPaso] = useState(1); // Para manejar los pasos del proceso de reserva
  
  // Lista de profesionales (esto podría venir de una API en una implementación real)
  const profesionales = [
    { id: 1, nombre: "Ana García", especialidad: "Masajista" },
    { id: 2, nombre: "Carlos Rodríguez", especialidad: "Terapeuta facial" },
    { id: 3, nombre: "Lucía Fernández", especialidad: "Esteticista" },
    { id: 4, nombre: "Miguel López", especialidad: "Instructor de yoga" }
  ];
  
  // Horarios disponibles (también podría ser dinámico según disponibilidad real)
  const horariosDisponibles = [
    "09:00", "10:00", "11:00", "12:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];
  
  // Determinar qué profesionales mostrar basado en el servicio seleccionado
  const profesionalesFiltrados = profesionales.filter(prof => {
    if (servicio.title === 'Masajes') return prof.especialidad === "Masajista";
    if (servicio.title === 'Tratamientos faciales') return prof.especialidad === "Terapeuta facial";
    if (servicio.title === 'Belleza') return prof.especialidad === "Esteticista";
    if (servicio.title === 'Yoga') return prof.especialidad === "Instructor de yoga";
    return true; // Para otros servicios mostrar todos
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paso === 1) {
      // Validar fecha y hora antes de avanzar
      if (!fecha || !hora) {
        alert("Por favor selecciona fecha y hora para continuar.");
        return;
      }
      setPaso(2);
    } else {
      // Validar profesional antes de confirmar
      if (!profesional) {
        alert("Por favor selecciona un profesional.");
        return;
      }
      
      // Procesar la reserva
      const detallesReserva = {
        servicio: servicio.title,
        opcion: opcionSeleccionada ? opcionSeleccionada.nombre : null,
        fecha,
        hora,
        profesional
      };
      
      // Llamar a la función callback con los detalles de la reserva
      if (onReservaConfirmada) {
        onReservaConfirmada(detallesReserva);
      }
      
      // Mostrar confirmación y cerrar el modal después de unos segundos
      alert(`Tu reserva para ${servicio.title} ${opcionSeleccionada ? `- ${opcionSeleccionada.nombre}` : ''} ha sido confirmada para el ${formatearFecha(fecha)} a las ${hora} con ${profesional}.`);
      setTimeout(onClose, 1000);
    }
  };
  
  // Formatear fecha para mostrar en formato más amigable
  const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString);
    return fecha.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Determinar fecha mínima (hoy) para el calendario
  const hoy = new Date().toISOString().split('T')[0];
  
  // Función para volver al paso anterior
  const volverPaso = () => {
    setPaso(1);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-reserva" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          <div className="modal-image-container">
            <img
              src={servicio.imageSrc}
              alt={servicio.title}
              className="modal-img"
            />
            <div className="modal-image-overlay">
              <h2 className="modal-reserva-title">Reservar Turno</h2>
              <div className="modal-servicio-info">
                <h3>{servicio.title}</h3>
                {opcionSeleccionada && (
                  <p className="modal-opcion-elegida">{opcionSeleccionada.nombre}</p>
                )}
                <p className="modal-precio">
                  ${opcionSeleccionada ? opcionSeleccionada.precio : servicio.precio}
                </p>
              </div>
            </div>
          </div>

          <div className="modal-details modal-reserva-details">
            <div className="modal-pasos-indicador">
              <div className={`paso ${paso >= 1 ? 'activo' : ''}`}>1. Fecha y Hora</div>
              <div className="paso-separador"></div>
              <div className={`paso ${paso >= 2 ? 'activo' : ''}`}>2. Profesional</div>
            </div>
            
            <form onSubmit={handleSubmit} className="modal-reserva-form">
              {paso === 1 ? (
                <div className="modal-paso modal-paso-1">
                  <div className="form-group">
                    <label htmlFor="fecha">Selecciona una fecha:</label>
                    <input 
                      type="date" 
                      id="fecha" 
                      min={hoy}
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  
                  {fecha && (
                    <div className="form-group">
                      <label>Horarios disponibles:</label>
                      <div className="horarios-grid">
                        {horariosDisponibles.map((h) => (
                          <button
                            type="button"
                            key={h}
                            className={`horario-btn ${hora === h ? 'seleccionado' : ''}`}
                            onClick={() => setHora(h)}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="modal-paso modal-paso-2">
                  <div className="form-group">
                    <label>Selecciona un profesional:</label>
                    <div className="profesionales-grid">
                      {profesionalesFiltrados.map((prof) => (
                        <div 
                          key={prof.id}
                          className={`profesional-card ${profesional === prof.nombre ? 'seleccionado' : ''}`}
                          onClick={() => setProfesional(prof.nombre)}
                        >
                          <div className="profesional-avatar">
                            {prof.nombre.charAt(0)}
                          </div>
                          <div className="profesional-info">
                            <h4>{prof.nombre}</h4>
                            <p>{prof.especialidad}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="resumen-reserva">
                    <h4>Resumen de la reserva</h4>
                    <p><strong>Servicio:</strong> {servicio.title}</p>
                    {opcionSeleccionada && (
                      <p><strong>Opción:</strong> {opcionSeleccionada.nombre}</p>
                    )}
                    <p><strong>Fecha:</strong> {formatearFecha(fecha)}</p>
                    <p><strong>Hora:</strong> {hora}</p>
                  </div>
                </div>
              )}
              
              <div className="modal-button-container">
                {paso === 2 && (
                  <button 
                    type="button" 
                    className="modal-volver-btn"
                    onClick={volverPaso}
                  >
                    Volver
                  </button>
                )}
                <button type="submit" className="modal-reservar-btn">
                  {paso === 1 ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      Continuar
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      Confirmar Reserva
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReserva;