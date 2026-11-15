import { icons } from '../utils/game';

function ChoiceButton({ choice, selected, disabled, onClick }) {
  return (
    <button
      className={selected ? 'choice-btn selected' : 'choice-btn'}
      onClick={() => onClick(choice)}
      disabled={disabled}
    >
      <span className="icon">{icons[choice]}</span>
      {choice}
    </button>
  );
}

export default ChoiceButton;
