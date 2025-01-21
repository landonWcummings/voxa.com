import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

const inter = Inter({ subsets: ["latin"] })

const kunika = localFont({
  src: "../public/fonts/Kunika.otf",
  variable: "--font-kunika",
  display: "swap",
})

const gothamLight = localFont({
  src: "../public/fonts/GothamSSm-Light.otf",
  variable: "--font-gotham-light",
  display: "swap",
})

const gothamMedium = localFont({
  src: "../public/fonts/GothamSSm-Medium.otf",
  variable: "--font-gotham-medium",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Voxa - AI-Powered Email Writing Assistant",
  description: "Voxa is an AI Gmail Writing extension that drafts and responds to emails in your authentic voice.",
  icons: {
    icon: "/favicon.ico",
  },
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

