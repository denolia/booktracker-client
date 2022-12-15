import React, { useState } from 'react';
import { requestLogin } from './state/requestLogin';
import { User } from './types';

interface AuthContext {
  user?: User;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const Context = React.createContext<AuthContext | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, _setState] = useState<AuthContext>({
    isLoggedIn: false,
    login: async () => {},
    logout: () => true,
  });
  const [user, setUser] = useState<User>();

  const logout = () => {
    setUser(undefined);
  };

  const login = async (email: string, password: string) => {
    const loggedInUser = await requestLogin(email, password);
    setUser(loggedInUser);
  };

  const isLoggedIn = Boolean(user?.email);

  const value = { ...state, user, login, logout, isLoggedIn };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useAuth() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
