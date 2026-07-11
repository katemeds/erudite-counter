import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";
import { createContext, useEffect, useReducer } from "react";
import { initialState } from "../reducer/initialState";
import { gameReducer } from "../reducer/gameReducer";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState, (initial) => {
    const saved = loadFromLocalStorage();

    if (!saved) return initial;

    return {
      ...initial,
      players: Array.isArray(saved.players) ? saved.players : initial.players,
      activePlayerId: saved.activePlayerId || null,
    };
  });

  useEffect(() => {
    saveToLocalStorage(state);
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
