import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext.jsx";
import { bonuses } from "../../../constants/bonuses.js";
import { BonusButton } from "../BonusesButton/BonusButton.jsx";
import "./BonusesPanel.scss";
import { Tooltip } from "../../ui/Tooltip/Tooltip.jsx";

export function BonusesPanel() {
  const { state, dispatch } = useContext(GameContext);
  const turn = state.turn;

  return (
    <div className="bonuses">
      <div className="bonuses__text">
        Бонусы за буквы
        <Tooltip
          content="Нажмите кнопку нужного цвета,
                а затем выберите ячейку. Чтобы убрать выделение и отменить бонус —
                выберите кнопку еще раз и повторно нажмите на ячейку. Зеленая кнопка удваивает очки за букву, желтая — умножает очки на три. Серая — буква не засчитывается"
        >
          <button type='button' className="bonuses__info">?</button>
        </Tooltip>
      </div>
      <div className="bonuses__group bonuses__group--letters">
        {bonuses.letters.map((el) => (
          <BonusButton
            key={el.id}
            type={el.id}
            label={el.label}
            onClick={() =>
              dispatch({ type: "TOGGLE_LETTER_BONUS", payload: el.id })
            }
            isActive={turn.selectedBonus === el.id}
          />
        ))}
      </div>
      <div className="bonuses__text">
        Бонусы за слова
        <Tooltip
          content='Нажмите кнопку нужного цвета; чтобы отменить бонус —
                нажмите на кнопку еще раз. Синяя/красная кнока — очки за слово удвоятся/утроятся. Кнопка  "Все буквы" принесет 15 дополнительных очков'
        >
          <button type='button' className="bonuses__info">?</button>
        </Tooltip>
      </div>
      <div className="bonuses__group bonuses__group--words">
        {bonuses.words.map((el) => (
          <BonusButton
            key={el.id}
            type={el.id}
            onClick={() =>
              dispatch({
                type: "TOGGLE_WORD_BONUS",
                payload: { multiplier: el.multiplier },
              })
            }
            isActive={turn.wordMultiplier === el.multiplier}
          />
        ))}
        {bonuses.allChars.map((el) => (
          <BonusButton
            key={el.id}
            type={el.id}
            onClick={() =>
              dispatch({ type: "TOGGLE_ALL_LETTERS", payload: el.id })
            }
            isActive={turn.allLetterBonus}
          />
        ))}
      </div>
    </div>
  );
}
