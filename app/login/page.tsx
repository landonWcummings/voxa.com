"use client"

import { Header } from "@/components/Header"
import { VoxaButton } from "@/components/ui/VoxaButton"
import { ChromeIcon as Google } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  // Configuration for Google OAuth
  const CLIENT_ID = "142707518642-tmtufrv6km20mkk2eikbh1162s5km21h.apps.googleusercontent.com"
  const REDIRECT_URI = "https://www.voxa.com"
  const AUTH_URI = "https://accounts.google.com/o/oauth2/auth"
  const SCOPE = "email profile https://www.googleapis.com/auth/gmail.readonly"

  // Function to handle successful authentication
  const handleAuthSuccess = () => {
    router.push("/dashboard")
  }

  // Function to initiate the OAuth flow
  const redirectToGoogleAuth = () => {
    const authUrl = `${AUTH_URI}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI,
    )}&scope=${encodeURIComponent(SCOPE)}&access_type=online`

    // In a real implementation, you would:
    // 1. Handle the OAuth callback
    // 2. Exchange the code for tokens
    // 3. Store the tokens securely
    // 4. Then redirect to dashboard

    // For demo purposes, we're just redirecting
    handleAuthSuccess()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login to Voxa</h1>
          <VoxaButton onClick={redirectToGoogleAuth} className="w-full flex items-center justify-center" size="lg">
            <Google className="mr-2 h-5 w-5" />
            Connect Google Account
          </VoxaButton>
        </div>
      </main>
    </div>
  )
}

