import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbRefresh } from "react-icons/tb";

const SIZE = 4;
const WIN_VALUE = 2048;

const createEmptyGrid = () => Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

const getRandomTile = (grid) => {
  const empty = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (grid[r][c] === 0) empty.push([r, c]);
    }
  }
  if (empty.length === 0) return null;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  grid[r][c] = Math.random() < 0.9 ? 2 : 4;
  return { r, c, value: grid[r][c] };
};

const rotate = (grid) => {
  const newGrid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      newGrid[c][SIZE - 1 - r] = grid[r][c];
    }
  }
  return newGrid;
};

const slideRow = (row) => {
  const filtered = row.filter((v) => v !== 0);
  const newRow = [];
  let score = 0;
  let i = 0;
  while (i < filtered.length) {
    if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
      newRow.push(filtered[i] * 2);
      score += filtered[i] * 2;
      i += 2;
    } else {
      newRow.push(filtered[i]);
      i += 1;
    }
  }
  while (newRow.length < SIZE) newRow.push(0);
  return { row: newRow, score };
};

const slide = (grid) => {
  let totalScore = 0;
  let changed = false;
  const newGrid = grid.map((row) => {
    const { row: newRow, score } = slideRow(row);
    totalScore += score;
    if (newRow.join(",") !== row.join(",")) changed = true;
    return newRow;
  });
  return { grid: newGrid, score: totalScore, changed };
};

const moveLeft = (grid) => slide(grid);
const moveRight = (grid) => {
  const reversed = grid.map((row) => [...row].reverse());
  const { grid: slid, score, changed } = slide(reversed);
  return { grid: slid.map((row) => [...row].reverse()), score, changed };
};
const moveUp = (grid) => {
  let rotated = rotate(grid);
  rotated = rotate(rotated);
  rotated = rotate(rotated);
  const { grid: slid, score, changed } = slide(rotated);
  let result = rotate(slid);
  result = rotate(result);
  result = rotate(result);
  return { grid: result, score, changed };
};
const moveDown = (grid) => {
  let rotated = rotate(grid);
  const { grid: slid, score, changed } = slide(rotated);
  let result = rotate(slid);
  result = rotate(result);
  result = rotate(result);
  return { grid: result, score, changed };
};

const checkGameOver = (grid) => {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (grid[r][c] === 0) return false;
      if (c + 1 < SIZE && grid[r][c] === grid[r][c + 1]) return false;
      if (r + 1 < SIZE && grid[r][c] === grid[r + 1][c]) return false;
    }
  }
  return true;
};

const tileColors = {
  0: "bg-neutral-100 dark:bg-neutral-800/50 text-transparent",
  2: "bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200",
  4: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  8: "bg-orange-200 dark:bg-orange-700 text-white",
  16: "bg-orange-400 dark:bg-orange-600 text-white",
  32: "bg-red-400 dark:bg-red-600 text-white",
  64: "bg-red-500 dark:bg-red-700 text-white",
  128: "bg-yellow-300 dark:bg-yellow-600 text-white text-sm",
  256: "bg-yellow-400 dark:bg-yellow-500 text-white text-sm",
  512: "bg-yellow-500 dark:bg-yellow-400 text-white text-sm",
  1024: "bg-yellow-600 dark:bg-amber-500 text-white text-xs",
  2048: "bg-gradient-to-r from-yellow-500 to-red-500 text-white text-xs font-bold animate-pulse",
};

const Game2048 = () => {
  const [grid, setGrid] = useState(createEmptyGrid);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem("game2048Best");
    return saved ? parseInt(saved) : 0;
  });
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [mergedTiles, setMergedTiles] = useState([]);
  const [newTiles, setNewTiles] = useState([]);
  const tileIdRef = useRef(0);

  const initGame = useCallback(() => {
    const newGrid = createEmptyGrid();
    setMergedTiles([]);
    setNewTiles([]);
    getRandomTile(newGrid);
    getRandomTile(newGrid);
    setGrid(newGrid);
    setScore(0);
    setGameOver(false);
    setWon(false);
    setGameStarted(true);
  }, []);

  const handleMove = useCallback((dir) => {
    setGrid((prev) => {
      if (gameOver || won) return prev;

      let result;
      switch (dir) {
        case "LEFT": result = moveLeft(prev); break;
        case "RIGHT": result = moveRight(prev); break;
        case "UP": result = moveUp(prev); break;
        case "DOWN": result = moveDown(prev); break;
        default: return prev;
      }

      if (!result.changed) return prev;

      const newGrid = result.grid;
      const newScore = score + result.score;

      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
        localStorage.setItem("game2048Best", newScore.toString());
      }

      const tile = getRandomTile(newGrid);
      if (tile) {
        setNewTiles([{ id: tileIdRef.current++, ...tile }]);
      }

      const gridCopy = newGrid.map((row) => [...row]);

      let hasWon = false;
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          if (gridCopy[r][c] === WIN_VALUE) hasWon = true;
        }
      }
      if (hasWon) setWon(true);

      if (checkGameOver(gridCopy)) {
        setTimeout(() => setGameOver(true), 300);
      }

      return gridCopy;
    });
  }, [score, bestScore, gameOver, won]);

  useEffect(() => {
    if (!gameStarted) return;
    const handleKey = (e) => {
      const key = e.key.replace("Arrow", "").toUpperCase();
      if (["LEFT", "RIGHT", "UP", "DOWN"].includes(key)) {
        e.preventDefault();
        handleMove(key);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleMove, gameStarted]);

  let touchStartX, touchStartY;
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  };
  const handleTouchEnd = (e) => {
    if (!touchStartX || !touchStartY) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (Math.max(absDx, absDy) < 30) return;
    if (absDx > absDy) handleMove(dx > 0 ? "RIGHT" : "LEFT");
    else handleMove(dy > 0 ? "DOWN" : "UP");
    touchStartX = null;
    touchStartY = null;
  };

  if (!gameStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm text-center"
      >
        <div className="text-5xl mb-4">🔢</div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
          2048 Puzzle
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 max-w-md mx-auto">
          Gabungkan angka sampai 2048! Geser tile dengan arrow keys atau swipe.
          Semakin besar angka, semakin tinggi skor!
        </p>
        {bestScore > 0 && (
          <p className="text-xs text-yellow-500 mb-4">
            🏆 Best Score: {bestScore}
          </p>
        )}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xs text-neutral-400">⬆️⬇️⬅️➡️</span>
        </div>
        <button
          onClick={initGame}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-amber-500/25"
        >
          Mulai Game 🎮
        </button>
      </motion.div>
    );
  }

  return (
    <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
      {/* Score */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            Score: <span className="text-amber-500">{score}</span>
          </span>
          {bestScore > 0 && (
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Best: {bestScore}
            </span>
          )}
        </div>
        <button
          onClick={initGame}
          className="text-xs px-2 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          <TbRefresh className="inline mr-1" />New Game
        </button>
      </div>

      {/* Status */}
      <AnimatePresence>
        {(gameOver || won) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-center mb-3 p-2 rounded-xl text-sm font-semibold ${
              won
                ? "bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-900/20 dark:to-red-900/20 text-yellow-600 dark:text-yellow-400"
                : "bg-neutral-50 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400"
            }`}
          >
            {won ? "🎉 Selamat! Kamu mencapai 2048!" : "💀 Game Over!"}
            {gameOver && (
              <button
                onClick={initGame}
                className="ml-2 text-xs underline"
              >
                Coba lagi?
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid */}
      <div
        className="max-w-[280px] mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid grid-cols-4 gap-2 p-2 rounded-xl bg-neutral-200 dark:bg-neutral-800">
          {grid.flat().map((value, idx) => {
            const isNew = newTiles.some((t) => t.r * SIZE + t.c === idx);
            return (
              <motion.div
                key={`${idx}-${value}`}
                initial={isNew ? { scale: 0 } : false}
                animate={isNew ? { scale: [0, 1.1, 1] } : {}}
                transition={{ duration: 0.2 }}
                className={`aspect-square rounded-lg flex items-center justify-center text-lg sm:text-xl font-bold transition-colors duration-100 ${tileColors[value] || "bg-neutral-300 dark:bg-neutral-700 text-white text-xs"}`}
              >
                {value !== 0 && (
                  <motion.span
                    key={value}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {value}
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Game2048;
