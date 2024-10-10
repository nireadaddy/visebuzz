import { Check, X } from 'lucide-react';

const features = [
  { name: 'AI-generated ads', starter: '50/month', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
  { name: 'Team members', starter: '1', pro: 'Up to 5', enterprise: 'Unlimited' },
  { name: 'Multi-platform optimization', starter: false, pro: true, enterprise: true },
  { name: 'Custom AI training', starter: false, pro: false, enterprise: true },
  { name: 'Priority support', starter: false, pro: true, enterprise: true },
  { name: 'API access', starter: false, pro: false, enterprise: true },
  { name: 'Dedicated account manager', starter: false, pro: false, enterprise: true },
  { name: 'Custom integrations', starter: false, pro: false, enterprise: true },
];

export default function FeatureComparison() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Feature Comparison</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Feature
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Starter
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pro
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {features.map((feature) => (
              <tr key={feature.name}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {typeof feature.starter === 'boolean' ? (
                    feature.starter ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />
                  ) : (
                    feature.starter
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {typeof feature.pro === 'boolean' ? (
                    feature.pro ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />
                  ) : (
                    feature.pro
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {typeof feature.enterprise === 'boolean' ? (
                    feature.enterprise ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />
                  ) : (
                    feature.enterprise
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}