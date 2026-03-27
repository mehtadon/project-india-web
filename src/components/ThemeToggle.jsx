import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-md border border-gray-200 px-2 py-1 text-sm text-gray-500 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-100"
      aria-label="Toggle dark mode"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
