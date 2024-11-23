import { useContext, useEffect, useState } from 'react';
import TypeContext from '../../providers/TypeContext';
import LanguageContext from '../../providers/LanguageContext';
import TemperatureContext from '../../providers/TemperatureContext';
import TimeContext from '../../providers/TimeContext';
import { electricTable, magneticTable } from '../../values/values.js';

import './Table.css';

export default function Table() {
  const { isElectric, tableIsShown } = useContext(TypeContext);
  const { isEnglish } = useContext(LanguageContext);
  const { setGlTemp, setNaclTemp } = useContext(TemperatureContext);
  const { currentIndex, setCurrentIndex, setIntervalId } =
    useContext(TimeContext);

  useEffect(() => {
    let id;

    if (tableIsShown) {
      // Якщо tableIsShown = true, тоді починаємо з поточного рядка
      id = setInterval(() => {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }, 60000);
      setIntervalId(id);
    } else {
      // Якщо tableIsShown = false, тоді починаємо з першого рядка
      setCurrentIndex(0);
    }

    return () => clearInterval(id);
  }, [tableIsShown]);

  const tableToShow = isElectric ? electricTable : magneticTable;

  return (
    <div
      style={tableIsShown ? { display: 'block' } : { display: 'none' }}
      className="table"
    >
      <h3>
        {isElectric && (
          <span>
            {isEnglish ? 'Electric UHF field' : 'Електричне поле УВЧ'}
          </span>
        )}
        {!isElectric && (
          <span>{isEnglish ? 'Magnetic UHF field' : 'Магнітне поле УВЧ'}</span>
        )}
      </h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              t, <span>{isEnglish ? 'min' : 'хв'}</span>
            </th>
            <th scope="col">
              T -
              <span>
                {isEnglish ? 'dielectric (glycerol)' : 'діелектрик (гліцерин)'}
              </span>
              , °C
            </th>
            <th scope="col">
              T -
              <span>
                {isEnglish
                  ? 'electrolyte (NaCl solution)'
                  : 'електроліт (pозчин NaCl)'}
              </span>
              , °C
            </th>
          </tr>
        </thead>
        <tbody>
          {tableToShow.slice(0, currentIndex + 1).map((row, index) => {
            if (tableIsShown) {
              setGlTemp(row.gl);
              setNaclTemp(row.nacl);
            }
            return (
              <tr key={index}>
                <td><span>{index}</span></td>
                <td><span>{row.gl}</span></td>
                <td><span>{row.nacl}</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
