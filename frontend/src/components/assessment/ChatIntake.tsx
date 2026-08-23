"use client";

import React, { useState } from 'react';

export default function ChatIntake() {
  const [step, setStep] = useState<'chat' | 'diagnostic'>('chat');
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'What specific domain or technology are you looking to master next? (e.g., Frontend React, Python Data Science)' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate AI transitioning to diagnostic quiz after domain is provided
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'ai', 
        content: 'Great. Let\'s establish your starting skill vector with a quick diagnostic test.' 
      }]);
      
      setTimeout(() => setStep('diagnostic'), 2000);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col min-h-[400px]">
      
      {step === 'chat' ? (
        <>
          {/* Chat History */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  msg.role === 'user' 
                    ? 'bg-black text-white rounded-br-sm' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 bg-gray-50 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., I want to learn Next.js and Tailwind..."
              className="flex-1 bg-white border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
            />
            <button 
              type="submit" 
              className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
        </>
      ) : (
        /* Diagnostic Quiz Transition State */
        <div className="flex-1 p-8 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mb-6" />
          <h2 className="text-2xl font-bold mb-2">Generating Diagnostic...</h2>
          <p className="text-gray-500">Calibrating medium-difficulty IRT questions based on your goals.</p>
        </div>
      )}
    </div>
  );
}