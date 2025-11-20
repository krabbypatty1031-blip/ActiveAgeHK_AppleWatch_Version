import React from 'react';
import { Mic, Sparkles, ArrowRight } from 'lucide-react';

export const VoiceAssistantScreen: React.FC = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col p-3 font-sans relative">
       {/* Header */}
       <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">AI Help</span>
             <h2 className="text-lg font-black text-gray-900 leading-tight">Assistant</h2>
        </div>
        <div className="w-8 h-8 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-500 border border-cyan-100 shadow-sm">
            <Sparkles size={16} fill="currentColor" />
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar">
        {/* Bot Message */}
        <div className="bg-gray-100 rounded-xl rounded-tl-none p-3 mb-2 max-w-[95%] shadow-sm">
            <p className="text-gray-800 font-medium text-xs leading-relaxed">
                Good morning! I noticed your heart rate is stable today. How can I help you?
            </p>
        </div>

        {/* User Message (Ghost) */}
         <div className="self-end bg-cyan-500 rounded-xl rounded-tr-none p-3 mb-2 max-w-[85%] shadow-sm text-white">
            <p className="font-medium text-xs">
                Call my daughter.
            </p>
        </div>
        
        {/* Suggestions */}
        <div className="mt-auto mb-2 flex flex-wrap gap-1.5">
            <button className="px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[10px] font-bold text-gray-600 flex items-center gap-1 active:bg-gray-200">
                Call Son <ArrowRight size={10} />
            </button>
            <button className="px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[10px] font-bold text-gray-600 flex items-center gap-1 active:bg-gray-200">
                Check BP <ArrowRight size={10} />
            </button>
        </div>
      </div>

      {/* Mic Area */}
      <div className="relative h-14 flex items-center justify-center shrink-0">
         {/* Animated Waves */}
         <div className="absolute w-12 h-12 bg-cyan-400 rounded-full opacity-20 animate-ping" />
         <div className="absolute w-10 h-10 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/30 flex items-center justify-center z-10">
            <Mic size={20} className="text-white" />
         </div>
      </div>
      <p className="text-center text-[10px] font-bold text-gray-400 mt-1">Listening...</p>

    </div>
  );
};