import { Zap, Layout, BarChart2, SplitSquareVertical, Target, Clock, Shield, Globe, Cpu, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
  {
    name: 'Multi-Platform Compatibility',
    description: 'Create ads optimized for various social media platforms and ad networks.',
    icon: Globe,
  },
  {
    name: 'Advanced AI Algorithms',
    description: 'Leverage cutting-edge machine learning models for intelligent ad generation.',
    icon: Cpu,
  },
  {
    name: 'Brand Consistency',
    description: 'Maintain brand identity across all your ads with smart brand guidelines integration.',
    icon: Palette,
  },
  {
    name: 'Data Security',
    description: 'Keep your data safe with enterprise-grade security measures and encryption.',
    icon: Shield,
  },
];

export default function FeaturesPage() {
  return (
    <div className="gradient-bg text-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Powerful Features for
            <span className="block text-blue-600">AI-Driven Ad Creation</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover how ViseBuzz revolutionizes your ad creation process with cutting-edge AI technology.
          </p>
        </div>

        <div className="mt-24 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="glass-card neon-glow p-6 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to supercharge your ad campaigns?
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
    </div>
  );
}