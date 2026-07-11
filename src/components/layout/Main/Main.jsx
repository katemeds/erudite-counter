import { Turn } from "../../turn/Turn/Turn.jsx";
import { PlayersForm } from "../../players/PlayersForm/PlayersForm.jsx";
import './Main.scss'

export function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="game-wrapper">
          <PlayersForm />
          <Turn />
        </div>
      </div>
    </main>
  );
}