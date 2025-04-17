import React, { useState } from 'react';
import Calendario from './Calendario.jsx';
import Boton from '../Formularios/boton.jsx';
import Etiqueta from '../Formularios/etiquetas.jsx';
import '../../styles/PerfilUsuario.css';
import 'react-calendar/dist/Calendar.css';

const PerfilUsuario = () => {
    // Estado para los datos del usuario
    const [datosUsuario, setDatosUsuario] = useState({
      nombre: "Carlos González",
      email: "carlos.gonzalez@email.com",
      telefono: "123-456-7890",
      direccion: "Av. Principal 123, Ciudad"
    });
  
    // Estado para la fecha seleccionada en el calendario
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
    
    // Estado para controlar si se están editando los datos
    const [editando, setEditando] = useState(false);
  
    // Función para manejar el cambio de fecha
    const handleDateChange = (date) => {
      setFechaSeleccionada(date);
      console.log('Fecha seleccionada:', date);
    };
  
    // Función para reprogramar turnos
    const handleReprogramar = () => {
      console.log('Reprogramando turno para:', fechaSeleccionada);
      // Lógica para reprogramar
    };
  
    // Función para cancelar turnos
    const handleCancelar = () => {
      console.log('Cancelando turno');
      // Lógica para cancelar
    };
  
    // Función para habilitar la edición de datos personales
    const handleEditar = () => {
      setEditando(!editando);
    };
  
    // Función para guardar los cambios en los datos personales
    const handleGuardarCambios = () => {
      setEditando(false);
      // Aquí iría la lógica para guardar los cambios en la base de datos
      console.log('Guardando nuevos datos:', datosUsuario);
    };
  
    // Función para manejar cambios en los inputs
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setDatosUsuario(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    return (
      <div className="perfil-container">
        <div className="perfil-seccion turnos-seccion">
          <Etiqueta 
            text="Tus turnos" 
            fontSize="22px" 
            textColor="white" 
            padding="10px 0" 
            className="seccion-titulo"
          />
          <div className="turnos-contenido">
            <div className="turnos-calendario">
              <Calendario
                onDateChange={handleDateChange}
                backgroundColor="#0c3c6e"
                borderColor="#2a5f8f"
                headerBackgroundColor="#0a325d"
                headerTextColor="#ffffff"
                dayColor="#e0e0e0"
                selectedDayBackground="#1976d2"
                selectedDayColor="#ffffff"
                todayBackground="#2c5282"
                todayColor="#ffffff"
                weekendColor="#90caf9"
                disabledDayColor="#546e7a"
                fontSize="14px"
                borderRadius="8px"
              />
            </div>
            <div className="turnos-acciones">
              <Boton 
                text="Reprogramar" 
                onClick={handleReprogramar}
                backgroundColor="#1565c0"
                hoverBackgroundColor="#0d47a1"
              />
              <Boton 
                text="Cancelar" 
                onClick={handleCancelar}
                backgroundColor="#c62828"
                hoverBackgroundColor="#b71c1c"
              />
            </div>
          </div>
        </div>
  
        <div className="perfil-seccion datos-seccion">
          <Etiqueta 
            text="Datos personales" 
            fontSize="22px" 
            textColor="white" 
            padding="10px 0" 
            className="seccion-titulo"
          />
          <div className="datos-contenido">
            {editando ? (
              <div className="datos-formulario">
                <div className="dato-grupo">
                  <label>Nombre:</label>
                  <input 
                    type="text" 
                    name="nombre" 
                    value={datosUsuario.nombre} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="dato-grupo">
                  <label>Email:</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={datosUsuario.email} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="dato-grupo">
                  <label>Teléfono:</label>
                  <input 
                    type="tel" 
                    name="telefono" 
                    value={datosUsuario.telefono} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="dato-grupo">
                  <label>Dirección:</label>
                  <input 
                    type="text" 
                    name="direccion" 
                    value={datosUsuario.direccion} 
                    onChange={handleInputChange}
                  />
                </div>
                <Boton 
                  text="Guardar" 
                  onClick={handleGuardarCambios}
                  backgroundColor="#00897b"
                  hoverBackgroundColor="#00796b"
                />
              </div>
            ) : (
              <div className="datos-visualizacion">
                <div className="dato-item">
                  <Etiqueta text="Nombre" textColor="#90caf9" padding="4px 8px" />
                  <span>{datosUsuario.nombre}</span>
                </div>
                <div className="dato-item">
                  <Etiqueta text="Email" textColor="#90caf9" padding="4px 8px" />
                  <span>{datosUsuario.email}</span>
                </div>
                <div className="dato-item">
                  <Etiqueta text="Teléfono" textColor="#90caf9" padding="4px 8px" />
                  <span>{datosUsuario.telefono}</span>
                </div>
                <div className="dato-item">
                  <Etiqueta text="Dirección" textColor="#90caf9" padding="4px 8px" />
                  <span>{datosUsuario.direccion}</span>
                </div>
              </div>
            )}
            
            {!editando && (
              <div className="datos-acciones">
                <Boton 
                  text="Editar" 
                  onClick={handleEditar}
                  backgroundColor="#1565c0"
                  hoverBackgroundColor="#0d47a1"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default PerfilUsuario;