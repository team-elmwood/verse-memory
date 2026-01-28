'use client';

import { useUser } from '@/context/UserContext';

interface HeaderProps {
  mode: 'learn' | 'quiz';
  setMode: (mode: 'learn' | 'quiz') => void;
  canQuiz: boolean;
  progress: { current: number; total: number; memorized: number };
}

export function Header({ mode, setMode, canQuiz, progress }: HeaderProps) {
  const { currentUser, logout } = useUser();

  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📖</span>
            <span className="font-semibold text-slate-800 dark:text-white">
              {currentUser}
            </span>
          </div>
          <button
            onClick={logout}
            className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Switch User
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mb-3">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-1">
            <span>Verse {progress.current} of {progress.total}</span>
            <span>{progress.memorized} memorized</span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
              style={{ width: `${(progress.current / progress.total) * 100}%` }}
            />
          </div>
        </div>
        
        {/* Mode tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setMode('learn')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              mode === 'learn'
                ? 'bg-blue-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Learn
          </button>
          <button
            onClick={() => canQuiz && setMode('quiz')}
            disabled={!canQuiz}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              mode === 'quiz'
                ? 'bg-green-500 text-white'
                : canQuiz
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
            }`}
          >
            Quiz {!canQuiz && '🔒'}
          </button>
        </div>
      </div>
    </header>
  );
}
