function ScoreBoard({ score }) {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span className="score-number win">{score.win}</span>
        <span className="score-label">Wins</span>
      </div>
      <div className="score-item">
        <span className="score-number draw">{score.draw}</span>
        <span className="score-label">Draws</span>
      </div>
      <div className="score-item">
        <span className="score-number lose">{score.lose}</span>
        <span className="score-label">Losses</span>
      </div>
    </div>
  );
}

export default ScoreBoard;
