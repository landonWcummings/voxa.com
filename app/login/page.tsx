"use client"

import { Header } from "@/components/Header"
import { VoxaButton } from "@/components/ui/VoxaButton"
import { ChromeIcon as Google } from "lucide-react"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const error = searchParams?.get("error")

  const handleGoogleLogin = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/dashboard",
        redirect: true,
      })
    } catch (error) {
      console.error("Sign in error:", error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login to Voxa</h1>
          {error && (
            <div className="mb-4 p-4 text-sm text-red-800 bg-red-100 rounded-lg">
              {error === "Configuration" &&
                "There was a problem with the server configuration. Please try again later."}
              {error === "AccessDenied" && "Access was denied. Please make sure you grant all required permissions."}
              {!["Configuration", "AccessDenied"].includes(error) && "An error occurred. Please try again."}
            </div>
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

