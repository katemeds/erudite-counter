
import { Modal } from "../ui/Modal/Modal.jsx";
import { Button } from "../ui/Button/Button.jsx";

export function AddWordWarningModal({ closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="modal-text">Введите слово</div>

      <Button
        size="sm"
        variant="neutral"
        className="modal-cancel"
        onClick={closeModal}
      >
        Ок
      </Button>
    </Modal>
  );
}
