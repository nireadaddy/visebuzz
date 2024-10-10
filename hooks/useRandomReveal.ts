import { useState, useEffect } from 'react';

export const useRandomReveal = (text: string, duration: number = 2000) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const characters = text.split('');
    const totalChars = characters.length;
    const intervalDuration = duration / totalChars;

    let revealedChars = new Array(totalChars).fill(false);

    const interval = setInterval(() => {
      if (revealedChars.every(Boolean)) {
        clearInterval(interval);
        return;
      }

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * totalChars);
      } while (revealedChars[randomIndex]);

      revealedChars[randomIndex] = true;
      setDisplayedText(
        characters
          .map((char, index) => (revealedChars[index] ? char : ''))
          .join('')
      );
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [text, duration]);

  return displayedText;
};