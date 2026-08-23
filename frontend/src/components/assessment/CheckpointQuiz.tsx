"use client";

import React, { useState } from 'react';

interface QuizItem {
  id: string;
  prompt: string;
  options: string[];
  difficulty_b: number;
  point_value: number;
}

const mockQuestions: QuizItem[] = [
  {
    id: 'q1',
    prompt: 'Which of the following best describes a React Server Component?',
    options: [
      'A component that only renders on the client.',
      'A component that fetches data directly on the server without sending JavaScript to the client.',
      'A traditional SPA component.',
      'A component that requires standard React hooks like useState.'
    ],
    difficulty_b: 1.2,
    point_value: 15
  },
  {
    id: 'q2',
    prompt: 'What is the primary benefit of using a Directed Acyclic Graph (DAG) for learning paths?',
    options: [
      'It allows for cyclical learning.',
      'It prevents infinite loops in prerequisite mapping.',
      'It is a relational database structure.',
      'It only supports linear arrays.'
    ],
    difficulty_b: 0.5,
    point_value: 10
  }
];

export default function CheckpointQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = mockQuestions[currentIndex];

  const handleNext = () => {
    if (selectedOption === null) return;
    
    if (currentIndex < mockQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    }
  };

  if (isSubmitting) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center flex flex-col items-center animate-in fade-in zoom-in">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mb-6" />
        <h2 className="text-2xl font-bold mb-2">Analyzing Results</h2>
        <p className="text-gray-500">Updating your skill vector and generating your path...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Diagnostic Question {currentIndex + 1} of {mockQuestions.length}
        </span>
        <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
          {currentQuestion.point_value} AP
        </span>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 leading-snug">
          {currentQuestion.prompt}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOption(idx)}
              className={`w-full text-left px-6 py-4 rounded-xl border text-sm transition-all ${
                selectedOption === idx
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 hover:border-gray-400 text-gray-700 bg-white'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentIndex === mockQuestions.length - 1 ? 'Submit & Generate Path' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}