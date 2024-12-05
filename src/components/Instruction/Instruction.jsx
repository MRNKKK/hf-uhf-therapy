import React, { useEffect, useRef, useState, useContext } from 'react';
import './Instruction.css';
import LanguageContext from '../../providers/LanguageContext';
import katex from 'katex';

const Instruction = () => {
  const { isEnglish } = useContext(LanguageContext);

  const Formula = ({ equation }) => {
    const formulaRef = useRef(null);
  
    useEffect(() => {
      if (formulaRef.current) {
        katex.render(equation, formulaRef.current, {
          throwOnError: false,
        });
      }
    }, [equation]);
  
    return <span ref={formulaRef}></span>;
  };


  const initialData3 = [
    ['Густина і питома теплоємність досліджуваних речовин'],
    ['Речовина', 'с, ДЖ/(кг*град)', 'p, кг/м^3'],
    ['1%, р-н NaCl(електроліт)', '4200', '1000'],
    ['Касторове масло(діалектрик)', '2100', '960'],
    ['Гліцерин (діалектрик)', '2400', '1260'],
  ];

  const [tableData3, setTableData3] = useState(initialData3);

  const handleChange = (e, rowIndex, colIndex, setTableData, tableData) => {
    const newData = [...tableData];
    newData[rowIndex][colIndex] = e.target.value;
    setTableData(newData);
  };

  const renderTable = (tableData, setTableData, isReadOnly = false) => (
    <table className="data-table">
      <thead>
        {isReadOnly ? (
          <tr>
            <th colSpan={tableData[1].length}>{tableData[0][0]}</th>
          </tr>
        ) : (
          <tr>
            {tableData[0].map((header, index) => (
              <th key={index}>
                <span dangerouslySetInnerHTML={{ __html: header }} />
              </th>
            ))}
          </tr>
        )}
      </thead>
      <tbody>
        {tableData.slice(isReadOnly ? 1 : 1).map((row, rowIndex) => (
          <tr key={rowIndex + 1}>
            {row.map((value, colIndex) => (
              <td key={colIndex}>
                {isReadOnly || colIndex === 0 ? (
                  <span>{value}</span>
                ) : (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      handleChange(e, rowIndex + 1, colIndex, setTableData, tableData)
                    }
                    readOnly={isReadOnly}
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="instruction-content">
      <h2>{isEnglish ? 'Instructions' : 'Інструкція виконання практичного завдання'}</h2>
      <p>
        {isEnglish
          ? 'Here are the instructions for performing the task. Follow each step carefully.'
          : 'Ось інструкція для виконання завдання. Дотримуйтесь кожного кроку уважно.'}
      </p>
      <ol>
        <li>{isEnglish ? 'Step 1: Click the “Power” button.' : 'Крок 1: Виберіть потрібне поле - Електричне або Магнітне.'}</li>
        <li>{isEnglish ? 'Step 2: Click the “Start” button.' : 'Крок 2: Натисніть кнопку "Старт".'}</li>
        <p>{isEnglish ? '' : 'На вашому екрані запустився секундомір і термометр'}</p>
        <h3>{isEnglish ? '' : 'Обробка результатів досліджень.'}</h3>
        <li>
            {isEnglish
            ? 'Step 3. Build dependency graphs'
            : 'Крок 3. Побудувати графіки залежностей'}
            <Formula equation="t_e = f(t)"/> та <Formula equation="t_d = f(t)"/> {isEnglish ? 'characterizing the heating of the electrolyte and diaphragm in the electric and magnetic fields of UHF' : 'які характеризують нагрівання електроліту і діалектрика в електричному і магнітному полях УВЧ.'}
        </li>
        <li>
            {isEnglish 
            ? 'Step 4. Determine the average heating rate of the diaphragm and electrolyte in the electric and magnetic fields of the heating element using the formula:' 
            : 'Крок 4. Визначити середню швидкість нагрівання діалектрика і електроліту в електричному і магнітних полях увч за формулою:'} <Formula equation="v_d = \frac{\Delta t_d}{\Delta t} = \frac{t_{10}^0 - t_1^0}{t_{10} - t_0}"/> та  <Formula equation="v_e = \frac{\Delta t_e}{\Delta t} = \frac{t_{10}^0 - t_1^0}{t_{10} - t_0}"/>
        </li>
        <li>
            {isEnglish 
            ? 'Step 5. Calculate the amount of heat released per unit volume of the studied objects per unit time using the formula:' 
            : 'Крок 5. Обчислити кількість теплоти, яка виділяється в одиниці об`єму досліджуваних об`єктів за одиницю часу за формулою:'} <Formula equation="q = \frac{\Delta Q}{V \Delta t} = \frac{c m \Delta t^0}{V \Delta t} = c_p \frac{\Delta t^0}{\Delta t}"/>
        </li>
        <p>{isEnglish ? 'where p is the density of a substance; c is the specific heat capacity' : 'де p - густина речовини; c - питома теплоємність'}</p>
        <li>
            {isEnglish
            ? 'Step 6. Analyze the research results and record them in a report.'
            : 'Крок 6. Проаналізувати одержані результати досліджень і записати в звіт.'}
        </li>
        {renderTable(tableData3, setTableData3, true)}
      </ol>
    </div>
  );
};

export default Instruction;
