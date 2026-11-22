import type { Media } from '@/types/media';
import type { Venue } from '@/types/venue';
import type { Booking } from '@/types/booking';

export interface Profile {
  name: string;
  email: string;
  bio: string | null;
  banner: Media;
  avatar: Media;
  venueManager?: boolean;
  venues?: Venue[];
  bookings?: Booking[];
  _count?: {
    venues: number;
    bookings: number;
  };
}
