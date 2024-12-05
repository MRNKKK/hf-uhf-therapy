import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LanguageProvider } from './providers/LanguageContext';
import { TypeProvider } from './providers/TypeContext';
import { TemperatureProvider } from './providers/TemperatureContext';
import { TimeProvider } from './providers/TimeContext';
import React, { useContext } from 'react';

import Header from './components/Header/Header';
import LanguageButton from './components/LanguageButton/LanguageButton';
import MainPart from './components/MainPart/MainPart';
import Table from './components/Tables/Table';
import TheoreticalPart from './components/TheoreticalPart/TheoreticalPart';
import TestingPart from './components/TestingPart/TestingPart';
import LanguageContext from './providers/LanguageContext';

import './App.css';

function HomePage() {
  const { isEnglish } = useContext(LanguageContext);  

  return (
    <div className="home-page">
      <div className="info-container">
        <div className="info-block">
          <h2><b>{isEnglish ? 'Purpose of the Work' : 'Мета роботи'}</b></h2>
          <p>
            {isEnglish ? '1. To familiarize yourself with the structure, principle of operation and method of operation of the ultrasonic therapy device.' : '1. Ознайомитися з будовою, принципом дії та методикою експлуатації апарата УВЧ-терапії.'}
          </p>
          <p>
            {isEnglish ? '2. Investigate the effect of electric and magnetic fields of UHF and the environment (model) that simulates the conductive and diaplectric properties of biological tissues.' : '2. Дослідити дію електричного і магнітного полів УВЧ та середовища(моделі), що імітують електропровідні і діалектричні властивості біологічних тканин.'}
          </p>
          <h2><b>{isEnglish ? 'Equipment and Materials' : 'Обладнання і матеріали'}</b></h2>
          <p>
            {isEnglish ? '1. UHF-30 device.' : '1. Апарат УВЧ-30.'}
          </p>
          <p>
            {isEnglish ? '2. Applicator of eddy currents EBC-1 and indicator (fluorescent or neon lamp).' : '2. Аплікатор вихрових струмів ЕВС-1 та індикатор (люмінесцентна або неонова лампа).'}
          </p>
          <p>
            {isEnglish ? '3. A device for studying the effect of electric and magnetic fields of UHF on media (electrolyte, castor oil or glycerin).' : '3. Пристрій для вивчення дії електричного і магнітного полів УВЧ на середовища (електроліт, касторове масло або гліцерин).'}
          </p>
          <p>
            {isEnglish ? '4. Stopwatch.' : '4. Секундомір.'}
          </p>
        </div>
      </div>

      <div className="buttons">
        <Link to="/theory">
          <button className="home-page-button">{isEnglish ? 'Theoretical information' : 'Теоретичні відомості'}</button>
        </Link>
        <Link to="/testing">
          <button className="home-page-button">{isEnglish ? 'Testing' : 'Тестування'}</button>
        </Link>
        <Link to="/practice">
          <button className="home-page-button">{isEnglish ? 'Practical Part' : 'Практична Частина'}</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <TypeProvider>
        <TimeProvider>
          <TemperatureProvider>
            <Router>
              <div className="App">
                <Header />
                <LanguageButton />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/theory" element={<TheoreticalPart />} />
                  <Route path="/testing" element={<TestingPart />} />
                  <Route path="/practice" element={<MainPart />} />
                </Routes>
                <Table />
              </div>
            </Router>
          </TemperatureProvider>
        </TimeProvider>
      </TypeProvider>
    </LanguageProvider>
  );
}

export default App;
