import { useContext } from 'react';
import LanguageContext from '../../../providers/LanguageContext';
import TemperatureContext from '../../../providers/TemperatureContext';
import '../Termometr.css';

const LeftTermometr = () => {
  const { isEnglish } = useContext(LanguageContext);
  const { glTemp } = useContext(TemperatureContext);
  return (
    <div className="col-4">
      <div id="wrapper1">
        <div id="termometer1">
          <div
            id="temperature1"
            style={{ height: `${glTemp}%` }}
            data-value={`${glTemp}°C`}
          ></div>
          <div id="graduations1"></div>
        </div>

        <h2 style={{ alignItems: 'center' }}>
          <span>{isEnglish ? 'DIELECTRIC' : 'ДІЕЛЕКТРИК'}</span>
          <br />
          <span>{isEnglish ? '( glycerol )' : '( гліцерин )'}</span>
        </h2>
      </div>
    </div>
  );
};

export default LeftTermometr;
