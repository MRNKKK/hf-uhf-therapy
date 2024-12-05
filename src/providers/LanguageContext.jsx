import { createContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isEnglish, setEnglish] = useState(false);

  return (
    <LanguageContext.Provider value={{ isEnglish, setEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
