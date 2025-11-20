import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

export const FallDetectionScreen: React.FC = () => {
  return (
    <div className="h-full w-full bg-red-500 flex flex-col relative overflow-hidden font-sans">
      
      {/* Pulsing Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-64 h-64 bg-red-400 rounded-full opacity-50 animate-ping absolute" />
          <div className="w-48 h-48 bg-red-400 rounded-full opacity-75 animate-pulse absolute" />
      </div>

      <div className="relative z-10 flex flex-col h-full p-4">
        
        {/* Icon */}
        <div className="flex justify-center mt-2 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <AlertTriangle size={32} className="text-red-500 fill-red-500" />
            </div>
        </div>

        {/* Text */}
        <div className="text-center mb-4">
            <h2 className="text-2xl font-black text-white mb-1 drop-shadow-md">
                Fall Detected!
            </h2>
            <p className="text-red-100 text-xs font-medium">
                Initiating emergency call in
            </p>
            <p className="text-4xl font-black text-white mt-1 font-mono">10s</p>
        </div>

        {/* Actions */}
        <div className="mt-auto space-y-2">
            <button className="w-full bg-white text-red-600 font-black py-3 rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
                 <Phone size={20} fill="currentColor" />
                 <span className="text-base">SOS Emergency</span>
            </button>

            <button className="w-full bg-red-600/50 backdrop-blur-sm border border-red-400 text-white font-bold py-3 rounded-xl active:scale-95 transition-transform text-sm">
                 I'm Okay
            </button>
        </div>

      </div>
    </div>
  );
};