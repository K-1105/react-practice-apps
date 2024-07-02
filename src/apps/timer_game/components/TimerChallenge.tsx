import React, { useState, useRef, useEffect } from 'react';
import ResultModal from './ResultModal';
import { Box, Typography, Button, Paper } from '@mui/material';


interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

const TimerChallenge: React.FC<TimerChallengeProps> = ({ title, targetTime }) => {
  const timer = useRef<number | null>(null);
  const dialog = useRef<{ open: () => void; close: () => void }>(null);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  useEffect(() => {
    if (timeRemaining <= 0) {
      if (timer.current) clearInterval(timer.current);
      dialog.current?.open();
    }
  }, [timeRemaining]);

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
    dialog.current?.close();
  };

  const handleStart = () => {
    timer.current = window.setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current?.open();
    if (timer.current) clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
      <Paper elevation={9} >
        <Typography
          variant='h2'
          sx={{ fontSize: '1.5rem', letterSpacing: '0.1em', textAlign: 'center', textTransform: 'uppercase' }}
        >
          {title}
        </Typography>
        <Typography
          className='challenge-time'
          sx={{ border: '1px solid #46cebe', borderRadius: '4px', padding: '0.25rem 0.5rem', margin: '0.5rem' }}
        >
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </Typography>
        <Box>
          <Button
            onClick={timerIsActive ? handleStop : handleStart}
          >
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </Button>
        </Box>
        <Typography
          className={timerIsActive ? 'active' : undefined}
          sx={{ animation: timerIsActive ? 'flash 1s infinite' : 'none' }}
        >
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </Typography>
      </Paper>
    </>
  );
};

export default TimerChallenge;
