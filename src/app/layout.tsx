import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/app/theme-toggle";
import ScrollStatusIndicator from "@/app/scroll-status-indicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김승원 포트폴리오",
  description: "포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}
      >
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
        {/* Custom Scroll Bar */}
        <div className="fixed right-0 top-0 h-full flex flex-col items-end z-50 pointer-events-none">
          <div className="relative h-[40vh] mt-[24vh] flex flex-col items-center justify-center">
            <ScrollStatusIndicator />
          </div>
        </div>
        <div className="container mx-auto max-w-[1000px] px-4 md:px-10 lg:px-16">
          {children}
        </div>
      </body>
    </html>
  );
}
