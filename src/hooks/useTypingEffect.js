import { useEffect, useRef, useState } from 'react';

export function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const currentWord = words[wordIndex.current];

      if (!isDeleting.current) {
        setDisplayText(currentWord.substring(0, charIndex.current + 1));
        charIndex.current += 1;

        if (charIndex.current === currentWord.length) {
          isDeleting.current = true;
          return pauseDuration;
        }
        return typingSpeed;
      }

      setDisplayText(currentWord.substring(0, charIndex.current - 1));
      charIndex.current -= 1;

      if (charIndex.current === 0) {
        isDeleting.current = false;
        wordIndex.current = (wordIndex.current + 1) % words.length;
        return 500;
      }
      return deletingSpeed;
    };

    let timeoutId;
    const run = () => {
      const delay = tick();
      timeoutId = setTimeout(run, delay);
    };

    timeoutId = setTimeout(run, typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
