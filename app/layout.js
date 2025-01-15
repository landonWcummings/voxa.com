import Link from "next/link";
import "./globals.css"; // Ensure font-face declarations are included here

// Server-side metadata
export const metadata = {
  title: "VOXA",
  description: "Revolutionize your email workflow.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png", // For iOS devices
  },
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

import Image from "next/image";

function NavigationBar() {
  return (
    <header style={headerStyles}>
      <div style={logoAndNavStyles}>
        {/* VOXA Logo with Text */}
        <Link href="/" style={logoContainerStyles}>
          <Image
            src="/logo.png" // Path to your logo file in the public directory
            alt="VOXA Logo"
            width={35} // Logo size
            height={35}
            style={logoImageStyles}
          />
          <span style={logoTextStyles}>VOXA</span>
        </Link>
        {/* Navigation Links */}
        <nav style={navStyles}>
          <div style={dropdownContainer}>
            <Link href="#product" style={linkStyles}>
              Product <span style={arrowStyles}></span>
            </Link>
            <div style={dropdownStyles}>
              <Link href="#features" style={dropdownItemStyles}>
                Features
              </Link>
              <Link href="#integrations" style={dropdownItemStyles}>
                Integrations
              </Link>
            </div>
          </div>
          <div style={dropdownContainer}>
            <Link href="#learn" style={linkStyles}>
              Learn <span style={arrowStyles}></span>
            </Link>
            <div style={dropdownStyles}>
              <Link href="#tutorials" style={dropdownItemStyles}>
                Tutorials
              </Link>
              <Link href="#resources" style={dropdownItemStyles}>
                Resources
              </Link>
            </div>
          </div>
          <Link href="#pricing" style={linkStyles}>
            Pricing
          </Link>
          <Link href="#reviews" style={linkStyles}>
            Reviews
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

/* Updated CSS Styles */
const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", // Ensures everything aligns vertically
  padding: "15px 35px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  boxShadow: "0px 1.5px 4px rgba(0, 0, 0, 0.25)",
};

const logoAndNavStyles = {
  display: "flex",
  alignItems: "center", // Aligns logo and navigation links vertically
  gap: "25px",
};

const logoContainerStyles = {
  display: "flex",
  alignItems: "center", // Aligns logo and text vertically
  gap: "9px",
  textDecoration: "none",
};

const logoImageStyles = {
  display: "inline-block",
  verticalAlign: "middle",
};

const logoTextStyles = {
  fontSize: "1.65rem",
  fontWeight: "bold",
  fontFamily: "Kunika, Arial, sans-serif",
  color: "#ffffff",
  lineHeight: "1", // Ensures consistent vertical spacing
};

const navStyles = {
  display: "flex",
  gap: "20px", // Ensures equal spacing between navigation links
  alignItems: "center", // Aligns links and arrows vertically
};

const dropdownContainer = {
  position: "relative",
  display: "flex",
  alignItems: "center", // Aligns text and arrow vertically
};

const linkStyles = {
  textDecoration: "none",
  color: "#ffffff",
  fontFamily: "GothamSSm-Light, Arial, sans-serif",
  fontSize: "0.9rem", // Slightly reduced font size
  padding: "6px 0", // Adjusted vertical padding for alignment
  lineHeight: "1.2", // Ensures consistent height for links
};

const arrowStyles = {
  display: "inline-block",
  marginLeft: "4px", // Adjusted spacing between text and arrow
  verticalAlign: "middle", // Aligns arrow with text
  width: "0",
  height: "0",
  borderLeft: "3px solid transparent", // Reduced arrow size
  borderRight: "3px solid transparent",
  borderTop: "3px solid #ffffff",
};

const dropdownStyles = {
  display: "none",
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "#ffffff",
  minWidth: "135px",
  boxShadow: "0px 7px 14px rgba(0, 0, 0, 0.18)",
  zIndex: 1,
  borderRadius: "5px",
};

const dropdownItemStyles = {
  padding: "9px",
  textDecoration: "none",
  display: "block",
  color: "#ffffff",
  fontFamily: "GothamSSm-Light, Arial, sans-serif",
  fontSize: "0.875rem",
};

const ctaStyles = {
  textDecoration: "none",
  backgroundColor: "#007BFF",
  color: "#ffffff",
  padding: "10px 18px",
  border: "none",
  borderRadius: "4.5px",
  cursor: "pointer",
  fontSize: "15px",
  fontFamily: "GothamSSm-Light, Arial, sans-serif",
  alignSelf: "center", // Ensures button aligns with other elements
};









