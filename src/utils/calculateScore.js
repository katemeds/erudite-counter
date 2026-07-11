import { chars } from "../constants/chars";
import { bonuses } from "../constants/bonuses";
export function calculateScore(cells, turn, wordString) {
  let lettersScore = cells.reduce((acc, cell) => {
    const char = cell.char?.toLowerCase();
    if (!char) return acc;

    const base = chars[char] || 0;

    const multiplier =
      bonuses.letters.find((b) => b.id === cell.bonus)?.multiplier ?? 1;
    return acc + base * multiplier;
  }, 0);

  if (wordString?.length >= 5) lettersScore += 10;

  const wordBonus = turn.wordMultiplier;
  const allLetterBonus = turn.allLetterBonus ? 15 : 0;

  return lettersScore * wordBonus + allLetterBonus;
}
