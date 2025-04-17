import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../styles/Calendario.css';

const Calendario = ({
  backgroundColor = '#e6f2ff',         // Fondo del calendario
  borderColor = '#2980b9',             // Color del borde
  borderRadius = '8px',                // Radio del borde
  headerBackgroundColor = '#3498db',   // Color de fondo del encabezado
  headerTextColor = '#ffffff',         // Color del texto del encabezado
  dayColor = '#333333',                // Color del texto de los días
  selectedDayBackground = '#2980b9',   // Color de fondo del día seleccionado
  selectedDayColor = '#ffffff',        // Color del texto del día seleccionado
  todayBackground = '#a9cce3',         // Color de fondo del día actual
  todayColor = '#1a5276',              // Color del texto del día actual
  fontFamily = "'Arial', sans-serif",  // Fuente
  fontSize = '14px',                   // Tamaño de fuente
  weekendColor = '#7fb3d5',            // Color de los fines de semana
  disabledDayColor = '#bdc3c7',        // Color de los días deshabilitados
  // Otras opciones
  onDateChange = null,                 // Función para manejar el cambio de fecha
  minDate = null,                      // Fecha mínima seleccionable
  maxDate = null,                      // Fecha máxima seleccionable
  initialValue = new Date(),           // Valor inicial
  allowMultiSelect = false,            // Permitir selección múltiple
}) => {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (newValue) => {
    setValue(newValue);
    if (onDateChange) {
      onDateChange(newValue);
    }
  };
  
  const calendarStyles = {
    '--background-color': backgroundColor,
    '--border-color': borderColor,
    '--border-radius': borderRadius,
    '--header-background-color': headerBackgroundColor,
    '--header-text-color': headerTextColor,
    '--day-color': dayColor,
    '--selected-day-background': selectedDayBackground,
    '--selected-day-color': selectedDayColor,
    '--today-background': todayBackground,
    '--today-color': todayColor,
    '--font-family': fontFamily,
    '--font-size': fontSize,
    '--weekend-color': weekendColor,
    '--disabled-day-color': disabledDayColor,
  };
  
  return (
    <div className="custom-calendar-container" style={calendarStyles}>
      <Calendar
        onChange={handleChange}
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        selectRange={allowMultiSelect}
        className="custom-calendar"
      />
    </div>
  );
};

export default Calendario;