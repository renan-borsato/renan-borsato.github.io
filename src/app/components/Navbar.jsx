"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.theme = !darkMode ? "dark" : "light";
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center py-4 px-6">
      <h1 className="text-2xl font-bold dark:text-white">RENAN BORSATO</h1>

      <ul className="hidden sm:flex gap-8 text-lg font-bold tracking-wide">
        {["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleDarkMode}
        className="ml-6 p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-label="Toggle dark mode"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}
