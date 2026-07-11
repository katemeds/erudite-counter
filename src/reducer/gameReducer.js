import { initialState } from "./initialState";

export function gameReducer(state, { type, payload }) {
  switch (type) {
    // ================= players =================

    case "ADD_PLAYER":
      return { ...state, players: [...state.players, payload] };

    case "DELETE_PLAYER":
      return {
        ...state,
        players: state.players.filter((player) => player.id !== payload),
        activePlayerId:
          state.activePlayerId === payload ? null : state.activePlayerId,
      };

    case "SET_ACTIVE_PLAYER":
      return { ...state, activePlayerId: payload };

    case "ADD_WORD": {
      const { word, score } = payload;
      return {
        ...state,
        players: state.players.map((player) => {
          if (player.id === state.activePlayerId) {
            return {
              ...player,
              words: [...(player.words ?? []), word],
              score: player.score + score,
            };
          }
          return player;
        }),
      };
    }

    case "DELETE_WORD": {
      const { id, index } = payload;
      return {
        ...state,
        players: state.players.map((player) => {
          if (player.id === id) {
            const wordToDelete = player.words[index];
            return {
              ...player,
              score: wordToDelete
                ? player.score - wordToDelete.score
                : player.score,
              words: player.words.filter((_, i) => i !== index),
            };
          }
          return player;
        }),
      };
    }

    // ================= ui =================

    case "TOGGLE_WORDS":
      return {
        ...state,
        ui: {
          ...state.ui,
          openWordsPlayerId:
            state.ui.openWordsPlayerId === payload ? null : payload,
        },
      };

    // ================= turn =================

    case "SET_CHAR": {
      const { index, value } = payload;
      return {
        ...state,
        turn: {
          ...state.turn,
          cells: state.turn.cells.map((cell, i) =>
            i === index ? { ...cell, char: value } : cell,
          ),
        },
      };
    }

    case "REMOVE_CHAR": {
      const { index } = payload;
      return {
        ...state,
        turn: {
          ...state.turn,
          cells: state.turn.cells.map((cell, i) =>
            i === index ? { ...cell, char: "", bonus: null } : cell,
          ),
        },
      };
    }

    case "RESET_TURN":
      return { ...state, turn: initialState.turn };

    case "TOGGLE_LETTER_BONUS":
      const isSameBonus = state.turn.selectedBonus === payload;
      const nextBonus = isSameBonus ? null : payload;

      return {
        ...state,
        turn: {
          ...state.turn,
          selectedBonus: nextBonus,
          mode: nextBonus ? "bonus" : "input",
        },
      };

    case "TOGGLE_WORD_BONUS": {
      const { multiplier } = payload;
      const isSame = state.turn.wordMultiplier === multiplier;

      return {
        ...state,
        turn: {
          ...state.turn,
          wordMultiplier: isSame ? 1 : multiplier,
        },
      };
    }

    case "TOGGLE_ALL_LETTERS":
      return {
        ...state,
        turn: { ...state.turn, allLetterBonus: !state.turn.allLetterBonus },
      };

    case "APPLY_BONUS_TO_CELL": {
      const { index } = payload;
      const { selectedBonus } = state.turn;

      if (!selectedBonus) return state;

      const targetCell = state.turn.cells[index];
      if (!targetCell?.char) return state;
      const isSameBonus = targetCell.bonus === selectedBonus;
      const newBonus = isSameBonus ? null : selectedBonus;

      return {
        ...state,
        turn: {
          ...state.turn,
          cells: state.turn.cells.map((cell, i) =>
            i === index ? { ...cell, bonus: newBonus } : cell,
          ),
          selectedBonus: null,
          mode: "input",
        },
      };
    }

    case "START_NEW_GAME":
      return initialState;

    default:
      return state;
  }
}
