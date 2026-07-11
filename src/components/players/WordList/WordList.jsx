import { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { WordItem } from "../WordItem/WordItem";
import "./WordList.scss";

export function WordsList({ id }) {
  const { state, dispatch } = useContext(GameContext);
  const playerWords = state.players?.find((p) => p.id === id)?.words;
  return (
    <div className="word-list">
      {playerWords?.length > 0 ? (
        playerWords.map((word, index) => (
          <WordItem
            key={word.id}
            word={word.word}
            onDelete={() =>
              dispatch({ type: "DELETE_WORD", payload: { id, index } })
            }
          />
        ))
      ) : (
        <span>Нет слов</span>
      )}
    </div>
  );
}
