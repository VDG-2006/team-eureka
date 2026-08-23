"use client";

import React from 'react';

interface NodeDrawerProps {
  nodeId: string | null;
  onClose: () => void;
}

export default function NodeDrawer({ nodeId, onClose }: NodeDrawerProps) {
  if (!nodeId) return null;

  return (
    <div className="absolute top-6 left-6 bottom-6 w-[400px] bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl flex flex-col z-20 overflow-hidden animate-in slide-in-from-left-4 duration-300">
      
      <div className="p-6 border-b border-gray-100 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">
              In Progress
            </span>
            <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold border border-green-200">
              94% Confidence Match
            </span>
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

      <div className="p-6 flex-1 overflow-y-auto space-y-6">
        
        {/* Explainable AI RAG Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Why this topic?</h3>
          <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
            Based on your completion of JavaScript Fundamentals (Node n2), mastering state management is your optimal next step. Your current skill vector (-0.5 Theta) indicates you are ready for functional lifecycle patterns.
          </p>
        </div>

        {/* Code Snippet Injection */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Concept Preview</h3>
          <div className="bg-[#1a1a1a] rounded-xl p-4 overflow-x-auto border border-gray-800">
            <pre className="text-xs text-gray-300 font-mono">
              <code className="language-javascript">
<span className="text-pink-400">const</span> [state, setState] = <span className="text-blue-400">useState</span>(initial);<br/><br/>
<span className="text-blue-400">useEffect</span>(() <span className="text-pink-400">{`=>`}</span> {'{'}<br/>
{'  '}// Your logic here replaces<br/>
{'  '}// componentDidMount & Update<br/>
{'}'}, [dependencies]);
              </code>
            </pre>
          </div>
        </div>

        {/* Citations Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Retrieved Context Sources</h3>
          <div className="space-y-2">
            <a href="#" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-black transition group bg-white">
              <span className="text-xs font-medium text-black group-hover:underline">React Docs: Built-in Hooks</span>
              <span className="text-[10px] text-gray-400">Source 1</span>
            </a>
            <a href="#" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-black transition group bg-white">
              <span className="text-xs font-medium text-black group-hover:underline">Dan Abramov: A Complete Guide</span>
              <span className="text-[10px] text-gray-400">Source 2</span>
            </a>
          </div>
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