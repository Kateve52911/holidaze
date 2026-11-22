import { API_KEY } from '@/config/constants';
import { loadToken } from '@/utils/storage/storage';

export function createHeaders(hasBody = false): Headers {
  const headers = new Headers();
  const token: string | null = loadToken();

  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  if (API_KEY) {
    headers.append('X-Noroff-API-Key', API_KEY);
  }

  if (hasBody) {
    headers.append('Content-Type', 'application/json');
  }

  return headers;
}
