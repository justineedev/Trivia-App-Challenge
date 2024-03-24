import { getDecodedString } from '../../utils/decodeString';
import './Result.scss';

export default function Result({
  question,
  correct_answer,
  user_answer,
  index,
}) {
  return (
    <div className="result">
      <div className="result-index">{index}.</div>

      <div className="result-summary">
        <p className="result-summary-question">{getDecodedString(question)}</p>
        <p className="result-summary-answer">
          The correct answer is
          <span
            className={`answer-text ${correct_answer === 'True' ? 'true-text' : 'false-text'}`}
          >
            {' ' + correct_answer}
          </span>
          . You answered
          <span className={user_answer === 'True' ? 'true-text' : 'false-text'}>
            {' ' + user_answer}.
          </span>
        </p>
      </div>

      <div className="result-status">
        {correct_answer === user_answer ? (
          <svg
            className="correct"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        ) : (
          <svg
            className="incorrect"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        )}
      </div>
    </div>
  );
}
