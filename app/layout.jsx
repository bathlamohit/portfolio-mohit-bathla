import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: `${profile.shortName} — AI Consultant & Forward Deployed Engineer`,
  description: `${profile.headline} ${profile.summary}`,
  openGraph: {
    title: `${profile.shortName} — AI Consultant & Forward Deployed Engineer`,
    description: profile.headline,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#fafaf8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
