import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김승원 포트폴리오",
  description: "포트폴리오",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container mx-auto">{children}</div>;
}
