import React, { useState } from 'react';
import Input from './input';
import Boton from './boton.jsx';
import '../../styles/formularioRegistro.css';
import { X } from 'lucide-react';

const Formulario = ({ onClose }) => {
  const [formMode, setFormMode] = useState('login'); // 'login', 'register', 'recovery', 'changePassword'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Limpiar mensajes de error cuando el usuario comienza a escribir
    if (passwordError && (name === 'newPassword' || name === 'confirmNewPassword')) {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formMode === 'login') {
      console.log('Iniciando sesión con:', formData.email, formData.password);
      // aca la logica de inicio
    } else if (formMode === 'register') {
      console.log('Registrando usuario:', formData);
      // aca la de registro
    } else if (formMode === 'recovery') {
      // Mostrar alerta de correo enviado
      alert(`Se ha enviado un correo para la recuperación de clave a: ${formData.email}`);
      // Regresar a la pantalla de inicio de sesión
      setFormMode('login');
    } else if (formMode === 'changePassword') {
      // Verificar que las nuevas contraseñas coincidan
      if (formData.newPassword !== formData.confirmNewPassword) {
        setPasswordError('Las nuevas contraseñas no coinciden');
        return;
      }
      
      // Procesar el cambio de contraseña
      console.log('Cambiando contraseña para:', formData.email);
      alert('¡Cambio de contraseña exitoso!');
      // Regresar a la pantalla de inicio de sesión
      setFormMode('login');
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    });
    setPasswordError('');
  };

  const toggleForm = () => {
    setFormMode(formMode === 'login' ? 'register' : 'login');
    resetForm();
  };

  const goToPasswordRecovery = () => {
    setFormMode('recovery');
    // Mantener el email si el usuario ya lo había ingresado
    setFormData(prevState => ({
      ...prevState,
      password: '',
      confirmPassword: '',
      phone: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }));
  };

  const goToChangePassword = () => {
    setFormMode('changePassword');
    // Mantener el email si el usuario ya lo había ingresado
    setFormData(prevState => ({
      ...prevState,
      password: '',
      confirmPassword: '',
      phone: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }));
  };

  const goBackToLogin = () => {
    setFormMode('login');
    resetForm();
  };

  const getFormTitle = () => {
    switch(formMode) {
      case 'login': return 'Iniciar Sesión';
      case 'register': return 'Registrarse';
      case 'recovery': return 'Recuperación de Clave';
      case 'changePassword': return 'Cambio de Clave';
      default: return 'Iniciar Sesión';
    }
  };

  return (
    <div className="auth-sidebar">
      <div className="auth-sidebar-header">
        <h1>{getFormTitle()}</h1>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su correo electrónico"
            required
          />
        </div>

        {formMode === 'login' && (
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
        )}

        {formMode === 'login' && (
          <div className="forgot-password-container">
            <span 
              className="forgot-password-link" 
              onClick={goToChangePassword}
            >
              Cambiar clave
            </span>
            <span 
              className="forgot-password-link" 
              onClick={goToPasswordRecovery}
            >
              Olvidé mi clave
            </span>
          </div>
        )}

        {formMode === 'register' && (
          <>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Repetir Clave</label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirme su contraseña"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ingrese su número de teléfono"
                required
              />
            </div>
          </>
        )}

        {formMode === 'changePassword' && (
          <>
            <div className="form-group">
              <label htmlFor="currentPassword">Contraseña actual</label>
              <Input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Ingrese su contraseña actual"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">Nueva contraseña</label>
              <Input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Ingrese su nueva contraseña"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmNewPassword">Confirmar nueva contraseña</label>
              <Input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                placeholder="Confirme su nueva contraseña"
                required
              />
            </div>
            {passwordError && (
              <div className="error-message">
                {passwordError}
              </div>
            )}
          </>
        )}

        {formMode === 'recovery' && (
          <div className="recovery-message">
            Ingrese su correo electrónico y le enviaremos instrucciones para recuperar su contraseña.
          </div>
        )}

        <div className="auth-buttons">
          {formMode === 'recovery' ? (
            <>
              <Boton
                type="submit"
                text="Enviar correo de recuperación"
                fullWidth
              />
              <Boton
                type="button"
                text="Volver a inicio de sesión"
                backgroundColor="#1E6091"
                hoverBackgroundColor="#154B73"
                onClick={goBackToLogin}
                fullWidth
              />
            </>
          ) : formMode === 'changePassword' ? (
            <>
              <Boton
                type="submit"
                text="Cambiar contraseña"
                fullWidth
              />
              <Boton
                type="button"
                text="Volver a inicio de sesión"
                backgroundColor="#1E6091"
                hoverBackgroundColor="#154B73"
                onClick={goBackToLogin}
                fullWidth
              />
            </>
          ) : (
            <>
              <Boton
                type="submit"
                text={formMode === 'login' ? "Iniciar sesión" : "Confirmar registro"}
                fullWidth
              />
              <Boton
                type="button"
                text={formMode === 'login' ? "Registrarse" : "Volver a inicio de sesión"}
                backgroundColor="#1E6091"
                hoverBackgroundColor="#154B73"
                onClick={toggleForm}
                fullWidth
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Formulario;