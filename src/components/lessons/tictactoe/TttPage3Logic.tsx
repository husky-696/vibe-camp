import { t, Lang } from "@/data/translations";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const jsCode = `// === Tic Tac Toe Game Logic ===

// The board: 9 empty cells (like a 3x3 grid stored as a list)
let board = ['', '', '', '', '', '', '', '', ''];

// Who's playing right now? X always goes first
let currentPlayer = 'X';

// Keep track of how many games each player has won
let scores = { X: 0, O: 0 };

// All the ways you can win (3 in a row)
const winCombos = [
  [0,1,2], [3,4,5], [6,7,8], // Rows: top, middle, bottom
  [0,3,6], [1,4,7], [2,5,8], // Columns: left, center, right
  [0,4,8], [2,4,6]           // Diagonals: corner to corner
];

// Check if someone has won
function checkWin() {
  for (let combo of winCombos) {
    const [a, b, c] = combo;  // Get the 3 positions to check
    // If all 3 cells match and aren't empty → we have a winner!
    if (board[a] && board[a] === board[b] 
        && board[a] === board[c]) {
      return { winner: board[a], combo }; // Return who won and which line
    }
  }
  // If every cell is filled but no winner → it's a draw
  if (board.every(cell => cell)) return { winner: 'draw' };
  // Otherwise, game continues
  return null;
}`;

const TttPage3Logic = ({ lang, onNext, onPrev }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">⚡ {t("tttJsTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("tttJsDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <CodeBlock code={jsCode} language="javascript" />
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">📖 {lang === "en" ? "How it works" : "어떻게 작동하나요"}</h2>
      <ul className="space-y-2 text-foreground/80">
        <li>🎯 {t("tttJsPart1", lang)}</li>
        <li>🔄 {t("tttJsPart2", lang)}</li>
        <li>🏆 {t("tttJsPart3", lang)}</li>
        <li>📊 {t("tttJsPart4", lang)}</li>
      </ul>
    </div>

    <div className="flex justify-between pt-4">
      <button onClick={onPrev} className="text-muted-foreground hover:text-foreground transition-colors font-medium">{t("prev", lang)}</button>
      <button onClick={onNext} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
        {t("next", lang)}
      </button>
    </div>
  </div>
);

export default TttPage3Logic;
