import { useState } from 'react';
import Formulario from '../Formularios/formulario.jsx';
import Boton from '../Formularios/boton.jsx';
import '../../styles/botonLogin.css';

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="login-container">
      <Boton
        text="Log In" 
        onClick={toggleSidebar}
        className="login-button"
      />
      
      {isOpen && <Formulario onClose={closeSidebar} />}
    </div>
  );
};

export default LoginButton;