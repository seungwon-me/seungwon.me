import type { Metadata } from "next";
import { geistSans, geistMono } from "../fonts";
import "./globals.css";

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
        <div className="container mx-auto max-w-[1000px]">
          {children}
        </div>
      </body>
    </html>
  );
}
