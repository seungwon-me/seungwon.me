"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      const theme = document.documentElement.getAttribute("data-theme");
      const next = theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      setIsDark(next === "dark");
    }
  };

  return (
    <button
      type="button"
      aria-label="테마 토글"
      className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors"
      onClick={toggleTheme}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
      <span className="sr-only">테마 토글</span>
    </button>
  );
} 