import { useState, useRef, useEffect } from 'react';
import Formulario from '../Formularios/formulario.jsx';
import Boton from '../Formularios/boton.jsx';
import OptionList from '../../componentes/Formularios/OptionList.jsx';
import { useAuth } from '../../componentes/PerfilUsuario/AuthContexts.jsx';
import { ChevronDown, User, Calendar, LogOut } from 'lucide-react';
import '../../styles/botonLogin.css';

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const menuRef = useRef(null);
  
  // Opciones del menú para usuario autenticado
  const userOptions = [
    { value: 'profile', label: 'Mi Perfil', icon: <User size={16} /> },
    { value: 'appointments', label: 'Mis Turnos', icon: <Calendar size={16} /> },
    { value: 'logout', label: 'Cerrar Sesión', icon: <LogOut size={16} /> }
  ];

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && showOptions) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions]);

  const toggleSidebar = () => {
    if (isAuthenticated) {
      // Si está autenticado, mostrar/ocultar el menú de opciones
      setShowOptions(!showOptions);
    } else {
      // Si no está autenticado, mostrar el formulario de login
      setIsOpen(!isOpen);
    }
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleOptionSelect = (option) => {
    setShowOptions(false);
    
    switch (option.value) {
      case 'profile':
        // Navegar al perfil del usuario
        console.log('Navegando al perfil');
        // Aquí podrías usar react-router: navigate('/profile')
        window.location.href = '#perfil';
        break;
      case 'appointments':
        // Navegar a la sección de turnos
        console.log('Navegando a mis turnos');
        // Aquí podrías usar react-router: navigate('/appointments')
        window.location.href = '#turnos';
        break;
      case 'logout':
        // Cerrar sesión
        logout();
        break;
      default:
        break;
    }
  };

  // Renderizado personalizado para las opciones del menú
  const renderMenuItem = (item) => (
    <div className="user-menu-item">
      <span className="user-menu-icon">{item.icon}</span>
      <span className="user-menu-label">{item.label}</span>
    </div>
  );

  return (
    <div className="login-container" ref={menuRef}>
      {isAuthenticated ? (
        <div className="user-menu">
          <button 
            className="user-menu-button" 
            onClick={toggleSidebar}
          >
            <span className="user-name">{user?.email || 'Usuario'}</span>
            <ChevronDown size={16} className={`chevron-icon ${showOptions ? 'rotated' : ''}`} />
          </button>
          
          {showOptions && (
            <div className="options-dropdown">
              <OptionList 
                options={userOptions}
                onSelect={handleOptionSelect}
                renderItem={renderMenuItem}
                className="user-menu-options"
              />
            </div>
          )}
        </div>
      ) : (
        <Boton
          text="Log In" 
          onClick={toggleSidebar}
          className="login-button"
        />
      )}
      
      {isOpen && !isAuthenticated && <Formulario onClose={closeSidebar} />}
    </div>
  );
};

export default LoginButton;