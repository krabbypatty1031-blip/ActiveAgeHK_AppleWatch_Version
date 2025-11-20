import React from 'react';
import { Footprints, Flame, MapPin } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { time: '6:00', steps: 0 },
  { time: '9:00', steps: 850 },
  { time: '12:00', steps: 2100 }, // Peak
  { time: '15:00', steps: 1200 },
  { time: '18:00', steps: 450 },
  { time: '21:00', steps: 200 },
];

export const StepCountScreen: React.FC = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col p-5 font-sans">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
             <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Activity</span>
             <h2 className="text-xl font-black text-gray-900 leading-tight">Steps Today</h2>
        </div>
        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100 shadow-sm">
            <Footprints size={20} fill="currentColor" />
        </div>
      </div>

      {/* Main Metric Section */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
            <span className="text-6xl font-black text-gray-900 tracking-tighter">3,200</span>
            <span className="text-lg font-bold text-gray-500 pb-1">steps</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-3 rounded-full mt-2 overflow-hidden">
            <div className="bg-[#4ade80] h-full rounded-full shadow-[0_0_10px_rgba(74,222,128,0.4)]" style={{ width: '40%' }}></div>
        </div>
        <div className="flex justify-between mt-1">
            <span className="text-[10px] font-bold text-gray-400">0</span>
            <span className="text-[10px] font-bold text-gray-400">Goal: 8,000</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex-1 w-full min-h-0 mb-4 px-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="steps" radius={[4, 4, 4, 4]}>
              {data.map((entry, index) => (
                <Cell 
                    key={`cell-${index}`} 
                    fill={index === 2 ? '#4ade80' : '#f3f4f6'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Secondary Stats */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
           <div className="flex items-center gap-3">
                <div className="bg-orange-50 p-2 rounded-xl border border-orange-100">
                    <Flame size={18} className="text-orange-500" fill="currentColor" />
                </div>
                <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Calories</p>
                    <p className="text-base font-black text-gray-900">142 <span className="text-xs font-normal text-gray-500">kcal</span></p>
                </div>
           </div>

           <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-xl border border-blue-100">
                    <MapPin size={18} className="text-blue-500" fill="currentColor" />
                </div>
                <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">Distance</p>
                    <p className="text-base font-black text-gray-900">2.1 <span className="text-xs font-normal text-gray-500">km</span></p>
                </div>
           </div>
      </div>
    </div>
  );
};