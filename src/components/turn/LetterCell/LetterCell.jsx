import "./LetterCell.scss";

export function LetterCell({
  inputRef,
  onCharChange,
  onKeyDown,
  value,
  index,
  bonus,
  onClick,
}) {
  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="text"
      value={value}
      onInput={(e) => onCharChange(index, e.target.value)}
      onKeyDown={(e) => onKeyDown(index, e)}
      onFocus={(e) => e.target.select()}
      onClick={onClick}
      className={`cell ${bonus ? `cell--${bonus}` : ""}`}
      maxLength={1}
      onPaste={(e) => e.preventDefault()}
      aria-label={`Ячейка ${index + 1}`}
    />
  );
}
