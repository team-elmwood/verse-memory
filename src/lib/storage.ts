import { UserData, UserName, VerseProgress } from './types';

const STORAGE_KEY_PREFIX = 'verse-memory-';
const USER_KEY = 'verse-memory-current-user';

export function getCurrentUser(): UserName | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(USER_KEY) as UserName | null;
}

export function setCurrentUser(user: UserName): void {
  localStorage.setItem(USER_KEY, user);
}

export function clearCurrentUser(): void {
  localStorage.removeItem(USER_KEY);
}

function getStorageKey(user: UserName): string {
  return `${STORAGE_KEY_PREFIX}${user}`;
}

export function getUserData(user: UserName): UserData {
  if (typeof window === 'undefined') {
    return { visibleVerseCount: 1, verses: {} };
  }
  
  const stored = localStorage.getItem(getStorageKey(user));
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { visibleVerseCount: 1, verses: {} };
    }
  }
  return { visibleVerseCount: 1, verses: {} };
}

export function setUserData(user: UserName, data: UserData): void {
  localStorage.setItem(getStorageKey(user), JSON.stringify(data));
}

export function getVerseProgress(user: UserName, verseId: string): VerseProgress {
  const userData = getUserData(user);
  return userData.verses[verseId] || {
    firstStudied: null,
    lastStudied: null,
    studyCount: 0,
    quizAttempts: 0,
    correctCount: 0
  };
}

export function updateVerseProgress(
  user: UserName, 
  verseId: string, 
  updates: Partial<VerseProgress>
): void {
  const userData = getUserData(user);
  const currentProgress = userData.verses[verseId] || {
    firstStudied: null,
    lastStudied: null,
    studyCount: 0,
    quizAttempts: 0,
    correctCount: 0
  };
  
  userData.verses[verseId] = { ...currentProgress, ...updates };
  setUserData(user, userData);
}

export function markVerseStudied(user: UserName, verseId: string): void {
  const userData = getUserData(user);
  const progress = userData.verses[verseId] || {
    firstStudied: null,
    lastStudied: null,
    studyCount: 0,
    quizAttempts: 0,
    correctCount: 0
  };
  
  const now = new Date().toISOString();
  
  userData.verses[verseId] = {
    ...progress,
    firstStudied: progress.firstStudied || now,
    lastStudied: now,
    studyCount: progress.studyCount + 1
  };
  
  setUserData(user, userData);
}

export function recordQuizAttempt(
  user: UserName, 
  verseId: string, 
  correct: boolean
): void {
  const userData = getUserData(user);
  const progress = userData.verses[verseId] || {
    firstStudied: null,
    lastStudied: null,
    studyCount: 0,
    quizAttempts: 0,
    correctCount: 0
  };
  
  userData.verses[verseId] = {
    ...progress,
    quizAttempts: progress.quizAttempts + 1,
    correctCount: correct ? progress.correctCount + 1 : progress.correctCount
  };
  
  setUserData(user, userData);
}

export function unlockNextVerse(user: UserName, totalVerses: number): void {
  const userData = getUserData(user);
  if (userData.visibleVerseCount < totalVerses) {
    userData.visibleVerseCount += 1;
    setUserData(user, userData);
  }
}

export function getDaysSinceFirstStudied(progress: VerseProgress): number | null {
  if (!progress.firstStudied) return null;
  
  const firstDate = new Date(progress.firstStudied);
  const now = new Date();
  const diffTime = now.getTime() - firstDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

export function canQuiz(progress: VerseProgress): boolean {
  const days = getDaysSinceFirstStudied(progress);
  return days !== null && days >= 3;
}
