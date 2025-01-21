import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

const inter = Inter({ subsets: ["latin"] })

const kunika = localFont({
  src: "/fonts/Kunika.otf", // Changed to root-relative path
  variable: "--font-kunika",
})

const gothamLight = localFont({
  src: "/fonts/GothamSSm-Light.otf", // Changed to root-relative path
  variable: "--font-gotham-light",
})

const gothamMedium = localFont({
  src: "/fonts/GothamSSm-Medium.otf", // Changed to root-relative path
  variable: "--font-gotham-medium",
})

export const metadata: Metadata = {
  title: "Voxa - AI-Powered Email Writing Assistant",
  description: "Voxa is an AI Gmail Writing extension that drafts and responds to emails in your authentic voice.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${kunika.variable} ${gothamLight.variable} ${gothamMedium.variable}`}>
        {children}
      </body>
    </html>
  )
}

