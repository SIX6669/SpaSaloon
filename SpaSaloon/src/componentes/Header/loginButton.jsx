import { useState } from 'react';

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="login-container">
      <button 
        className="login-button" 
        onClick={toggleSidebar}
      >
        Log In
      </button>
      
      {isOpen && (
        <div className="login-sidebar">
          {/* Aquí se añadirá el formulario de login en el futuro */}
          <button 
            className="close-button"
            onClick={toggleSidebar}
          >
            &times;
          </button>
          <div className="sidebar-content">
            <h2>Iniciar Sesión</h2>
            {/* Contenido del sidebar (por ahora vacío) */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginButton;