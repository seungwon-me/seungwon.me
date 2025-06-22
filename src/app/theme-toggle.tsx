"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Computer } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  // On mount, read the theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Whenever the theme state changes, apply it and save to localStorage
  useEffect(() => {
    if (theme === "system") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "system");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const sequence: Theme[] = ["light", "dark", "system"];
    const currentIndex = sequence.indexOf(theme);
    const nextTheme = sequence[(currentIndex + 1) % sequence.length];
    setTheme(nextTheme);
  };

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-5 h-5" />;
      case "dark":
        return <Moon className="w-5 h-5" />;
      case "system":
        return <Computer className="w-5 h-5" />;
      default:
        // Fallback for initial render or error
        return <Computer className="w-5 h-5" />;
    }
  };

  return (
    <button
      type="button"
      aria-label="테마 토글"
      className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors"
      onClick={toggleTheme}
    >
      {renderIcon()}
      <span className="sr-only">현재 테마: {theme}</span>
    </button>
  );
} 