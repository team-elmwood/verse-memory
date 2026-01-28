'use client';

import { useUser } from '@/context/UserContext';
import { UserSelect } from '@/components/UserSelect';
import { MainApp } from '@/components/MainApp';

export default function Home() {
  const { currentUser, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-4xl animate-pulse">📖</div>
      </div>
    );
  }

  if (!currentUser) {
    return <UserSelect />;
  }

  return <MainApp />;
}
