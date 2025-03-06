"use client"
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function AuthErrorPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const errorCode = searchParams?.get("code") || null
  const errorMessage = searchParams?.get("message")

  useEffect(() => {
    // Log the error for monitoring
    if (errorCode || errorMessage) {
      console.error("Authentication Error:", { code: errorCode, message: errorMessage })
    }
  }, [errorCode, errorMessage])

  const getErrorMessage = (code: string | null) => {
    switch (code) {
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

  // Inline styles matching the login page style
  const containerStyle = {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f9",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  }

  const cardStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    width: "350px",
  }

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginTop: "20px",
  }

  const errorStyle = {
    padding: "15px",
    background: "#f8d7da",
    color: "#721c24",
    borderRadius: "8px",
    marginBottom: "20px",
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: "#333", marginBottom: "15px" }}>Authentication Error</h2>

        <div style={errorStyle}>
          <p>{getErrorMessage(errorCode)}</p>
        </div>

        <button
          onClick={() => router.push("/login")}
          style={buttonStyle}
          onMouseOver={(e) => ((e.target as HTMLElement).style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => ((e.target as HTMLElement).style.backgroundColor = "#007BFF")}
        >
          Return to Login
        </button>
      </div>
    </div>
  )
}

