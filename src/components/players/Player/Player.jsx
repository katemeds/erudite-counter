import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext.jsx";
import { GameContext } from "../../../contexts/GameContext.jsx";
import { Button } from "../../ui/Button/Button.jsx";
import { WordsList } from "../WordList/WordList.jsx";
import { MODAL_TYPES } from "../../../constants/modalTypes.js";
import { CloseIcon } from "../../ui/CloseIcon/CloseIcon.jsx";
import "./Player.scss";

export function Player({ name, score, words, id }) {
  const { openModal } = useContext(ModalContext);
  const { state, dispatch } = useContext(GameContext);
  const handlePlayerDelete = () => {
    openModal(MODAL_TYPES.DELETE, id);
  };

  const handleSelectPlayer = () => {
    dispatch({ type: "SET_ACTIVE_PLAYER", payload: id });
  };

  const isWordsOpen = state.ui.openWordsPlayerId === id;

  const playerClassName = `player${state.activePlayerId === id ? " player--active" : ""}`;

  return (
    <>
      <div className={playerClassName} onClick={handleSelectPlayer}>
        <div className="player__name">{name}</div>
        <div className="player__score">
          {score}
          <Button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "TOGGLE_WORDS", payload: id });
            }}
            variant="ghost"
            size="icon"
            aria-label={isWordsOpen ? "Скрыть слова игрока" : "Показать слова игрока"}
          >
            {" "}
            {isWordsOpen ? <>&#9650;</> : <>&#9660;</>}
          </Button>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handlePlayerDelete();
          }}
          variant="ghost"
          size="icon"
          aria-label='Удалить игрока'
        >
          <CloseIcon className="icon icon-sm" />
        </Button>
      </div>
      {isWordsOpen && <WordsList id={id} />}
    </>
  );
};
