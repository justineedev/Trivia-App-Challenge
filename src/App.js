import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Homepage from './pages/Homepage';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
