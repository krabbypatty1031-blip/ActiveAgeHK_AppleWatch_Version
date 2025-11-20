import React from 'react';
import { Heart, Activity, Zap, Battery } from 'lucide-react';

export const HealthStatusScreen: React.FC = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col p-3 font-sans relative">
       {/* Header */}
       <div className="flex items-center justify-between mb-3">
        <div className="flex flex-col">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Health</span>
             <h2 className="text-lg font-black text-gray-900 leading-tight">Vitals & AED</h2>
        </div>
        <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-500 border border-red-100 shadow-sm">
            <Activity size={16} />
        </div>
      </div>

      {/* AED Status */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 text-white shadow-lg mb-3 relative overflow-hidden shrink-0">
        <div className="absolute -right-2 -bottom-2 opacity-20 rotate-12">
            <Zap size={80} fill="currentColor" />
        </div>
        <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
                <Battery size={16} className="text-white/90"/>
                <span className="text-xs font-bold text-white/90 uppercase tracking-wide">AED Battery</span>
            </div>
            <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tight">92</span>
                <span className="text-xl font-bold opacity-80">%</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg mt-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-white">System Ready</span>
            </div>
        </div>
      </div>

      {/* Vitals Grid */}
      <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
        {/* Heart Rate */}
        <div className="bg-rose-50 rounded-2xl p-3 border border-rose-100 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute right-2 top-2 opacity-10">
                <Heart size={40} fill="currentColor" className="text-rose-500" />
            </div>
            <div className="flex items-center gap-1 text-rose-500 mb-1 relative z-10">
                <Heart size={14} fill="currentColor" />
                <span className="text-[10px] font-bold uppercase text-rose-400">Heart Rate</span>
            </div>
            <div className="relative z-10">
                <span className="text-2xl font-black text-gray-900">78</span>
                <span className="text-xs text-gray-500 font-bold ml-1">BPM</span>
            </div>
        </div>

        {/* Blood Pressure */}
        <div className="bg-blue-50 rounded-2xl p-3 border border-blue-100 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute right-2 top-2 opacity-10">
                <Activity size={40} className="text-blue-500" />
            </div>
            <div className="flex items-center gap-1 text-blue-500 mb-1 relative z-10">
                <Activity size={14} />
                <span className="text-[10px] font-bold uppercase text-blue-400">BP</span>
            </div>
            <div className="relative z-10">
                <span className="text-2xl font-black text-gray-900">120</span>
                <span className="text-xs text-gray-500 font-bold">/80</span>
            </div>
        </div>
      </div>
    </div>
  );
};
