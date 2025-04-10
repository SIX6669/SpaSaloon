import React from 'react';
import '../styles/buttons.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button className={`spa-button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;