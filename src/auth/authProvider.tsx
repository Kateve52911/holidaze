import { useState, type ReactNode } from 'react';
import {
  loadCurrentUser,
  removeUser,
  storeUser,
} from '@/utils/storage/storage.ts';
import type { Profile } from '@/types/profile/profile.ts';
import { AuthContext } from './authContext.ts';

export const AuthProvider = (props: { children: ReactNode }) => {
  const [user, setUser] = useState<Profile | null>(() => {
    return loadCurrentUser();
  });

  const login = (newUser: Profile) => {
    setUser(newUser);
    storeUser(newUser);
  };

  const logout = () => {
    setUser(null);
    removeUser();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
