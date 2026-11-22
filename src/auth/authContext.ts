import type { LoginResponse } from '@/services/api/auth/auth.types';
import type { Profile } from '@/types/profile';
import { createContext } from 'react';

export interface AuthContextValue {
  user: Profile | null;
  login: (user: LoginResponse) => void;
  logout: () => void;
}
export const AuthContext = createContext<AuthContextValue | null>(null);
