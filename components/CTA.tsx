import { VoxaButton } from "@/components/ui/VoxaButton"
import Link from "next/link"

export function CTA() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          <span className="block">Boost your email productivity.</span>
          <span className="block">Start using Voxa today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Join thousands of professionals who are saving time and improving their email communication with Voxa.
        </p>
        <Link href="/login">
          <VoxaButton
            variant="outline"
            size="lg"
            className="mt-8 bg-white text-[#373C8A] hover:bg-[#5158B0] hover:text-white border-white"
          >
            Get started for free
          </VoxaButton>
        </Link>
      </div>
    </div>
  )
}

