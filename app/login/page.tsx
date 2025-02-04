"use client"

import { VoxaButton } from "@/components/ui/VoxaButton"
import { Header } from "@/components/Header"

export default function LoginPage() {
  // Configuration for Google OAuth
  const CLIENT_ID = "142707518642-tmtufrv6km20mkk2eikbh1162s5km21h.apps.googleusercontent.com"
  const REDIRECT_URI = "https://www.voxa.com"
  const AUTH_URI = "https://accounts.google.com/o/oauth2/auth"
  const SCOPE = "email profile" // Request access to user's email and profile

  // Function to initiate the OAuth flow
  const redirectToGoogleAuth = () => {
    const authUrl = `${AUTH_URI}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI,
    )}&scope=${encodeURIComponent(SCOPE)}&access_type=online`

    // Redirect user to Google OAuth page
    window.location.href = authUrl
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex justify-center items-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login to Voxa</h1>
          <VoxaButton onClick={redirectToGoogleAuth} className="w-full flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Connect Google Account</span>
          </VoxaButton>
        </div>
      </main>
    </div>
  )
}

