"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { email, password, fullName, agreeTerms });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <div className="mt-1">
          <Input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <div className="mt-1">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <div className="mt-1">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center">
        <Checkbox 
          id="agree-terms" 
          checked={agreeTerms}
          onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
        />
        <Label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
          I agree to the{' '}
          <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Privacy Policy
          </Link>
        </Label>
      </div>

      <div>
        <Button 
          type="submit" 
          className="w-full"
          disabled={!agreeTerms}
        >
          Create account
        </Button>
      </div>
    </form>
  );
}