import { createHeaders } from './headers';

export function apiFetch(
  url: string | URL,
  options?: RequestInit,
): Promise<Response> {
  return fetch(url, {
    ...options,
    headers: createHeaders(Boolean(options?.body)),
  });
}
