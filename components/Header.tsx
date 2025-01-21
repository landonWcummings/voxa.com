import Link from "next/link"
import Image from "next/image"
import { VoxaButton } from "@/components/ui/VoxaButton"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-4">
              <Image src="/images/logo.png" alt="Voxa Logo" width={40} height={40} />
              <span className="font-kunika text-3xl font-bold text-[#373C8A]">VOXA</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <div className="relative group">
                <Link href="#" className="text-base font-medium text-gray-500 hover:text-[#373C8A] flex items-center">
                  Product
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Features
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Integrations
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Enterprise
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link href="#" className="text-base font-medium text-gray-500 hover:text-[#373C8A] flex items-center">
                  Learn
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Blog
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Guides
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Webinars
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/plans" className="text-base font-medium text-gray-500 hover:text-[#373C8A]">
                Pricing
              </Link>
              <Link href="#" className="text-base font-medium text-gray-500 hover:text-[#373C8A]">
                Reviews
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <VoxaButton variant="ghost" className="text-base font-medium text-gray-500 hover:text-[#373C8A]">
                Log in
              </VoxaButton>
            </Link>
            <Link href="/login">
              <VoxaButton className="flex items-center">
                <span className="mr-1">
                  Get <strong>Voxa</strong>
                </span>
                <span className="text-sm">it's free</span>
                <span className="ml-1">→</span>
              </VoxaButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

