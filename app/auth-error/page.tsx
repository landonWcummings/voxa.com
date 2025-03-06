"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function AuthErrorPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const errorCode = searchParams?.get("code") || null
  const errorMessage = searchParams?.get("message") || null

  useEffect(() => {
    if (errorCode || errorMessage) {
      console.error("Authentication Error:", { code: errorCode, message: errorMessage })
    }
  }, [errorCode, errorMessage])

  const getErrorMessage = () => {
    switch (errorCode) {
      case "auth/account-exists-with-different-credential":
        return "An account already exists with the same email address but different sign-in credentials."
      case "auth/cancelled-popup-request":
        return "The authentication popup was closed before completing the sign-in."
      case "auth/popup-blocked":
        return "The authentication popup was blocked by your browser. Please allow popups for this site."
      case "auth/popup-closed-by-user":
        return "The authentication popup was closed before completing the sign-in."
      case "auth/unauthorized-domain":
        return "This domain is not authorized for OAuth operations."
      case "auth/operation-not-allowed":
        return "This operation is not allowed. Contact support."
      case "auth/user-disabled":
        return "This user account has been disabled."
      default:
        return errorMessage || "An unexpected authentication error occurred. Please try again."
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Authentication Error</h2>
        <div className="bg-red-50 p-4 rounded-md mb-4">
          <p className="text-red-800">{getErrorMessage()}</p>
        </div>
        <button
          onClick={() => router.push("/login")}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Login
        </button>
      </div>
    </div>
  )
}

