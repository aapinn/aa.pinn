import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsCodeSlash } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { TbCode, TbUsers, TbStar, TbGitFork, TbActivity } from "react-icons/tb";
import Content from "../Components/Content";

const Dashboard = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

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
    </div>
  );
};

export default Dashboard;
