import './quizApp.css'
import Header from './components/Header';
import Quiz from './components/Quiz';

function QuizApp() {
  return (
    <div className="quiz-app">
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default QuizApp;