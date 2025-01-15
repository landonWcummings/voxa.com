import Link from "next/link";
import "./globals.css"; // Ensure font-face declarations are included here

// Server-side metadata
export const metadata = {
  title: "VOXA",
  description: "Revolutionize your email workflow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

function NavigationBar() {
  return (
    <header style={headerStyles}>
      <div style={logoAndNavStyles}>
        {/* VOXA Logo */}
        <Link href="/" style={logoStyles}>
          VOXA
        </Link>
        {/* Navigation Links */}
        <nav style={navStyles}>
          <Link href="#features" style={linkStyles}>
            Features
          </Link>
          <Link href="#about" style={linkStyles}>
            About
          </Link>
          <Link href="#pricing" style={linkStyles}>
            Pricing
          </Link>
        </nav>
      </div>
      {/* Button */}
      <a href="/signin" style={ctaStyles}>
        Start For Free
      </a>
    </header>
  );
}

/* Inline CSS Styles */
const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent dark background
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
};

const logoAndNavStyles = {
  display: "flex",
  alignItems: "center",
  gap: "30px",
};

const logoStyles = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  fontFamily: "Kunika, Arial, sans-serif", // VOXA logo uses Kunika
  color: "#ffffff", // White text for the logo
  textDecoration: "none",
};

const navStyles = {
  display: "flex",
  gap: "20px",
};

const linkStyles = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: "normal",
  fontFamily: "GothamSSm-Light, Arial, sans-serif", // Links use GothamSSm-Light
  fontSize: "1rem",
};

const ctaStyles = {
  display: "inline-block",
  textDecoration: "none",
  backgroundColor: "#007BFF",
  color: "#ffffff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontFamily: "GothamSSm-Light, Arial, sans-serif", // Button uses GothamSSm-Light
};
