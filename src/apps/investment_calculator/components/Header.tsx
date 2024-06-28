import { Box, Typography } from '@mui/material';
import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        textAlign: 'center',
        margin: '3rem auto',
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Logo showing a money bag"
        sx={{
          width: '5rem',
          height: '5rem',
          objectFit: 'contain',
          backgroundColor: 'transparent',
        }}
      />
      <Typography
        variant="h1"
        sx={{
          fontSize: '1.5rem',
        }}
      >
        Investment Calculator
      </Typography>
    </Box>
  );
}
