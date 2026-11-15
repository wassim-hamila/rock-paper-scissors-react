import { icons } from '../utils/game';

const labels = {
  win: 'Win',
  lose: 'Loss',
  draw: 'Draw',
};

function History({ history }) {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="history">
      <h2>Last rounds</h2>
      <ul>
        {history.map((round) => (
          <li key={round.id}>
            <span>
              {icons[round.user]} vs {icons[round.computer]}
            </span>
            <span className={'badge ' + round.result}>{labels[round.result]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
