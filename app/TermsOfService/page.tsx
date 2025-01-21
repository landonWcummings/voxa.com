import { Header } from "@/components/Header"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">TERMS OF SERVICE</h1>
          <p className="text-gray-600 mb-8">Last Updated: January 16, 2025</p>

          <div className="prose prose-blue max-w-none">
            <p>
              Welcome to our application ("the Service," "we," "us," "our"). These Terms of Service ("Terms") govern
              your access and use of the Service, which includes our software, website, and any related offerings. The
              Service allows you to authenticate with Google OAuth 2.0 to grant us access to your Gmail data,
              specifically your sent emails, to train a Large Language Model ("LLM") that replicates your writing style.
            </p>
            <p>
              By accessing or using the Service, you agree to these Terms. If you do not agree with them, you must not
              use the Service or grant access to your Gmail data.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <h3>Legally Binding Agreement</h3>
            <p>
              By creating an account or otherwise using the Service, you acknowledge that you have read, understood, and
              agree to be bound by these Terms and our Privacy Policy.
            </p>
            <h3>Eligibility</h3>
            <p>
              You must be at least 16 years of age (or the age of majority in your country of residence) to use the
              Service. By using the Service, you represent and warrant that you meet the age requirements.
            </p>
            <h3>Modifications</h3>
            <p>
              We reserve the right to modify these Terms at any time. If we make any material changes, we will provide
              notice via email or through our Service. Your continued use of the Service following any changes indicates
              your acceptance of the new Terms.
            </p>

            <h2>2. Description of the Service</h2>
            <h3>Access to Gmail Data</h3>
            <p>
              Our Service requests access to your Gmail data, specifically your sent emails, to train our LLM. We do not
              access or use emails outside of your sent folder unless specifically required and disclosed.
            </p>
            <p>
              By granting permissions via Google OAuth 2.0, you allow us to retrieve and process the textual content and
              related metadata of your sent emails.
            </p>
            <h3>LLM Training</h3>
            <p>
              The core functionality of our Service is to analyze your writing style from your sent emails. Once
              trained, our LLM can generate email drafts that mimic your tone and style. We do not send emails on your
              behalf without your explicit review and confirmation.
            </p>
            <h3>Output & User Responsibility</h3>
            <p>
              The Service may generate suggested email content. You are solely responsible for reviewing and approving
              any content before sending it. We are not liable for any consequences arising from the use of, or reliance
              on, LLM-generated content.
            </p>

            <h2>3. User Accounts</h2>
            <h3>Account Registration</h3>
            <p>
              To use the Service, you may be required to create an account or connect through your Google account. You
              must provide accurate, current, and complete information, and keep it updated. You are responsible for
              maintaining the confidentiality of your account credentials and for any activity that occurs under your
              account.
            </p>
            <h3>Prohibited Activities</h3>
            <p>
              You agree not to use the Service for any illegal or unauthorized purpose, including but not limited to:
            </p>
            <ul>
              <li>Violating any law or regulation.</li>
              <li>Using the Service to engage in harassment, threats, defamation, or other offensive behavior.</li>
              <li>
                Attempting to gain unauthorized access to the Service, other user accounts, or any systems or networks.
              </li>
              <li>Uploading or sending any content that contains malware, viruses, or harmful code.</li>
            </ul>

            <h2>4. User Data and Privacy</h2>
            <h3>Data Collection and Use</h3>
            <p>
              We collect and process your Gmail data, specifically the content of your sent emails, to train our LLM.
              Please refer to our Privacy Policy for a detailed explanation of how we handle and protect your data.
            </p>
            <h3>Data Revocation</h3>
            <p>
              You can revoke our access to your Gmail data at any time by visiting your Google Account Permissions page
              (
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                https://myaccount.google.com/permissions
              </a>
              ).
            </p>
            <h3>Data Security</h3>
            <p>
              We implement reasonable security measures to protect your information from unauthorized access, use,
              alteration, or destruction. However, no security measure is perfect; we cannot guarantee the absolute
              security of your data.
            </p>

            <h2>5. Intellectual Property</h2>
            <h3>Ownership</h3>
            <p>
              All intellectual property rights in the Service, including software, text, images, and other content,
              belong to us or our licensors. These Terms do not grant you any ownership interest in the Service or the
              content provided therein.
            </p>
            <h3>License to Use</h3>
            <p>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use
              the Service solely for its intended purpose.
            </p>
            <h3>User Content</h3>
            <p>
              By providing or creating content (e.g., user-submitted text or data) through the Service, you represent
              that you have the necessary rights to do so. You grant us a non-exclusive, worldwide, royalty-free license
              to use your content solely for the purpose of providing and improving the Service (e.g., training the
              LLM). We do not claim ownership of your content. Rather, you retain ownership of any intellectual property
              rights you hold in your content.
            </p>

            <h2>6. Fees and Payment</h2>
            <h3>Subscription Plans</h3>
            <p>
              If the Service includes paid subscription tiers, fees and payment terms will be outlined during your
              sign-up process. You are responsible for any applicable taxes or fees related to your use of the Service.
            </p>
            <h3>Free Trials and Promotions</h3>
            <p>
              We may offer free trials or promotional offers at our discretion. We reserve the right to modify, limit,
              or terminate such offers at any time.
            </p>

            <h2>7. Termination</h2>
            <h3>Termination by You</h3>
            <p>
              You may stop using the Service or delete your account at any time. If you wish to revoke our access to
              your Gmail data, please do so through your Google account settings.
            </p>
            <h3>Termination by Us</h3>
            <p>
              We reserve the right to suspend or terminate your access to the Service at any time, with or without
              notice, if we believe you have violated these Terms or have engaged in fraudulent or illegal activity.
            </p>
            <h3>Effect of Termination</h3>
            <p>
              Upon termination, your right to use the Service will immediately cease. We may retain certain data for
              legal or legitimate business reasons, as described in our Privacy Policy.
            </p>

            <h2>8. Warranties and Disclaimers</h2>
            <h3>No Warranty</h3>
            <p>
              To the maximum extent permitted by law, the Service is provided "AS IS" and "AS AVAILABLE." We disclaim
              all warranties of any kind, whether express or implied, regarding the Service's reliability, accuracy, or
              fitness for a particular purpose.
            </p>
            <h3>LLM Generated Content</h3>
            <p>
              The content generated by the LLM may contain inaccuracies, errors, or unintended biases. You acknowledge
              that any reliance on such content is at your own risk.
            </p>
            <h3>Third-Party Services</h3>
            <p>
              The Service may contain links to third-party websites or resources. We do not endorse and are not
              responsible for the content, products, or services available from these third parties.
            </p>

            <h2>9. Limitation of Liability</h2>
            <h3>Indirect Damages</h3>
            <p>
              To the fullest extent allowed by law, we will not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill.
            </p>
            <h3>Aggregate Liability</h3>
            <p>
              In no event will our total liability to you for all claims arising from or related to the Service exceed
              the amount paid by you (if any) to use the Service in the six (6) months preceding the event giving rise
              to liability.
            </p>
            <h3>Jurisdictional Limitations</h3>
            <p>
              Some jurisdictions do not allow certain disclaimers of warranties or limitations of liability. In such
              jurisdictions, the limitations herein may not apply to you.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless our company, its officers, directors, employees, and
              agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses
              (including attorneys' fees) arising out of or connected to your use of the Service or any violation of
              these Terms.
            </p>

            <h2>11. Governing Law and Dispute Resolution</h2>
            <h3>Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of Georgia, without regard to its
              conflict of law principles.
            </p>
            <h3>Dispute Resolution</h3>
            <p>
              Any dispute arising under or relating to these Terms shall be settled through binding arbitration in
              Georgia, unless otherwise required by law. Nothing in this provision prevents either party from seeking
              injunctive or other equitable relief in a court of competent jurisdiction.
            </p>

            <h2>12. Miscellaneous</h2>
            <h3>Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and us
              regarding the Service, superseding any prior agreements.
            </p>
            <h3>Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that provision will be enforced
              to the maximum extent permissible, and the remaining provisions will remain in full force.
            </p>
            <h3>Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of that right
              or provision.
            </p>
            <h3>Assignment</h3>
            <p>
              You may not assign or transfer any of your rights or obligations under these Terms without our prior
              written consent. We may freely assign or transfer our rights or obligations.
            </p>

            <h2>13. Contact Us</h2>
            <p>If you have any questions or concerns about these Terms, please contact us at:</p>
            <p>
              Email: <a href="mailto:voxaaibusiness@gmail.com">voxaaibusiness@gmail.com</a>
              <br />
              Website: <Link href="/">voxa.com</Link>
            </p>
            <p>
              Thank you for choosing our Service. Your trust is our priority, and we are committed to providing a safe
              and efficient platform for email generation.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">&copy; 2025 Voxa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

