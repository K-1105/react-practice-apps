import React, { useState, useRef } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Player: React.FC = () => {
  const playerName = useRef<HTMLInputElement>(null);
  const [enteredPlayerName, setEnteredPlayerName] = useState<string | null>(null);

  const handleClick = () => {
    if (playerName.current) {
      setEnteredPlayerName(playerName.current.value);
      playerName.current.value = '';
    }
  };

  return (
    <Box id='player' sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant='h2' sx={{ color: '#000000' }}>
        Welcome, {enteredPlayerName ?? 'person who\'s name I don\'t know yet!'}
      </Typography>
      <Box component='p' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        <TextField
          id='player-name-field'
          inputRef={playerName}
          type='text'
          variant='filled'
          label= 'Name'
          sx={{
            font: 'inherit',
            border: '4px solid #54a399',
            padding: '0.2rem',
            backgroundColor: '#dddddd',
            borderRadius: '4px 0 0 4px',
            color: '#ffffff',
            '&:hover': { backgroundColor: '#eeeeee' },
          }}
        />
        <Button
          onClick={handleClick}
          sx={{
            cursor: 'pointer',
            backgroundColor: '#54a399',
            padding: '1.11rem 1rem',
            color: '#ffffff',
            borderRadius: '0 4px 4px 0',
            '&:hover': { backgroundColor: '#3c8379' },
          }}
        >
          Set Name
        </Button>
      </Box>
    </Box>
  );
};

export default Player;
