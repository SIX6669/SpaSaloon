import { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto
const AuthContext = createContext(null);

// Proveedor del contexto que almacenará el estado de autenticación
export const AuthProvider = ({ children }) => {
  // Estado para almacenar la información del usuario autenticado
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar si hay un usuario guardado en localStorage al cargar la página
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    // Guardar en localStorage para persistencia
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // Eliminar del localStorage
    localStorage.removeItem('user');
  };

  // Valor a proporcionar al contexto
  const value = {
    user,
    isAuthenticated,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};