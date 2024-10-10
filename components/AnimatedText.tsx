"use client";

import { useRandomReveal } from '@/hooks/useRandomReveal';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const displayedText = useRandomReveal(text);

  return <span className={className}>{displayedText}</span>;
};