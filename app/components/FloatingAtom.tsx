import React from 'react';

interface FloatingAtomProps {
  className?: string;
  nucleusColor?: string;
  electronColor?: string;
  size?: string;
  orbitSize?: string;
  orbitDuration?: string;
  electronSize?: string;
}

export function FloatingAtom({
  className,
  nucleusColor = 'bg-gray-500',
  electronColor = 'bg-gray-400',
  size = 'w-2 h-2',
  orbitSize = 'w-6 h-6',
  orbitDuration = 'animate-[spin_4s_linear_infinite]',
  electronSize = 'w-1 h-1',
}: FloatingAtomProps) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative group">
        <div className={`relative ${orbitSize} ${orbitDuration} opacity-30 group-hover:opacity-70 transition-opacity duration-700`}>
          {/* Orbit path */}
          <div className="absolute inset-0 border border-white/20 rounded-full"></div>
          {/* Electron */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${electronSize} ${electronColor} rounded-full`}></div>
        </div>
        {/* Nucleus */}
        <div style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className={`absolute ${size} ${nucleusColor} rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-500 animate-pulse`}></div>
      </div>
    </div>
  );
}
