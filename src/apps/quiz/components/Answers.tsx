import React, { useRef } from 'react';

interface AnswersProps {
  answers: string[];
  selectedAnswer: string | null;
  answerState: 'unanswered' | 'answered' | 'correct' | 'wrong';
  onSelect: (answer: string) => void;
}

const Answers: React.FC<AnswersProps> = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef<string[] | null>(null);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = '';

        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== 'unanswered'}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
