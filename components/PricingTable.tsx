import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for trying out ViseBuzz',
    features: [
      '50 AI-generated ads per month',
      'Basic performance analytics',
      'Single user account',
    ],
    cta: 'Start for free',
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: '$39',
    description: 'Ideal for growing businesses',
    features: [
      'Unlimited AI-generated ads',
      'Advanced analytics and insights',
      'Team collaboration (up to 5 users)',
      'Multi-platform optimization',
      'Priority support',
    ],
    cta: 'Start free trial',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: [
      'Custom AI model training',
      'Unlimited team members',
      'Dedicated account manager',
      'API access',
      'Custom integrations',
    ],
    cta: 'Contact sales',
    mostPopular: false,
  },
];

export default function PricingTable() {
  return (
    <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
      {tiers.map((tier) => (
        <div key={tier.name} className={`relative flex flex-col rounded-3xl ${
          tier.mostPopular
            ? 'ring-2 ring-blue-500 glass-card'
            : 'glass-card'
        }`}>
          <div className="p-8">
            <h3 className="text-2xl font-semibold leading-6 text-gray-900">
              {tier.name}
            </h3>
            {tier.mostPopular && (
              <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                Most popular
              </p>
            )}
            <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
            <p className="mt-8">
              <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
              {tier.name !== 'Enterprise' && <span className="text-base font-medium text-gray-500">/month</span>}
            </p>
            <Button
              variant={tier.mostPopular ? "default" : "outline"}
              className={`mt-8 block w-full ${
                tier.mostPopular
                  ? 'btn-gradient'
                  : 'btn-secondary'
              } rounded-full py-3 px-4 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:shadow-md`}
            >
              {tier.cta}
            </Button>
          </div>
          <div className="flex flex-1 flex-col justify-between p-8">
            <ul role="list" className="space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-sm text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}