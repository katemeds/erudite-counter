import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext.jsx";
import { MODAL_TYPES } from "../../constants/modalTypes.js";
import { RulesModal } from "./RulesModal.jsx";
import { DeletePlayerModal } from "./DeletePlayerModal.jsx";
import { NewGameModal } from "./NewGameModal.jsx";

export function ModalRenderer() {
  const { closeModal, activeModal, playerToDelete } = useContext(ModalContext);
  return (
    <>
      {activeModal === MODAL_TYPES.RULES && (
        <RulesModal closeModal={closeModal} />
      )}
      {activeModal === MODAL_TYPES.NEW_GAME && (
        <NewGameModal closeModal={closeModal} />
      )}
      {activeModal === MODAL_TYPES.DELETE && (
        <DeletePlayerModal closeModal={closeModal} id={playerToDelete} />
      )}
      {activeModal === MODAL_TYPES.CHOOSE_PLAYER_WARNING && (
        <ChoosePlayerWarningModal closeModal={closeModal}/>
      )}
      {activeModal === MODAL_TYPES.ADD_WORD_WARNING && (
        <AddWordWarningModal closeModal={closeModal}/>
      )}
    </>
  );
}
