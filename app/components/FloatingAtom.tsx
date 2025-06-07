import React from 'react';

interface FloatingAtomProps {
  className?: string;
  nucleus?: string;
  nucleusSize?: string;
  electronSize?: string;
  electronCount?: number;
  electrons?: string[];
}

export function FloatingAtom({
  className,
  nucleus = 'bg-gradient-to-r from-[#1ABCFE] to-[#1C87B3]',
  nucleusSize = 'w-2 h-2',
  electronSize = 'w-1 h-1',
  electronCount = 1,
  electrons = [
    'bg-gradient-to-br from-gray-500 to-gray-600',
    'bg-gradient-to-br from-[#F24E1E] to-[#FF7262]',
    'bg-gradient-to-br from-[#8049C7] to-[#A259FF]',
    'bg-gradient-to-br from-[#1ABCFE] to-[#1C87B3]',
    'bg-gradient-to-br from-[#0ACF83] to-[#099D64]',
  ],
}: FloatingAtomProps) {
  const incrementOrbitSize = 4; // w-10, w-14, ...
  const incrementDuration = 2; // seconds
  const baseOrbitSize = 6; // w-6 => 1.5rem
  const baseDuration = 4; // seconds
  const gainedElectrons = electrons.slice(0, electronCount)
  const outerOrbitSize = baseOrbitSize
    + (gainedElectrons.length > 0 ? gainedElectrons.length - 1 : 0)
    * incrementOrbitSize;
  const containerStyle = {
    width: `${outerOrbitSize / 4}rem`,
    height: `${outerOrbitSize / 4}rem`,
  };

  return (
    <div className={`absolute ${className}`}>
      <div className="relative group" style={containerStyle}>
        {gainedElectrons.map((electronColor, index) => {
          const orbitSize = baseOrbitSize + index * incrementOrbitSize;
          const duration = baseDuration + index * incrementDuration;
          const style = {
            width: `${orbitSize / 4}rem`,
            height: `${orbitSize / 4}rem`,
            animation: `spin ${duration}s linear infinite ${index % 2 === 1 ? 'reverse' : ''}`,
          };
          return (
            <div
              key={index}
              style={style}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-70 transition-opacity duration-700">
              {/* Orbit */}
              <div className="absolute inset-0 border border-white/20 rounded-full"></div>
              {/* Electron */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${electronSize} ${electronColor} rounded-full`}/>
            </div>
          );
        })}
        {/* Nucleus */}
        <div
          style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
          className={`absolute ${nucleusSize} ${nucleus} rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-500 animate-pulse`}
        ></div>
      </div>
    </div>
  );
}
