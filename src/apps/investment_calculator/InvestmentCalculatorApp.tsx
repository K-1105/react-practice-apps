import { useState } from 'react';

import Header from './components/Header';
import UserInput, { UserInputState } from './components/UserInput';
import Results from './components/Results';

const InvestmentCalculatorApp = () => {
  const [userInput, setUserInput] = useState<UserInputState>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

    /**
   * Handles changes to the user input fields.
   * 
   * @param {keyof UserInputState} inputIdentifier - The identifier of the input field being changed.
   * @param {string} newValue - The new value of the input field.
   */
  function handleInputChange(inputIdentifier: keyof UserInputState, newValue: string) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleInputChange={handleInputChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
};

export default InvestmentCalculatorApp;
