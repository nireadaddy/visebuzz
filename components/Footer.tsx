"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup submitted');
  };

  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-3">
              <Zap className="h-6 w-auto text-blue-500" />
              <span className="ml-2 text-xl font-bold">ViseBuzz</span>
            </Link>
            <p className="text-xs text-gray-400 mb-3">
              Revolutionizing ad creation with AI-powered magic.
            </p>
            <p className="text-xs text-gray-400">
              &copy; {currentYear} ViseBuzz. All rights reserved.
            </p>
          </div>

          {/* Menu Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-3">Company</h3>
              <ul className="space-y-1">
                <li><Link href="/about" className="text-xs text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="/features" className="text-xs text-gray-300 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-xs text-gray-300 hover:text-white">Pricing</Link></li>
                <li><Link href="/careers" className="text-xs text-gray-300 hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-3">Support</h3>
              <ul className="space-y-1">
                <li><Link href="/faq" className="text-xs text-gray-300 hover:text-white">FAQ</Link></li>
                <li><Link href="/help" className="text-xs text-gray-300 hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="text-xs text-gray-300 hover:text-white">Contact Us</Link></li>
                <li><Link href="/terms" className="text-xs text-gray-300 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact and Social Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-3">Contact & Connect</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <a href="mailto:contact@visebuzz.com" className="text-xs text-gray-300 hover:text-white">contact@visebuzz.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <a href="tel:+66629983963" className="text-xs text-gray-300 hover:text-white">+66 62 998 3963</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-xs text-gray-300">Adrative Thailand, Bangkok</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-3">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Call to Action Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-3">Stay Updated</h3>
            <p className="text-xs text-gray-300 mb-3">
              Subscribe to our newsletter for the latest updates on AI-powered ad creation.
            </p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white text-xs border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-xs py-1">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}