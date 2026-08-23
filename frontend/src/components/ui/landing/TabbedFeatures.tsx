"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 'dag',
    title: 'Interactive DAGs',
    description: 'Stop guessing prerequisites. See your entire learning journey mapped out as a Directed Acyclic Graph (DAG) that adapts as you progress.',
    visual: 'bg-gradient-to-br from-gray-100 to-gray-200'
  },
  {
    id: 'irt',
    title: 'Adaptive Profiling',
    description: 'We never rely on self-reported skills. Our conversational AI establishes your baseline using Item Response Theory (IRT) diagnostic quizzes.',
    visual: 'bg-gradient-to-bl from-gray-900 to-black'
  },
  {
    id: 'aura',
    title: 'Aura Gamification',
    description: 'Earn points dynamically tied to the mathematical difficulty of the questions you answer, not just participation trophies.',
    visual: 'bg-gradient-to-tr from-amber-500 to-orange-400'
  },
  {
    id: 'tutor',
    title: 'Explainable AI Tutor',
    description: 'Click any node to see exactly why a resource was recommended. 100% grounded in retrieved context, zero hallucinated courses.',
    visual: 'bg-gradient-to-tl from-blue-500 to-indigo-600'
  }
];

export default function TabbedFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "w-full text-left p-6 rounded-2xl transition-all duration-300",
                activeTab === index 
                  ? "bg-white shadow-lg border border-gray-100" 
                  : "hover:bg-gray-50 border border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <h3 className="text-2xl font-bold tracking-tight mb-2 text-black">
                {feature.title}
              </h3>
              <div 
                className={cn(
                  "grid transition-all duration-300",
                  activeTab === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <p className="overflow-hidden text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="relative aspect-square w-full max-w-md mx-auto md:max-w-none rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 flex items-center justify-center">
          <div className={cn("absolute inset-0 transition-opacity duration-500", features[activeTab].visual)} />
          
          <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-white max-w-[80%] text-center">
            <h4 className="text-xl font-bold mb-2">{features[activeTab].title}</h4>
            <p className="text-sm opacity-90">Feature visualization rendering active...</p>
          </div>
        </div>

      </div>
    </div>
  );
}