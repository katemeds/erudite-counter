import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext.jsx";
import { Modal } from "../ui/Modal/Modal.jsx";
import { Button } from "../ui/Button/Button.jsx";

export function DeletePlayerModal({ closeModal, id }) {
  const { state, dispatch } = useContext(GameContext);
  const players = state.players;

  const playerName = players.find((p) => p.id === id)?.name || "";

  const handleDeletePlayer = () => {
    dispatch({ type: "DELETE_PLAYER", payload: id });
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="modal-text">
        Вы уверены, что хотите удалить игрока '
        {playerName[0].toUpperCase() + playerName.slice(1)}'?
      </div>
      <div className="modal-options">
        <Button
          size="sm"
          variant="danger"
          className="modal-proceed"
          onClick={handleDeletePlayer}
        >
          Удалить
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
