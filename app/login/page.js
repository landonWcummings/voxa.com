"use client";
import React, { useEffect, useState } from 'react';
import { auth, provider } from "@/app/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useAuth } from "@/components/AuthProvider";

export default function LoginPage() {
  const { user } = useAuth();
  const [extensionMissing, setExtensionMissing] = useState(false);
  const extensionId = "iakbjobmlikpklloibjdcljnmjoecpjc";

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  useEffect(() => {
    // When a user is logged in, check for the extension after a short delay.
    if (user) {
      setTimeout(checkForExtension, 1000);
    }
  }, [user]);

  const checkForExtension = () => {
    try {
      // Attempt to send a ping message to the extension.
      chrome.runtime.sendMessage(extensionId, { ping: true }, (response) => {
        if (chrome.runtime.lastError) {
          setExtensionMissing(true);
        }
      });
    } catch (error) {
      setExtensionMissing(true);
    }
  };

  // Inline styles for a sleek, modern look
  const containerStyle = {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0
  };

  const formStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "18px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s"
  };

  const promptStyle = {
    marginTop: "20px",
    padding: "15px",
    background: "#fff3cd",
    color: "#856404",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ color: "#333", marginBottom: "15px" }}>Login to Voxa</h2>
        {user ? (
          <p style={{ marginBottom: "20px" }}>Welcome, {user.displayName}!</p>
        ) : (
          <button
            onClick={handleGoogleLogin}
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Sign in with Google
          </button>
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
  );
}
