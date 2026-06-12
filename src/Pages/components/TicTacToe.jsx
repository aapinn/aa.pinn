import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbRefresh, TbStarFilled } from "react-icons/tb";

const WIN_CONDITIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const minimax = (board, depth, isMaximizing) => {
  const winner = checkWinner(board);
  if (winner === "O") return 10 - depth;
  if (winner === "X") return depth - 10;
  if (board.every((c) => c)) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "O";
        best = Math.max(best, minimax(board, depth + 1, false));
        board[i] = null;
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "X";
        best = Math.min(best, minimax(board, depth + 1, true));
        board[i] = null;
      }
    }
    return best;
  }
};

const checkWinner = (board) => {
  for (const [a, b, c] of WIN_CONDITIONS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
};

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [status, setStatus] = useState("idle");
  const [scores, setScores] = useState({ player: 0, ai: 0, draw: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [winsNeeded, setWinsNeeded] = useState(0);

  useEffect(() => {
    if (status === "playing" && !isPlayerTurn) {
      const timer = setTimeout(() => {
        setBoard((prev) => {
          const newBoard = [...prev];
          const empty = newBoard.map((c, i) => (c === null ? i : null)).filter((c) => c !== null);
          if (empty.length === 0) return newBoard;

          let move;
          if (difficulty === "easy") {
            move = empty[Math.floor(Math.random() * empty.length)];
          } else {
            const boardCopy = [...newBoard];
            let bestScore = -Infinity;
            for (const i of empty) {
              boardCopy[i] = "O";
              const score = minimax(boardCopy, 0, false);
              boardCopy[i] = null;
              if (score > bestScore) {
                bestScore = score;
                move = i;
              }
            }
          }
          newBoard[move] = "O";
          return newBoard;
        });
        setIsPlayerTurn(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, status, difficulty]);

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner === "X") {
      setStatus("win");
      setScores((s) => ({ ...s, player: s.player + 1 }));
    } else if (winner === "O") {
      setStatus("lose");
      setScores((s) => ({ ...s, ai: s.ai + 1 }));
    } else if (board.every((c) => c)) {
      setStatus("draw");
      setScores((s) => ({ ...s, draw: s.draw + 1 }));
    }
  }, [board]);

  const handleClick = (idx) => {
    if (board[idx] || !isPlayerTurn || status !== "playing") return;
    const newBoard = [...board];
    newBoard[idx] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  const initGame = (diff) => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setStatus("playing");
    setGameStarted(true);
    setDifficulty(diff);
    if (diff === "easy") setWinsNeeded(0);
    else setWinsNeeded(0);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setStatus("playing");
  };

  const resetScores = () => {
    setScores({ player: 0, ai: 0, draw: 0 });
    setGameStarted(false);
    setStatus("idle");
  };

  const getStatusText = () => {
    if (status === "win") return "🎉 Kamu Menang!";
    if (status === "lose") return "😅 AI Menang!";
    if (status === "draw") return "🤝 Seri!";
    if (status === "playing" && !isPlayerTurn) return "🤖 AI berpikir...";
    if (status === "playing") return "Giliran kamu (X)";
    return "";
  };

  if (!gameStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm text-center"
      >
        <div className="text-5xl mb-4">❌</div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
          Tic Tac Toe vs AI
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5 max-w-md mx-auto">
          Kalahkan AI di Tic Tac Toe! Pilih level kesulitan:
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => initGame("easy")}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-green-500/25"
          >
            Easy 🟢
          </button>
          <button
            onClick={() => initGame("hard")}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-red-500/25"
          >
            Hard 🔴
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
      {/* Score & Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3 text-xs">
          <span className="text-green-500 font-semibold">You (X): {scores.player}</span>
          <span className="text-yellow-500 font-semibold">Draw: {scores.draw}</span>
          <span className="text-red-500 font-semibold">AI (O): {scores.ai}</span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={resetGame}
            className="text-xs px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <TbRefresh className="inline mr-1" />Restart
          </button>
        </div>
      </div>

      {/* Status */}
      <AnimatePresence mode="wait">
        <motion.p
          key={status + isPlayerTurn}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          className={`text-center text-xs font-medium mb-3 ${
            status === "win" ? "text-green-500" : status === "lose" ? "text-red-500" : status === "draw" ? "text-yellow-500" : "text-neutral-500 dark:text-neutral-400"
          }`}
        >
          {getStatusText()}
        </motion.p>
      </AnimatePresence>

      {/* Board */}
      <div className="grid grid-cols-3 gap-2 max-w-[220px] mx-auto">
        {board.map((cell, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleClick(idx)}
            whileTap={{ scale: 0.95 }}
            className={`aspect-square rounded-xl text-2xl sm:text-3xl font-bold flex items-center justify-center transition-all duration-200 border ${
              cell === "X"
                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-600 text-blue-500"
                : cell === "O"
                ? "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-600 text-red-500"
                : "border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 hover:border-purple-400 dark:hover:border-purple-500 cursor-pointer"
            }`}
          >
            {cell}
          </motion.button>
        ))}
      </div>

      {/* Result Actions */}
      <AnimatePresence>
        {(status === "win" || status === "lose" || status === "draw") && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-4 gap-2"
          >
            <button
              onClick={resetGame}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium hover:opacity-90 transition-all duration-300"
            >
              Main Lagi
            </button>
            <button
              onClick={resetScores}
              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              Ganti Level
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TicTacToe;
