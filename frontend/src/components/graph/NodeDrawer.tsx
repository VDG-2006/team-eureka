"use client";

import React from 'react';

interface NodeDrawerProps {
  nodeId: string | null;
  onClose: () => void;
}

export default function NodeDrawer({ nodeId, onClose }: NodeDrawerProps) {
  if (!nodeId) return null;

  return (
    <div className="absolute top-6 left-6 bottom-6 w-96 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl flex flex-col z-20 overflow-hidden animate-in slide-in-from-left-4 duration-300">
      
      <div className="p-6 border-b border-gray-100 flex justify-between items-start">
        <div>
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-1">
            In Progress
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#1a1a1a]">
            React Hooks Deep Dive
          </h2>
        </div>
        <button 
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition"
        >
          ✕
        </button>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Why this topic?</h3>
          <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
            Based on your completion of JavaScript Fundamentals, mastering state management is your optimal next step. This resource aligns with your current skill vector (-0.5 Theta).
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Recommended Resource</h3>
          <a href="#" className="block p-4 border border-gray-200 rounded-xl hover:border-black transition group">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium text-black group-hover:underline">Dan Abramov: A Complete Guide to useEffect</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Article</span>
            </div>
            <p className="text-xs text-gray-500">Estimated time: 45 mins</p>
          </a>
        </div>
      </div>

      <div className="p-6 border-t border-gray-100 bg-gray-50">
        <button 
          onClick={() => window.location.href = `/quiz/${nodeId}`}
          className="w-full bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2 shadow-sm"
        >
          Start Checkpoint
        </button>
      </div>
      
    </div>
  );
}