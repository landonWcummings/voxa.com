"use client"; // Enable interactivity and hooks like useState/useEffect

export default function Page() {
  return (
    <div style={containerStyles}>
      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={heroTextStyles}>
          <h1 style={heroTitleStyles}>The Fastest Email Experience Ever Made</h1>
          <p style={heroSubtitleStyles}>
            Designed to help you focus and get through your email twice as fast.
          </p>
          <button style={heroButtonStyles}>Request Access</button>
        </div>
        <div style={heroImageStyles}>
          <img src="/hero-image.png" alt="Superhuman Interface" style={imageStyles} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={featuresStyles}>
        <h2 style={sectionTitleStyles}>Why SuperClone?</h2>
        <div style={featureListStyles}>
          <div style={featureStyles}>
            <h3>Speed</h3>
            <p>Fly through your inbox with unmatched speed and efficiency.</p>
          </div>
          <div style={featureStyles}>
            <h3>Focus</h3>
            <p>Eliminate distractions and focus on what matters.</p>
          </div>
          <div style={featureStyles}>
            <h3>Intelligence</h3>
            <p>Smart features that make managing email a breeze.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Inline CSS Styles */
const containerStyles = { padding: "20px 40px" };

const heroStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "60px 0",
  background: "linear-gradient(135deg, #007BFF, #6A93E5)",
  color: "#fff",
  borderRadius: "10px",
};

const heroTextStyles = { maxWidth: "50%" };

const heroTitleStyles = { fontSize: "48px", marginBottom: "20px" };

const heroSubtitleStyles = { fontSize: "18px", marginBottom: "30px" };

const heroButtonStyles = {
  backgroundColor: "#fff",
  color: "#007BFF",
  padding: "15px 30px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

const heroImageStyles = { maxWidth: "40%" };

const imageStyles = { maxWidth: "100%", borderRadius: "10px" };

const featuresStyles = { padding: "40px 0", textAlign: "center" };

const sectionTitleStyles = { marginBottom: "20px", fontSize: "32px" };

const featureListStyles = { display: "flex", justifyContent: "center", gap: "40px" };

const featureStyles = { maxWidth: "250px", textAlign: "left" };
