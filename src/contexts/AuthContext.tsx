import { createContext, ReactNode, useCallback, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

interface AuthContextData {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  removeToken: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const [token, setTokenState] = useState<string | null>(() => {
    return localStorage.getItem('auth_token');
  });

  const setToken = useCallback((newToken: string) => {
    localStorage.setItem('auth_token', newToken);
    setTokenState(newToken);
  }, []);

  const removeToken = useCallback(() => {
    localStorage.removeItem('auth_token');
    setTokenState(null);
  }, []);

  return {
    token,
    isAuthenticated: !!token,
    setToken,
    removeToken,
  };
} 