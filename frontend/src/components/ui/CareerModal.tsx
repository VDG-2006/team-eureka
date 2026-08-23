"use client";

import React, { useState } from 'react';

export default function CareerModal() {
  const [isOpen, setIsOpen] = useState(true); // Default to true for demo purposes

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        <div className="bg-gradient-to-br from-black to-gray-800 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition">✕</button>
          </div>
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Domain Path Conquered!</h2>
          <p className="text-gray-300 text-sm">You have mastered the Frontend Development DAG.</p>
        </div>

        <div className="p-8">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Career Readiness Analysis
          </div>
          
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Based on your final IRT skill vector and Aura points, our AI has mapped your current mastery against enterprise hiring standards.
          </p>

          <div className="bg-[#f3f3f1] border border-gray-200 rounded-xl p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-sm">JPMorgan Chase & Co.</span>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Match: 92%</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex gap-2"><span>✓</span> 2028 SWE Internship Requirements</li>
              <li className="flex gap-2"><span>✓</span> Modern React State Management</li>
              <li className="flex gap-2 text-gray-400"><span>○</span> Advanced System Design (Missing)</li>
            </ul>
          </div>

          <button 
            onClick={() => setIsOpen(false)}
            className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Generate Next Path
          </button>
        </div>
      </div>
    </div>
  );
}