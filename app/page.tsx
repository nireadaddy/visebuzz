import Hero from '@/components/Hero';
import Features from '@/components/Features';
import dynamic from 'next/dynamic';

const AdGenerator = dynamic(() => import('@/components/AdGenerator'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 heading-gradient">
            Experience the Power of AI-Driven Ad Creation
          </h2>
          <AdGenerator />
        </div>
      </section>
      <Features />
    </main>
  );
}