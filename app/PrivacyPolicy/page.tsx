import { Header } from "@/components/Header"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: Jan 16, 2025</p>

          <div className="prose prose-blue max-w-none">
            <p>
              Thank you for choosing our service. We value your privacy and are committed to protecting it. This Privacy
              Policy explains how our application ("the Service" or "we") collects, uses, and discloses information
              about users ("you") when you authenticate with Google using OAuth 2.0 and grant our Service access to your
              Gmail data. By using our Service, you agree to the practices described in this Privacy Policy. If you do
              not agree with these practices, please discontinue use of our Service and revoke permissions where
              applicable.
            </p>

            <h2>1. Overview</h2>
            <p>
              Our Service is designed to access and analyze the content of your emails in order to train a Large
              Language Model ("LLM") that can write emails similar to your personal style. We use Google OAuth 2.0 to
              request permission to access your Gmail data. Your trust is our top priority, and we maintain strict
              security measures to protect your information.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Google Account Information</h3>
            <p>
              When you authenticate via Google OAuth 2.0, we collect basic profile information such as your name and
              email address in order to identify and associate your data with your user account in our system.
            </p>
            <h3>Email Content</h3>
            <p>
              With your explicit consent, and only after you grant our Service the required permission scope, we access
              the content of your emails from your Gmail account. This includes subject lines, body text, and metadata
              essential for training the LLM.
            </p>
            <h3>Automatically Collected Data</h3>
            <p>
              We may collect certain technical information about your device and usage of our Service, such as IP
              address, browser type, operating system, and pages you view. This is used to help secure and improve our
              Service, and it does not include any personal content from your Gmail.
            </p>

            <h2>3. How We Use Your Information</h2>
            <h3>Training the LLM</h3>
            <p>
              We use your email content to train and improve the performance of our LLM. The model learns language
              patterns, style, and tone from your emails to better replicate your writing style.
            </p>
            <h3>Providing Email Drafts</h3>
            <p>
              Once the LLM is trained, it will generate suggested email drafts on your behalf. We do not send any email
              without your review and explicit confirmation.
            </p>
            <h3>Service Improvements</h3>
            <p>
              We analyze aggregated and anonymized data to understand user needs, diagnose technical or service
              problems, and improve our features.
            </p>
            <h3>Security and Compliance</h3>
            <p>
              We use the information we collect to detect, prevent, or respond to potential fraud, unauthorized use of
              our Service, and other harmful or illegal activities.
            </p>

            <h2>4. Data Sharing and Disclosure</h2>
            <h3>Service Providers</h3>
            <p>
              We may share your information with trusted third-party service providers who help us operate and maintain
              our Service (e.g., hosting providers, data analytics). They will only receive the minimum necessary
              information to perform their tasks on our behalf and must adhere to strict confidentiality obligations.
            </p>
            <h3>Legal Requirements</h3>
            <p>We may disclose your information if we believe such action is necessary to:</p>
            <ul>
              <li>Comply with applicable laws, regulations, legal process, or government requests.</li>
              <li>Enforce our Terms of Service.</li>
              <li>Protect our rights, property, or safety, and that of our users or others.</li>
            </ul>
            <h3>Business Transfers</h3>
            <p>
              If we are involved in a merger, acquisition, reorganization, or sale of assets, your information may be
              transferred as part of that deal. We will notify you through our Service or via email if any such transfer
              takes place, as well as any choices you may have regarding your information.
            </p>
            <h3>No Third-Party Sales</h3>
            <p>
              We will never sell or rent your personal information or the content of your emails to third parties for
              their own marketing purposes.
            </p>

            <h2>5. Data Retention</h2>
            <h3>Retention Period</h3>
            <p>
              We retain your email data for the minimum period necessary to fulfill the purposes outlined in this
              Privacy Policy, including training and maintaining our LLM. After this period, we securely delete or
              anonymize the data.
            </p>
            <h3>Model Maintenance</h3>
            <p>
              The LLM retains learned language patterns but does not store raw email content. Trained models do not
              provide any personal information in outputs beyond the language style learned.
            </p>

            <h2>6. Security</h2>
            <p>
              We implement commercially reasonable safeguards designed to protect the confidentiality, integrity, and
              availability of your data. These measures include:
            </p>
            <ul>
              <li>Encryption of data in transit using Secure Socket Layer (SSL) or Transport Layer Security (TLS).</li>
              <li>Access controls that limit the categories of team members who can access your data.</li>
              <li>
                Internal policies and procedures to securely handle user data in compliance with industry standards and
                applicable laws.
              </li>
            </ul>

            <h2>7. Your Choices and Rights</h2>
            <h3>Access and Deletion</h3>
            <p>
              You have the right to request access to your personal data and to request its deletion. To do so, please
              contact us at voxaaibusiness@gmail.com or use available account settings within our Service.
            </p>
            <h3>Data Revocation</h3>
            <p>
              You can revoke our Service's access to your Google account at any time. To do so, visit your{" "}
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
                Google Account Permissions page
              </a>{" "}
              and remove our application's access.
            </p>
            <h3>Communication Preferences</h3>
            <p>
              You may opt out of certain promotional communications by following the unsubscribe instructions provided
              in emails we send. Please note that even after you opt out, we may still send non-promotional messages
              regarding your account or ongoing use of our Service.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our Service is not intended for use by anyone under the age of 16. We do not knowingly collect or solicit
              personal data from children. If you believe that a child under 16 has provided personal data to us without
              parental consent, please contact us immediately so we can take appropriate action.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you
              through our Service or via email. The latest version of the Privacy Policy will always be available at{" "}
              <Link href="/PrivacyPolicy">our Privacy Policy page</Link>. Your continued use of our Service after any
              changes become effective indicates your acceptance of those changes.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us
              at:
            </p>
            <p>
              Email: <a href="mailto:voxaaibusiness@gmail.com">voxaaibusiness@gmail.com</a>
              <br />
              Website: <Link href="/PrivacyPolicy">https://www.voxa.com/PrivacyPolicy</Link>
            </p>
            <p>
              We appreciate your trust and take our responsibility to protect your information seriously. Thank you for
              using our Service.
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

