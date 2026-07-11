import { useTheme } from "../../../hooks/useTheme";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import './ThemeToggler.scss'

export function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggler" onClick={toggleTheme} aria-label="Переключить тему">
      <span className="theme-toggler__icon">
        <MoonIcon />
      </span>
      <span
        className={`theme-toggler__thumb ${theme === "dark" ? "theme-toggler__thumb--dark" : ""}`}
      />
      <span className="theme-toggler__icon">
        <SunIcon />
      </span>
    </button>
  );
}
