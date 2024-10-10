"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from '@/components/AnimatedText';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-24 sm:py-32 lg:py-40 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 space-y-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              <AnimatedText text="Revolutionize" className="block gradient-text" />
              <span className="block">your ads with</span>
              <AnimatedText text="AI-powered magic" className="block gradient-text" />
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-xl text-gray-600">
              Create captivating, high-converting ads in seconds with ViseBuzz. Where creativity meets cutting-edge AI technology.
            </p>
            <div className="mt-8 text-3xl font-bold">
              <span className="gradient-text">Experience the Power of AI-Driven Ad Creation</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#ad-generator" passHref>
                <Button className="btn-gradient group px-8 py-4 text-lg">
                  Create Your First AI Ad
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button variant="outline" className="btn-secondary px-8 py-4 text-lg">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-image.jpg"
                alt="AI-powered ad creation"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
}