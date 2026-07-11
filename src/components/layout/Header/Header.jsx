import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { Button } from "../../ui/Button/Button";
import { MODAL_TYPES } from "../../../constants/modalTypes";
import { ThemeToggler } from "../../ui/ThemeToggler/ThemeToggler";
import "./Header.scss";

export function Header() {
  const { openModal } = useContext(ModalContext);
  const handleRules = () => {
    openModal(MODAL_TYPES.RULES);
  };

  const handleNewGame = () => {k
    openModal(MODAL_TYPES.NEW_GAME);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Button
          variant="primary"
          size="md"
          className="header__button"
          onClick={handleRules}
        >
          Правила
        </Button>
        <Button
          variant="primary"
          size="md"
          className="header__button"
          onClick={handleNewGame}
        >
          Новая игра
        </Button>

        <ThemeToggler />
      </div>
    </header>
  );
}
