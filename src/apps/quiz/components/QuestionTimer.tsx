import { useState, useEffect } from 'react';

interface QuestionTimerProps {
    readonly timeout: number; 
    readonly onTimeout: () => void; 
    readonly mode: 'unanswered' | 'answered' | 'correct' | 'wrong'; // Restrict mode to specific string values
  }

const QuestionTimer = ({ timeout, onTimeout, mode }: QuestionTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}

export default QuestionTimer