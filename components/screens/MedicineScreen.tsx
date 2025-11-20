import React from 'react';
import { BellRing, Check, Pill } from 'lucide-react';

export const MedicineScreen: React.FC = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col p-5 font-sans relative">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
             <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Reminder</span>
             <h2 className="text-xl font-black text-gray-900 leading-tight">Medication</h2>
        </div>
        <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 border border-orange-100 shadow-sm">
            <BellRing size={20} />
        </div>
      </div>

      {/* Time Section */}
      <div className="mb-4">
        <p className="text-sm font-bold text-gray-400">Next Dose: <span className="text-gray-900">2:00 PM</span></p>
      </div>

      {/* Medicine List */}
      <div className="flex-1 space-y-3 overflow-y-auto no-scrollbar mb-4">
        
        {/* Item 1 */}
        <div className="bg-white rounded-2xl p-3 flex items-center shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
            <div className="w-10 h-10 bg-orange-100 rounded-full mr-3 shrink-0 flex items-center justify-center">
                <Pill size={20} className="text-orange-500" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-gray-900 truncate">Aspirin</p>
                <p className="text-xs font-medium text-gray-400">1 tablet • After meal</p>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-gray-200" />
        </div>

        {/* Item 2 */}
        <div className="bg-white rounded-2xl p-3 flex items-center shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-full mr-3 shrink-0 flex items-center justify-center">
                <Pill size={20} className="text-blue-500" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-gray-900 truncate">Vitamin D</p>
                <p className="text-xs font-medium text-gray-400">1 capsule • Daily</p>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-gray-200" />
        </div>

        {/* Item 3 - Done */}
        <div className="bg-gray-50 rounded-2xl p-3 flex items-center border border-gray-100 opacity-60">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 shrink-0 flex items-center justify-center">
                <Pill size={20} className="text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-gray-500 truncate line-through">Blood Pressure</p>
                <p className="text-xs font-medium text-gray-400">8:00 AM • Taken</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check size={14} className="text-white" strokeWidth={3} />
            </div>
        </div>

      </div>

      {/* Action Button */}
      <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
        <span>Mark All as Taken</span>
        <Check size={18} />
      </button>
    </div>
  );
};