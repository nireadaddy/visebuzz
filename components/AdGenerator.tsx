"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Copy, Download } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/useToast";
import { Checkbox } from "@/components/ui/checkbox";
import Link from 'next/link';
import Lottie from 'lottie-react';
import animationData from '../public/WsisCCWKk9.json';

type AdContent = {
  title: string;
  copy: string;
  icon: string;
  engagementRate: number;
  imageUrl: string;
};

const FREE_TRIAL_LIMIT = 10;
const GENERATION_TIME = 30; // seconds

export default function AdGenerator() {
  const [prompt, setPrompt] = useState('');
  const [ctaLink, setCtaLink] = useState('');
  const [language, setLanguage] = useState('english');
  const [wordCount, setWordCount] = useState(100);
  const [adFormat, setAdFormat] = useState('social-media');
  const [toneOfVoice, setToneOfVoice] = useState('professional');
  const [contentType, setContentType] = useState('promotional');
  const [generateImage, setGenerateImage] = useState(false);
  const [generatedAds, setGeneratedAds] = useState<{ variantA: AdContent; variantB: AdContent } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast, showToast } = useToast();
  const [generationCount, setGenerationCount] = useState(0);
  const [countdown, setCountdown] = useState(GENERATION_TIME);

  useEffect(() => {
    const count = localStorage.getItem('adGenerationCount');
    if (count) {
      setGenerationCount(parseInt(count, 10));
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setIsLoading(false);
      setCountdown(GENERATION_TIME);
    }
    return () => clearTimeout(timer);
  }, [isLoading, countdown]);

  const generateAdText = async () => {
    setIsLoading(true);
    setError(null);
    setCountdown(GENERATION_TIME);
    try {
      const response = await fetch('/api/generate-ad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, language, ctaLink, wordCount, adFormat, toneOfVoice, contentType, generateImage }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate ad text');
      }

      const data = await response.json();
      return data.result;
    } catch (error: any) {
      console.error('Error generating ad text:', error);
      setError(`Failed to generate ad text: ${error.message}. Please try again.`);
      return null;
    } finally {
      setIsLoading(false);
      setCountdown(GENERATION_TIME);
    }
  };

  const handleGenerate = async () => {
    if (generationCount >= FREE_TRIAL_LIMIT) {
      showToast("You've reached the free trial limit. Please upgrade to continue.", "info");
      return;
    }

    const variantA = await generateAdText();
    const variantB = await generateAdText();
    
    if (variantA && variantB) {
      setGeneratedAds({ variantA, variantB });
      const newCount = generationCount + 1;
      setGenerationCount(newCount);
      localStorage.setItem('adGenerationCount', newCount.toString());
    } else {
      setGeneratedAds(null);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast("Copied to clipboard", "success");
  };

  const downloadImage = async (imageUrl: string, fileName: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      showToast("Image downloaded successfully", "success");
    } catch (error) {
      console.error('Error downloading image:', error);
      showToast("Failed to download image", "error");
    }
  };

  const AdCard = ({ ad, variant }: { ad: AdContent; variant: string }) => (
    <Card>
      <CardHeader>
        <CardTitle>Variant {variant}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{ad.icon}</span>
              <h3 className="text-xl font-semibold">{ad.title}</h3>
            </div>
            <Button variant="outline" size="sm" onClick={() => copyToClipboard(`${ad.icon} ${ad.title}\n\n${ad.copy}\n\n${ctaLink}`)}>
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
          <p className="whitespace-pre-wrap">{ad.copy}</p>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {ctaLink}
          </a>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Estimated Engagement Rate: {ad.engagementRate.toFixed(2)}%</p>
          </div>
          <div className="mt-4 relative">
            <img src={ad.imageUrl} alt="AI-generated ad image" className="w-full h-auto object-cover rounded-md" />
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-2 right-2"
              onClick={() => downloadImage(ad.imageUrl, `ad-image-variant-${variant}.png`)}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div id="ad-generator" className="ad-generator-bg rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
      <h2 className="text-2xl font-bold mb-6">AI Ad Generator 🤖✍️</h2>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {toast && (
        <Alert variant={toast.type === 'error' ? 'destructive' : 'default'} className="mb-4">
          <AlertTitle>{toast.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
          <AlertDescription>{toast.message}</AlertDescription>
        </Alert>
      )}
      <div className="space-y-6">
        <div>
          <Label htmlFor="prompt" className="font-bold">Ad Prompt</Label>
          <Textarea
            id="prompt"
            placeholder="Enter a description of your product or service..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 rounded-2xl border-2 border-gray-300 focus:border-blue-500 focus:ring-0 bg-white"
          />
        </div>
        <div>
          <Label htmlFor="ctaLink" className="font-bold">Call-to-Action Link</Label>
          <Input
            id="ctaLink"
            placeholder="Enter your CTA link..."
            value={ctaLink}
            onChange={(e) => setCtaLink(e.target.value)}
            className="mt-1 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-0 bg-white"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="language" className="font-bold">Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language" className="mt-1 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-0 bg-white">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-lg">
                <SelectItem value="english" className="hover:bg-blue-50">English</SelectItem>
                <SelectItem value="spanish" className="hover:bg-blue-50">Spanish</SelectItem>
                <SelectItem value="french" className="hover:bg-blue-50">French</SelectItem>
                <SelectItem value="german" className="hover:bg-blue-50">German</SelectItem>
                <SelectItem value="italian" className="hover:bg-blue-50">Italian</SelectItem>
                <SelectItem value="thai" className="hover:bg-blue-50">Thai</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="wordCount" className="font-bold">Word Count</Label>
            <Input
              id="wordCount"
              type="number"
              value={wordCount}
              onChange={(e) => setWordCount(parseInt(e.target.value))}
              className="mt-1 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-0 bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="adFormat" className="font-bold">Ad Format</Label>
            <Select value={adFormat} onValueChange={setAdFormat}>
              <SelectTrigger id="adFormat" className="mt-1 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-0 bg-white">
                <SelectValue placeholder="Select ad format" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-lg">
                <SelectItem value="social-media" className="hover:bg-blue-50">Social Media</SelectItem>
                <SelectItem value="display" className="hover:bg-blue-50">Display Ad</SelectItem>
                <SelectItem value="search" className="hover:bg-blue-50">Search Ad</SelectItem>
                <SelectItem value="video" className="hover:bg-blue-50">Video Ad</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="toneOfVoice" className="font-bold">Tone of Voice</Label>
            <Select value={toneOfVoice} onValueChange={setToneOfVoice}>
              <SelectTrigger id="toneOfVoice" className="mt-1 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-0 bg-white">
                <SelectValue placeholder="Select tone of voice" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-lg">
                <SelectItem value="professional" className="hover:bg-blue-50">Professional</SelectItem>
                <SelectItem value="casual" className="hover:bg-blue-50">Casual</SelectItem>
                <SelectItem value="humorous" className="hover:bg-blue-50">Humorous</SelectItem>
                <SelectItem value="formal" className="hover:bg-blue-50">Formal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="contentType" className="font-bold">Content Type</Label>
          <Select value={contentType} onValueChange={setContentType}>
            <SelectTrigger id="contentType" className="mt-1 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-0 bg-white">
              <SelectValue placeholder="Select content type" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-lg">
              <SelectItem value="promotional" className="hover:bg-blue-50">Promotional</SelectItem>
              <SelectItem value="informative" className="hover:bg-blue-50">Informative</SelectItem>
              <SelectItem value="testimonial" className="hover:bg-blue-50">Testimonial</SelectItem>
              <SelectItem value="storytelling" className="hover:bg-blue-50">Storytelling</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="generateImage"
              checked={generateImage}
              onCheckedChange={(checked) => setGenerateImage(checked as boolean)}
            />
            <Label htmlFor="generateImage" className="font-bold">Generate Image</Label>
          </div>
          <p className="text-sm text-gray-500">
            {generationCount < FREE_TRIAL_LIMIT
              ? `${FREE_TRIAL_LIMIT - generationCount} free generations left`
              : 'Free trial limit reached'}
          </p>
        </div>
        <div>
          <Button onClick={handleGenerate} disabled={isLoading || !prompt || !ctaLink || generationCount >= FREE_TRIAL_LIMIT} className="w-full rounded-full btn-gradient">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Ad Variants'
            )}
          </Button>
        </div>
        {generationCount >= FREE_TRIAL_LIMIT && (
          <Alert>
            <AlertTitle>Free Trial Limit Reached</AlertTitle>
            <AlertDescription>
              You've used all your free generations. Upgrade to our Pro package to continue creating amazing ads!
              <Link href="/pricing" className="block mt-2 text-blue-600 hover:underline">
                View Pro Package Options
              </Link>
            </AlertDescription>
          </Alert>
        )}
      </div>

      {isLoading && (
        <div className="mt-8 text-center">
          <Lottie animationData={animationData} loop={true} className="w-64 h-64 mx-auto" />
          <p className="mt-4 text-xl font-semibold">Generating your ad...</p>
          <p className="mt-2 text-lg">Estimated time remaining: {countdown} seconds</p>
        </div>
      )}

      {generatedAds && (
        <div className="mt-8 space-y-8">
          <AdCard ad={generatedAds.variantA} variant="A" />
          <AdCard ad={generatedAds.variantB} variant="B" />
        </div>
      )}
    </div>
  );
}