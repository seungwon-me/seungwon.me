import type { Metadata } from "next";
import { geistSans, geistMono } from "./fonts";
import "./globals.css";
import ScrollStatusIndicator from "@/app/scroll-status-indicator";
import { Header } from "./Header";

const siteUrl = "https://seungwon.me";
const siteTitle = "김승원 | Backend Developer";
const siteDescription =
  "사용자 경험의 본질을 찾는 백엔드 개발자 김승원의 포트폴리오";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "김승원",
    "백엔드 개발자",
    "Backend Developer",
    "Spring",
    "WebFlux",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "김승원 포트폴리오",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "김승원 포트폴리오 프로필 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/profile.png"],
  },
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
        <Header />
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
