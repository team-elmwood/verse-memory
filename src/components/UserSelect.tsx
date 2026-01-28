'use client';

import { useUser } from '@/context/UserContext';
import { UserName } from '@/lib/types';

export function UserSelect() {
  const { setUser } = useUser();

  const handleSelect = (user: UserName) => {
    setUser(user);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-3">
          📖 Verse Memory
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          Who&apos;s studying today?
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        {(['Lance', 'Will'] as UserName[]).map((name) => (
          <button
            key={name}
            onClick={() => handleSelect(name)}
            className="flex-1 py-6 px-8 text-2xl font-semibold rounded-2xl
              bg-white dark:bg-slate-700 
              text-slate-800 dark:text-white
              border-2 border-slate-200 dark:border-slate-600
              hover:border-blue-500 dark:hover:border-blue-400
              hover:bg-blue-50 dark:hover:bg-slate-600
              active:scale-95
              transition-all duration-200
              shadow-lg hover:shadow-xl"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
