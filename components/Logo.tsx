import React from 'react';
import { Hexagon, Shield } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Shield className="w-10 h-10 text-silver-metallic fill-navy-metal stroke-[1.5]" />
        <Hexagon className="w-4 h-4 text-silver-metallic absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-silver-metallic animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="font-display font-bold text-lg leading-none tracking-widest text-silver-light">IRLA</span>
        <span className="font-tech text-sm tracking-[0.2em] text-silver-metallic opacity-80">NETWORKING</span>
      </div>
    </div>
  );
};