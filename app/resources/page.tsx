import { Book, Video, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of ViseBuzz and create your first AI-powered ad in minutes.",
    icon: Book,
    link: "/resources/getting-started",
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step tutorials on advanced features and best practices.",
    icon: Video,
    link: "/resources/video-tutorials",
  },
  {
    title: "Case Studies",
    description: "Discover how other businesses have succeeded with ViseBuzz.",
    icon: FileText,
    link: "/resources/case-studies",
  },
  {
    title: "Community Forum",
    description: "Connect with other ViseBuzz users, share tips, and get help.",
    icon: Users,
    link: "/resources/community",
  },
];

const blogPosts = [
  {
    title: "5 Tips for Creating High-Converting AI Ads",
    excerpt: "Learn how to leverage AI to create ads that drive results and boost your ROI.",
    date: "May 15, 2023",
    author: "Jane Doe",
    link: "/blog/5-tips-high-converting-ai-ads",
  },
  {
    title: "The Future of Advertising: AI and Machine Learning",
    excerpt: "Explore how AI is reshaping the advertising landscape and what it means for your business.",
    date: "April 28, 2023",
    author: "John Smith",
    link: "/blog/future-of-advertising-ai-ml",
  },
  {
    title: "Maximizing Ad Performance with A/B Testing",
    excerpt: "Discover how to use ViseBuzz's A/B testing features to optimize your ad campaigns.",
    date: "April 10, 2023",
    author: "Emily Johnson",
    link: "/blog/maximizing-ad-performance-ab-testing",
  },
];

export default function ResourcesPage() {
  return (
    <div className="gradient-bg text-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Resources & Learning
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore our comprehensive resources to master AI-powered ad creation and boost your marketing efforts.
          </p>
        </div>

        <div className="mt-24 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <Link key={resource.title} href={resource.link}>
              <div className="glass-card neon-glow p-6 rounded-lg h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white mb-4">
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{resource.description}</p>
                </div>
                <div className="mt-4">
                  <span className="text-blue-600 hover:text-blue-800 font-medium">Learn more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-center mb-12">Latest from the Blog</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.title} href={post.link}>
                <div className="glass-card p-6 rounded-lg h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{post.excerpt}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-400">{post.date} • By {post.author}</p>
                    <span className="mt-2 inline-block text-blue-600 hover:text-blue-800 font-medium">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Need personalized help?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our support team is always ready to assist you with any questions or concerns.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" passHref>
              <Button className="px-8 py-3 text-lg font-semibold rounded-full btn-gradient">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}