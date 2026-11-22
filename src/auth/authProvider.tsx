import { useState, type ReactNode } from 'react';
import {
  loadCurrentUser,
  removeToken,
  removeUser,
  storeToken,
  storeUser,
} from '@/utils/storage/storage';
import type { Profile } from '@/types/profile';
import { AuthContext } from './authContext';
import type { LoginResponse } from '@/services/api/auth/auth.types';

export const AuthProvider = (props: { children: ReactNode }) => {
  const [user, setUser] = useState<Profile | null>(() => {
    return loadCurrentUser();
  });

  const login = (newUser: LoginResponse) => {
    const { accessToken, ...profile } = newUser;
    setUser(profile);
    storeUser(profile);
    storeToken(accessToken);
  };

  const logout = () => {
    setUser(null);
    removeUser();
    removeToken();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
