import React, { useState } from 'react';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import QUESTIONS from '../questions';

interface QuestionProps {
  index: number;
  onSelectAnswer: (answer: string) => void;
  onSkipAnswer: () => void;
}

interface AnswerState {
  selectedAnswer: string;
  isCorrect: boolean | null;
}

const Question: React.FC<QuestionProps> = ({ index, onSelectAnswer, onSkipAnswer }) => {
  const [answer, setAnswer] = useState<AnswerState>({
    selectedAnswer: '',
    isCorrect: null,
  });

  let timer = 20000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (selectedAnswer: string) => {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer,
        isCorrect: QUESTIONS[index].answers[0] === selectedAnswer,
      });

      setTimeout(() => {
        onSelectAnswer(selectedAnswer);
      }, 2000);
    }, 1000);
  };

  let answerState: 'unanswered' | 'answered' | 'correct' | 'wrong' = 'unanswered';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : () => {}} // No-op function
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Question;
