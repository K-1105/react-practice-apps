// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

/**
 * This interface defines the structure of the input object for the calculateInvestmentResults function.
 * 
 * @property {number} initialInvestment - The initial investment amount.
 * @property {number} annualInvestment - The amount invested every year.
 * @property {number} expectedReturn - The expected (annual) rate of return.
 * @property {number} duration - The investment duration (time frame).
 */
interface InvestmentResultsProps {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

/**
 * Calculates the investment results over a given duration.
 * 
 * @param {InvestmentResultsProps} props - The input object containing investment parameters.
 * @returns {Array} - An array of objects representing the investment data for each year.
 * 
 * @example
 * const results = calculateInvestmentResults({
 *   initialInvestment: 10000,
 *   annualInvestment: 1200,
 *   expectedReturn: 6,
 *   duration: 10,
 * });
 * 
 * // results = [
 * //   { year: 1, interest: 600, valueEndOfYear: 11800, annualInvestment: 1200 },
 * //   { year: 2, interest: 708, valueEndOfYear: 13708, annualInvestment: 1200 },
 * //   ...
 * // ]
 */
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: InvestmentResultsProps) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

/**
 * The browser-provided Intl API is used to prepare a formatter object.
 * This object offers a "format()" method that can be used to format numbers as currency.
 * 
 * @example
 * formatter.format(1000); // returns "£1,000"
 */
export const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
