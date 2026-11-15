import { icons, getExplanation } from '../utils/game';

const messages = {
  win: 'You win! 🎉',
  lose: 'You lose 😢',
  draw: "It's a draw 🤝",
};

function ResultBoard({ userChoice, computerChoice, result, isPlaying }) {
  // while the hands are shaking we show a fist on both sides
  let userHand = '?';
  let computerHand = '?';

  if (isPlaying) {
    userHand = icons.Rock;
    computerHand = icons.Rock;
  } else {
    if (userChoice) userHand = icons[userChoice];
    if (computerChoice) computerHand = icons[computerChoice];
  }

  let userClass = 'hand';
  let computerClass = 'hand computer';

  if (isPlaying) {
    userClass += ' shake';
    computerClass += ' shake';
  }
  if (result === 'win') userClass += ' winner';
  if (result === 'lose') computerClass += ' winner';

  return (
    <div className="board">
      <div className="players">
        <div className="player">
          <h3>You</h3>
          <div className={userClass}>{userHand}</div>
          <p>{userChoice || '-'}</p>
        </div>

        <span className="vs">VS</span>

        <div className="player">
          <h3>Computer</h3>
          <div className={computerClass}>{computerHand}</div>
          <p>{isPlaying ? '...' : computerChoice || '-'}</p>
        </div>
      </div>

      {result && (
        <div className="result-box">
          <p className={'result ' + result}>{messages[result]}</p>
          <p className="explanation">{getExplanation(userChoice, computerChoice, result)}</p>
        </div>
      )}
    </div>
  );
}

export default ResultBoard;
