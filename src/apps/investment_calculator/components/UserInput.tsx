import React from 'react';
import { Box, Typography, TextField, Grid } from '@mui/material';

/**
 * Interface representing the state of user input fields for investment calculations.
 * 
 * @property {number} initialInvestment - The initial investment amount.
 * @property {number} annualInvestment - The amount invested every year.
 * @property {number} expectedReturn - The expected (annual) rate of return.
 * @property {number} duration - The investment duration (time frame).
 */
export interface UserInputState {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

/**
 * Interface for the props of the UserInput component.
 * 
 * @property {(field: keyof UserInputState, value: string) => void} handleInputChange - Function to handle changes in the input fields.
 * @property {UserInputState} userInput - The current state of the user input fields.
 */
interface UserInputProps {
  handleInputChange: (field: keyof UserInputState, value: string) => void;
  userInput: UserInputState;
}

/**
 * UserInput component for collecting investment input data from the user.
 * 
 * @param {UserInputProps} props - The props for the UserInput component.
 * @returns {JSX.Element} The rendered UserInput component.
 * 
 * @example
 * <UserInput handleInputChange={handleInputChange} userInput={userInput} />
 */
export default function UserInput({ handleInputChange, userInput }: UserInputProps) {
  return (
    <Box
      component="section"
      sx={{
        padding: '1rem',
        maxWidth: '30rem',
        margin: '2rem auto',
        borderRadius: '4px',
        background: 'linear-gradient(180deg, #307e6c, #2b996d)',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ marginBottom: '0.25rem' }}>
            <Typography
              component="label"
              sx={{
                display: 'block',
                marginBottom: '0.25rem',
                fontFamily: 'Roboto Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Initial Investment
            </Typography>
            <TextField
              type="number"
              required
              fullWidth
              value={userInput.initialInvestment}
              onChange={(event) => handleInputChange('initialInvestment', event.target.value)}
              sx={{
                '& .MuiInputBase-root': {
                  borderColor: '#76c0ae',
                  color: '#c2e9e0',
                  backgroundColor: 'transparent',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#76c0ae',
                  },
                  '&:hover fieldset': {
                    borderColor: '#76c0ae',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#76c0ae',
                  },
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ marginBottom: '0.25rem' }}>
            <Typography
              component="label"
              sx={{
                display: 'block',
                marginBottom: '0.25rem',
                fontFamily: 'Roboto Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Annual Investment
            </Typography>
            <TextField
              type="number"
              required
              fullWidth
              value={userInput.annualInvestment}
              onChange={(event) => handleInputChange('annualInvestment', event.target.value)}
              sx={{
                '& .MuiInputBase-root': {
                  borderColor: '#76c0ae',
                  color: '#c2e9e0',
                  backgroundColor: 'transparent',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#76c0ae',
                  },
                  '&:hover fieldset': {
                    borderColor: '#76c0ae',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#76c0ae',
                  },
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ marginBottom: '0.25rem' }}>
            <Typography
              component="label"
              sx={{
                display: 'block',
                marginBottom: '0.25rem',
                fontFamily: 'Roboto Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Expected Return
            </Typography>
            <TextField
              type="number"
              required
              fullWidth
              value={userInput.expectedReturn}
              onChange={(event) => handleInputChange('expectedReturn', event.target.value)}
              sx={{
                '& .MuiInputBase-root': {
                  borderColor: '#76c0ae',
                  color: '#c2e9e0',
                  backgroundColor: 'transparent',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#76c0ae',
                  },
                  '&:hover fieldset': {
                    borderColor: '#76c0ae',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#76c0ae',
                  },
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ marginBottom: '0.25rem' }}>
            <Typography
              component="label"
              sx={{
                display: 'block',
                marginBottom: '0.25rem',
                fontFamily: 'Roboto Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Duration
            </Typography>
            <TextField
              type="number"
              required
              fullWidth
              value={userInput.duration}
              onChange={(event) => handleInputChange('duration', event.target.value)}
              sx={{
                '& .MuiInputBase-root': {
                  borderColor: '#76c0ae',
                  color: '#c2e9e0',
                  backgroundColor: 'transparent',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#76c0ae',
                  },
                  '&:hover fieldset': {
                    borderColor: '#76c0ae',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#76c0ae',
                  },
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
