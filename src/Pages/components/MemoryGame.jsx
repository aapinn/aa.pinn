import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbRefresh, TbHeart, TbStarFilled } from "react-icons/tb";

const cardIcons = [
  "⚛️", "🐍", "☕", "🦀",
  "📱", "☁️", "🔷", "🐳",
  "⚡", "🔥", "💎", "🌐",
  "🤖", "🎮", "📊", "🧩",
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("memoryHighScore");
    return saved ? parseInt(saved) : 0;
  });

  const initGame = useCallback(() => {
    const pairs = cardIcons.slice(0, 8);
    const deck = [...pairs, ...pairs]
      .sort(() => Math.random() - 0.5)
      .map((icon, idx) => ({ id: idx, icon, flipped: false }));
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameComplete(false);
    setGameStarted(true);
  }, []);

  const handleFlip = (id) => {
    if (flipped.length === 2) return;
    if (flipped.includes(id)) return;
    if (matched.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].icon === cards[second].icon) {
        setMatched((prev) => [...prev, first, second]);
        setFlipped([]);
        const totalMatched = matched.length + 2;
        if (totalMatched === cards.length) {
          setTimeout(() => {
            setGameComplete(true);
          }, 600);
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 800);
      }
    }
  };

  useEffect(() => {
    if (gameComplete && moves > 0) {
      const score = Math.max(0, 100 - moves * 3);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("memoryHighScore", score.toString());
      }
    }
  }, [gameComplete, moves, highScore]);

  if (!gameStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm text-center"
      >
        <div className="text-5xl mb-4">🧠</div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
          Memory Card Game
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 max-w-md mx-auto">
          Cocokkan pasangan kartu bertema tech! Semakin sedikit gerakan, semakin tinggi skormu!
        </p>
        {highScore > 0 && (
          <p className="text-xs text-yellow-500 mb-4">
            🏆 Best Score: {highScore}
          </p>
        )}
        <button
          onClick={initGame}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25"
        >
          Mulai Game 🎮
        </button>
      </motion.div>
    );
  }

  if (gameComplete) {
    const score = Math.max(0, 100 - moves * 3);
    const stars = score >= 90 ? 3 : score >= 70 ? 2 : 1;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm text-center"
      >
        <div className="text-5xl mb-3">🎉</div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
          Game Selesai!
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
          Kamu menyelesaikan dalam {moves} gerakan
        </p>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(3)].map((_, i) => (
            <TbStarFilled
              key={i}
              className={`text-xl ${i < stars ? "text-yellow-500" : "text-neutral-300 dark:text-neutral-600"}`}
            />
          ))}
        </div>
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
          Score: {score}
        </div>
        {score >= highScore && moves > 0 && (
          <p className="text-xs text-yellow-500 mb-3">🎉 New Best Score!</p>
        )}
        <button
          onClick={initGame}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium hover:opacity-90 transition-all duration-300"
        >
          <TbRefresh className="inline mr-1" />Main Lagi
        </button>
      </motion.div>
    );
  }

  return (
    <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TbHeart className="text-pink-500" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Moves: {moves}
          </span>
        </div>
        <button
          onClick={initGame}
          className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          <TbRefresh className="inline mr-1" />Restart
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto">
        {cards.map((card, idx) => {
          const isFlipped = flipped.includes(idx) || matched.includes(idx);
          return (
            <motion.button
              key={card.id}
              onClick={() => handleFlip(idx)}
              whileTap={{ scale: 0.95 }}
              className={`aspect-square rounded-xl text-2xl sm:text-3xl flex items-center justify-center transition-all duration-300 border ${
                isFlipped
                  ? matched.includes(idx)
                    ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-600 shadow-sm"
                    : "bg-white dark:bg-neutral-800 border-purple-300 dark:border-purple-600 shadow-sm"
                  : "bg-gradient-to-br from-purple-500 to-pink-500 border-transparent hover:opacity-90 cursor-pointer shadow-md shadow-purple-500/20"
              }`}
            >
              <AnimatePresence mode="wait">
                {isFlipped ? (
                  <motion.span
                    key="icon"
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block"
                  >
                    {card.icon}
                  </motion.span>
                ) : (
                  <motion.span
                    key="back"
                    initial={{ rotateY: -180, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-lg sm:text-xl font-bold"
                  >
                    ?
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame;
