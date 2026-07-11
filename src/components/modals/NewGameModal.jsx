import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext.jsx";
import { Modal } from "../ui/Modal/Modal.jsx";
import { Button } from "../ui/Button/Button.jsx";

export function NewGameModal({ closeModal }) {
  const { dispatch } = useContext(GameContext);
  const handleNewGame = () => {
    dispatch({ type: "START_NEW_GAME" });
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="modal-text">
        Вы уверены, что хотите начать новую игру?
      </div>
      <div className="modal-options">
        <Button
          size="sm"
          variant="danger"
          className="modal-proceed"
          onClick={handleNewGame}
        >
          Новая игра
        </Button>
        <Button
          size="sm"
          variant="neutral"
          className="modal-cancel"
          onClick={closeModal}
        >
          Отмена
        </Button>
      </div>
    </Modal>
  );
}
