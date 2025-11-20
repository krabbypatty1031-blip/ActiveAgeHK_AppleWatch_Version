import React, { ReactNode } from 'react';

interface WatchBezelProps {
  children: ReactNode;
}

export const WatchBezel: React.FC<WatchBezelProps> = ({ children }) => {
  return (
    <div className="relative shrink-0">
      {/* Watch Body */}
      <div className="relative w-[340px] h-[410px] bg-gray-900 rounded-[3rem] shadow-2xl border-[6px] border-gray-800 overflow-hidden ring-4 ring-gray-900/50">
        {/* Screen Area */}
        <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
           {children}
        </div>
        
        {/* Reflection/Gloss */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-50" />
      </div>

      {/* Crown */}
      <div className="absolute top-24 -right-3 w-3 h-12 bg-gray-700 rounded-r-md border-l border-gray-900 shadow-lg" />
      {/* Side Button */}
      <div className="absolute top-44 -right-2 w-2 h-16 bg-gray-700 rounded-r-md border-l border-gray-900 shadow-lg" />

      {/* Strap Hint (Top) */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-20 bg-zinc-800 rounded-t-3xl -z-10 shadow-inner" />
      {/* Strap Hint (Bottom) */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-20 bg-zinc-800 rounded-b-3xl -z-10 shadow-inner" />
    </div>
  );
};