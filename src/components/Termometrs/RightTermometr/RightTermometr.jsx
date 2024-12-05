import { useContext } from 'react';
import LanguageContext from '../../../providers/LanguageContext';
import TemperatureContext from '../../../providers/TemperatureContext';

export default function RightTermometr() {
  const { isEnglish } = useContext(LanguageContext);
  const { naclTemp } = useContext(TemperatureContext);
  return (
    <div className="col-4">
      <div id="wrapper2">
        <div id="termometer2">
          <div
            id="temperature2"
            style={{ height: `${naclTemp}%` }}
            data-value={`${naclTemp}°C`}
          ></div>
          <div id="graduations2"></div>
        </div>

        <h2 style={{ alignItems: 'center' }}>
          <span>{isEnglish ? 'ELECTROLYTE' : 'ЕЛЕКТРОЛІТ'}</span>
          <br />
          <span>{isEnglish ? '(NaCl solution)' : '( розчин NaCl )'}</span>
        </h2>
      </div>
    </div>
  );
}
