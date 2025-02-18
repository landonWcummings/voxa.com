import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type React from "react";
import { AuthProvider } from "@/components/AuthProvider"; // New Firebase wrapper

const inter = Inter({ subsets: ["latin"] });

const kunika = localFont({
  src: "../public/fonts/Kunika.otf",
  variable: "--font-kunika",
  display: "swap",
});

const gothamLight = localFont({
  src: "../public/fonts/GothamSSm-Light.otf",
  variable: "--font-gotham-light",
  display: "swap",
});

const gothamMedium = localFont({
  src: "../public/fonts/GothamSSm-Medium.otf",
  variable: "--font-gotham-medium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voxa - AI-Powered Email Writing Assistant",
  description: "Voxa is an AI Gmail Writing extension that drafts and responds to emails in your authentic voice.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${kunika.variable} ${gothamLight.variable} ${gothamMedium.variable}`}>
        <AuthProvider> {/* Wrap app with Firebase auth */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
