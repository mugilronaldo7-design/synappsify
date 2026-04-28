import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synappsify Tech Solutions — Connecting Intelligence. Building Futures.",
  description:
    "Synappsify connects small and medium businesses in India to the digital world through beautiful websites, powerful mobile apps, and intelligent AI solutions.",
  keywords: [
    "web development India",
    "mobile app development",
    "AI chatbot",
    "digital solutions",
    "Coimbatore tech agency",
    "SMB technology",
  ],
  openGraph: {
    title: "Synappsify Tech Solutions",
    description: "We build websites, apps & AI tools that grow your business.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
