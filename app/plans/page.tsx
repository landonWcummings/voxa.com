import { Header } from "@/components/Header"
import { Check } from "lucide-react"
import { VoxaButton } from "@/components/ui/VoxaButton"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Essential features for personal use",
    features: [
      "5 email drafts per day",
      "Basic AI assistance",
      "Standard response time",
      "Email templates",
      "Basic writing suggestions",
    ],
    buttonText: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Plus",
    price: "$15",
    period: "per month",
    description: "Advanced features for professionals",
    features: [
      "Unlimited email drafts",
      "Advanced AI assistance",
      "Priority support",
      "Custom templates",
      "Advanced writing analysis",
      "Tone detection",
      "Multiple writing styles",
    ],
    buttonText: "Upgrade to Plus",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$40",
    period: "per month",
    description: "Premium features for power users",
    features: [
      "All Plus features",
      "Team collaboration",
      "Analytics dashboard",
      "API access",
      "24/7 premium support",
      "Custom AI training",
      "Enterprise integration",
      "Advanced security",
    ],
    buttonText: "Get Pro",
    highlighted: false,
  },
]

export default function PlansPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-base font-semibold leading-7 text-[#373C8A]">Pricing</h1>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Choose the perfect plan for your needs
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Whether you're an individual or a team, we have a plan that's right for you. All plans include our core
                features with varying levels of capabilities.
              </p>
            </div>

            <div className="mt-20 flow-root">
              <div className="isolate -mt-16 grid max-w-sm gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                {plans.map((plan, planIdx) => (
                  <div
                    key={plan.name}
                    className={`relative pt-16 lg:px-8 ${
                      plan.highlighted ? "lg:-mt-8 lg:mb-8 ring-2 ring-[#373C8A] rounded-3xl" : ""
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <span className="inline-flex items-center rounded-full bg-[#373C8A] px-4 py-1 text-sm font-medium text-white">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="mx-auto px-6 lg:px-8">
                      <h3 id={plan.name} className="text-2xl font-bold leading-7 text-gray-900">
                        {plan.name}
                      </h3>
                      <p className="mt-6 flex items-baseline gap-x-1">
                        <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                        <span className="text-sm font-semibold leading-6 text-gray-600">/{plan.period}</span>
                      </p>
                      <p className="mt-3 text-sm leading-6 text-gray-500">{plan.description}</p>
                      <VoxaButton
                        variant={plan.highlighted ? "default" : "outline"}
                        className={`mt-8 w-full ${
                          plan.highlighted ? "bg-[#373C8A] hover:bg-[#474db2]" : "text-[#373C8A] border-[#373C8A]"
                        }`}
                      >
                        {plan.buttonText}
                      </VoxaButton>
                      <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <Check className="h-6 w-5 flex-none text-[#373C8A]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Have a different question? Reach out to our support team and we'll be happy to help.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Voxa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

