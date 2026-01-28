'use client';

import { useState, useEffect } from 'react';
import { Verse, VerseProgress } from '@/lib/types';

interface QuizModeProps {
  verses: Verse[];
  getProgress: (verseId: string) => VerseProgress;
  onRecordAttempt: (verseId: string, correct: boolean) => void;
}

export function QuizMode({ verses, getProgress, onRecordAttempt }: QuizModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });

  const currentVerse = verses[currentIndex];
  const progress = currentVerse ? getProgress(currentVerse.id) : null;

  // Reset state when verse changes
  useEffect(() => {
    setRevealed(false);
    setAnswered(false);
  }, [currentIndex]);

  if (verses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] p-6">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-2">
          Quiz Not Available Yet
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm">
          Study verses for at least 3 days before they appear in the quiz.
        </p>
      </div>
    );
  }

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleAnswer = (correct: boolean) => {
    onRecordAttempt(currentVerse.id, correct);
    setAnswered(true);
    setSessionStats(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleNext = () => {
    if (currentIndex < verses.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back or show completion
      setCurrentIndex(0);
    }
  };

  const handleShuffle = () => {
    setCurrentIndex(Math.floor(Math.random() * verses.length));
    setSessionStats({ correct: 0, total: 0 });
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-180px)]">
      {/* Quiz Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {currentIndex + 1} of {verses.length} verses
          </span>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Session: {sessionStats.correct}/{sessionStats.total}
          </span>
          <button
            onClick={handleShuffle}
            className="text-sm text-blue-500 hover:text-blue-600"
          >
            🔀 Shuffle
          </button>
        </div>
      </div>

      {/* Quiz Card */}
      <div className="flex-1 p-6">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
          {/* Reference (always shown) */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
            <h2 className="text-3xl font-bold text-white text-center">
              {currentVerse.reference}
            </h2>
          </div>

          {/* Text (hidden until revealed) */}
          <div className="p-6 min-h-[200px] flex items-center justify-center">
            {revealed ? (
              <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200 text-center">
                {currentVerse.text}
              </p>
            ) : (
              <div className="text-center">
                <p className="text-6xl mb-4">🤔</p>
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  Recite the verse from memory...
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          {progress && (
            <div className="px-6 pb-6">
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 text-center text-sm text-slate-600 dark:text-slate-300">
                Quiz record: {progress.correctCount}/{progress.quizAttempts} correct
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="sticky bottom-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 p-4">
        {!revealed ? (
          <button
            onClick={handleReveal}
            className="w-full py-4 rounded-xl font-semibold text-lg bg-amber-500 hover:bg-amber-600 active:scale-98 text-white transition-all"
          >
            Reveal Answer
          </button>
        ) : !answered ? (
          <div className="flex gap-3">
            <button
              onClick={() => handleAnswer(false)}
              className="flex-1 py-4 rounded-xl font-semibold text-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800 transition-all"
            >
              Need Practice
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="flex-1 py-4 rounded-xl font-semibold text-lg bg-green-500 hover:bg-green-600 active:scale-98 text-white transition-all"
            >
              Got it! ✓
            </button>
          </div>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-4 rounded-xl font-semibold text-lg bg-blue-500 hover:bg-blue-600 active:scale-98 text-white transition-all"
          >
            Next Verse →
          </button>
        )}
      </div>
    </div>
  );
}
