import { Link } from 'react-router-dom';

import cardHeaderLogo from '../assets/zeniark-logo.png';
import './Homepage.scss';

export default function Homepage() {
  return (
    <div className="page">
      <div className="home-card">
        <img src={cardHeaderLogo} alt="logo" />

        <div className="home-card-body">
          <h1>Welcome to the Trivia Challenge!</h1>
          <h3>You will be presented with 10 True or False questions.</h3>

          <div className="home-card-body-banner">Can you score 10/10?</div>
        </div>

        <Link to="/quiz">LET'S START!</Link>
      </div>
    </div>
  );
}
