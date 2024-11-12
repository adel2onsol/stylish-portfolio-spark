import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  return (
    <span
      className={cn("inline-block opacity-0", className)}
      style={{
        animation: `fade-in 0.5s ease-out ${delay}s forwards`,
      }}
    >
      {text}
    </span>
  );
};

export default AnimatedText;