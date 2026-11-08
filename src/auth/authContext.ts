import type { Profile } from '@/types/profile/profile.ts';
import { createContext } from 'react';

export interface AuthContextValue {
  user: Profile | null;
  login: (user: Profile) => void;
  logout: () => void;
}
export const AuthContext = createContext<AuthContextValue | null>(null);
