import { useState, useEffect } from "react";

interface TypingAnimationProps {
  words: string[];
  className?: string;
}

export function TypingAnimation({ words, className = "" }: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, words, currentWordIndex]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

interface TextGenerationProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TextGeneration({ text, delay = 0, className = "" }: TextGenerationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, text, started]);

  return <span className={className}>{displayedText}</span>;
}
