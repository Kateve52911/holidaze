export interface Profile {
  name: string;
  email: string;
  bio: string;
  banner: {
    url: string;
    alt: string;
  };
  avatar: {
    url: string;
    alt: string;
  };
  venueManager: boolean;
  count: {
    venues: number;
    bookings: number;
  };
}
