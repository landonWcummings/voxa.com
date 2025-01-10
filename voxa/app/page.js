"use client"; // Ensure this is a client component to use React hooks and interactivity

import React from "react";

export default function Page() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* Header Section */}
      <header style={headerStyles}>
        <div style={logoStyles}>OurBrand</div>
        <nav style={navStyles}>
          <a href="#features" style={linkStyles}>
            Features
          </a>
          <a href="#about" style={linkStyles}>
            About
          </a>
          <a href="#pricing" style={linkStyles}>
            Pricing
          </a>
        </nav>
        <button style={ctaStyles}>Get Started</button>
      </header>

      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={heroContentStyles}>
          <h1 style={heroTitleStyles}>Revolutionize Your Workflow</h1>
          <p style={heroTextStyles}>
            Discover how our tool can transform the way you work and help you
            achieve more with less effort.
          </p>
          <div style={buttonContainerStyles}>
            <button style={primaryButtonStyles}>Try for Free</button>
            <button style={secondaryButtonStyles}>Learn More</button>
          </div>
        </div>
        <div style={heroImageStyles}>
          <img
            src="/hero-image.png"
            alt="Hero Illustration"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={featuresStyles}>
        <h2 style={featuresTitleStyles}>Why Choose Us?</h2>
        <div style={featureListStyles}>
          <div style={featureStyles}>
            <h3>Feature 1</h3>
            <p>Short description about the first feature.</p>
          </div>
          <div style={featureStyles}>
            <h3>Feature 2</h3>
            <p>Short description about the second feature.</p>
          </div>
          <div style={featureStyles}>
            <h3>Feature 3</h3>
            <p>Short description about the third feature.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={footerStyles}>
        <p>&copy; 2025 OurBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* Styles */

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  backgroundColor: "#fff",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const logoStyles = { fontSize: "1.5rem", fontWeight: "bold" };

const navStyles = { display: "flex", gap: "20px" };

const linkStyles = { textDecoration: "none", color: "#333", fontWeight: "bold" };

const ctaStyles = {
  backgroundColor: "#4CAF50",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const heroStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "60px 40px",
  background: "linear-gradient(135deg, #4CAF50, #87CEEB)",
  color: "#fff",
};

const heroContentStyles = { maxWidth: "50%" };

const heroTitleStyles = { fontSize: "48px", marginBottom: "20px" };

const heroTextStyles = { fontSize: "18px", marginBottom: "30px" };

const buttonContainerStyles = { display: "flex", gap: "15px" };

const primaryButtonStyles = {
  backgroundColor: "#fff",
  color: "#4CAF50",
  padding: "15px 30px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

const secondaryButtonStyles = {
  backgroundColor: "transparent",
  color: "#fff",
  padding: "15px 30px",
  border: "2px solid #fff",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

const heroImageStyles = { maxWidth: "40%" };

const featuresStyles = { padding: "40px", textAlign: "center", backgroundColor: "#fff" };

const featuresTitleStyles = { marginBottom: "20px" };

const featureListStyles = { display: "flex", justifyContent: "center", gap: "40px" };

const featureStyles = { maxWidth: "250px", textAlign: "left" };

const footerStyles = { textAlign: "center", padding: "20px", backgroundColor: "#333", color: "#fff" };