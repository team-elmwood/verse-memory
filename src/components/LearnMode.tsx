'use client';

import { Verse, VerseProgress } from '@/lib/types';
import { getDaysSinceFirstStudied } from '@/lib/storage';

interface LearnModeProps {
  verse: Verse;
  progress: VerseProgress;
  onMarkStudied: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  isLastUnlocked: boolean;
}

export function LearnMode({
  verse,
  progress,
  onMarkStudied,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
  isLastUnlocked
}: LearnModeProps) {
  const daysSinceFirst = getDaysSinceFirstStudied(progress);
  const hasStudiedToday = progress.lastStudied 
    ? new Date(progress.lastStudied).toDateString() === new Date().toDateString()
    : false;

  return (
    <div className="flex flex-col min-h-[calc(100vh-180px)]">
      {/* Verse Card */}
      <div className="flex-1 p-6">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-6">
          {/* Reference */}
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            {verse.reference}
          </h2>
          
          {/* Text */}
          <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200">
            {verse.text}
          </p>
        </div>

        {/* Study Stats */}
        {progress.firstStudied && (
          <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300">
              <span className="text-2xl">🔥</span>
              <span className="text-lg font-medium">
                {daysSinceFirst === 0 
                  ? 'Started today!' 
                  : `Day ${daysSinceFirst! + 1} of studying`}
              </span>
            </div>
            <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-1">
              Studied {progress.studyCount} time{progress.studyCount !== 1 ? 's' : ''}
            </div>
          </div>
        )}

        {/* Quiz unlock info */}
        {progress.firstStudied && daysSinceFirst !== null && daysSinceFirst < 3 && (
          <div className="text-center text-sm text-slate-500 dark:text-slate-400 mb-4">
            🔒 Quiz unlocks in {3 - daysSinceFirst} day{3 - daysSinceFirst !== 1 ? 's' : ''}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="sticky bottom-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 p-4">
        {/* Mark as Studied button */}
        <button
          onClick={onMarkStudied}
          disabled={hasStudiedToday}
          className={`w-full py-4 rounded-xl font-semibold text-lg mb-4 transition-all ${
            hasStudiedToday
              ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
              : 'bg-blue-500 hover:bg-blue-600 active:scale-98 text-white'
          }`}
        >
          {hasStudiedToday ? '✓ Studied Today' : 'Mark as Studied'}
        </button>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              hasPrev
                ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed'
            }`}
          >
            ← Previous
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext && !isLastUnlocked}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              hasNext || isLastUnlocked
                ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed'
            }`}
          >
            {isLastUnlocked && !hasNext ? 'Unlock Next →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}
