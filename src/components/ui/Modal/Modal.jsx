import { Button } from "../Button/Button";
import { CloseIcon } from "../../ui/CloseIcon/CloseIcon.jsx";
import "./Modal.scss";

export function Modal({ children, closeModal }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <Button
          onClick={closeModal}
          variant="ghost"
          size="icon"
          className="modal-close"
          aria-label='Закрыть модально окно'
        >
          {<CloseIcon className="icon icon-md" />}
        </Button>
        {children}
      </div>
    </div>
  );
}
