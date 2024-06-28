import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { calculateInvestmentResults, formatter } from '../utils/investment';
import { UserInputState } from '../components/UserInput';

/**
 * Interface representing the props for the Results component.
 * 
 * @property {UserInputState} input - The user input state for investment calculations.
 */
interface ResultsProps {
  input: UserInputState;
}

/**
 * Interface representing the data for each year of the investment calculation.
 * 
 * @property {number} valueEndOfYear - The investment value at the end of the year.
 * @property {number} annualInvestment - The amount invested every year.
 * @property {number} year - The year of the investment period.
 * @property {number} interest - The interest earned in the year.
 */
interface YearData {
  valueEndOfYear: number;
  annualInvestment: number;
  year: number;
  interest: number;
}

/**
 * Results component for displaying investment calculation results in a table.
 * 
 * @param {ResultsProps} props - The props for the Results component.
 * @returns {JSX.Element} The rendered Results component.
 * 
 * @example
 * <Results input={userInput} />
 */
export default function Results({ input }: ResultsProps) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

  return (
    <Box
      sx={{
        maxWidth: '50rem',
        margin: '2rem auto',
        padding: '1rem',
        overflowX: 'auto', // Ensures the table is scrollable on small screens
      }}
    >
      <TableContainer>
        <Table sx={{ tableLayout: 'fixed', borderSpacing: '1rem', textAlign: 'right' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: '1rem', color: '#83e6c0' }}>Year</TableCell>
              <TableCell sx={{ fontSize: '1rem', color: '#83e6c0' }}>Investment Value</TableCell>
              <TableCell sx={{ fontSize: '1rem', color: '#83e6c0' }}>Interest (Year)</TableCell>
              <TableCell sx={{ fontSize: '1rem', color: '#83e6c0' }}>Total Interest</TableCell>
              <TableCell sx={{ fontSize: '1rem', color: '#83e6c0' }}>Invested Capital</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultsData.map((yearData: YearData) => {
              const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
              const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

              return (
                <TableRow key={yearData.year}>
                  <TableCell sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: '1rem' }}>{yearData.year}</TableCell>
                  <TableCell sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: '1rem' }}>{formatter.format(yearData.valueEndOfYear)}</TableCell>
                  <TableCell sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: '1rem' }}>{formatter.format(yearData.interest)}</TableCell>
                  <TableCell sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: '1rem' }}>{formatter.format(totalInterest)}</TableCell>
                  <TableCell sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: '1rem' }}>{formatter.format(totalAmountInvested)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
