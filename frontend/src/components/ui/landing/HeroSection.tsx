import React from 'react';
import { SignInButton } from '@clerk/nextjs';
import AmbientGraph3D from '@/components/graph/AmbientGraph3D'; // 1. Imported the 3D Graph
import TabbedFeatures from '@/components/ui/landing/TabbedFeatures'; // 2. Imported the Tabbed Features

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#f3f3f1] text-[#1a1a1a] font-sans flex flex-col">
      <nav className="flex items-center justify-between p-6 bg-transparent w-full z-50">
        <div className="text-xl font-bold tracking-tighter">Path AI</div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#features" className="hover:text-gray-500 transition-colors">Platform</a>
          <a href="#curriculum" className="hover:text-gray-500 transition-colors">Curriculum</a>
        </div>

        <div className="flex space-x-4">
          <SignInButton mode="modal">
            <button className="text-sm font-medium hover:text-gray-500 transition-colors">Log In</button>
          </SignInButton>
          <SignInButton mode="modal">
            <button className="text-sm font-medium bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all">
              Get Started
            </button>
          </SignInButton>
        </div>
      </nav>

      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 pt-20 pb-32">
        
        {/* 3. Replaced the old dashed circle with the real 3D component */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
             <AmbientGraph3D /> 
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            A learning path <br className="hidden md:block" /> makes it real.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Stop guessing what to learn next. Master your next tech skill with AI-generated, interactive curriculum graphs and adaptive IRT quizzes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignInButton mode="modal">
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all w-full sm:w-auto">
                Start for free
              </button>
            </SignInButton>
            <p className="text-sm text-gray-500 sm:hidden">No credit card required.</p>
          </div>
        </div>
      </main>

      <section className="bg-white py-12 border-y border-gray-200 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="py-6 md:py-0 px-8 w-full">
            <div className="text-4xl font-bold mb-2 tracking-tight">Adaptive</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">IRT Quizzes</div>
          </div>
          <div className="py-6 md:py-0 px-8 w-full">
            <div className="text-4xl font-bold mb-2 tracking-tight">100%</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Grounded Content</div>
          </div>
          <div className="py-6 md:py-0 px-8 w-full">
            <div className="text-4xl font-bold mb-2 tracking-tight">Visual</div>
            <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">DAG Mapping</div>
          </div>
        </div>
      </section>

      {/* 4. Added the Tabbed Features section right below the stats */}
      <section id="features" className="bg-[#f3f3f1] py-24 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
            Master your skills. <br/> You deserve a path that adapts.
          </h2>
          <TabbedFeatures />
        </div>
      </section>
      
    </div>
  );
}