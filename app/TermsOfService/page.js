export default function TermsOfService() {
    return (
      <div style={containerStyles}>
        <h1 style={titleStyles}>Terms of Service</h1>
        <p style={dateStyles}>Last Updated: January 16, 2025</p>
  
        <p style={contentStyles}>
          Welcome to our application (“the Service,” “we,” “us,” “our”). These
          Terms of Service (“Terms”) govern your access and use of the Service,
          which includes our software, website, and any related offerings. The
          Service allows you to authenticate with Google OAuth 2.0 to grant us
          access to your Gmail data, specifically your sent emails, to train a
          Large Language Model (“LLM”) that replicates your writing style. By
          accessing or using the Service, you agree to these Terms. If you do not
          agree with them, you must not use the Service or grant access to your
          Gmail data.
        </p>
  
        <h2 style={sectionTitleStyles}>1. Acceptance of Terms</h2>
        <p style={contentStyles}>
          <strong>Legally Binding Agreement:</strong> By creating an account or
          otherwise using the Service, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and our Privacy
          Policy.
        </p>
        <p style={contentStyles}>
          <strong>Eligibility:</strong> You must be at least 16 years of age (or
          the age of majority in your country of residence) to use the Service.
          By using the Service, you represent and warrant that you meet the age
          requirements.
        </p>
        <p style={contentStyles}>
          <strong>Modifications:</strong> We reserve the right to modify these
          Terms at any time. If we make any material changes, we will provide
          notice via email or through our Service. Your continued use of the
          Service following any changes indicates your acceptance of the new
          Terms.
        </p>
  
        <h2 style={sectionTitleStyles}>2. Description of the Service</h2>
        <p style={contentStyles}>
          <strong>Access to Gmail Data:</strong> Our Service requests access to
          your Gmail data, specifically your sent emails, to train our LLM. We do
          not access or use emails outside of your sent folder unless
          specifically required and disclosed. By granting permissions via Google
          OAuth 2.0, you allow us to retrieve and process the textual content and
          related metadata of your sent emails.
        </p>
        <p style={contentStyles}>
          <strong>LLM Training:</strong> The core functionality of our Service is
          to analyze your writing style from your sent emails. Once trained, our
          LLM can generate email drafts that mimic your tone and style. We do not
          send emails on your behalf without your explicit review and
          confirmation.
        </p>
        <p style={contentStyles}>
          <strong>Output & User Responsibility:</strong> The Service may generate
          suggested email content. You are solely responsible for reviewing and
          approving any content before sending it. We are not liable for any
          consequences arising from the use of, or reliance on, LLM-generated
          content.
        </p>
  
        <h2 style={sectionTitleStyles}>3. User Accounts</h2>
        <p style={contentStyles}>
          <strong>Account Registration:</strong> To use the Service, you may be
          required to create an account or connect through your Google account.
          You must provide accurate, current, and complete information and keep
          it updated. You are responsible for maintaining the confidentiality of
          your account credentials and for any activity that occurs under your
          account.
        </p>
        <p style={contentStyles}>
          <strong>Prohibited Activities:</strong> You agree not to use the
          Service for any illegal or unauthorized purpose, including but not
          limited to:
        </p>
        <ul style={listStyles}>
          <li>Violating any law or regulation.</li>
          <li>
            Using the Service to engage in harassment, threats, defamation, or
            other offensive behavior.
          </li>
          <li>
            Attempting to gain unauthorized access to the Service, other user
            accounts, or any systems or networks.
          </li>
          <li>
            Uploading or sending any content that contains malware, viruses, or
            harmful code.
          </li>
        </ul>
  
        <h2 style={sectionTitleStyles}>4. User Data and Privacy</h2>
        <p style={contentStyles}>
          <strong>Data Collection and Use:</strong> We collect and process your
          Gmail data, specifically the content of your sent emails, to train our
          LLM. Please refer to our Privacy Policy for a detailed explanation of
          how we handle and protect your data.
        </p>
        <p style={contentStyles}>
          <strong>Data Revocation:</strong> You can revoke our access to your
          Gmail data at any time by visiting your{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            style={linkStyles}
          >
            Google Account Permissions page
          </a>
          .
        </p>
        <p style={contentStyles}>
          <strong>Data Security:</strong> We implement reasonable security
          measures to protect your information from unauthorized access, use,
          alteration, or destruction. However, no security measure is perfect; we
          cannot guarantee the absolute security of your data.
        </p>
  
        <h2 style={sectionTitleStyles}>5. Intellectual Property</h2>
        <p style={contentStyles}>
          <strong>Ownership:</strong> All intellectual property rights in the
          Service, including software, text, images, and other content, belong to
          us or our licensors. These Terms do not grant you any ownership
          interest in the Service or the content provided therein.
        </p>
        <p style={contentStyles}>
          <strong>License to Use:</strong> Subject to these Terms, we grant you a
          limited, non-exclusive, non-transferable, revocable license to use the
          Service solely for its intended purpose.
        </p>
        <p style={contentStyles}>
          <strong>User Content:</strong> By providing or creating content (e.g.,
          user-submitted text or data) through the Service, you represent that
          you have the necessary rights to do so. You grant us a non-exclusive,
          worldwide, royalty-free license to use your content solely for the
          purpose of providing and improving the Service (e.g., training the
          LLM). We do not claim ownership of your content. Rather, you retain
          ownership of any intellectual property rights you hold in your content.
        </p>
  
        <h2 style={sectionTitleStyles}>6. Fees and Payment</h2>
<p style={contentStyles}>
  <strong>Subscription Plans:</strong> If the Service includes paid
  subscription tiers, fees and payment terms will be outlined during your
  sign-up process. You are responsible for any applicable taxes or fees
  related to your use of the Service.
</p>
<p style={contentStyles}>
  <strong>Free Trials and Promotions:</strong> We may offer free trials or
  promotional offers at our discretion. We reserve the right to modify, limit,
  or terminate such offers at any time.
</p>

<h2 style={sectionTitleStyles}>7. Termination</h2>
<p style={contentStyles}>
  <strong>Termination by You:</strong> You may stop using the Service or
  delete your account at any time. If you wish to revoke our access to your
  Gmail data, please do so through your Google account settings.
</p>
<p style={contentStyles}>
  <strong>Termination by Us:</strong> We reserve the right to suspend or
  terminate your access to the Service at any time, with or without notice, if
  we believe you have violated these Terms or have engaged in fraudulent or
  illegal activity.
</p>
<p style={contentStyles}>
  <strong>Effect of Termination:</strong> Upon termination, your right to use
  the Service will immediately cease. We may retain certain data for legal or
  legitimate business reasons, as described in our Privacy Policy.
</p>

<h2 style={sectionTitleStyles}>8. Warranties and Disclaimers</h2>
<p style={contentStyles}>
  <strong>No Warranty:</strong> To the maximum extent permitted by law, the
  Service is provided “AS IS” and “AS AVAILABLE.” We disclaim all warranties
  of any kind, whether express or implied, regarding the Service’s reliability,
  accuracy, or fitness for a particular purpose.
</p>
<p style={contentStyles}>
  <strong>LLM Generated Content:</strong> The content generated by the LLM may
  contain inaccuracies, errors, or unintended biases. You acknowledge that any
  reliance on such content is at your own risk.
</p>
<p style={contentStyles}>
  <strong>Third-Party Services:</strong> The Service may contain links to
  third-party websites or resources. We do not endorse and are not responsible
  for the content, products, or services available from these third parties.
</p>

<h2 style={sectionTitleStyles}>9. Limitation of Liability</h2>
<p style={contentStyles}>
  <strong>Indirect Damages:</strong> To the fullest extent allowed by law, we
  will not be liable for any indirect, incidental, special, consequential, or
  punitive damages, including but not limited to loss of profits, data, or
  goodwill.
</p>
<p style={contentStyles}>
  <strong>Aggregate Liability:</strong> In no event will our total liability
  to you for all claims arising from or related to the Service exceed the
  amount paid by you (if any) to use the Service in the six (6) months
  preceding the event giving rise to liability.
</p>
<p style={contentStyles}>
  <strong>Jurisdictional Limitations:</strong> Some jurisdictions do not allow
  certain disclaimers of warranties or limitations of liability. In such
  jurisdictions, the limitations herein may not apply to you.
</p>

<h2 style={sectionTitleStyles}>10. Indemnification</h2>
<p style={contentStyles}>
  You agree to defend, indemnify, and hold harmless our company, its officers,
  directors, employees, and agents from and against any claims, liabilities,
  damages, judgments, awards, losses, costs, or expenses (including attorneys’
  fees) arising out of or connected to your use of the Service or any violation
  of these Terms.
</p>

<h2 style={sectionTitleStyles}>11. Governing Law and Dispute Resolution</h2>
<p style={contentStyles}>
  <strong>Governing Law:</strong> These Terms are governed by and construed in
  accordance with the laws of Georgia, without regard to its conflict of law
  principles.
</p>
<p style={contentStyles}>
  <strong>Dispute Resolution:</strong> Any dispute arising under or relating
  to these Terms shall be settled through binding arbitration in Georgia,
  unless otherwise required by law. Nothing in this provision prevents either
  party from seeking injunctive or other equitable relief in a court of
  competent jurisdiction.
</p>

<h2 style={sectionTitleStyles}>12. Miscellaneous</h2>
<p style={contentStyles}>
  <strong>Entire Agreement:</strong> These Terms, together with our Privacy
  Policy, constitute the entire agreement between you and us regarding the
  Service, superseding any prior agreements.
</p>
<p style={contentStyles}>
  <strong>Severability:</strong> If any provision of these Terms is found to
  be invalid or unenforceable, that provision will be enforced to the maximum
  extent permissible, and the remaining provisions will remain in full force.
</p>
<p style={contentStyles}>
  <strong>Waiver:</strong> Our failure to enforce any right or provision of
  these Terms will not be considered a waiver of that right or provision.
</p>
<p style={contentStyles}>
  <strong>Assignment:</strong> You may not assign or transfer any of your
  rights or obligations under these Terms without our prior written consent.
  We may freely assign or transfer our rights or obligations.
</p>

<h2 style={sectionTitleStyles}>13. Contact Us</h2>
<p style={contentStyles}>
  If you have any questions or concerns about these Terms, please contact us
  at:
</p>
<p style={contentStyles}>
  Email:{" "}
  <a href="mailto:voxaaibusiness@gmail.com" style={linkStyles}>
    voxaaibusiness@gmail.com
  </a>
  <br />
  Website:{" "}
  <a href="https://voxa.com" style={linkStyles}>
    voxa.com
  </a>
</p>
<p style={contentStyles}>
  Thank you for choosing our Service. Your trust is our priority, and we are
  committed to providing a safe and efficient platform for email generation.
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
    color: "#FFFFFF", // White text
  };
  
  const titleStyles = {
    fontSize: "32px",
    marginBottom: "10px",
    textAlign: "center",
    color: "#FFFFFF", // White text
  };
  
  const dateStyles = {
    fontSize: "14px",
    marginBottom: "30px",
    textAlign: "center",
    color: "#FFFFFF", // White text
  };
  
  const sectionTitleStyles = {
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
    color: "#FFFFFF", // White text
  };
  
  const contentStyles = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#FFFFFF", // White text
  };
  
  const linkStyles = {
    color: "#FFD700", // Gold color for links
    textDecoration: "underline",
  };
  
  const listStyles = {
    margin: "10px 0",
    paddingLeft: "20px",
    color: "#FFFFFF", // White text
    fontSize: "16px",
    lineHeight: "1.6",
  };
  