import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../../styles/OptionList.css"

const OptionList = ({
  options,
  onSelect,
  multiSelect = false,
  initialSelected = [],
  renderItem,
  emptyMessage = "No hay opciones disponibles",
  className = "",
  itemClassName = "",
  selectedItemClassName = "selected",
  searchable = false,
  searchPlaceholder = "Buscar...",
}) => {
  const [selected, setSelected] = useState(initialSelected);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar opciones basadas en el término de búsqueda
  const filteredOptions = searchTerm
    ? options.filter(option => 
        typeof option === 'string'
          ? option.toLowerCase().includes(searchTerm.toLowerCase())
          : option.label && option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const handleSelect = (option) => {
    let newSelected;
    
    if (multiSelect) {
      // Para selección múltiple, toggle la opción seleccionada
      const optionId = typeof option === 'object' ? option.id || option.value : option;
      const isSelected = selected.some(item => 
        typeof item === 'object' 
          ? (item.id || item.value) === optionId 
          : item === optionId
      );
      
      if (isSelected) {
        newSelected = selected.filter(item => 
          typeof item === 'object' 
            ? (item.id || item.value) !== optionId 
            : item !== optionId
        );
      } else {
        newSelected = [...selected, option];
      }
    } else {
      // Para selección única, reemplaza la selección
      newSelected = [option];
    }
    
    setSelected(newSelected);
    
    // Notificar al componente padre sobre el cambio
    if (onSelect) {
      onSelect(multiSelect ? newSelected : option);
    }
  };

  const isItemSelected = (option) => {
    const optionId = typeof option === 'object' ? option.id || option.value : option;
    return selected.some(item => 
      typeof item === 'object' 
        ? (item.id || item.value) === optionId 
        : item === optionId
    );
  };

  // Renderizar cada opción
  const renderOption = (option, index) => {
    const isSelected = isItemSelected(option);
    const combinedClassName = `option-item ${itemClassName} ${isSelected ? selectedItemClassName : ''}`;
    
    // Si se proporciona una función renderItem personalizada, úsala
    if (renderItem) {
      return (
        <li 
          key={typeof option === 'object' ? (option.id || option.value || index) : option}
          className={combinedClassName}
          onClick={() => handleSelect(option)}
        >
          {renderItem(option, isSelected)}
        </li>
      );
    }
    
    // Renderizado predeterminado
    return (
      <li 
        key={typeof option === 'object' ? (option.id || option.value || index) : option}
        className={combinedClassName}
        onClick={() => handleSelect(option)}
      >
        {typeof option === 'object' ? (option.label || option.name) : option}
      </li>
    );
  };

  return (
    <div className={`option-list-container ${className}`}>
      {searchable && (
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchPlaceholder}
            className="search-input"
          />
        </div>
      )}
      
      {filteredOptions.length > 0 ? (
        <ul className="option-list">
          {filteredOptions.map(renderOption)}
        </ul>
      ) : (
        <div className="empty-message">{emptyMessage}</div>
      )}
    </div>
  );
};

OptionList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string,
        name: PropTypes.string,
      })
    ])
  ).isRequired,
  onSelect: PropTypes.func,
  multiSelect: PropTypes.bool,
  initialSelected: PropTypes.array,
  renderItem: PropTypes.func,
  emptyMessage: PropTypes.string,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  selectedItemClassName: PropTypes.string,
  searchable: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
};

export default OptionList;