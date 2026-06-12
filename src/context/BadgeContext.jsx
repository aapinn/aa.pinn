import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const BadgeContext = createContext();

const ALL_PAGES = ["/", "/about", "/blog", "/projects", "/roadmap", "/dashboard", "/services", "/contact"];

const BADGE_DEFS = [
  { id: "welcome", icon: "🏆", title: "Welcome!", desc: "Kunjungi halaman Dashboard", check: () => localStorage.getItem("badge_welcome") === "true" },
  { id: "quizMaster", icon: "🧠", title: "Quiz Master", desc: "Skor sempurna 15/15 di Quiz", check: () => parseInt(localStorage.getItem("quizHighScore") || "0") >= 15 },
  { id: "memoryChamp", icon: "🃏", title: "Memory Champ", desc: "Dapat 3 bintang di Memory Game", check: () => parseInt(localStorage.getItem("memoryHighScore") || "0") >= 90 },
  { id: "rpsChamp", icon: "✋", title: "RPS Champion", desc: "Menang 5 ronde di RPS Lizard Spock", check: () => parseInt(localStorage.getItem("badge_rpsWins") || "0") >= 5 },
  { id: "game2048Master", icon: "🔢", title: "2048 Master", desc: "Skor 2048+ di 2048 Puzzle", check: () => parseInt(localStorage.getItem("game2048Best") || "0") >= 2048 },
  { id: "tttGenius", icon: "❌", title: "TTT Genius", desc: "Kalahkan AI Hard di Tic Tac Toe", check: () => localStorage.getItem("badge_tttHardWin") === "true" },
  { id: "gameAddict", icon: "🔥", title: "Game Addict", desc: "Mainkan semua game", check: () => {
    const played = JSON.parse(localStorage.getItem("badge_gamesPlayed") || "[]");
    return played.length >= 6;
  }},
  { id: "explorer", icon: "🌟", title: "Explorer", desc: "Kunjungi semua halaman utama", check: () => {
    const visited = JSON.parse(localStorage.getItem("badge_pagesVisited") || "[]");
    return ALL_PAGES.every((p) => visited.includes(p));
  }},
  { id: "highRoller", icon: "💎", title: "High Roller", desc: "Kumpulkan total skor 500+", check: () => {
    const quiz = parseInt(localStorage.getItem("quizHighScore") || "0");
    const memory = parseInt(localStorage.getItem("memoryHighScore") || "0");
    const game2048 = parseInt(localStorage.getItem("game2048Best") || "0");
    return (quiz * 10 + memory * 5 + game2048) >= 500;
  }},
  { id: "quoteCollector", icon: "💡", title: "Quote Collector", desc: "Simpan 5+ quote favorit", check: () => {
    const faves = JSON.parse(localStorage.getItem("faveQuotes") || "[]");
    return faves.length >= 5;
  }},
];

export const BadgeProvider = ({ children }) => {
  const location = useLocation();
  const [badges, setBadges] = useState({});
  const [totalEarned, setTotalEarned] = useState(0);

  const checkBadges = useCallback(() => {
    const results = {};
    let earned = 0;
    BADGE_DEFS.forEach((badge) => {
      const earned_badge = badge.check();
      results[badge.id] = earned_badge;
      if (earned_badge) earned++;
    });
    setBadges(results);
    setTotalEarned(earned);
  }, []);

  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("badge_pagesVisited") || "[]");
    if (!visited.includes(location.pathname)) {
      visited.push(location.pathname);
      localStorage.setItem("badge_pagesVisited", JSON.stringify(visited));
    }
    checkBadges();
  }, [location.pathname, checkBadges]);

  useEffect(() => {
    checkBadges();
    const interval = setInterval(checkBadges, 2000);
    return () => clearInterval(interval);
  }, [checkBadges]);

  return (
    <BadgeContext.Provider value={{ badges, totalEarned, badgeDefs: BADGE_DEFS, checkBadges }}>
      {children}
    </BadgeContext.Provider>
  );
};

export const useBadges = () => useContext(BadgeContext);

export const trackGamePlayed = (gameId) => {
  const played = JSON.parse(localStorage.getItem("badge_gamesPlayed") || "[]");
  if (!played.includes(gameId)) {
    played.push(gameId);
    localStorage.setItem("badge_gamesPlayed", JSON.stringify(played));
  }
};
