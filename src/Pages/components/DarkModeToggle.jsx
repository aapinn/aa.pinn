import { useEffect, useState, useCallback } from 'react';
import { LuCloudMoon } from "react-icons/lu";
import { LuCloudSun } from "react-icons/lu";

const getSystemPref = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const getInitialMode = () => {
  const stored = localStorage.getItem('dark-mode');
  if (stored !== null) return stored === 'true';
  return getSystemPref();
};

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(getInitialMode);

  const applyMode = useCallback((isDark) => {
    document.body.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    applyMode(darkMode);
  }, [darkMode, applyMode]);

  // Listen for OS theme changes only when user hasn't manually set a preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      if (localStorage.getItem('dark-mode') === null) {
        setDarkMode(e.matches);
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('dark-mode', next);
      return next;
    });
  };

  return (
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className='bg-neutral-100 dark:bg-neutral-900 max-w-[2rem] h-[2rem] p-2 bottom-2 right-2 absolute flex justify-center items-center rounded-xl '
      >
        {darkMode ? <LuCloudSun className='text-xl'/> : <LuCloudMoon className='text-xl'/>}
      </button>
  );
};

export default DarkModeToggle;
