import { Modal } from "../ui/Modal/Modal.jsx";
import { Button } from "../ui/Button/Button.jsx";

export function ChoosePlayerWarningModal({ closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="modal-text">Выберите игрока</div>

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
