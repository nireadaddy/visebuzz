"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glassmorphism shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <Zap className="h-8 w-auto text-blue-600 sm:h-10" />
              <span className="ml-2 text-xl font-bold text-gray-900">ViseBuzz</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/resources" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Resources
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </Link>
            <Link href="/signup" passHref>
              <Button className="ml-8 whitespace-nowrap get-started-btn btn-gradient">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="h-8 w-auto text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">ViseBuzz</span>
                </div>
                <div className="-mr-2">
                  <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/features" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Features
                    </span>
                  </Link>
                  <Link href="/pricing" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Pricing
                    </span>
                  </Link>
                  <Link href="/resources" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Resources
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link href="/signup" passHref>
                  <Button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                    Get started
                  </Button>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <Link href="/signin" className="text-blue-600 hover:text-blue-500">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}