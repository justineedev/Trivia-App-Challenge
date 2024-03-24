import { Link } from 'react-router-dom';

import headerImage from '../assets/logo.png';
import './QuizResults.scss';
import Result from './utils/Result';

export default function QuizResults({ score, results }) {
  return (
    <div className="results-card">
      <div className="results-card-header">
        <img src={headerImage} alt="zeniark-logo" />
        <h1>Final Results</h1>
      </div>

      <div className="results-card-body">
        <div className="results-card-body-score">
          <h1>{score}/10</h1>
          <h3>Your Score</h3>
        </div>

        <div className="results-card-body-questions">
          {results.map(({ question, correct_answer, user_answer }, index) => (
            <Result
              key={index}
              index={index + 1}
              question={question}
              correct_answer={correct_answer}
              user_answer={user_answer}
            />
          ))}
        </div>

        <div className="results-card-footer">
          <Link to="/">PLAY AGAIN</Link>
        </div>
      </div>
    </div>
  );
}
