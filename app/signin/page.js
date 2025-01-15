"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div style={containerStyles}>
      <div style={formContainerStyles}>
        <h1 style={headingStyles}>Start For Free</h1>
        <p style={subheadingStyles}>
          Use your Google account to start your journey with VOXA.
        </p>
        <button style={googleButtonStyles} onClick={() => signIn("google")}>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}

/* Inline Styles (same as before) */


// Placeholder for Google Sign-In functionality
function handleGoogleSignIn() {
  alert("Google Sign-In functionality not implemented yet.");
  // Replace the above line with your actual Google Sign-In logic
}

/* Inline CSS Styles */
const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#4C4F8A", // Match the gradient theme
  background: "linear-gradient(135deg, #4C4F8A, #354F73)", // Gradient background
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  margin: 0,
};

const formContainerStyles = {
  textAlign: "center",
  maxWidth: "400px",
  padding: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
};

const headingStyles = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "10px",
};

const subheadingStyles = {
  fontSize: "1rem",
  marginBottom: "20px",
  color: "#d3d3d3",
};

const googleButtonStyles = {
  padding: "12px 15px",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#4285F4", // Google's blue color
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

googleButtonStyles[":hover"] = {
  backgroundColor: "#357AE8", // Slightly darker blue on hover
};
