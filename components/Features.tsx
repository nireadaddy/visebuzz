"use client";

import { Zap, Layout, BarChart2, SplitSquareVertical, Target, Clock } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Ad Creation',
    description: 'Generate high-quality ad copy and visuals instantly using advanced AI algorithms.',
    icon: Zap,
  },
  {
    name: 'Customizable Templates',
    description: 'Access a library of professionally designed templates that align with your brand.',
    icon: Layout,
  },
  {
    name: 'Performance Analytics',
    description: 'Track engagement, conversion rates, and ROI with built-in analytics tools.',
    icon: BarChart2,
  },
  {
    name: 'A/B Testing',
    description: 'Test different ad variations to identify the most effective combinations.',
    icon: SplitSquareVertical,
  },
  {
    name: 'Audience Targeting',
    description: 'Reach the right people with precision targeting based on demographics and behavior.',
    icon: Target,
  },
  {
    name: 'Time-Saving Automation',
    description: 'Streamline your workflow with automated ad creation and optimization.',
    icon: Clock,
  },
];

export default function Features() {
  return (
    <div className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Features</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Supercharge Your Ad Campaigns
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            ViseBuzz offers powerful tools to create effective and engaging advertisements efficiently.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="glass-card neon-glow">
              <div className="p-6 rounded-3xl">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}