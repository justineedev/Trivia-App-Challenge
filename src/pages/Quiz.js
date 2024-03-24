import { useCallback, useEffect, useState } from 'react';

import QuizCard from '../components/QuizCard';
import QuizResults from '../components/QuizResults';
import QuizError from '../components/utils/QuizError';
import QuizLoader from '../components/utils/QuizLoader';
import useQuestions from '../hooks/useQuestions';
import './Quiz.scss';

export default function Quiz() {
  // useQuestion hook to get the questions
  const { questions, isFetching, error } = useQuestions();

  // local states
  const [counter, setCounter] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [results, setResults] = useState([]);

  // handle function after the user selects an answer
  // `setCounter` to proceed to the next question
  // `setAnswers` to save the user's answer
  const handleSubmitAnswer = (answer) => {
    setCounter((prev) => prev + 1);
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { id: questions[counter - 1]?.id, answer },
    ]);
  };

  // Get score and compile the results
  const handleGetResults = useCallback(() => {
    const results = questions.map(({ id, question, correct_answer }) => {
      const user_answer = answers.find((answer) => answer.id === id)?.answer;
      return {
        question,
        correct_answer,
        user_answer,
      };
    });
    setResults(results);

    const score = questions.reduce((acc, { id, correct_answer }) => {
      const user_answer = answers.find((answer) => answer.id === id)?.answer;
      return user_answer === correct_answer ? acc + 1 : acc;
    }, 0);

    setTotalScore(score);
  }, [questions, answers]);

  // check if all the questions are answered and
  // trigger the calculate score
  useEffect(() => {
    if (counter === 11) {
      handleGetResults();
    }
  }, [counter, handleGetResults]);

  return (
    <div className="page">
      {isFetching && <QuizLoader message="Fetching questions..." />}
      {!isFetching && error && <QuizError message={error} />}
      {!isFetching && questions && counter !== 11 && (
        <QuizCard
          category={questions[counter - 1]?.category}
          counter={counter}
          question={questions[counter - 1]?.question}
          handleClick={handleSubmitAnswer}
        />
      )}

      {counter === 11 && <QuizResults score={totalScore} results={results} />}
    </div>
  );
}
