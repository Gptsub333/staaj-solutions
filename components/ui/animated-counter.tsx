import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  className = '',
  suffix = '',
  prefix = ''
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Extract numeric value from string if needed (e.g., "50%" -> 50)
  const numericValue = typeof value === 'string' 
    ? parseFloat(value.replace(/[^\d.-]/g, '')) || 0
    : value;

  // Extract suffix from original value if it's a string (e.g., "50%" -> "%")
  const originalSuffix = typeof value === 'string' && !suffix
    ? value.replace(/[\d.-]/g, '').replace(/\s/g, '')
    : suffix;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          const startTime = Date.now();
          const startValue = 0;
          const endValue = numericValue;
          
          const updateCounter = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = startValue + (endValue - startValue) * easeOutQuart;
            
            setDisplayValue(Math.round(currentValue));
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };
          
          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [numericValue, duration, hasStarted]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{displayValue.toLocaleString()}{originalSuffix}
    </span>
  );
};