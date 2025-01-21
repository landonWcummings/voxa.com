import { Mail, Zap, UserCheck } from "lucide-react"

const features = [
  {
    name: "AI-Powered Email Drafting",
    description: "Voxa uses advanced AI to draft emails that sound just like you, saving you time and effort.",
    icon: Mail,
  },
  {
    name: "Lightning-Fast Responses",
    description: "Generate quick responses to emails with just a few clicks, maintaining your unique voice.",
    icon: Zap,
  },
  {
    name: "Personalized Writing Style",
    description: "Voxa learns your writing style to ensure all communications maintain your authentic voice.",
    icon: UserCheck,
  },
]

export function Features() {
  return (
    <div className="py-12 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#373C8A] font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to write emails
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Voxa brings the power of AI to your inbox, helping you communicate more effectively and efficiently.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#373C8A] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

