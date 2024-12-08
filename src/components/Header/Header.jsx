import { useContext } from 'react';
import LanguageContext from '../../providers/LanguageContext';

import './Header.css';

export default function Header() {
  const { isEnglish } = useContext(LanguageContext);
  return (
    <h1 className="display-4 header">
      {isEnglish
        ? 'STUDY OF DEVICES AND METHODS OF HF AND UHF THERAPY'
        : 'ВИВЧЕННЯ АПАРАТІВ І МЕТОДІВ ВЧ- ТА УВЧ-ТЕРАПІЇ'}
    </h1>
  );
}
