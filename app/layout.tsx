import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import Cursor from "@/components/cursor/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Replace after deployment

  title: {
    default: "Brishav Mondal | Full Stack Developer",
    template: "%s | Brishav Mondal",
  },

  description:
    "Portfolio of Brishav Mondal showcasing full-stack web development, AI projects, and modern web applications.",

  keywords: [
    "Brishav Mondal",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "ASP.NET Core",
    "Node.js",
    "Portfolio",
  ],

  authors: [
    {
      name: "Brishav Mondal",
    },
  ],

  creator: "Brishav Mondal",

  openGraph: {
    title: "Brishav Mondal | Full Stack Developer",
    description:
      "Portfolio of Brishav Mondal showcasing full-stack web development, AI projects, and modern web applications.",
    url: "https://your-domain.com",
    siteName: "Brishav Mondal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brishav Mondal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Brishav Mondal | Full Stack Developer",
    description:
      "Portfolio of Brishav Mondal showcasing full-stack web development, AI projects, and modern web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[#050505] text-white antialiased`}
      >
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}