import { Header } from "@/components/Header"
import Link from "next/link"

export default function ExtensionPrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Privacy Policy for Voxa</h1>
          <p className="text-gray-600 mb-8">Effective Date: January 21, 2025</p>

          <div className="prose prose-blue max-w-none">
            <p>
              Voxa ("the Extension") is committed to protecting your privacy. This privacy policy explains how your data
              is collected, used, and protected when using the Extension.
            </p>

            <h2>Data We Collect and Use</h2>
            <h3>1. Email Address</h3>
            <ul>
              <li>
                <strong>Purpose:</strong> The Extension detects your Gmail address to verify and identify your account
                for its operations.
              </li>
              <li>
                <strong>Storage:</strong> Your Gmail address is not stored or shared with any third parties. It is only
                processed temporarily while the Extension is active.
              </li>
            </ul>

            <h3>2. Email Content</h3>
            <ul>
              <li>
                <strong>Purpose:</strong> The Extension processes the on-screen content of your emails to draft
                automated replies.
              </li>
              <li>
                <strong>Data Flow:</strong>
                <ul>
                  <li>The content of the email you open is sent to a secure backend server.</li>
                  <li>The backend uses a Large Language Model (LLM) to generate a draft reply.</li>
                  <li>The email content is deleted immediately from the backend after the draft is generated.</li>
                </ul>
              </li>
              <li>
                <strong>Storage:</strong> No email content is stored permanently by the Extension or its backend.
              </li>
            </ul>

            <h2>Permissions</h2>
            <p>To deliver its functionality, the Extension requires the following permissions:</p>
            <ul>
              <li>
                <strong>Gmail URLs:</strong> The Extension operates only on Gmail pages to ensure it functions solely
                within the intended environment.
              </li>
              <li>
                <strong>Active Tab:</strong> This is used to confirm that you are on a Gmail tab.
              </li>
              <li>
                <strong>Storage:</strong> Temporary states or preferences are saved locally to optimize performance but
                do not include sensitive or personal data.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>We prioritize the security of your data:</p>
            <ul>
              <li>All email content sent to the backend is encrypted in transit.</li>
              <li>Email content is deleted immediately after processing.</li>
              <li>
                No personally identifiable information, including your Gmail address or email content, is stored or
                logged by the Extension or its backend.
              </li>
            </ul>

            <h2>Third-Party Access</h2>
            <p>
              The Extension does not share your data with third parties. The backend processing of email content is
              solely for the purpose of generating automated replies and is performed on secure servers.
            </p>

            <h2>User Responsibility</h2>
            <p>
              By using this Extension, you acknowledge that the email content processed is sensitive and private. We
              recommend using the Extension only in environments where you trust the security of your browser and
              device.
            </p>

            <h2>Changes to the Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or
              regulatory reasons. Any changes will be communicated through an updated version of this document.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or the Extension's data practices, please
              contact us at:
            </p>
            <p>
              <a href="mailto:voxaaibusiness@gmail.com">voxaaibusiness@gmail.com</a>
            </p>

            <p>By using the Extension, you agree to the terms of this Privacy Policy.</p>
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

