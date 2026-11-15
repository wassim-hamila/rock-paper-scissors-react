import { useState, useEffect, useRef } from 'react';
import './App.css';
import ChoiceButton from './components/ChoiceButton';
import ResultBoard from './components/ResultBoard';
import ScoreBoard from './components/ScoreBoard';
import History from './components/History';
import { choices, getComputerChoice, getResult } from './utils/game';

const initialScore = { win: 0, lose: 0, draw: 0 };

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(initialScore);
  const [history, setHistory] = useState([]);

  const timer = useRef(null);

  // clear the timer if the component is removed
  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  const handleClick = (choice) => {
    setUserChoice(choice);
    setComputerChoice(null);
    setResult(null);
    setIsPlaying(true);

    // wait a little so the hands can shake before showing the result
    timer.current = setTimeout(() => {
      const computer = getComputerChoice();
      const roundResult = getResult(choice, computer);

      setComputerChoice(computer);
      setResult(roundResult);
      setScore((prev) => ({ ...prev, [roundResult]: prev[roundResult] + 1 }));
      setHistory((prev) =>
        [{ id: Date.now(), user: choice, computer, result: roundResult }, ...prev].slice(0, 5)
      );
      setIsPlaying(false);
    }, 800);
  };

  // start a new round but keep the score
  const handleNewRound = () => {
    clearTimeout(timer.current);
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setIsPlaying(false);
  };

  // reset everything
  const handleResetGame = () => {
    handleNewRound();
    setScore(initialScore);
    setHistory([]);
  };

  const roundsPlayed = score.win + score.lose + score.draw;

  return (
    <div className="app">
      <h1>Rock Paper Scissors</h1>
      <p className="subtitle">
        {isPlaying ? 'Rock... Paper... Scissors...' : 'Make your choice'}
      </p>

      <ScoreBoard score={score} />

      <div className="choices">
        {choices.map((choice) => (
          <ChoiceButton
            key={choice}
            choice={choice}
            selected={userChoice === choice}
            disabled={isPlaying}
            onClick={handleClick}
          />
        ))}
      </div>

      <ResultBoard
        userChoice={userChoice}
        computerChoice={computerChoice}
        result={result}
        isPlaying={isPlaying}
      />

      <div className="actions">
        <button className="reset-btn" onClick={handleNewRound} disabled={!userChoice}>
          New round
        </button>
        <button
          className="reset-btn secondary"
          onClick={handleResetGame}
          disabled={roundsPlayed === 0 && !userChoice}
        >
          Reset game
        </button>
      </div>

      <History history={history} />
    </div>
  );
}

export default App;
