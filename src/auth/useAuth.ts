import { useContext } from 'react';
import { AuthContext } from './authContext.ts';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  const isLoggedIn = context.user !== null;
  const isVenueManager = context.user?.venueManager === true;

  return { ...context, isVenueManager, isLoggedIn };
};
