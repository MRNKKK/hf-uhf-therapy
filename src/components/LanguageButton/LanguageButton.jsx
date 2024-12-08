import { useContext } from 'react';
import LanguageContext from '../../providers/LanguageContext';

import './LanguageButton.css';

export default function LanguageButton() {
  const { isEnglish, setEnglish } = useContext(LanguageContext);
  return (
    <div className="header__language">
      <div className="lg">
        <p>Українська</p>
      </div>
      <div className="form-check form-switch">
        <input
          id="switch-lang"
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={() => setEnglish(!isEnglish)}
        />
      </div>
      <div className="lg">
        <p>English</p>
      </div>
    </div>
  );
}
