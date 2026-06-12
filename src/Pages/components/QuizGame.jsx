import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbStar, TbStarFilled, TbRefresh, TbHeart } from "react-icons/tb";

const quizData = [
  {
    question: "Kapan Arif mulai belajar coding?",
    options: ["2017", "2018", "2019", "2020"],
    answer: 2,
  },
  {
    question: "Apa nama panggilan Arif di dunia coding?",
    options: ["arifrh", "aapinn", "arifdev", "pinncode"],
    answer: 1,
  },
  {
    question: "Berapa bahasa yang dikuasai Arif?",
    options: ["1", "2", "3", "4"],
    answer: 1,
  },
  {
    question: "Apa pekerjaan Arif?",
    options: ["UI Designer", "Software Engineer", "Data Analyst", "Digital Marketer"],
    answer: 1,
  },
  {
    question: "Di kota mana Arif tinggal?",
    options: ["Jakarta", "Bandung", "Bekasi", "Bogor"],
    answer: 2,
  },
  {
    question: "Apa hobi Arif di waktu luang?",
    options: ["Membaca buku", "Gaming", "Berenang", "Memasak"],
    answer: 1,
  },
  {
    question: "Framework favorit Arif?",
    options: ["Vue", "React", "Angular", "Svelte"],
    answer: 1,
  },
  {
    question: "Apa mimpi Arif?",
    options: ["Jadi CTO", "Travel sambil remote work", "Buka startup", "Pensiun dini"],
    answer: 1,
  },
  {
    question: "Sekolah mana yang Arif tempuh?",
    options: ["SMK Business and Technology Bekasi", "SMA Negeri 1 Bekasi", "SMK Telkom Jakarta", "SMA Negeri 3 Bekasi"],
    answer: 0,
  },
  {
    question: "Apa perusahaan pertama Arif bekerja?",
    options: ["Indomaret", "Ace Hardware", "Giant", "AZKO"],
    answer: 2,
  },
  {
    question: "Tahun berapa Arif bekerja di Indomaret?",
    options: ["2018-2020", "2021-2023", "2020-2022", "2019-2021"],
    answer: 2,
  },
  {
    question: "Bahasa pemrograman apa yang TIDAK ada di tech stack Arif?",
    options: ["TypeScript", "Python", "JavaScript", "Node.js"],
    answer: 1,
  },
  {
    question: "Siapa nama lengkap Arif?",
    options: ["Arif Hidayat", "Arif Rahman Hidayat", "Rahman Arif Hidayat", "Muhammad Arif"],
    answer: 1,
  },
  {
    question: "Apa yang Arif percaya sebagai filosofi hidup?",
    options: ["Work hard play hard", "Lifelong learning", "Coding is life", "Money is everything"],
    answer: 1,
  },
  {
    question: "Berapa jumlah service yang Arif tawarkan?",
    options: ["4", "5", "6", "7"],
    answer: 2,
  },
];

const QuizGame = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("quizHighScore");
    return saved ? parseInt(saved) : 0;
  });

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === quizData[currentQ].answer;
    setIsCorrect(correct);
    if (correct) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem("quizHighScore", newScore.toString());
      }
    }
    setTimeout(() => {
      if (currentQ < quizData.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
    setIsCorrect(null);
    setGameStart(false);
  };

  if (!gameStart) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm text-center"
      >
        <div className="text-5xl mb-4">🧠</div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
          Quiz: Seberapa Kenal Kamu Sama Arif?
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 max-w-md mx-auto">
          Uji pengetahuan kamu tentang Arif — dari coding journey, pengalaman kerja, sampai fakta unik!
          {quizData.length} pertanyaan seru menantimu!
        </p>
        {highScore > 0 && (
          <p className="text-xs text-yellow-500 mb-4">
            🏆 High Score: {highScore}/{quizData.length}
          </p>
        )}
        <button
          onClick={() => setGameStart(true)}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25"
        >
          Mulai Quiz 🚀
        </button>
      </motion.div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / quizData.length) * 100);
    let emoji, message;
    if (percentage === 100) { emoji = "🏆"; message = "Sempurna! Kamu really know Arif!"; }
    else if (percentage >= 70) { emoji = "🌟"; message = "Mantap! Kamu kenal baik sama Arif!"; }
    else if (percentage >= 40) { emoji = "😄"; message = "Cukup kenal! Coba lagi biar lebih tahu!"; }
    else { emoji = "🤔"; message = "Hmm... Yuk kenalan lebih dekat sama Arif!"; }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm text-center"
      >
        <div className="text-5xl mb-3">{emoji}</div>
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
          Quiz Selesai!
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{message}</p>
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
          {score}/{quizData.length}
        </div>
        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 mb-4 max-w-xs mx-auto">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {score >= highScore && score > 0 && (
          <p className="text-xs text-yellow-500 mb-3">🎉 New High Score!</p>
        )}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={restart}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium hover:opacity-90 transition-all duration-300"
          >
            <TbRefresh className="inline mr-1" />Coba Lagi
          </button>
        </div>
      </motion.div>
    );
  }

  const q = quizData[currentQ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
    >
      {/* Progress & Score */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
          <TbStarFilled className="text-yellow-500" />
          <span>{score}</span>
        </div>
        <div className="flex items-center gap-1">
          {quizData.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentQ
                  ? "bg-purple-500 scale-125"
                  : i < currentQ
                  ? "bg-purple-300 dark:bg-purple-600"
                  : "bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {currentQ + 1}/{quizData.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-4 min-h-[40px]">
            {q.question}
          </h4>
          <div className="space-y-2">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={selected !== null}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 border ${
                  selected === null
                    ? "border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 hover:border-purple-400 dark:hover:border-purple-500 text-neutral-700 dark:text-neutral-300"
                    : selected === idx
                    ? isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                      : "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                    : idx === q.answer && selected !== null
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                    : "border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    selected === null
                      ? "bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
                      : selected === idx
                      ? isCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : idx === q.answer && selected !== null
                      ? "bg-green-500 text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-400"
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizGame;
