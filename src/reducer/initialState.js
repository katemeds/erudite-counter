
export const initialState = {
  players: [],
  activePlayerId: null,

  turn: {
    cells: Array(15)
      .fill(null)
      .map(() => ({ char: "", bonus: null })),
    selectedBonus: null,
    wordMultiplier: 1,
    allLetterBonus: false,
    mode: "input",
  },

  ui: { openWordsPlayerId: null },
};
