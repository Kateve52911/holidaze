import type { Media } from '@/types/media';
import type { Profile } from '@/types/profile';

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  bio?: string;
  avatar?: Media;
  banner?: Media;
  venueManager?: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends Profile {
  accessToken: string;
}
