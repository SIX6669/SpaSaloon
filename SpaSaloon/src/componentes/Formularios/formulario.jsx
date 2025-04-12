import React, { useState } from 'react';
import Input from './input';
import Boton from './boton.jsx';
import '../../styles/formularioRegistro.css';
import { X } from 'lucide-react';

const Formulario = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Iniciando sesión con:', formData.email, formData.password);
      // aca la logica de inicio
    } else {
      console.log('Registrando usuario:', formData);
      // aca la de registro
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // limpia campos
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    });
  };

  return (
    <div className="auth-sidebar">
      <div className="auth-sidebar-header">
        <h1>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h1>
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

        {!isLogin && (
          <>
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

        <div className="auth-buttons">
          <Boton
            type="submit"
            text={isLogin ? "Iniciar sesión" : "Confirmar registro"}
            fullWidth
          />
          
          <Boton
            type="button"
            text={isLogin ? "Registrarse" : "Volver a inicio de sesión"}
            backgroundColor="#1E6091"
            hoverBackgroundColor="#154B73"
            onClick={toggleForm}
            fullWidth
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;