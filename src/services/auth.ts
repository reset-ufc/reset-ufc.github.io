import { api } from '../lib/axios';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken?: string;
  access_token?: string;
  token?: string;
}

export const authenticate = async ({ email, password }: LoginCredentials): Promise<string> => {
  const response = await api.post<AuthResponse>('/auth/login', {
    email,
    password,
  });

  // Suporta diferentes formatos de resposta da API
  const token = response.data.accessToken || response.data.access_token || response.data.token;
  
  if (!token) {
    throw new Error('Token não encontrado na resposta da API');
  }

  return token;
};

