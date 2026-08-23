"use client";

import { usePathname } from "next/navigation";
import ThemeToggle from "@/app/theme-toggle";

export function Header() {
  const pathname = usePathname();

  if (pathname.startsWith("/pdf")) {
    return null;
  }

  return (
    <div className="w-full flex justify-end items-center py-4 px-6">
      <ThemeToggle />
    </div>
  );
}
