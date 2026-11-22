import type { Profile } from '@/types/profile.ts';
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '@/config/constants';

export function storeUser(user: Profile): void {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

export function removeUser(): void {
  localStorage.removeItem(USER_STORAGE_KEY);
}

export function loadCurrentUser(): Profile | null {
  const user = localStorage.getItem(USER_STORAGE_KEY);
  try {
    return user ? JSON.parse(user) : null;
  } catch {
    removeUser();
    return null;
  }
}

export function storeToken(token: string) {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function loadToken(): string | null {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}
