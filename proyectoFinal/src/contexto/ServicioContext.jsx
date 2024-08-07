import React, { createContext, useContext, useState } from 'react';

const ServicioContext = createContext();
//hook para usar el contexto
export const useServicio = () => {
  return useContext(ServicioContext);
};


export const ServicioProvider = ({ children }) => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [acordeonKey, setAcordeonKey] = useState('');


  const seleccionarServicio = (servicioId, acordeonKey) => {
    setServicioSeleccionado(servicioId);
    setAcordeonKey(acordeonKey);
  };

  return (
    <ServicioContext.Provider value={{ servicioSeleccionado, acordeonKey, seleccionarServicio }}>
      {children}
    </ServicioContext.Provider>
  );
};