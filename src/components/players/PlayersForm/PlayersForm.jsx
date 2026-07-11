import { useState, useContext } from "react";
import { Form } from "../../ui/Form/Form.jsx";
import { Button } from "../../ui/Button/Button.jsx";
import { Player } from "../Player/Player.jsx";
import { GameContext } from "../../../contexts/GameContext.jsx";
import './PlayersForm.scss'

export function PlayersForm() {
  const [value, setValue] = useState("");
  const { state, dispatch } = useContext(GameContext);
  const players = state.players;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlayer = {
      id: crypto.randomUUID(),
      name: value.trim() || `Player ${state.players.length + 1}`,
      score: 0,
      words: [],
    };

    dispatch({ type: "ADD_PLAYER", payload: newPlayer });

    setValue("");
  };

  return (
    <div className="players">
      <Form onSubmit={handleSubmit} className="players__form">
        <input
          onChange={handleChange}
          value={value}
          type="text"
          className="players__input"
          placeholder="имя игрока"
          aria-label="Введите имя игрока"
        />
        <Button type="submit" variant="neutral">
          Добавить
        </Button>
      </Form>

      <div className="players-list">
        {players.length > 0 &&
          players.map((el) => <Player key={el.id} {...el} />)}
      </div>
    </div>
  );
}
