import React from 'react';

interface FloatingAtomProps {
  className?: string;
  nucleusColor?: string;
  electrons?: string[];
  size?: string;
  electronSize?: string;
}

export function FloatingAtom({
  className,
  nucleusColor = 'bg-gray-500',
  electrons = ['bg-gray-400'],
  size = 'w-2 h-2',
  electronSize = 'w-1 h-1',
}: FloatingAtomProps) {
  const baseOrbitSize = 6; // w-6 => 1.5rem
  const orbitSizeIncrement = 4; // w-10, w-14, ...
  const baseDuration = 4; // seconds
  const durationIncrement = 2; // seconds

  const largestOrbitSize = baseOrbitSize + (electrons.length > 0 ? electrons.length - 1 : 0) * orbitSizeIncrement;

  const containerStyle = {
    width: `${largestOrbitSize / 4}rem`,
    height: `${largestOrbitSize / 4}rem`,
  };

  return (
    <div className={`absolute ${className}`}>
      <div className="relative group" style={containerStyle}>
        {electrons.map((electronColor, index) => {
          const orbitSizeVal = baseOrbitSize + index * orbitSizeIncrement;
          const duration = baseDuration + index * durationIncrement;
          const orbitStyle = {
            width: `${orbitSizeVal / 4}rem`,
            height: `${orbitSizeVal / 4}rem`,
            animation: `spin ${duration}s linear infinite ${index % 2 === 1 ? 'reverse' : ''}`,
          };

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-70 transition-opacity duration-700"
              style={orbitStyle}
            >
              {/* Orbit path */}
              <div className="absolute inset-0 border border-white/20 rounded-full"></div>
              {/* Electron */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${electronSize} ${electronColor} rounded-full`}
              ></div>
            </div>
          );
        })}
        {/* Nucleus */}
        <div
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          className={`absolute ${size} ${nucleusColor} rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-500 animate-pulse`}
        ></div>
      </div>
    </div>
  );
}
