
import './BonusButton.scss'

export function BonusButton({ type, label, onClick, isActive }) {
  return (
    <button
      type="button"
      className={`bonus-btn bonus-btn--${type} ${
        isActive ? "bonus-btn--active" : ""
      }`}
      onClick={onClick}
      aria-label={label}
      aria-pressed={isActive}
    >
      {type === "all-chars" ? "все буквы" : ""}
    </button>
  );
}
