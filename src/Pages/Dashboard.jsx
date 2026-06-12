import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsCodeSlash } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { TbCode, TbUsers, TbStar, TbGitFork, TbActivity, TbBrain, TbCards, TbHandStop, TbPuzzle, TbQuote, TbNumbers } from "react-icons/tb";
import Content from "../Components/Content";
import QuizGame from "./components/QuizGame";
import MemoryGame from "./components/MemoryGame";
import RPSGame from "./components/RPSGame";
import TicTacToe from "./components/TicTacToe";
import QuoteGenerator from "./components/QuoteGenerator";
import Game2048 from "./components/Game2048";
import BadgeDisplay from "./components/BadgeDisplay";
import { trackGamePlayed } from "../context/BadgeContext";

const Dashboard = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeGame, setActiveGame] = useState(null);

  const games = [
    { id: "quiz", label: "Quiz", icon: <TbBrain />, color: "from-purple-500 to-pink-500" },
    { id: "memory", label: "Memory", icon: <TbCards />, color: "from-blue-500 to-cyan-500" },
    { id: "rps", label: "RPS Lizard Spock", icon: <TbHandStop />, color: "from-green-500 to-emerald-500" },
    { id: "tictactoe", label: "Tic Tac Toe", icon: <TbPuzzle />, color: "from-orange-500 to-red-500" },
    { id: "quote", label: "Quote Generator", icon: <TbQuote />, color: "from-teal-500 to-cyan-500" },
    { id: "game2048", label: "2048 Puzzle", icon: <TbNumbers />, color: "from-amber-500 to-orange-600" },
  ];

  const handleGameSelect = (gameId) => {
    setActiveGame(gameId);
    trackGamePlayed(gameId);
  };

  useEffect(() => {
    const username = "aapinn";
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
    ])
      .then(([userRes, reposRes]) => Promise.all([userRes.json(), reposRes.json()]))
      .then(([user, repos]) => {
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
        const languages = [...new Set(repos.filter(r => r.language).map(r => r.language))];
        setGithubData({
          ...user,
          totalRepos: repos.length,
          totalStars,
          totalForks,
          languages: languages.slice(0, 8),
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const statsCards = [
    { icon: <TbCode />, label: "Repositories", value: githubData?.totalRepos || 0, color: "from-blue-500 to-cyan-500" },
    { icon: <TbStar />, label: "Total Stars", value: githubData?.totalStars || 0, color: "from-yellow-500 to-orange-500" },
    { icon: <TbGitFork />, label: "Total Forks", value: githubData?.totalForks || 0, color: "from-green-500 to-emerald-500" },
    { icon: <TbUsers />, label: "Followers", value: githubData?.followers || 0, color: "from-purple-500 to-pink-500" },
    { icon: <TbActivity />, label: "Following", value: githubData?.following || 0, color: "from-red-500 to-rose-500" },
  ];

  return (
    <div data-aos='fade-down' data-aos-duration='1000'>
      <Helmet>
        <title>Dashboard - Arif Rahman Hidayat</title>
        <meta name="description" content="Dashboard GitHub stats Arif Rahman Hidayat - lihat repositories, stars, followers, dan aktivitas coding." />
        <meta property="og:title" content="Dashboard - Arif Rahman Hidayat" />
        <meta property="og:description" content="Dashboard GitHub stats dan aktivitas coding Arif Rahman Hidayat." />
        <meta property="og:url" content="https://aapinn.vercel.app/dashboard" />
      </Helmet>
      <Content
        icon={<BsCodeSlash />}
        text={'Dashboard'}
        subtitle={'Live GitHub stats & activity overview'}
        showCards={false}
      />

      {/* GitHub Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4">
        {statsCards.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -3 }}
            className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm text-center"
          >
            <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${stat.color} text-white text-lg mb-2`}>
              {stat.icon}
            </div>
            <div className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
              {loading ? (
                <span className="animate-pulse">--</span>
              ) : (
                stat.value
              )}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm mb-4"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {githubData?.avatar_url && (
            <img
              src={githubData.avatar_url}
              alt="GitHub avatar"
              className="w-20 h-20 rounded-full border-2 border-purple-500"
            />
          )}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center gap-2">
              <VscGithub className="text-xl text-neutral-700 dark:text-neutral-300" />
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                {githubData?.login || "aapinn"}
              </h3>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {githubData?.bio || "Software Engineer & Frontend Developer"}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {githubData?.languages?.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[10px] rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                >
                  {lang}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/aapinn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-xs text-purple-500 hover:underline"
            >
              View GitHub Profile <span>→</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Activity & Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30"
        >
          <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">⚡ Daily Activity</h4>
          <div className="space-y-2">
            {[
              "Writing React components",
              "Exploring new tech trends",
              "Building side projects",
              "Learning TypeScript patterns",
              "Contributing to open source",
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                {activity}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/30 dark:bg-neutral-900/30"
        >
          <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">🛠️ Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind", "JavaScript", "Node.js", "Git", "Figma", "MongoDB", "Vite"].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-white/50 dark:bg-neutral-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Badge / Achievements */}
      <div className="mt-6 mb-4">
        <BadgeDisplay />
      </div>

      {/* Game Zone */}
      <div className="mt-6 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-3 mb-4"
        >
          <div>
            <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
              🎮 Game Zone
            </h3>
            <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
              Seru-seruan sambil exploring dashboard!
            </p>
          </div>
          {activeGame && (
            <button
              onClick={() => setActiveGame(null)}
              className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              ✕ Close
            </button>
          )}
        </motion.div>

        {!activeGame ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {games.map((game) => (
              <motion.button
                key={game.id}
                onClick={() => handleGameSelect(game.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-gradient-to-br ${game.color} text-white text-left hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-2xl mb-2">{game.icon}</div>
                <h4 className="text-sm font-semibold mb-1">{game.label}</h4>
                <p className="text-[10px] text-white/80">
                  {game.id === "quiz" && "Tebak-tebakan seru tentang Arif!"}
                  {game.id === "memory" && "Asah ingatan dengan kartu tech!"}
                  {game.id === "rps" && "Suit klasik versi Big Bang Theory!"}
                  {game.id === "tictactoe" && "Kalahkan AI di Tic Tac Toe!"}
                  {game.id === "quote" && "Kutipan inspirasional tentang tech!"}
                  {game.id === "game2048" && "Gabungin angka sampai 2048!"}
                </p>
              </motion.button>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGame}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeGame === "quiz" && <QuizGame />}
              {activeGame === "memory" && <MemoryGame />}
              {activeGame === "rps" && <RPSGame />}
              {activeGame === "tictactoe" && <TicTacToe />}
              {activeGame === "quote" && <QuoteGenerator />}
              {activeGame === "game2048" && <Game2048 />}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
