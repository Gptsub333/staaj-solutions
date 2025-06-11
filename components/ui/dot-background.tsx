import React from 'react';

interface DotBackgroundProps {
  density?: number;
  opacity?: number;
  color?: string;
  className?: string;
}

export const DotBackground: React.FC<DotBackgroundProps> = ({
  density = 1,
  opacity = 0.3,
  color = '#919294',
  className = ''
}) => {
  // Calculate dot spacing based on density
  const spacing = Math.max(20, 40 / density);
  
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity: opacity,
        zIndex: 0
      }}
    />
  );
};