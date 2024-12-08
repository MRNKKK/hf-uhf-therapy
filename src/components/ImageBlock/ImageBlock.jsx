import { useContext, useEffect } from 'react';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import LanguageContext from '../../providers/LanguageContext';
import TypeContext from '../../providers/TypeContext';
import TimeContext from '../../providers/TimeContext';

import elec from '../../../public/media/електричне-поле.gif';
import elecAnim from '../../../public/media/електричне-поле-анімований.gif';
import magnet from '../../../public/media/магнітне-поле.gif';
import magnetAnim from '../../../public/media/магнітне-поле-анімований.gif';

import './ImageBlock.css';

const ImageBlock = () => {
  const { isEnglish } = useContext(LanguageContext);
  const { isElectric, tableIsShown, setTableIsShown } = useContext(TypeContext);
  const { time, setTime, finished, setFinished } = useContext(TimeContext);

  useEffect(() => {
    if (!tableIsShown) {
      setTime(0);
    }
  }, [time]);

  const onFinish = () => {
    setFinished(true);
  };

  return (
    <div className="col-4">
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {isElectric && (
            <img className="image" src={finished ? elec : elecAnim} />
          )}

          {!isElectric && (
            <img className="image" src={finished ? magnet : magnetAnim} />
          )}
          <div className="under-image-text">
            <span>{isEnglish ? 'Glycerol' : 'Гліцерин'}</span>
            <span>{isEnglish ? 'NaCl solution' : 'Розчин NaCl'}</span>
          </div>
        </div>

        <div
          className="col align-self-center"
          style={{
            backgroundColor: 'white',
            margin: '10px',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <button
            className="btn btn-success btn-lg start-btn"
            disabled={tableIsShown}
            onClick={() => {
              setTableIsShown(true);
              setTime(0);
              setFinished(false);
            }}
            variant="success"
            id="start"
          >
            {isEnglish ? 'Start' : 'Старт'}
          </button>

          <div className="timer">
            <Timer
              key={tableIsShown ? 'timer-shown' : 'timer-hidden'}
              time={time}
              active={tableIsShown}
              duration={600000}
              // duration={10000}
              onFinish={onFinish}
            >
              <Timecode format="H:?mm:ss" />
            </Timer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
