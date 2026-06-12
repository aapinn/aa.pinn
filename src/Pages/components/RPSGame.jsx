import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbRefresh, TbStarFilled } from "react-icons/tb";

const choices = [
  { name: "Rock", icon: "🪨", beats: ["Scissors", "Lizard"], color: "from-amber-500 to-orange-500" },
  { name: "Paper", icon: "📄", beats: ["Rock", "Spock"], color: "from-sky-500 to-blue-500" },
  { name: "Scissors", icon: "✂️", beats: ["Paper", "Lizard"], color: "from-red-500 to-rose-500" },
  { name: "Lizard", icon: "🦎", beats: ["Spock", "Paper"], color: "from-green-500 to-emerald-500" },
  { name: "Spock", icon: "🖖", beats: ["Scissors", "Rock"], color: "from-purple-500 to-violet-500" },
];

const ruleExplanations = {
  "Rock-Scissors": "Rock crushes Scissors",
  "Rock-Lizard": "Rock crushes Lizard",
  "Paper-Rock": "Paper covers Rock",
  "Paper-Spock": "Paper disproves Spock",
  "Scissors-Paper": "Scissors cuts Paper",
  "Scissors-Lizard": "Scissors decapitates Lizard",
  "Lizard-Spock": "Lizard poisons Spock",
  "Lizard-Paper": "Lizard eats Paper",
  "Spock-Scissors": "Spock smashes Scissors",
  "Spock-Rock": "Spock vaporizes Rock",
};

const RPSGame = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0, draw: 0 });
  const [gameState, setGameState] = useState("idle"); // idle | playing | result
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("rpsHighScore");
    return saved ? parseInt(saved) : 0;
  });
  const [showRules, setShowRules] = useState(false);

  const play = (choice) => {
    if (gameState === "playing") return;
    setPlayerChoice(choice);
    setGameState("playing");
    setResult(null);

    setTimeout(() => {
      const computer = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(computer);

      let res;
      if (choice.name === computer.name) {
        res = "draw";
      } else if (choice.beats.includes(computer.name)) {
        res = "win";
      } else {
        res = "lose";
      }

      setResult(res);
      setGameState("result");

      setScore((prev) => {
        const newScore = {
          ...prev,
          [res === "win" ? "player" : res === "lose" ? "computer" : "draw"]:
            prev[res === "win" ? "player" : res === "lose" ? "computer" : "draw"] + 1,
        };
        const total = newScore.player - newScore.computer;
        const abs = Math.abs(total);
        if (abs > highScore) {
          setHighScore(abs);
          localStorage.setItem("rpsHighScore", abs.toString());
        }
        return newScore;
      });
    }, 800);
  };

  const reset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScore({ player: 0, computer: 0, draw: 0 });
    setGameState("idle");
  };

  const getRuleText = () => {
    if (!playerChoice || !computerChoice || result === "draw") return null;
    const key = `${playerChoice.name}-${computerChoice.name}`;
    const revKey = `${computerChoice.name}-${playerChoice.name}`;
    return ruleExplanations[key] || ruleExplanations[revKey] || null;
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
          <span>🖐️</span> Rock Paper Scissors Lizard Spock
        </h3>
        <div className="flex items-center gap-2">
          {highScore > 0 && (
            <span className="text-xs text-yellow-500 flex items-center gap-1">
              <TbStarFilled /> {highScore}
            </span>
          )}
          <button
            onClick={() => setShowRules(!showRules)}
            className="text-xs px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            ?
          </button>
          <button
            onClick={reset}
            className="text-xs px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <TbRefresh className="inline mr-1" />Reset
          </button>
        </div>
      </div>

      {/* Rules */}
      <AnimatePresence>
        {showRules && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-3"
          >
            <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
              {Object.entries(ruleExplanations).map(([key, val]) => (
                <p key={key}>• {val}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Score */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-green-500">{score.player}</div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400">You</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-yellow-500">{score.draw}</div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400">Draw</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-red-500">{score.computer}</div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400">Comp</div>
        </div>
      </div>

      {/* Arena */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 mb-5 min-h-[100px]">
        <AnimatePresence mode="wait">
          {gameState === "idle" ? (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl mb-1">🤜</div>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Pilih senjatamu!</p>
            </motion.div>
          ) : (
            <>
              <motion.div
                key="player"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                <div className={`text-4xl sm:text-5xl mb-1 ${
                  result === "win" ? "animate-bounce" : ""
                }`}>
                  {playerChoice?.icon || "❓"}
                </div>
                <p className={`text-[10px] font-medium ${
                  result === "win" ? "text-green-500" : result === "lose" ? "text-red-500" : "text-neutral-500 dark:text-neutral-400"
                }`}>
                  You
                </p>
              </motion.div>

              <div className="text-xl sm:text-2xl text-neutral-400 font-bold">VS</div>

              <motion.div
                key="computer"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center"
              >
                {gameState === "playing" ? (
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                    className="text-4xl sm:text-5xl mb-1"
                  >
                    🤖
                  </motion.div>
                ) : (
                  <div className={`text-4xl sm:text-5xl mb-1 ${
                    result === "lose" ? "animate-bounce" : ""
                  }`}>
                    {computerChoice?.icon || "❓"}
                  </div>
                )}
                <p className={`text-[10px] font-medium ${
                  result === "lose" ? "text-green-500" : result === "win" ? "text-red-500" : "text-neutral-500 dark:text-neutral-400"
                }`}>
                  Comp
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <p className={`text-sm font-semibold ${
              result === "win" ? "text-green-500" : result === "lose" ? "text-red-500" : "text-yellow-500"
            }`}>
              {result === "win" ? "🎉 Kamu Menang!" : result === "lose" ? "😅 Kalah..." : "🤝 Seri!"}
            </p>
            {getRuleText() && (
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                {getRuleText()}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Choices */}
      <div className="grid grid-cols-5 gap-2">
        {choices.map((choice) => (
          <motion.button
            key={choice.name}
            onClick={() => play(choice)}
            disabled={gameState === "playing"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl text-xs transition-all duration-300 border ${
              playerChoice?.name === choice.name && gameState !== "idle"
                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-sm"
                : "border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 hover:border-purple-400 dark:hover:border-purple-500"
            } ${gameState === "playing" ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <span className="text-xl sm:text-2xl">{choice.icon}</span>
            <span className="text-[9px] sm:text-[10px] text-neutral-600 dark:text-neutral-400 truncate max-w-full">
              {choice.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default RPSGame;
