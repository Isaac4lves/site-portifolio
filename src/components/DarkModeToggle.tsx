"use client";

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (saved === 'false') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  function toggleDarkMode() {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
      setDarkMode(true);
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Alternar modo escuro"
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[--background] text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <span className="text-lg transition-transform duration-300 transform">
        {darkMode ? '☀️' : '🌙'}
      </span>
      
    </button>
  );
}