export interface Verse {
  id: string;
  reference: string;
  text: string;
  length: number;
}

export interface VerseProgress {
  firstStudied: string | null;
  lastStudied: string | null;
  studyCount: number;
  quizAttempts: number;
  correctCount: number;
}

export interface UserData {
  visibleVerseCount: number;
  verses: Record<string, VerseProgress>;
}

export type UserName = 'Lance' | 'Will';
