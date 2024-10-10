import PricingTable from '@/components/PricingTable';
import FeatureComparison from '@/components/FeatureComparison';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="gradient-bg min-h-screen py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Simple, Transparent
            <span className="block text-blue-600">Pricing for Everyone</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <PricingTable />

        <FeatureComparison />

        <div className="mt-24 glass-card relative overflow-hidden rounded-3xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to get started?</span>
                <span className="block text-blue-400">Sign up for a 14-day free trial today.</span>
              </h2>
              <div className="mt-8 flex justify-center">
                <Link href="/signup" passHref>
                  <Button className="px-8 py-3 text-lg font-semibold rounded-full btn-gradient">
                    Start Your Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <dl className="mt-8 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "Our 14-day free trial includes full access to all features of the Pro plan, allowing you to experience the full power of ViseBuzz before committing to a subscription.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all our paid plans. If you're not satisfied, contact our support team for a full refund.",
  },
  {
    question: "Is there a limit to how many ads I can create?",
    answer: "The Starter plan has a limit of 50 AI-generated ads per month. Pro and Enterprise plans offer unlimited ad creation.",
  },
  {
    question: "Do you offer custom solutions for large enterprises?",
    answer: "Yes, our Enterprise plan can be tailored to your specific needs. Contact our sales team for a custom quote and feature set.",
  },
];