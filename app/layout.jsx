import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: `${profile.shortName} — ${profile.title}`,
  description: `${profile.headline} ${profile.summary}`,
  openGraph: {
    title: `${profile.shortName} — ${profile.title}`,
    description: profile.headline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
