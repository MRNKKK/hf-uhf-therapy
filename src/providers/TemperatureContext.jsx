import { createContext, useState } from 'react';

const TemperatureContext = createContext();

export const TemperatureProvider = ({ children }) => {
  const [glTemp, setGlTemp] = useState(0);
  const [naclTemp, setNaclTemp] = useState(0);
  return (
    <TemperatureContext.Provider
      value={{ glTemp, setGlTemp, naclTemp, setNaclTemp }}
    >
      {children}
    </TemperatureContext.Provider>
  );
};

export default TemperatureContext;
