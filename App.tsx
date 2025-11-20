import React, { useState, useRef, useEffect } from 'react';
import { LogoScreen } from './components/LogoScreen';
import { WatchBezel } from './components/WatchBezel';
import { StepCountScreen } from './components/screens/StepCountScreen';
import { BatteryScreen } from './components/screens/BatteryScreen';
import { MedicineScreen } from './components/screens/MedicineScreen';
import { FallDetectionScreen } from './components/screens/FallDetectionScreen';
import { VoiceAssistantScreen } from './components/screens/VoiceAssistantScreen';
import { HealthStatusScreen } from './components/screens/HealthStatusScreen';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Screens array for rendering
  const screens = [
    <StepCountScreen key="steps" />,
    <BatteryScreen key="battery" />,
    <HealthStatusScreen key="health" />,
    <MedicineScreen key="meds" />,
    <FallDetectionScreen key="fall" />,
    <VoiceAssistantScreen key="voice" />
  ];

  if (!hasStarted) {
    return <LogoScreen onClick={() => setHasStarted(true)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4 font-sans">
      <div className="flex flex-col items-center gap-8">
        
        <WatchBezel>
          <div 
            ref={scrollContainerRef}
            className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {screens.map((screen, index) => (
              <div 
                key={index} 
                className="w-full h-full flex-shrink-0 snap-center bg-white overflow-hidden"
              >
                {screen}
              </div>
            ))}
          </div>
        </WatchBezel>

        <div className="text-white/50 text-sm text-center max-w-xs animate-pulse">
            <p>左右滑動錶面以切換功能</p>
            <p className="text-xs mt-1">Swipe left/right to switch screens</p>
        </div>

        <button 
          onClick={() => setHasStarted(false)}
          className="text-zinc-500 hover:text-zinc-300 text-sm underline transition-colors"
        >
          Back to Logo
        </button>
      </div>
    </div>
  );
};

export default App;