export default function PrivacyPolicy() {
    return (
      <div style={containerStyles}>
        <h1 style={titleStyles}>Privacy Policy</h1>
        <p style={dateStyles}>Last updated: Jan 16, 2025</p>
        <p style={contentStyles}>
          Thank you for choosing our service. We value your privacy and are committed to protecting it. This Privacy Policy explains how our application (“the Service” or “we”) collects, uses, and discloses information about users (“you”) when you authenticate with Google using OAuth 2.0 and grant our Service access to your Gmail data. By using our Service, you agree to the practices described in this Privacy Policy. If you do not agree with these practices, please discontinue use of our Service and revoke permissions where applicable.
        </p>
  
        <h2 style={sectionTitleStyles}>1. Overview</h2>
        <p style={contentStyles}>
          Our Service is designed to access and analyze the content of your emails in order to train a Large Language Model (“LLM”) that can write emails similar to your personal style. We use Google OAuth 2.0 to request permission to access your Gmail data. Your trust is our top priority, and we maintain strict security measures to protect your information.
        </p>
  
        <h2 style={sectionTitleStyles}>2. Information We Collect</h2>
        <p style={contentStyles}>
          <strong>Google Account Information:</strong> When you authenticate via Google OAuth 2.0, we collect basic profile information such as your name and email address in order to identify and associate your data with your user account in our system.
        </p>
        <p style={contentStyles}>
          <strong>Email Content:</strong> With your explicit consent, and only after you grant our Service the required permission scope, we access the content of your emails from your Gmail account. This includes subject lines, body text, and metadata essential for training the LLM.
        </p>
        <p style={contentStyles}>
          <strong>Automatically Collected Data:</strong> We may collect certain technical information about your device and usage of our Service, such as IP address, browser type, operating system, and pages you view. This is used to help secure and improve our Service, and it does not include any personal content from your Gmail.
        </p>
  
        <h2 style={sectionTitleStyles}>3. How We Use Your Information</h2>
        <p style={contentStyles}>
          <strong>Training the LLM:</strong> We use your email content to train and improve the performance of our LLM. The model learns language patterns, style, and tone from your emails to better replicate your writing style.
        </p>
        <p style={contentStyles}>
          <strong>Providing Email Drafts:</strong> Once the LLM is trained, it will generate suggested email drafts on your behalf. We do not send any email without your review and explicit confirmation.
        </p>
        <p style={contentStyles}>
          <strong>Service Improvements:</strong> We analyze aggregated and anonymized data to understand user needs, diagnose technical or service problems, and improve our features.
        </p>
        <p style={contentStyles}>
          <strong>Security and Compliance:</strong> We use the information we collect to detect, prevent, or respond to potential fraud, unauthorized use of our Service, and other harmful or illegal activities.
        </p>
  
        {/* Continue with the remaining sections similarly */}
        
        <h2 style={sectionTitleStyles}>Contact Us</h2>
        <p style={contentStyles}>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p style={contentStyles}>
          Email: <a href="mailto:voxaaibusiness@gmail.com" style={linkStyles}>voxaaibusiness@gmail.com</a>
          <br />
          Website: <a href="https://www.voxa.com/PrivacyPolicy" style={linkStyles}>https://www.voxa.com/PrivacyPolicy</a>
        </p>
      </div>
    );
  }
  
  /* CSS Styles */
  const containerStyles = {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "GothamSSm-Light, Arial, sans-serif",
    backgroundColor: "#000000", // Optional: Add a dark background for better contrast
  };
  
  const titleStyles = {
    fontSize: "32px",
    marginBottom: "10px",
    textAlign: "center",
    color: "#ffffff", // White text for the title
  };
  
  const dateStyles = {
    fontSize: "14px",
    marginBottom: "30px",
    textAlign: "center",
    color: "#ffffff", // White text for the date
  };
  
  const sectionTitleStyles = {
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#ffffff", // White text for section titles
  };
  
  const contentStyles = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#ffffff", // White text for content
  };
  
  const linkStyles = {
    color: "#FFD700", // Gold color for links
    textDecoration: "underline",
  };
  