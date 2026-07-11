import { useRef, useContext } from "react";
import { initialState } from "../../../reducer/initialState.js";
import { GameContext } from "../../../contexts/GameContext.jsx";
import { ModalContext } from "../../../contexts/ModalContext.jsx";
import { Form } from "../../ui/Form/Form.jsx";
import { LetterCell } from "../LetterCell/LetterCell.jsx";
import { BonusesPanel } from "../BonusesPanel/BonusesPanel.jsx";
import { Button } from "../../ui/Button/Button.jsx";
import { calculateScore } from "../../../utils/calculateScore.js";
import { MODAL_TYPES } from "../../../constants/modalTypes.js";
import "./Turn.scss";

export function Turn() {
  const { state, dispatch } = useContext(GameContext);
  const { openModal } = useContext(ModalContext);
  const inputRefs = useRef([]);

  const turn = state.turn;

  const handleCharChange = (index, value) => {
    if (value && !/^[а-яё]$/i.test(value)) {
      return;
    }

    dispatch({ type: "SET_CHAR", payload: { index, value } });

    if (value) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key !== "Backspace") return;
    e.preventDefault();
    const cell = turn.cells[index];

    if (cell.char === "") {
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        dispatch({ type: "REMOVE_CHAR", payload: { index: prevIndex } });
        inputRefs.current[index - 1]?.focus();
      }
      return;
    }

    dispatch({ type: "REMOVE_CHAR", payload: { index: index } });
  };

  const handleCellClick = (index) => {
    if (turn.mode === "bonus") {
      inputRefs.current[index]?.blur();
    }
    dispatch({ type: "APPLY_BONUS_TO_CELL", payload: { index } });
  };

  const handleCount = (e) => {
    e.preventDefault();
    const wordString = turn.cells.map((cell) => cell.char).join("");

    const score = calculateScore(turn.cells, turn, wordString);
    const word = {
      word: turn.cells.map((cell) => cell.char).join(""),
      id: crypto.randomUUID(),
      score: score,
    };
    if (!wordString) {
      openModal(MODAL_TYPES.ADD_WORD_WARNING);
      return;
    }
    if (!state.activePlayerId) {
      openModal(MODAL_TYPES.CHOOSE_PLAYER_WARNING);
      return;
    }

    dispatch({ type: "ADD_WORD", payload: { word, score } });
    dispatch({ type: "RESET_TURN" });
  };

  return (
    <div>
      <Form className="word-form">
        <div className="word-form__text">Введите слово</div>
        <div className="word-form__wrapper">
          <div className="word-form__inputs">
            {turn.cells.map((cell, index) => (
              <LetterCell
                key={index}
                index={index}
                inputRef={(el) => (inputRefs.current[index] = el)}
                onCharChange={handleCharChange}
                onKeyDown={handleKeyDown}
                value={cell.char}
                bonus={cell.bonus}
                onClick={() => handleCellClick(index)}
              />
            ))}
          </div>
          <div className="word-form__bonuses-wrapper">
            <BonusesPanel />
            <Button
              type="submit"
              onClick={handleCount}
              className="count-btn"
              variant="neutral"
              size="sm"
              aria-label="Подсчет очков"
            >
              подсчет
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
