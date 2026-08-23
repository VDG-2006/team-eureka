import React from 'react';
import ChatIntake from '@/components/assessment/ChatIntake';

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Dimmed Ambient Graph Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] border border-dashed border-gray-400 rounded-full" />
      </div>

      {/* Foreground Content */}
      <div className="z-10 w-full max-w-2xl px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-[#1a1a1a] mb-3">
            Let's build your path.
          </h1>
          <p className="text-gray-500 text-lg">
            Tell the AI what you want to master, and we'll establish your baseline.
          </p>
        </div>
        
        {/* Interactive Client Component */}
        <ChatIntake />
      </div>
      
    </main>
  );
}