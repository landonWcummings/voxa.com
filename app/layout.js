import './globals.css';
import Link from 'next/link'; // Import Link from Next.js

export const metadata = {
  title: "SuperClone",
  description: "A fast, clean, and minimal email experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={headerStyles}>
          <div style={logoAndNavStyles}>
            {/* Link the VOXA logo to the home page */}
            <Link href="/" style={logoStyles}>
              VOXA
            </Link>
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
          </div>
          {/* Start For Free Button */}
          <a href="/signin" style={ctaStyles}>
            Start For Free
          </a>
        </header>
        <main>{children}</main>
        <footer style={footerStyles}>
          <p>&copy; 2025 VOXA. All rights reserved.</p>
        </footer>
      </body>
    </html>
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
  backgroundColor: "rgba(0, 0, 0, 0.6)",
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
  fontFamily: "Kunika, Arial, sans-serif",
  color: "#ffffff",
  textDecoration: "none",
  cursor: "pointer",
};

const navStyles = {
  display: "flex",
  gap: "20px",
};

const linkStyles = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: "bold",
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
  fontWeight: "bold",
};

const footerStyles = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#333333",
  color: "#ffffff",
};
