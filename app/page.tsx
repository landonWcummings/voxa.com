import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { CTA } from "@/components/CTA"
import { Pricing } from "@/components/Pricing"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Voxa. All rights reserved.</p>
      </footer>
    </div>
  )
}

