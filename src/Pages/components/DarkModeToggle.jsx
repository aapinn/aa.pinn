import React, { useEffect, useState } from 'react';
import { LuCloudMoon } from "react-icons/lu";
import { LuCloudSun } from "react-icons/lu";



const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Cek localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(isDarkMode);
    document.body.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark', newMode);
      localStorage.setItem('dark-mode', newMode);
      return newMode;
    });
  };

  return (
      <button
        onClick={toggleDarkMode}
        className='bg-neutral-100 dark:bg-neutral-900 max-w-[2rem] h-[2rem] p-2 bottom-2 right-2 absolute flex justify-center items-center rounded-xl '
      >
        {darkMode ? <LuCloudSun className='text-xl  '/>  : <LuCloudMoon className='text-xl  '/> }
      </button>
  );
};

export default DarkModeToggle;
