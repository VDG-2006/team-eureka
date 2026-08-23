"use client";

import React, { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';

export default function DevTools() {
  const [isVisible, setIsVisible] = useState(false);
  const store = useStore();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'X') {
        setIsVisible(prev => !prev);
      }
      
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        store.setProfile({
          id: 'demo-user-123',
          skill_vector: { react: 1.2, javascript: 2.0, css: 0.5 },
          completed_nodes: ['n1', 'n2'],
          aura_points: 1250,
          aura_tier: 'Ember',
          streak_days: 3,
          last_active: new Date().toISOString()
        });
        alert('Demo safety net loaded: Perfect dummy data injected.');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [store]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 w-80 bg-black/90 backdrop-blur-md border border-gray-700 text-green-400 p-4 rounded-xl z-[100] font-mono text-xs shadow-2xl">
      <div className="flex justify-between items-center mb-2 border-b border-gray-700 pb-2">
        <span className="font-bold">X-RAY DEBUG PANEL</span>
        <span className="text-gray-500">Ctrl+Shift+X</span>
      </div>
      <div className="space-y-2 overflow-y-auto max-h-60">
        <div>
          <span className="text-gray-500">Theta Estimate: </span>
          <span className="text-white">{(store.nodeStates['n3']?.theta_estimate || 0.00).toFixed(2)}</span>
        </div>
        <div>
          <span className="text-gray-500">Aura Ledger: </span>
          <span className="text-white">{store.auraEvents.length} events</span>
        </div>
        <pre className="mt-2 text-[10px] text-gray-300 overflow-x-hidden">
          {JSON.stringify(store.profile?.skill_vector || {}, null, 2)}
        </pre>
      </div>
    </div>
  );
}