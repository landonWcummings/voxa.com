import { VoxaButton } from "@/components/ui/VoxaButton"
import Link from "next/link"

export function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Write Emails Faster with</span>
            <span className="block text-[#373C8A]">Your Authentic Voice</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Voxa is an AI-powered Gmail extension that drafts and responds to emails in your unique style, saving you
            time and ensuring consistency in your communication.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/login">
                <VoxaButton size="lg" className="bg-[#373C8A] hover:bg-[#5158B0] text-white">
                  Get Started
                </VoxaButton>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <VoxaButton
                variant="outline"
                size="lg"
                className="text-[#373C8A] border-[#373C8A] hover:bg-[#373C8A] hover:text-white"
              >
                Learn More
              </VoxaButton>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            By signing up, you agree to the{" "}
            <Link href="/TermsOfService" className="text-[#373C8A] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/PrivacyPolicy" className="text-[#373C8A] hover:underline">
              Privacy Policy
            </Link>
            . Also see our{" "}
            <Link href="/ExtensionPrivacyPolicy" className="text-[#373C8A] hover:underline">
              Extension Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

