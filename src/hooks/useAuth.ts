import { useState, useEffect } from 'react';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Carrega o token do localStorage ao iniciar
    const token = localStorage.getItem('auth_token');
    if (token) {
      setAuthState({
        token,
        isAuthenticated: true,
      });
    }
  }, []);

  const setToken = (token: string) => {
    localStorage.setItem('auth_token', token);
    setAuthState({
      token,
      isAuthenticated: true,
    });
  };

  const removeToken = () => {
    localStorage.removeItem('auth_token');
    setAuthState({
      token: null,
      isAuthenticated: false,
    });
  };

  return {
    token: authState.token,
    isAuthenticated: authState.isAuthenticated,
    setToken,
    removeToken,
  };
} 