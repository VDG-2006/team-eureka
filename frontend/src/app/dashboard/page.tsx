import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import DashboardClient from './DashboardClient'; // 1. Add this import

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-[#f3f3f1] font-sans relative overflow-hidden flex flex-col">
      <nav className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="text-xl font-bold tracking-tighter">Path AI</div>
        
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-black w-[45%]" />
          </div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-2 text-center">
            Frontend Dev Path - 45% Completed
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-sm font-medium">
            Welcome, {user.firstName || 'Learner'}
          </div>
        </div>
      </nav>

      <main className="flex-1 relative w-full h-full">
        
        {/* 2. Replace the placeholder text with the Client Component */}
        <DashboardClient />

        <aside className="absolute top-6 right-6 z-10 w-80 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm pointer-events-none">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Aura Stats
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold tracking-tight">1,250</div>
              <div className="text-sm text-gray-600">Total Aura Points</div>
            </div>
            
            <div className="flex items-center justify-between py-4 border-y border-gray-100">
              <span className="text-sm font-medium">Current Tier</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">
                Ember
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Active Streak</span>
              <span className="text-sm font-bold">3 Days 🔥</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}