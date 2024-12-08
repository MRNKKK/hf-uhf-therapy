import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from '../../providers/LanguageContext';
import "./TestingPart.css";

const initialQuestions = [
  {
    "id": 1,
    "question": {
      "ua": "Якщо помістити електроліт в УВЧ електричне поле, то його...",
      "en": "If an electrolyte is placed in an UHF electric field, its..."
    },
    "options": [
      { "value": "1", "text": { "ua": "іони будуть здійснювати коливальні рухи з частотою поля", "en": "ions will make oscillatory motions at the frequency of the field" } },
      { "value": "2", "text": { "ua": "поляризовані молекули будуть здійснювати обертально-коливальні рухи з частотою поля", "en": "polarized molecules will make rotational-oscillatory motions at the frequency of the field" } },
      { "value": "3", "text": { "ua": "діполі будуть здійснювати коливальні рухи з частотою поля", "en": "dipoles will make oscillatory motions at the frequency of the field" } },
      { "value": "4", "text": { "ua": "всі відповіді вірні", "en": "all answers are correct" } }
    ],
    "correctAnswer": "4"
  },
  {
    "id": 2,
    "question": {
      "ua": "Якщо помістити діелектрик в УВЧ електричне поле, то його...",
      "en": "If a dielectric is placed in an UHF electric field, its..."
    },
    "options": [
      { "value": "1", "text": { "ua": "іони будуть здійснювати коливальні рухи з частотою поля", "en": "ions will make oscillatory motions at the frequency of the field" } },
      { "value": "2", "text": { "ua": "поляризовані молекули будуть здійснювати обертально-коливальні рухи з частотою поля", "en": "polarized molecules will make rotational-oscillatory motions at the frequency of the field" } },
      { "value": "3", "text": { "ua": "діполі будуть здійснювати коливальні рухи з частотою поля", "en": "dipoles will make oscillatory motions at the frequency of the field" } },
      { "value": "4", "text": { "ua": "всі відповіді вірні", "en": "all answers are correct" } }
    ],
    "correctAnswer": "4"
  },
  {
    "id": 3,
    "question": {
      "ua": "В тканинах організму при дії УВЧ електричного поля тепловий ефект складається з кількості теплоти, яка виділяється в...",
      "en": "In the tissues of the body, the thermal effect when exposed to an UHF electric field consists of the amount of heat emitted in..."
    },
    "options": [
      { "value": "1", "text": { "ua": "електроліті", "en": "electrolyte" } },
      { "value": "2", "text": { "ua": "діелектрику", "en": "dielectric" } },
      { "value": "3", "text": { "ua": "електролиті і діелектрику", "en": "electrolyte and dielectric" } },
      { "value": "4", "text": { "ua": "провіднику", "en": "conductor" } }
    ],
    "correctAnswer": "3"
  },
  {
    "id": 4,
    "question": {
      "ua": "Частота генератора, який використовується в лабораторній роботі приблизно дорівнює...",
      "en": "The frequency of the generator used in laboratory work is approximately equal to..."
    },
    "options": [
      { "value": "1", "text": { "ua": "20 кГц", "en": "20 kHz" } },
      { "value": "2", "text": { "ua": "300 Гц", "en": "300 Hz" } },
      { "value": "3", "text": { "ua": "10 МГц", "en": "10 MHz" } },
      { "value": "4", "text": { "ua": "40 МГц", "en": "40 MHz" } }
    ],
    "correctAnswer": "4"
  },
  {
    "id": 5,
    "question": {
      "ua": "Зі збільшенням питомого опору електроліту кількість теплоти, яка виділиться в одиниці об'єму електроліту при дії електричного поля УВЧ,...",
      "en": "With an increase in the resistivity of the electrolyte, the amount of heat emitted per unit volume of the electrolyte under the influence of the UHF electric field..."
    },
    "options": [
      { "value": "1", "text": { "ua": "збільшиться", "en": "will increase" } },
      { "value": "2", "text": { "ua": "не зміниться", "en": "will not change" } },
      { "value": "3", "text": { "ua": "зменшиться", "en": "will decrease" } },
      { "value": "4", "text": { "ua": "не залежить від питомого опору", "en": "does not depend on resistivity" } }
    ],
    "correctAnswer": "1"
  },
  {
    "id": 6,
    "question": {
      "ua": "Зі зменшенням питомого опору електроліту кількість теплоти, яка виділиться в одиниці об'єму електроліту при дії електричного поля УВЧ,...",
      "en": "With a decrease in the resistivity of the electrolyte, the amount of heat emitted per unit volume of the electrolyte under the influence of the UHF electric field..."
    },
    "options": [
      { "value": "1", "text": { "ua": "збільшиться", "en": "will increase" } },
      { "value": "2", "text": { "ua": "не зміниться", "en": "will not change" } },
      { "value": "3", "text": { "ua": "зменшиться", "en": "will decrease" } },
      { "value": "4", "text": { "ua": "не залежить від питомого опору", "en": "does not depend on resistivity" } }
    ],
    "correctAnswer": "3"
  },
  {
    "id": 7,
    "question": {
      "ua": "Зі зменшенням частоти кількість теплоти, яка виділиться в одиниці об'єму діелектрика при дії електричного поля УВЧ...",
      "en": "With a decrease in frequency, the amount of heat emitted per unit volume of the dielectric under the influence of the UHF electric field..."
    },
    "options": [
      { "value": "1", "text": { "ua": "збільшиться", "en": "will increase" } },
      { "value": "2", "text": { "ua": "не зміниться", "en": "will not change" } },
      { "value": "3", "text": { "ua": "зменшиться", "en": "will decrease" } },
      { "value": "4", "text": { "ua": "не залежить від питомого опору", "en": "does not depend on resistivity" } }
    ],
    "correctAnswer": "1"
  },
  {
    "id": 8,
    "question": {
      "ua": "Зі збільшенням частоти кількість теплоти, яка виділиться в одиниці об'єму діелектрика при дії електричного поля УВЧ...",
      "en": "With an increase in frequency, the amount of heat emitted per unit volume of the dielectric under the influence of the UHF electric field..."
    },
    "options": [
      { "value": "1", "text": { "ua": "збільшиться", "en": "will increase" } },
      { "value": "2", "text": { "ua": "не зміниться", "en": "will not change" } },
      { "value": "3", "text": { "ua": "зменшиться", "en": "will decrease" } },
      { "value": "4", "text": { "ua": "не залежить від питомого опору", "en": "does not depend on resistivity" } }
    ],
    "correctAnswer": "1"
  },
  {
    "id": 9,
    "question": {
      "ua": "Зі збільшенням частоти кількість теплоти, яка виділиться в одиниці об'єму електроліта при дії магнітного поля УВЧ...",
      "en": "With an increase in frequency, the amount of heat emitted per unit volume of the electrolyte under the influence of the UHF magnetic field..."
    },
    "options": [
      { "value": "1", "text": { "ua": "збільшиться", "en": "will increase" } },
      { "value": "2", "text": { "ua": "не зміниться", "en": "will not change" } },
      { "value": "3", "text": { "ua": "зменшиться", "en": "will decrease" } },
      { "value": "4", "text": { "ua": "не залежить від питомого опору", "en": "does not depend on resistivity" } }
    ],
    "correctAnswer": "1"
  },
  {
    "id": 10,
    "question": {
      "ua": "Зі зменшенням частоти кількість теплоти, яка виділиться в одиниці об'єму електроліта при дії магнітного поля УВЧ...",
      "en": "With a decrease in frequency, the amount of heat emitted per unit volume of the electrolyte under the influence of the UHF magnetic field..."
    },
    "options": [
      { "value": "1", "text": { "ua": "збільшиться", "en": "will increase" } },
      { "value": "2", "text": { "ua": "не зміниться", "en": "will not change" } },
      { "value": "3", "text": { "ua": "зменшиться", "en": "will decrease" } },
      { "value": "4", "text": { "ua": "не залежить від питомого опору", "en": "does not depend on resistivity" } }
    ],
    "correctAnswer": "3"
  },
  {
    "id": 11,
    "question": {
      "ua": "М'язи, кров, лімфу скоріше за все можна віднести до...",
      "en": "Muscles, blood, and lymph are most likely to be classified as..."
    },
    "options": [
      { "value": "1", "text": { "ua": "провідників", "en": "conductors" } },
      { "value": "2", "text": { "ua": "діелектриків", "en": "dielectrics" } },
      { "value": "3", "text": { "ua": "напівпровідників", "en": "semiconductors" } },
      { "value": "4", "text": { "ua": "надпровідників", "en": "superconductors" } }
    ],
    "correctAnswer": "1"
  },
  {
    "id": 12,
    "question": {
      "ua": "Кістки, нігті, волосся скоріше за все можна віднести до...",
      "en": "Bones, nails, and hair are most likely to be classified as..."
    },
    "options": [
      { "value": "1", "text": { "ua": "провідників", "en": "conductors" } },
      { "value": "2", "text": { "ua": "діелектриків", "en": "dielectrics" } },
      { "value": "3", "text": { "ua": "напівпровідників", "en": "semiconductors" } },
      { "value": "4", "text": { "ua": "надпровідників", "en": "superconductors" } }
    ],
    "correctAnswer": "2"
  },
  {
    "id": 13,
    "question": {
      "ua": "Яка методика передбачає прогрів тканин ВЧ вихровими струмами?",
      "en": "Which technique involves heating tissues with high-frequency vortex currents?"
    },
    "options": [
      { "value": "1", "text": { "ua": "дарсонвалізація", "en": "darsonvalization" } },
      { "value": "2", "text": { "ua": "електрофорез", "en": "electrophoresis" } },
      { "value": "3", "text": { "ua": "індуктотермія", "en": "inductothermy" } },
      { "value": "4", "text": { "ua": "діатермія", "en": "diathermy" } }
    ],
    "correctAnswer": "3"
  },
  {
    "id": 14,
    "question": {
      "ua": "Яка методика передбачає прогрів тканин ВЧ струмом?",
      "en": "Which technique involves heating tissues with high-frequency current?"
    },
    "options": [
      { "value": "1", "text": { "ua": "дарсонвалізація", "en": "darsonvalization" } },
      { "value": "2", "text": { "ua": "електрофорез", "en": "electrophoresis" } },
      { "value": "3", "text": { "ua": "індуктотермія", "en": "inductothermy" } },
      { "value": "4", "text": { "ua": "діатермія", "en": "diathermy" } }
    ],
    "correctAnswer": "4"
  },
  {
    "id": 15,
    "question": {
      "ua": "Який діапазон частот електричного струму використовується при діатермії?",
      "en": "What frequency range of the electric current is used in diathermy?"
    },
    "options": [
      { "value": "1", "text": { "ua": "10 - 15 МГц", "en": "10 - 15 MHz" } },
      { "value": "2", "text": { "ua": "40 - 300 МГц", "en": "40 - 300 MHz" } },
      { "value": "3", "text": { "ua": "0,5 - 2 МГц", "en": "0.5 - 2 MHz" } },
      { "value": "4", "text": { "ua": "104 - 106 МГц", "en": "104 - 106 MHz" } }
    ],
    "correctAnswer": "3"
  },
  {
    "id": 16,
    "question": {
      "ua": "Який діапазон частот електричного струму використовується при індуктотермії?",
      "en": "What frequency range of the electric current is used in inductothermy?"
    },
    "options": [
      { "value": "1", "text": { "ua": "10 - 15 МГц", "en": "10 - 15 MHz" } },
      { "value": "2", "text": { "ua": "40 - 300 МГц", "en": "40 - 300 MHz" } },
      { "value": "3", "text": { "ua": "0,5 - 2 МГц", "en": "0.5 - 2 MHz" } },
      { "value": "4", "text": { "ua": "104 - 106 МГц", "en": "104 - 106 MHz" } }
    ],
    "correctAnswer": "1"
  },
  {
    "id": 17,
    "question": {
      "ua": "Який діапазон частот електричного струму використовується при УВЧ-терапії?",
      "en": "What frequency range of the electric current is used in UHF therapy?"
    },
    "options": [
      { "value": "1", "text": { "ua": "10 - 15 МГц", "en": "10 - 15 MHz" } },
      { "value": "2", "text": { "ua": "40 - 300 МГц", "en": "40 - 300 MHz" } },
      { "value": "3", "text": { "ua": "0,5 - 2 МГц", "en": "0.5 - 2 MHz" } },
      { "value": "4", "text": { "ua": "104 - 106 МГц", "en": "104 - 106 MHz" } }
    ],
    "correctAnswer": "2"
  }
];

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

function TestingPart() {

  const { isEnglish } = useContext(LanguageContext);

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem("timeLeft");
    return savedTime ? parseInt(savedTime, 10) : 420;
  });

  const [attempts, setAttempts] = useState(() => {
    const savedAttempts = localStorage.getItem("attempts");
    return savedAttempts ? parseInt(savedAttempts, 10) : 1;
  });

  useEffect(() => {
    const randomQuestions = shuffleArray(initialQuestions)
      .slice(0, 10) 
      .map((question) => ({
        ...question,
        options: shuffleArray(question.options),
      }));
    setQuestions(randomQuestions);
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          localStorage.setItem("timeLeft", newTime);
          if (newTime <= 0) {
            clearInterval(timer);
            setIsFinished(true);
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, isFinished]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 10);
    }
  
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: {
        selectedAnswer,
        isCorrect: selectedAnswer === currentQuestion.correctAnswer,
      },
    });
  
    setAnsweredQuestions((prevAnswered) => prevAnswered + 1);
  
    if (currentQuestionIndex === questions.length - 1) {
      const totalScore = score + (selectedAnswer === currentQuestion.correctAnswer ? 10 : 0);
  
      const penalty = Math.max(0, attempts - 1);
      const finalScore = totalScore - penalty;
  
      const correctedFinalScore = Math.max(finalScore, 0);
      setScore(correctedFinalScore);
      setIsFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const handleTestAgain = () => {
    const randomQuestions = shuffleArray(initialQuestions)
      .slice(0, 10) 
      .map((question) => ({
        ...question,
        options: shuffleArray(question.options),
      }));
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setAnsweredQuestions(0);
    setIsFinished(false);
    setTimeLeft(420);
    localStorage.setItem("timeLeft", 420);

    const newAttempts = attempts >= 10 ? 1 : attempts + 1;
    setAttempts(newAttempts);
    localStorage.setItem("attempts", newAttempts);

    setScore(0);
  };

  if (questions.length === 0) {
    return <div>{isEnglish ? 'Load...' : 'Завантаження...'}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];


  return (
    <div className="testing-part">
      <h2 className="title">{isEnglish ? 'Testing' : 'Тестування'}</h2>
      <p className="timer">{isEnglish ? 'Time is running out:' : 'Залишилось часу:'} {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")} {isEnglish ? 'min' : 'хв'}</p>
      <p className="attempts">{isEnglish ? 'Number of attempts:' : 'Кількість спроб:'} {attempts}</p>

      {!isFinished ? (
        <div className="question-container">
          <p className="question-text">{currentQuestion.question[isEnglish ? 'en' : 'ua']}</p>
          <div className="options-container">
            {currentQuestion.options.map((option) => (
              <label key={option.value} className="option">
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option.value}
                  onChange={(e) => handleAnswer(e.target.value)}
                  checked={selectedAnswer === option.value}
                  className="radio-input"
                />
                {option.text[isEnglish ? 'en' : 'ua']}
              </label>
            ))}
          </div>

          <div className="button-container">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="next-button"
            >
              {isEnglish ? 'Next question' : 'Наступне запитання'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h3>{isEnglish ? 'Test completed!' : 'Тест завершено!'}</h3>
          <p>{isEnglish ? 'Your result is:' : 'Ваш результат:'} {score} {isEnglish ? 'percent' : '%'}</p>

          {score >= 60 ? (
            <div>
              <p>{isEnglish ? 'Congratulations, you have scored enough points. Take a screenshot of your results and proceed to the practice section or try to improve your score!' : 'Вітаю, ви набрали достатю кількість балів. Зробіть знімок екрану результатів та переходьте до практичної частини або спробуйте підвищити бал!'}</p>
              <Link to="/practice">
                <button className="next-button">{isEnglish ? 'Go to the practical part' : 'Перейти до практичної частини'}</button>
              </Link>
              <button onClick={handleTestAgain} className="next-button"> {isEnglish ? 'Try again' : 'Спробувати ще раз'}</button>
            </div>
          ) : (
            <div>
              <p>{isEnglish ? 'You scored too low. Read more about the theory and try again.' : 'Ви набрали малу кількість відповідей. Детальніше ознайомтесь з теоретичними відомостями та спробуйте знову.'}</p>
              <Link to="/theory">
                <button onClick={handleTestAgain} className="next-button">{isEnglish ? 'Go to theoretical information' : 'Перейти до теоретичних відомостей'}</button>
              </Link>
              <button onClick={handleTestAgain} className="next-button"> {isEnglish ? 'Try again' : 'Спробувати ще раз'}</button>
            </div>
          )}

          <div className="button-container">
            <Link to="/">
              <button onClick={handleTestAgain} className="next-button">{isEnglish ? 'Go to the main page' : 'На головну'}</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestingPart;