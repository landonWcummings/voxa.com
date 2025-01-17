"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div style={containerStyles}>
      <section style={heroStyles}>
        <div style={heroTextStyles}>
          <h1 style={heroTitleStyles}>We cut your time spent on emails by 75%</h1>
          <p style={heroSubtitleStyles}>
            Revolutionize your workflow with VOXA.
          </p>
          <button style={heroButtonStyles}>Request Access</button>
          <p style={privacyTextStyles}>
            By signing up, you agree to the{" "}
            <Link href="/TermsOfService" style={privacyLinkStyles}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/PrivacyPolicy" style={privacyLinkStyles}>
              Privacy Policy
            </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}

/* Styles */
const containerStyles = {
  textAlign: "center",
  marginTop: "50px",
};

const heroStyles = {
  padding: "60px 0",
  background: "linear-gradient(135deg, #4C4F8A, #354F73)",
  color: "#ffffff",
};

const heroTextStyles = {
  maxWidth: "600px",
  margin: "0 auto",
};

const heroTitleStyles = {
  fontSize: "48px",
  marginBottom: "20px",
  fontFamily: "GothamCond-Medium, Arial, sans-serif",
};

const heroSubtitleStyles = {
  fontSize: "18px",
  marginBottom: "30px",
};

const heroButtonStyles = {
  backgroundColor: "#007BFF",
  color: "#ffffff",
  padding: "15px 30px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

const privacyTextStyles = {
  marginTop: "15px",
  fontSize: "14px",
  color: "#ffffff",
  fontFamily: "GothamSSm-Light, Arial, sans-serif",
};

const privacyLinkStyles = {
  color: "#FFD700", // Gold color for the link
  textDecoration: "underline",
  cursor: "pointer",
};
