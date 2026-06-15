import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TbStar, TbGitFork, TbCode, TbAlertCircle } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";

const GitHubProjects = ({ username = "aapinn" }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API limit exceeded or user not found");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 mb-3" />
            <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-full mb-2" />
            <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-8 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 text-center">
        <TbAlertCircle className="text-3xl text-amber-500 mx-auto mb-2" />
        <p className="text-amber-700 dark:text-amber-300 text-sm">GitHub: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <VscGithub className="text-2xl text-neutral-700 dark:text-neutral-300" />
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Latest Projects from GitHub
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo, idx) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="block p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:shadow-lg dark:hover:shadow-neutral-800/50 duration-300"
          >
            <div className="flex items-start gap-2 mb-2">
              <TbCode className="text-purple-500 mt-1 shrink-0" />
              <h4 className="font-medium text-sm text-neutral-800 dark:text-neutral-200 truncate">
                {repo.name}
              </h4>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 line-clamp-2">
              {repo.description || "No description"}
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-400 dark:text-neutral-500">
              {repo.language && (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <TbStar /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <TbGitFork /> {repo.forks_count}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default GitHubProjects;
