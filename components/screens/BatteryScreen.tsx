import React from 'react';
import { BatteryCharging, Zap, Activity } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis } from 'recharts';

const batteryData = [
  { time: '12am', level: 100 },
  { time: '4am', level: 95 },
  { time: '8am', level: 88 },
  { time: '12pm', level: 75 },
  { time: 'Now', level: 68 },
];

export const BatteryScreen: React.FC = () => {
  const percentage = 68;
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="h-full w-full bg-white flex flex-col p-5 font-sans">
       {/* Header */}
       <div className="flex items-center justify-between mb-1 shrink-0">
        <div className="flex flex-col">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">System</span>
             <h2 className="text-lg font-black text-gray-900 leading-tight">Battery</h2>
        </div>
        <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100 shadow-sm">
            <BatteryCharging size={16} fill="currentColor" />
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col items-center justify-between py-2">
        
        {/* Main Ring Section - Perfectly Centered */}
        <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
            {/* SVG Ring with viewBox for perfect scaling */}
            <svg className="w-full h-full transform -rotate-90 drop-shadow-xl" viewBox="0 0 160 160">
                {/* Background Circle */}
                <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="#f3f4f6"
                    strokeWidth="14"
                    fill="none"
                />
                {/* Progress Circle */}
                <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="#4ade80"
                    strokeWidth="14"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
            
            {/* Center Content */}
            <div className="absolute flex flex-col items-center justify-center inset-0 pb-1">
                <Zap size={24} className="text-green-500 mb-0.5 fill-current animate-pulse" />
                <span className="text-4xl font-black text-gray-900 tracking-tighter leading-none">
                    {percentage}<span className="text-lg align-top">%</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mt-1">Normal</span>
            </div>
        </div>

        {/* Stats Grid - Centered Text */}
        <div className="grid grid-cols-2 gap-3 w-full">
            <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Remaining</span>
                <span className="text-lg font-black text-gray-900 leading-tight">14h 20m</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Health</span>
                <span className="text-lg font-black text-gray-900 leading-tight">98%</span>
            </div>
        </div>

        {/* Usage Chart Section */}
        <div className="w-full flex flex-col h-20 shrink-0 mt-2">
            <div className="flex items-center gap-2 mb-1 px-1">
                <Activity size={12} className="text-gray-400" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Trend (12h)</span>
            </div>
            <div className="flex-1 w-full bg-gray-50 rounded-xl border border-gray-100 overflow-hidden px-1 pt-2">
                <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={batteryData}>
                    <defs>
                    <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <XAxis 
                        dataKey="time" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 9, fill: '#9ca3af'}} 
                        interval="preserveStartEnd"
                        dy={-2}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="level" 
                        stroke="#4ade80" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorLevel)" 
                    />
                </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

      </div>
    </div>
  );
};