import React from 'react';
import { Typography, Stack, Container, IconButton } from '@mui/material';
import { changeMode } from '@/features/user/userSlice';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useAppDispatch, useAppSelector } from '@/app/store';
import AppList from '@/components/AppList/AppList';

const Home = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.user.mode);

  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <IconButton onClick={() => dispatch(changeMode())} sx={{ position: 'absolute', top: 10, right: 10 }}>
        <Brightness4Icon
          sx={{
            transition: 'transform 0.4s',
            transform: mode === 'dark' ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        />
      </IconButton>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h1">
          Welcome to my React app practise page
        </Typography>
      </Stack>
      <AppList />
    </Container>
  );
};

export default Home;
