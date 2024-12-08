import "./TheoreticalPart.css";
import "katex/dist/katex.min.css";

import LanguageContext from '../../providers/LanguageContext';
import React, { useEffect, useRef, useContext } from 'react';
import katex from 'katex';
import { Link } from 'react-router-dom';
import schemeImage from '../../assets/schemeImage.png'

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

function TheoreticalPart() {

  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="theoretical-part">
     <h1>{isEnglish 
        ? 'Theoretical information. Laboratory work: “Study of devices and methods of UHF therapy with electric and magnetic fields and high frequency current.' 
        : 'Теоретичні відомості. Лабораторна робота: "Вивчення апаратів і методів УВЧ-терапії електричним і магнітним полями та вч-струмом.'}</h1>

        <p>
            {isEnglish 
            ? 'In the laboratory work, the UHF-30 apparatus is used, a simplified block diagram of which is shown in Figure 1.1. The device consists of a power supply unit (PSU), an interference suppressor (ISU), a tube generator (TG), a therapeutic circuit (TC), and devices called patient electrodes (PE) and eddy current applicators (EC-1). The latter two are used to provide local therapeutic effects on the patient`s body tissues by electric and magnetic fields of ultra-high frequency (UHF, abbreviated as UHF), respectively. '
            : 'В лабораторній роботі використовується апарат УВЧ-30, спрощена блок-схема якого зображена на рисунку 1.1. Апарат складається з блоку живлення (ДЖ), перешкодоусуваючого пристрою (ПП), лампового генератора (ЛГ), терапевтичного контура (ТК), і пристосувань, які називаються електродами пацієнта (ЕП) та аплікатори вихрових струмів (ЕВС-1). Два останні використовуються для здійснення локального терапевтичного впливу на тканини організму пацієнта відповідно електричним і магнітним полям ультрависокої частоти (скорочено УВЧ).'}
        </p>

        <div className="image-container">
          <img src={schemeImage} alt="Спрощена схема апарату УВЧ-30" />
          <p className="image-caption">{isEnglish ? 'Figure 1.1 - Simplified diagram of the UHF-30 device' : 'Рисунок 1.1 - Спрощена схема апарату УВЧ-30'}</p>
        </div>

        <h3>
          <b>
            {isEnglish 
            ? 'Purpose of the blocks and elements of the UHF therapy device'
            : 'Призначення блоків і елементів апарата УВЧ-терапії'}
          </b>
        </h3>

        <p
          dangerouslySetInnerHTML={{
            __html: isEnglish 
              ? 'The lamp generator creates electromagnetic oscillations, the frequency of which is set by the inductance and capacitance of the oscillating circuit included in the anode circuit of the generator lamp. The therapeutic circuit L<sub>t</sub>C<sub>t</sub>, connected inductively to the oscillating circuit L<sub>a</sub>C<sub>a</sub>, receives the energy of electromagnetic oscillations from it and transfers it to the EP or EWC-1 devices connected to its output. In this case, the greatest energy transfer is achieved at the resonance of the circuits, which is carried out by adjusting the capacitance of the capacitor C. The moment of resonance is recorded by the maximum deviation of the indicator arrow included in the anode circuit of the lamp. The power supply unit converts the AC mains voltage into voltages that ensure the operation of the lamp generator. The interference suppressor prevents UHF electromagnetic oscillations from penetrating the AC power grid.' 
              : 'Ламповий генератор створює електромагнітні коливання, частота яких задається значеннями індуктивності і ємності коливального контура, ввімкненого в анодне коло генераторної лампи. Терапевтичний контур L<sub>t</sub>C<sub>t</sub>, зв`язаний індуктивно з коливальним контуром L<sub>a</sub>C<sub>a</sub>, сприймає від нього енергію електромагнітних коливань і передає її на пристосування ЕП чи ЕВС-1, які підключаються до його виходу. При цьому найбільша передача енергії досягається при резонансі контурів, що здійснюється шляхом регулювання ємності конденсатора Ст. Момент появи резонансу фіксується за максимальним відхиленням стрілки індикатора, ввімкненого в анодне коло лампи. Блок живлення перетворює напругу мережі змінного струму в напруги, котрі забезпечують роботу лампового генератора. Перешкодоусуваючий пристрій запобігає проникненню електромагнітних коливань УВЧ в електромережу змінного струму.'
          }}
        />

        <h3>
          <b>
            {isEnglish 
            ? 'Technical characteristics of the UHF-30 device'
            : 'Технічна характеристика апарату УВЧ-30'}
          </b>
        </h3>

        <p>
            {isEnglish 
            ? 'The technical characteristics of the UHF-30 device have a generator frequency of 40.68 MHz ± 2%, output power for the first stage (15±3) W, for the second stage - (30±5) W, AC power supply with a frequency of 50 Hz, voltage of 127 or 220 V, power consumption from the network 200 W, overall dimensions of the device body 425x275x230 mm, total weight 10 kg. The UHF-30 portable device is intended for local therapeutic effect on body tissues by electric or magnetic fields of UHF and is used in the clinic for the treatment of neurological, skin, otolaryngological, dental and other diseases manifested in adults and children. The small dimensions and weight of the device allow it to be used not only in physiotherapy rooms, but also at the patient`s bedside during inpatient treatment or in outpatient settings.'
            : 'Технічна характеристика апарата УВЧ-30 має частоту генератора 40,68 МГц±2%, вихідну потужність для першого ступеня (15±3) Вт, для другого - (30±5) Вт, живлення від мережі змінного струму з частотою 50 Гц, напругою 127 чи 220 В, споживана потужність з мережі 200 Вт, габаритні розміри корпусу апарата 425х275х230 мм, загальна маса 10 кг. Портативний апарат УВЧ-30 призначений для місцевої лікувальної дії на тканини організму електричним чи магнітним полями УВЧ і використовується в клініці при лікуванні неврологічних, шкіряних, отоларингологічних, стоматологічних та інших захворювань, які проявляються в дорослих і в дітей. Малі габарити і маса апарата дозволяють використовувати його не тільки в фізіотерапевтичних кабінетах, але і біля ліжка хворого при стаціонарному лікуванні чи в амбулаторних умовах.'}
        </p>

        <h3>
          <b>
            {isEnglish 
            ? 'The mechanism of action of the UHF electric field on electrolytes and dielectrics'
            : 'Механізм дії електричного поля УВЧ на електроліти та діелектрики'}
          </b>
        </h3>
          
        <p
          dangerouslySetInnerHTML={{
            __html: isEnglish
              ? 'If you place an electrolyte in a UHF electric field, its ions will make forced oscillatory movements with the field frequency. This motion of the ions causes the conversion of the electric field energy into the internal energy of the electrolyte and causes it to heat up. The amount of heat released in a unit volume of electrolyte per unit time (q = Q / (V ∆t)) can be calculated by formula (1.1):'
              : 'Якщо помістити електроліт в електричне поле УВЧ, то його іони будуть здійснювати вимушені коливальні рухи з частотою поля. Такий рух іонів зумовлює перетворення енергії електричного поля у внутрішню енергію електроліту і викликає його нагрівання. Кількість теплоти, яка виділяється в одиниці об`єму електроліту за одиницю часу (q = Q / (V ∆t)), можна обчислити за формулою (1.1):'
          }}
        />


        <div className="formula-container">
          <Formula equation="q_c = \frac{k E^2}{p}" />
          <span className="formula-number">(1.1)</span>
        </div>

        <p>
            {isEnglish 
            ? 'where E is the effective value of the electric field intensity; p is the resistivity of the electrolyte; k is the proportionality coefficient (in SI k = 1).'
            : 'де Е – ефективне значення напруженості електричного поля; p – питомий опір електроліту; k – коефіцієнт пропорційності (в СІ k =1).'}
        </p>

        <p
          dangerouslySetInnerHTML={{
            __html: isEnglish
              ? 'When a dielectric is placed in a UHF electric field, the latter causes an orientational polarization of the molecules that varies with the field frequency. The rotational and oscillatory motions of the polarized molecules lag behind in phase relative to the oscillations of the external UHF electric field, which is accompanied by energy losses called dielectric losses. These losses are accounted for by the dielectric loss tangent (tg<sub>δ</sub>) and depend on the nature of the interaction between the molecules. As a result, the energy of the electric field is converted into the internal energy of the dielectric and it heats up. The amount of heat released in a unit volume per unit time can be calculated by formula (1.2):'
              : 'При розташуванні діелектрика в електричному полі УВЧ, останнє викликає орієнтаційну поляризацію молекул, яка змінюється з частотою поля. Обертально-коливальні рухи поляризованих молекул відстають за фазою відносно коливань зовнішнього електричного поля УВЧ, що супроводжується втратами енергії, які називаються діелектричними. Ці втрати враховуються тангенсом кута діелектричних втрат (tg<sub>δ</sub>) і залежать від характеру взаємодії молекул між собою. В кінцевому результаті енергія електричного поля перетворюється у внутрішню енергію діелектрика і він нагрівається. Кількість теплоти, яка виділяється в одиниці об`єму за одиницю часу можна обчислити за формулою (1.2):'
          }}
        />

        <div className="formula-container">
          <Formula equation="q_{\partial} = k \omega \varepsilon \varepsilon_0 E^2 \tg{\delta}" />
          <span className="formula-number">(1.2)</span>
        </div>

        <p>
            {isEnglish 
            ? 'where k is the proportionality coefficient; ε is the relative permittivity of the dielectric; ε_0 is the electrical constant; ω is the circular frequency; E is the effective electric field strength; δ is the dielectric loss angle.'
            : 'де k – коефіцієнт пропорційності; ε – відносна діелектрична проникливість діелектрика; ε_0 – електрична стала; ω – кругова частота; E – ефективна напруженість електричного поля; δ – кут діелектричних втрат.'}
        </p>

        <p>
            {isEnglish 
            ? 'The described mechanisms of action of the UHF electric field on an electrolyte and a dielectric can be used to assess the effect of this physical factor on the tissues of a living organism. From the point of view of electrical conductivity, body tissues have electrical properties of both electrolytes and dielectrics and are distributed over the volume. In some tissues, electrolytic properties are more pronounced, and in others - dielectric. Therefore, the resulting thermal effect in them under the action of the UHF electric field is calculated by the formula (1.3):'
            : 'Описані механізми дії електричного поля УВЧ на електроліт і діелектрик можуть бути використані для оцінки впливу вказаного фізичного фактора на тканини живого організму. З точки зору електропровідності, тканини організму мають електричні властивості як електролітів, так і діелектриків і розподілені по об`єму. В одних тканинах більше виражені електролітичні властивості, а в інших - діелектричні. Тому отримуваний тепловий ефект в них при дії електричного поля УВЧ розраховується за формулою (1.3): '}
        </p>

        <div className="formula-container">
          <Formula equation="q = q_e + q_{\partial}" />
          <span className="formula-number">(1.3)</span>
        </div>

        <h3>
          <b>
            {isEnglish 
            ? 'The mechanism of action of the UHF magnetic field on body tissues'
            : 'Механізм дії магнітного поля УВЧ на тканини організму'}
          </b>
        </h3>

        <p
          dangerouslySetInnerHTML={{
            __html: isEnglish
              ? 'When an electrolyte is placed in a UHF magnetic field, the latter creates eddy currents in it as a conductor of electric current, the energy of which is converted into heat in accordance with the Joule-Lenz law (Q=kI<sup>2</sup> Rt). The amount of heat released per unit volume per unit time is calculated by formula (1.4):'
              : 'При розташуванні електроліта в магнітному полі УВЧ останнє створює в ньому, як провіднику електричного струму, вихрові струми, енергія яких у відповідності з законом Джоуля-Ленца (Q=kI<sup>2</sup> Rt) перетворюється в теплову. Кількість теплоти, яка виділяється в одиниці об`єму за одиницю часу, обчислюється за формулою (1.4):'
          }}
        />
        
        <div className="formula-container">
          <Formula equation="q = k \gamma \omega^2 B^2" />
          <span className="formula-number">(1.4)</span>
        </div>
            
        <p>
          {isEnglish 
          ? 'where k is the proportionality coefficient; γ is the specific electrical conductivity; ω is the circular frequency; B is the effective value of magnetic field induction.'
          : 'де k – коефіцієнт пропорційності; γ – питома електропровідність; ω – кругова частота; B – ефективне значення індукції магнітного поля.'}
        </p>

        <p>
          {isEnglish
          ? 'Obviously, the magnetic field of UHF acts on those tissues of a living organism that are conductive, that is, rich in electrolytes, for example: muscles, blood, lymph, etc.'
          : 'Очевидно, магнітне поле УВЧ діє на ті тканини живого організму, котрі є струмопровідними, тобто, багаті електролітами, наприклад: м`язи, кров, лімфа, тощо.'}
        </p>
            
        <h3>
          <b>
            {isEnglish 
            ? 'The mechanism of action of RF currents on body tissues'
            : 'Механізм дії ВЧ-струмів на тканини організму'}
          </b>
        </h3>

        <p>
          {isEnglish 
          ? 'When high-frequency current passes through the body tissues. Joule heat is released in them. The amount of heat released per unit volume per unit time is calculated by formula (1.5):'
          : 'При проходженні струму високої частоти через тканини організму. У них виділяється джоулеве тепло. Кількість теплоти, що виділяється в одиниці об`єму за одиницю часу, обчислюється за формулою (1.5):'}
        </p>

        <div className="formula-container">
          <Formula equation="q = k j^2 p" />
          <span className="formula-number">(1.5)</span>
        </div>
            

        <p>
            {isEnglish 
            ? 'where j is the current density; p is the resistivity of the body tissue.'
            : 'де j – густина струму; p – питомий опір тканини організму.'}
        </p>

        <p>
            {isEnglish 
            ? 'From all the above-mentioned mechanisms of influence of electric and magnetic fields of UHF and HF, high-frequency currents on body tissues, it can be concluded that the primary therapeutic effect is the thermal effect. At the same time, scientists suggest that there are other mechanisms associated with the activation of biochemical and physiological processes. Отримані нові факти остаточно ще не вивчені і є предметом подальших детальних медико-біологічних і біофізичних досліджень.'
            : 'З усього розглянутого про механізми впливу електричного і магнітного полів УВЧ та ВЧ, високочастотних струмів на тканини організму можна зробити висновок про те, що первинною терапевтичною дією є тепловий ефект. Разом з тим вчені висловлюють думку про існування інших механізмів, пов`язаних з активацією біохімічних і фізіологічних процесів. Отримані нові факти остаточно ще не вивчені і є предметом подальших детальних медико-біологічних і біофізичних досліджень.'}
        </p>

        <div className="buttontheory-container">
            <Link to="/testing">
              <button className="theory-button">
                {isEnglish ? 'Go to testing' : 'Перейти до тестування'}
              </button>
            </Link>
        </div>
    </div>
  );
};

export default TheoreticalPart;