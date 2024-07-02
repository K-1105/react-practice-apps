import React from 'react';
import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/space-grotesk';

const timerGameTheme = createTheme({
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
  },
  palette: {
    background: {
      default: '#186a5e', // Your desired background color
    },
    gradient: {}, // Add any additional palette options here
    Ink: {},
    Sky: {},
    Red: {},
    Green: {},
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          width: '22rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          margin: '2rem auto',
          background: 'linear-gradient(#00ab8e, #00bbdd)',
          color: '#221c18',
          borderRadius: '6px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          background: '#12352f',
          color: '#edfcfa',
          fontSize: '1.2rem',
          cursor: 'pointer',
          '&:hover': { background: '#051715' },
        },
      },
    },
  },
});

const TimerGameApp: React.FC = () => {
  return (
    <ThemeProvider theme={timerGameTheme}>
      <CssBaseline />
      <Container
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default', // Apply the background color
        }}
      >
        <Player />
        <Box
          id="challenges"
          sx={{
            width: '90%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center', // Center the items horizontally
          }}
        >
          <TimerChallenge title="Easy" targetTime={1} />
          <TimerChallenge title="Not easy" targetTime={5} />
          <TimerChallenge title="Getting tough" targetTime={10} />
          <TimerChallenge title="Pros only" targetTime={15} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default TimerGameApp;
