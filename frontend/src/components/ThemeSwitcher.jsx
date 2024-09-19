import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button onClick={toggleTheme} className="theme-switcher" aria-label="Toggle theme">
      {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};

export default ThemeSwitcher;