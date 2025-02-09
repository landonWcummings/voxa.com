"use client"

import { Header } from "@/components/Header"
import { VoxaButton } from "@/components/ui/VoxaButton"
import { ChromeIcon as Google } from "lucide-react"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const error = searchParams?.get("error") ?? null

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login to Voxa</h1>
          {error && (
            <p className="text-red-500 text-center mb-4">
              {error === "AccessDenied" ? "Access denied. Please try again." : "An error occurred. Please try again."}
            </p>
          )}
          <VoxaButton onClick={handleGoogleLogin} className="w-full flex items-center justify-center" size="lg">
            <Google className="mr-2 h-5 w-5" />
            Connect Google Account
          </VoxaButton>
        </div>
      </main>
    </div>
  )
}

