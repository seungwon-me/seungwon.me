"use client";

import { usePathname } from "next/navigation";
import ThemeToggle from "@/app/theme-toggle";

export function Header() {
  const pathname = usePathname();

  if (pathname.startsWith("/pdf")) {
    return null;
  }

  return (
    <div className="w-full flex justify-end items-center py-4 px-6 space-x-6">
      <a
        href="https://seungwon.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--text-secondary)] hover:text-[var(--primary-blue)] transition-colors"
      >
        Blog
      </a>
      <ThemeToggle />
    </div>
  );
}
