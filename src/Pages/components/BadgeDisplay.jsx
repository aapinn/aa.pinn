import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBadges } from "../../context/BadgeContext";

const BadgeDisplay = () => {
  const { badges, totalEarned, badgeDefs } = useBadges();
  const [showAll, setShowAll] = useState(false);

  const earned = badgeDefs.filter((b) => badges[b.id]);
  const locked = badgeDefs.filter((b) => !badges[b.id]);
  const display = showAll ? badgeDefs : earned;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
          <span>🏅</span> Achievements
        </h3>
        <span className="text-[10px] px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium">
          {totalEarned}/{badgeDefs.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {display.map((badge) => {
          const earned_badge = badges[badge.id];
          return (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative group flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-all duration-300 ${
                earned_badge
                  ? "bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700"
                  : "bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 opacity-50"
              }`}
            >
              <span className="text-sm">{badge.icon}</span>
              <span className={`font-medium ${earned_badge ? "text-neutral-800 dark:text-neutral-200" : "text-neutral-400 dark:text-neutral-500"}`}>
                {badge.title}
              </span>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50">
                <div className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-lg">
                  {badge.desc}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800 dark:border-t-neutral-200" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {locked.length > 0 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 text-[10px] text-purple-500 hover:underline"
        >
          {showAll ? "Sembunyikan locked" : `Lihat ${locked.length} locked badges →`}
        </button>
      )}
    </motion.div>
  );
};

export default BadgeDisplay;
