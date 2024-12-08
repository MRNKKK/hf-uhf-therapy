import { createContext, useState } from 'react';

const TypeContext = createContext();

export const TypeProvider = ({ children }) => {
  const [isElectric, setElectric] = useState(true);
  const [tableIsShown, setTableIsShown] = useState(false);

  return (
    <TypeContext.Provider
      value={{ isElectric, setElectric, tableIsShown, setTableIsShown }}
    >
      {children}
    </TypeContext.Provider>
  );
};

export default TypeContext;
