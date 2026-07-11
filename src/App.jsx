import { useState } from "react";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import { ModalRenderer } from "./components/modals/ModalRenderer.jsx";
import { Header } from "./components/layout/Header/Header.jsx";
import { Main } from "./components/layout/Main/Main.jsx";
import { Footer } from "./components/layout/Footer/Footer.jsx";
import { GameProvider } from "./contexts/GameContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

export function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <ModalProvider>
          <div className="wrapper">
            <Header />
            <Main />
            <Footer/>

            <ModalRenderer />
          </div>
        </ModalProvider>
      </GameProvider>
    </ThemeProvider>
  );
}

export default App;
