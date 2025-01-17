"use client"; // Enable client-side rendering for this file

export default function LoginPage() {
  // Configuration for Google OAuth
  const CLIENT_ID = "142707518642-tmtufrv6km20mkk2eikbh1162s5km21h.apps.googleusercontent.com";
  const REDIRECT_URI = "https://www.voxa.com";
  const AUTH_URI = "https://accounts.google.com/o/oauth2/auth";
  const SCOPE = "email profile"; // Request access to user's email and profile

  // Function to initiate the OAuth flow
  const redirectToGoogleAuth = () => {
    const authUrl = `${AUTH_URI}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${encodeURIComponent(SCOPE)}&access_type=online`;

    // Redirect user to Google OAuth page
    window.location.href = authUrl;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 70px)", // Subtract height of navigation bar
        backgroundColor: "#f4f4f9",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#fff",
          padding: "20px 40px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>Login</h1>
        <button
          onClick={redirectToGoogleAuth}
          style={{
            backgroundColor: "#4285F4",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#357ae8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4285F4")}
        >
          Connect Google Account
        </button>
      </div>
    </div>
  );
}
