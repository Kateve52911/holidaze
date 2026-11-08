import type { Profile } from '@/types/profile/profile.ts';

export const USER_KEY = 'currentUser';

export function saveKey(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function loadKey(key: string): string | null {
  return localStorage.getItem(key);
}

export function removeKey(key: string): void {
  localStorage.removeItem(key);
}

export function storeUser(user: Profile): void {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function removeUser(): void {
  localStorage.removeItem(USER_KEY);
}

export function loadCurrentUser(): Profile | null {
  const user = localStorage.getItem(USER_KEY);
  try {
    return user ? JSON.parse(user) : null;
  } catch {
    removeKey(USER_KEY);
    return null;
  }
}
