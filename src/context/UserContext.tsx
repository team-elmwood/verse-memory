'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserName, UserData } from '@/lib/types';
import { getCurrentUser, setCurrentUser as saveCurrentUser, getUserData, clearCurrentUser } from '@/lib/storage';

interface UserContextType {
  currentUser: UserName | null;
  userData: UserData | null;
  setUser: (user: UserName) => void;
  logout: () => void;
  refreshUserData: () => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUserState] = useState<UserName | null>(null);
  const [userData, setUserDataState] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUserState(user);
      setUserDataState(getUserData(user));
    }
    setIsLoading(false);
  }, []);

  const setUser = (user: UserName) => {
    saveCurrentUser(user);
    setCurrentUserState(user);
    setUserDataState(getUserData(user));
  };

  const logout = () => {
    clearCurrentUser();
    setCurrentUserState(null);
    setUserDataState(null);
  };

  const refreshUserData = () => {
    if (currentUser) {
      setUserDataState(getUserData(currentUser));
    }
  };

  return (
    <UserContext.Provider value={{ 
      currentUser, 
      userData, 
      setUser, 
      logout, 
      refreshUserData,
      isLoading 
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
