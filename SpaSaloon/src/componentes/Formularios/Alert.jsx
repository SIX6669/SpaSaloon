import React, { useState, useEffect, createContext, useContext } from 'react';
import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from 'lucide-react';
import '../../styles/Alert.css';

// Crear el contexto para las notificaciones
const NotificationContext = createContext();

// Proveedor de notificaciones
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Agregar una nueva notificación
  const addNotification = (notification) => {
    const id = Date.now().toString(); // ID único
    setNotifications(prev => [...prev, { ...notification, id }]);
    
    // Auto-eliminar si tiene duración
    if (notification.duration) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration);
    }
    
    return id;
  };

  // Eliminar una notificación
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};

// Hook para usar el contexto de notificaciones
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification debe usarse dentro de un NotificationProvider');
  }
  return context;
};

// Componente individual de notificación
const Notification = ({
  id,
  type = 'info',
  title,
  message,
  icon,
  duration = 3000,
  onDismiss,
  className = '',
  iconSize = 24,
  bordered = false,
  customColors,
}) => {
  // Determinar clases CSS basadas en el tipo
  const getNotificationClasses = () => {
    const baseClass = 'notification';
    let typeClass = `notification-${type}`;
    
    if (customColors) {
      typeClass = 'notification-custom';
    }
    
    let classes = `${baseClass} ${typeClass}`;
    
    if (bordered) {
      classes += ' notification-bordered';
    }
    
    if (className) {
      classes += ` ${className}`;
    }
    
    return classes;
  };

  // Determinar el icono basado en el tipo
  const getIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case 'success':
        return <CheckCircle size={iconSize} />;
      case 'error':
        return <AlertCircle size={iconSize} />;
      case 'warning':
        return <AlertTriangle size={iconSize} />;
      default:
        return <Info size={iconSize} />;
    }
  };

  const handleDismiss = () => {
    if (onDismiss) onDismiss(id);
  };

  // Estilos inline para colores personalizados si se proporcionan
  const customStyles = customColors ? {
    backgroundColor: customColors.bg,
    color: customColors.text,
    borderColor: customColors.border
  } : {};

  return (
    <div
      className={getNotificationClasses()}
      style={customStyles}
      role="alert"
    >
      {/* Icono */}
      <div className={`notification-icon ${customColors ? '' : `notification-icon-${type}`}`}>
        {getIcon()}
      </div>
      
      {/* Contenido */}
      <div className="notification-content">
        {title && (
          <h4 className="notification-title">
            {title}
          </h4>
        )}
        <div className={`notification-message ${title ? 'notification-message-with-title' : ''}`}>
          {message}
        </div>
      </div>
      
      {/* Botón para cerrar */}
      <button 
        type="button"
        className="notification-close"
        onClick={handleDismiss}
        aria-label="Cerrar"
      >
        <X size={20} />
      </button>
    </div>
  );
};

// Contenedor para todas las notificaciones
const NotificationContainer = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div className="notification-container">
      <div className="notification-wrapper">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            id={notification.id}
            {...notification}
            onDismiss={removeNotification}
          />
        ))}
      </div>
    </div>
  );
};

// Componente de demostración
export const NotificationDemo = () => {
  const { addNotification } = useNotification();

  // Funciones de ejemplo para mostrar diferentes tipos de notificaciones
  const showSuccess = () => {
    addNotification({
      type: 'success',
      title: '¡Operación exitosa!',
      message: 'Los cambios han sido guardados correctamente.',
      duration: 3000,
    });
  };

  const showError = () => {
    addNotification({
      type: 'error',
      title: 'Error',
      message: 'No se pudo completar la operación. Intente nuevamente.',
      duration: 5000,
    });
  };

  const showWarning = () => {
    addNotification({
      type: 'warning',
      title: 'Advertencia',
      message: 'Esta acción no se puede deshacer.',
      duration: 4000,
    });
  };

  const showInfo = () => {
    addNotification({
      type: 'info',
      title: 'Información',
      message: 'Esta es una notificación informativa.',
      duration: 4000,
    });
  };

  const showCustom = () => {
    addNotification({
      title: 'Notificación personalizada',
      message: 'Este es un mensaje personalizado con colores propios.',
      customColors: {
        bg: '#f3e8ff',
        text: '#6b21a8',
        border: '#d8b4fe'
      },
      bordered: true,
      duration: 4000,
    });
  };

  return (
    <div className="demo-container">
      <h1 className="demo-title">Sistema de Notificaciones</h1>
      <div className="demo-buttons">
        <button onClick={showSuccess} className="demo-button demo-button-success">
          Mostrar éxito
        </button>
        <button onClick={showError} className="demo-button demo-button-error">
          Mostrar error
        </button>
        <button onClick={showWarning} className="demo-button demo-button-warning">
          Mostrar advertencia
        </button>
        <button onClick={showInfo} className="demo-button demo-button-info">
          Mostrar info
        </button>
        <button onClick={showCustom} className="demo-button demo-button-custom">
          Mostrar personalizada
        </button>
      </div>
    </div>
  );
};