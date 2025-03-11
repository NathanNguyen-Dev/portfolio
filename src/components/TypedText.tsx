"use client";

import { useState, useEffect } from 'react';

interface TypedTextProps {
  strings: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenStrings?: number;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetweenStrings = 1000,
  className = '',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Handle typing animation
  useEffect(() => {
    if (!strings.length) return;

    let timeout: NodeJS.Timeout;

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, delayBetweenStrings);
    } else if (isTyping) {
      if (currentText.length < strings[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(strings[currentIndex].substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, erasingSpeed);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsTyping(true);
      }
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [currentText, currentIndex, isTyping, isPaused, strings, typingSpeed, erasingSpeed, delayBetweenStrings]);

  return (
    <span className={className}>
      {currentText}
      <span className={`inline-block w-0.5 h-6 ml-1 bg-blue-500 -mb-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};

export default TypedText; 