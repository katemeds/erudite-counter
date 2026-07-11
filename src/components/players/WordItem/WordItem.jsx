import { Button } from "../../ui/Button/Button";
import { CloseIcon } from "../../ui/CloseIcon/CloseIcon";

export function WordItem({ word, onDelete }) {
  return (
    <div className="word-list__item">
      <p>{word.toLowerCase()}</p>
      <Button onClick={onDelete} variant="danger" size="icon" aria-label='Удалить слово'>
        <CloseIcon className="icon icon-sm" />
      </Button>
    </div>
  );
}