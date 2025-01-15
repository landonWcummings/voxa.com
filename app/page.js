"use client"; // Enable interactivity and hooks like useState/useEffect
import Image from 'next/image';
import './globals.css'; // Make sure your global styles include the font-face declarations

export default function Page() {
  return (
    <div style={containerStyles}>
      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={heroTextStyles}>
          <h1 style={heroTitleStyles}>
            We cut your time spent on emails by 75%
          </h1>
          <p style={heroSubtitleStyles}>
            Designed to help you focus and get through your email twice as fast.
          </p>
          <button style={heroButtonStyles}>Request Access</button>
        </div>
        <div>
          <Image 
            src="/open-image-placeholder.png" 
            alt="Open Image Placeholder" 
            width={500} 
            height={500} 
            style={imageStyles}
          />
        </div>
      </section>
    </div>
  );
}

/* Inline CSS Styles */
const containerStyles = {
  padding: "20px 40px",
  textAlign: "center",
};

const heroStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "60px 0",
  background: "none", // No background
  color: "#fff", // White text
};

const heroTextStyles = { maxWidth: "50%" };

const heroTitleStyles = {
  fontSize: "48px",
  marginBottom: "20px",
  fontFamily: "GothamCond-Medium, Arial, sans-serif", // GothamCond-Medium for the title
};

const heroSubtitleStyles = {
  fontSize: "18px",
  marginBottom: "30px",
  fontFamily: "GothamCond-Light, Arial, sans-serif", // GothamCond-Light for the subtitle
};

const heroButtonStyles = {
  backgroundColor: "#007BFF", // Simple blue button
  color: "#fff",
  padding: "15px 30px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
  fontFamily: "GothamCond-Light, Arial, sans-serif", // GothamCond-Light for button text
};

const imageStyles = { borderRadius: "10px" };
