import { Check } from "lucide-react"
import { VoxaButton } from "./ui/VoxaButton"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic features for personal use",
    features: ["5 email drafts per day", "Basic AI assistance", "Standard support"],
  },
  {
    name: "Plus",
    price: "$15",
    description: "Advanced features for professionals",
    features: ["Unlimited email drafts", "Advanced AI assistance", "Priority support", "Custom templates"],
  },
  {
    name: "Pro",
    price: "$40",
    description: "Premium features for power users",
    features: ["All Plus features", "Team collaboration", "Analytics dashboard", "API access", "24/7 premium support"],
  },
]

export function Pricing() {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#373C8A]">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Whether you're just starting out or looking for advanced features, we have a plan that fits your needs.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 md:grid-cols-3 lg:gap-12">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
                {plan.name === "Plus" && (
                  <p className="rounded-full bg-[#373C8A] px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                {plan.name !== "Free" && <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>}
              </p>
              <VoxaButton variant={plan.name === "Plus" ? "default" : "outline"} className="mt-6 w-full">
                {plan.name === "Free" ? "Get started" : "Subscribe"}
              </VoxaButton>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-[#373C8A]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

