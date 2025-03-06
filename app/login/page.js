"use client"
import { useEffect, useState } from "react"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth, googleProvider } from "@/app/firebaseConfig"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/AuthProvider"

export default function LoginPage() {
  const { user } = useAuth()
  const [extensionMissing, setExtensionMissing] = useState(false)
  const [gmailConnected, setGmailConnected] = useState(false)
  const [isConnectingGmail, setIsConnectingGmail] = useState(false)
  const extensionId = "iakbjobmlikpklloibjdcljnmjoecpjc"
  const router = useRouter()

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      router.push("/")
    } catch (error) {
      console.error("Login Failed:", error)
    }
  }

  const handleConnectGmail = async () => {
    try {
      setIsConnectingGmail(true)

      // Create a new provider instance with Gmail-specific scopes
      const gmailProvider = new GoogleAuthProvider()
      gmailProvider.addScope("https://www.googleapis.com/auth/gmail.readonly")
      gmailProvider.addScope("https://www.googleapis.com/auth/gmail.send")
      gmailProvider.addScope("https://www.googleapis.com/auth/gmail.compose")

      // Force the user to select an account again
      gmailProvider.setCustomParameters({
        prompt: "select_account",
      })

      const result = await signInWithPopup(auth, gmailProvider)

      // You would typically store the Gmail access token here
      // For example, you might send it to your backend
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const gmailToken = credential?.accessToken

      console.log("Gmail connected successfully", { gmailToken })
      setGmailConnected(true)

      // Here you would typically make an API call to your backend
      // to store the Gmail token for this user
    } catch (error) {
      console.error("Gmail Connection Failed:", error)
    } finally {
      setIsConnectingGmail(false)
    }
  }

  useEffect(() => {
    // When a user is logged in, check for the extension after a short delay.
    if (user) {
      setTimeout(checkForExtension, 1000)

      // Check if Gmail is already connected
      // This would typically be a check to your backend
      // For now, we'll just use local state
    }
  }, [user])

  const checkForExtension = () => {
    try {
      // Attempt to send a ping message to the extension.
      if (typeof window !== "undefined" && window.chrome && window.chrome.runtime) {
        window.chrome.runtime.sendMessage(extensionId, { ping: true }, (response) => {
          if (window.chrome.runtime?.lastError) {
            setExtensionMissing(true)
          }
        })
      } else {
        setExtensionMissing(true)
      }
    } catch (error) {
      setExtensionMissing(true)
    }
  }

  // Inline styles for a sleek, modern look
  const containerStyle = {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  }

  const formStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
  }

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "18px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  }

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007BFF", // Changed from #28a745 (green) to #007BFF (blue)
    marginTop: "15px",
  }

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  }

  const successStyle = {
    color: "#007BFF", // Changed from #28a745 (green) to #007BFF (blue)
    fontWeight: "bold",
    marginTop: "15px",
  }

  const promptStyle = {
    marginTop: "20px",
    padding: "15px",
    background: "#fff3cd",
    color: "#856404",
    borderRadius: "8px",
  }

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ color: "#333", marginBottom: "15px" }}>Login to Voxa</h2>

        {!user ? (
          <button
            onClick={handleGoogleLogin}
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Sign in with Google
          </button>
        ) : (
          <>
            <p style={{ marginBottom: "20px" }}>Welcome, {user.displayName}!</p>

            {!gmailConnected ? (
              <button
                onClick={handleConnectGmail}
                style={isConnectingGmail ? disabledButtonStyle : secondaryButtonStyle}
                onMouseOver={!isConnectingGmail ? (e) => (e.target.style.backgroundColor = "#0056b3") : undefined} // Changed hover color
                onMouseOut={!isConnectingGmail ? (e) => (e.target.style.backgroundColor = "#007BFF") : undefined} // Changed hover color
                disabled={isConnectingGmail}
              >
                {isConnectingGmail ? "Connecting..." : "Connect Gmail Account"}
              </button>
            ) : (
              <p style={successStyle}>✓ Gmail Connected Successfully</p>
            )}
          </>
        )}

        {extensionMissing && (
          <div style={promptStyle}>
            ⚠️ <strong>Voxa Extension Not Found.</strong>
            <br />
            <a
              href="https://chromewebstore.google.com/detail/voxa/iakbjobmlikpklloibjdcljnmjoecpjc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007BFF", fontWeight: "bold", textDecoration: "none" }}
            >
              Click here to install the Voxa Extension
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

