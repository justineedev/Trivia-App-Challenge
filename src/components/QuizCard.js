import headerImage from '../assets/logo.png';
import { getDecodedString } from '../utils/decodeString';
import './QuizCard.scss';

export default function QuizCard({ category, counter, question, handleClick }) {
  return (
    <div className="quiz-card">
      <div className="quiz-card-header">
        <img src={headerImage} alt="zeniark-logo" />
        <p>Category: {category}</p>

        <span>{counter} of 10</span>
      </div>

      <div className="quiz-card-body">
        <h1>{getDecodedString(question)}</h1>
      </div>

      <div className="quiz-card-footer">
        <button onClick={() => handleClick('True')} className="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
          True
        </button>

        <button onClick={() => handleClick('False')} className="false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
          False
        </button>
      </div>
    </div>
  );
}
