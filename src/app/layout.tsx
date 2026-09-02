import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSide from "@/components/SocialSide";
import EmailSide from "@/components/EmailSide";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keyberit.vercel.app"),
  title: "Keyber Mendoza | Software Engineer",
  description: "Software Engineer specializing in modern web architecture, React, Next.js, and scalable systems.",
  keywords: ["Keyber Mendoza", "KeyberIT", "Software Engineer", "Full Stack Developer", "Next.js", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Keyber Mendoza", url: "https://github.com/KeyberIT" }],
  creator: "Keyber Mendoza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keyberit.vercel.app",
    title: "Keyber Mendoza | Software Engineer",
    description: "Software Engineer specializing in modern web architecture, React, Next.js, and scalable systems.",
    siteName: "Keyber Mendoza Portfolio",
    images: [
      {
        url: "/foto-de-perfil.jpg",
        width: 800,
        height: 800,
        alt: "Keyber Mendoza Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyber Mendoza | Software Engineer",
    description: "Software Engineer specializing in modern web architecture, React, Next.js, and scalable systems.",
    creator: "@KeyberIT",
    images: ["/foto-de-perfil.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-navy text-slate">
        <Navbar />
        <SocialSide />
        <EmailSide />
        {children}
        <Footer />
      </body>
    </html>
  );
}
