import React from 'react';
import { Bot, Plus } from 'lucide-react';

interface LogoScreenProps {
  onClick: () => void;
}

export const LogoScreen: React.FC<LogoScreenProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-4">
      <button 
        onClick={onClick}
        className="group relative flex flex-col items-center transition-transform hover:scale-105 active:scale-95"
      >
        {/* App Icon Container */}
        <div className="relative w-48 h-48 bg-[#2DD4BF] rounded-[3rem] flex items-center justify-center shadow-xl mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-white/20 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* White Circle Background */}
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center relative">
            
            {/* Robot Face */}
            <div className="relative z-10 text-[#38BDF8]">
              <Bot size={100} strokeWidth={1.5} className="translate-y-1" />
            </div>

            {/* Medical Cross */}
            <div className="absolute top-6 left-4 z-20 bg-[#2DD4BF] border-4 border-[#262626] text-[#262626] rounded-lg transform -rotate-12 shadow-sm">
               <Plus size={40} strokeWidth={4} />
            </div>
          </div>
        </div>

        {/* Text Logo */}
        <h1 className="text-4xl font-bold text-white tracking-tight">
          ActiveAge <span className="font-normal">HK</span>
        </h1>
        <p className="text-gray-400 mt-4 animate-pulse text-sm font-medium tracking-wide">Tap to Start</p>
      </button>
    </div>
  );
};