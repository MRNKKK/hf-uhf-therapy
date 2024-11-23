import { createContext, useState } from 'react';

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [finished, setFinished] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  return (
    <TimeContext.Provider
      value={{
        time,
        setTime,
        finished,
        setFinished,
        currentIndex,
        setCurrentIndex,
        intervalId,
        setIntervalId,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContext;
