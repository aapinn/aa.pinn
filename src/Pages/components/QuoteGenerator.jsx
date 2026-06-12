import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbRefresh } from "react-icons/tb";

const quotes = [
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
  { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", author: "Dan Salomon" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", author: "John Woods" },
  { text: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
  { text: "Debugging is twice as hard as writing the code in the first place.", author: "Brian Kernighan" },
  { text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your limitation—it's only your imagination.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  { text: "Talent without working hard is nothing.", author: "Cristiano Ronaldo" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Kesuksesan adalah perjalanan, bukan tujuan.", author: "Arif Rahman Hidayat" },
  { text: "Jangan bandingkan prosesmu dengan orang lain.", author: "Arif Rahman Hidayat" },
  { text: "Coding itu seperti hidup, semakin sering kamu error, semakin kuat kamu.", author: "Arif Rahman Hidayat" },
  { text: "Setiap bug adalah pelajaran berharga.", author: "Arif Rahman Hidayat" },
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);
  const [faves, setFaves] = useState(() => {
    const saved = localStorage.getItem("faveQuotes");
    return saved ? JSON.parse(saved) : [];
  });

  const getNewQuote = () => {
    let next;
    do {
      next = quotes[Math.floor(Math.random() * quotes.length)];
    } while (next === quote && quotes.length > 1);
    setQuote(next);
  };

  const toggleFave = () => {
    const exists = faves.find((f) => f.text === quote.text);
    let newFaves;
    if (exists) {
      newFaves = faves.filter((f) => f.text !== quote.text);
    } else {
      newFaves = [...faves, quote];
    }
    setFaves(newFaves);
    localStorage.setItem("faveQuotes", JSON.stringify(newFaves));
  };

  const isFave = faves.some((f) => f.text === quote.text);

  return (
    <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
          <span>💡</span> Tech Quote
        </h3>
        <div className="flex gap-1">
          <button
            onClick={toggleFave}
            className={`text-xs px-2 py-1.5 rounded-lg transition-colors ${
              isFave
                ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {isFave ? "❤️" : "🤍"}
          </button>
          <button
            onClick={getNewQuote}
            className="text-xs px-2 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <TbRefresh className="inline mr-1" />Lainnya
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={quote.text}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[100px] flex flex-col justify-center"
        >
          <p className="text-sm text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
            "{quote.text}"
          </p>
          <p className="text-xs text-purple-500 dark:text-purple-400 mt-3 font-medium">
            — {quote.author}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
        <span className="text-[10px] text-neutral-400">
          {faves.length} tersimpan
        </span>
        {faves.length > 0 && (
          <button
            onClick={() => {
              const randomFave = faves[Math.floor(Math.random() * faves.length)];
              setQuote(randomFave);
            }}
            className="text-[10px] text-purple-500 hover:underline"
          >
            Lihat tersimpan →
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteGenerator;
