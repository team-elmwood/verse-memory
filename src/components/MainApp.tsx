'use client';

import { useState, useEffect, useCallback } from 'react';
import { useUser } from '@/context/UserContext';
import { Header } from './Header';
import { LearnMode } from './LearnMode';
import { QuizMode } from './QuizMode';
import { verses } from '@/lib/verses';
import { 
  getVerseProgress, 
  markVerseStudied, 
  unlockNextVerse, 
  canQuiz,
  recordQuizAttempt
} from '@/lib/storage';
import { VerseProgress } from '@/lib/types';

export function MainApp() {
  const { currentUser, refreshUserData, userData } = useUser();
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  
  const visibleCount = userData?.visibleVerseCount || 1;
  const visibleVerses = verses.slice(0, visibleCount);
  const currentVerse = visibleVerses[currentVerseIndex] || verses[0];
  
  // Get quizzable verses (studied for 3+ days)
  const getQuizzableVerses = useCallback(() => {
    if (!currentUser) return [];
    
    // Get up to 5 verses that can be quizzed (current + 4 previous)
    const startIdx = Math.max(0, currentVerseIndex - 4);
    const endIdx = currentVerseIndex + 1;
    
    return visibleVerses
      .slice(startIdx, endIdx)
      .filter(v => {
        const progress = getVerseProgress(currentUser, v.id);
        return canQuiz(progress);
      });
  }, [currentUser, currentVerseIndex, visibleVerses]);

  const quizzableVerses = getQuizzableVerses();
  const canDoQuiz = quizzableVerses.length > 0;

  // Get current verse progress
  const currentProgress = currentUser 
    ? getVerseProgress(currentUser, currentVerse.id)
    : null;

  // Calculate memorized count (verses with quiz success rate > 80%)
  const memorizedCount = visibleVerses.filter(v => {
    if (!currentUser) return false;
    const progress = getVerseProgress(currentUser, v.id);
    return progress.quizAttempts >= 3 && (progress.correctCount / progress.quizAttempts) >= 0.8;
  }).length;

  const handleMarkStudied = () => {
    if (!currentUser) return;
    markVerseStudied(currentUser, currentVerse.id);
    refreshUserData();
  };

  const handleNext = () => {
    if (currentVerseIndex < visibleCount - 1) {
      setCurrentVerseIndex(currentVerseIndex + 1);
    } else if (currentVerseIndex === visibleCount - 1) {
      // Unlock next verse
      if (!currentUser) return;
      unlockNextVerse(currentUser, verses.length);
      refreshUserData();
      setCurrentVerseIndex(currentVerseIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentVerseIndex > 0) {
      setCurrentVerseIndex(currentVerseIndex - 1);
    }
  };

  const handleRecordAttempt = (verseId: string, correct: boolean) => {
    if (!currentUser) return;
    recordQuizAttempt(currentUser, verseId, correct);
    refreshUserData();
  };

  const getProgressForVerse = (verseId: string): VerseProgress => {
    if (!currentUser) return {
      firstStudied: null,
      lastStudied: null,
      studyCount: 0,
      quizAttempts: 0,
      correctCount: 0
    };
    return getVerseProgress(currentUser, verseId);
  };

  // Ensure currentVerseIndex is within bounds
  useEffect(() => {
    if (currentVerseIndex >= visibleCount) {
      setCurrentVerseIndex(Math.max(0, visibleCount - 1));
    }
  }, [visibleCount, currentVerseIndex]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header
        mode={mode}
        setMode={setMode}
        canQuiz={canDoQuiz}
        progress={{
          current: visibleCount,
          total: verses.length,
          memorized: memorizedCount
        }}
      />

      {mode === 'learn' ? (
        <LearnMode
          verse={currentVerse}
          progress={currentProgress || {
            firstStudied: null,
            lastStudied: null,
            studyCount: 0,
            quizAttempts: 0,
            correctCount: 0
          }}
          onMarkStudied={handleMarkStudied}
          onNext={handleNext}
          onPrev={handlePrev}
          hasPrev={currentVerseIndex > 0}
          hasNext={currentVerseIndex < visibleCount - 1}
          isLastUnlocked={currentVerseIndex === visibleCount - 1 && visibleCount < verses.length}
        />
      ) : (
        <QuizMode
          verses={quizzableVerses}
          getProgress={getProgressForVerse}
          onRecordAttempt={handleRecordAttempt}
        />
      )}
    </div>
  );
}
