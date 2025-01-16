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
  
        <h2 style={sectionTitleStyles}>4. Data Sharing and Disclosure</h2>
<p style={contentStyles}>
  <strong>Service Providers:</strong> We may share your information with trusted
  third-party service providers who help us operate and maintain our Service
  (e.g., hosting providers, data analytics). They will only receive the minimum
  necessary information to perform their tasks on our behalf and must adhere to
  strict confidentiality obligations.
</p>
<p style={contentStyles}>
  <strong>Legal Requirements:</strong> We may disclose your information if we
  believe such action is necessary to:
</p>
<ul style={listStyles}>
  <li>Comply with applicable laws, regulations, legal process, or government requests.</li>
  <li>Enforce our Terms of Service.</li>
  <li>Protect our rights, property, or safety, and that of our users or others.</li>
</ul>
<p style={contentStyles}>
  <strong>Business Transfers:</strong> If we are involved in a merger,
  acquisition, reorganization, or sale of assets, your information may be
  transferred as part of that deal. We will notify you through our Service or
  via email if any such transfer takes place, as well as any choices you may
  have regarding your information.
</p>
<p style={contentStyles}>
  <strong>No Third-Party Sales:</strong> We will never sell or rent your
  personal information or the content of your emails to third parties for their
  own marketing purposes.
</p>

<h2 style={sectionTitleStyles}>5. Data Retention</h2>
<p style={contentStyles}>
  <strong>Retention Period:</strong> We retain your email data for the minimum
  period necessary to fulfill the purposes outlined in this Privacy Policy,
  including training and maintaining our LLM. After this period, we securely
  delete or anonymize the data.
</p>
<p style={contentStyles}>
  <strong>Model Maintenance:</strong> The LLM retains learned language patterns
  but does not store raw email content. Trained models do not provide any
  personal information in outputs beyond the language style learned.
</p>

<h2 style={sectionTitleStyles}>6. Security</h2>
<p style={contentStyles}>
  We implement commercially reasonable safeguards designed to protect the
  confidentiality, integrity, and availability of your data. These measures
  include:
</p>
<ul style={listStyles}>
  <li>
    Encryption of data in transit using Secure Socket Layer (SSL) or Transport
    Layer Security (TLS).
  </li>
  <li>
    Access controls that limit the categories of team members who can access
    your data.
  </li>
  <li>
    Internal policies and procedures to securely handle user data in compliance
    with industry standards and applicable laws.
  </li>
</ul>

<h2 style={sectionTitleStyles}>7. Your Choices and Rights</h2>
<p style={contentStyles}>
  <strong>Access and Deletion:</strong> You have the right to request access to
  your personal data and to request its deletion. To do so, please contact us
  at <a href="mailto:voxaaibusiness@gmail.com" style={linkStyles}>voxaaibusiness@gmail.com</a> or use available account settings within our
  Service.
</p>
<p style={contentStyles}>
  <strong>Data Revocation:</strong> You can revoke our Service’s access to your
  Google account at any time. To do so, visit your{" "}
  <a
    href="https://myaccount.google.com/permissions"
    target="_blank"
    style={linkStyles}
  >
    Google Account Permissions page
  </a>{" "}
  and remove our application’s access.
</p>
<p style={contentStyles}>
  <strong>Communication Preferences:</strong> You may opt out of certain
  promotional communications by following the unsubscribe instructions provided
  in emails we send. Please note that even after you opt out, we may still send
  non-promotional messages regarding your account or ongoing use of our
  Service.
</p>

<h2 style={sectionTitleStyles}>8. Children’s Privacy</h2>
<p style={contentStyles}>
  Our Service is not intended for use by anyone under the age of 16. We do not
  knowingly collect or solicit personal data from children. If you believe that
  a child under 16 has provided personal data to us without parental consent,
  please contact us immediately so we can take appropriate action.
</p>

<h2 style={sectionTitleStyles}>9. Changes to This Privacy Policy</h2>
<p style={contentStyles}>
  We may update this Privacy Policy from time to time. If we make material
  changes, we will notify you through our Service or via email. The latest
  version of the Privacy Policy will always be available at{" "}
  <a href="https://www.voxa.com/PrivacyPolicy" style={linkStyles}>
    https://www.voxa.com/PrivacyPolicy
  </a>
  . Your continued use of our Service after any changes become effective
  indicates your acceptance of those changes.
</p>

<h2 style={sectionTitleStyles}>10. Contact Us</h2>
<p style={contentStyles}>
  If you have any questions or concerns about this Privacy Policy or our data
  practices, please contact us at:
</p>
<p style={contentStyles}>
  Email:{" "}
  <a href="mailto:voxaaibusiness@gmail.com" style={linkStyles}>
    voxaaibusiness@gmail.com
  </a>
  <br />
  Website:{" "}
  <a href="https://www.voxa.com/PrivacyPolicy" style={linkStyles}>
    https://www.voxa.com/PrivacyPolicy
  </a>
</p>

      </div>
    );
  }
  
  /* CSS Styles */
  const listStyles = {
    margin: "10px 0",
    paddingLeft: "20px",
    color: "#ffffff",
    fontSize: "16px",
    lineHeight: "1.6",
  };
  
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
  