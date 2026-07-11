export function loadFromLocalStorage() {
  try {
    const data = localStorage.getItem("game");
    if (!data) return null;

    const parsed = JSON.parse(data);

    if (!parsed || typeof parsed !== "object") return null;

    return parsed;
  } catch (error) {
    console.log("Failed to read LS", error);
    return null;
  }
}

export function saveToLocalStorage(state) {
  try {
    const neededState = {
      players: state.players,
      activePlayerId: state.activePlayerId,
    };
    localStorage.setItem("game", JSON.stringify(neededState));
  } catch (error) {
    console.log("Failed to save to LS", error);
  }
}
