export interface Cabin {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  image: string;
  capacity: string;
  pricePerNight: number;
  amenities: { icon: string; label: string }[];
  featured?: boolean;
}

export interface Attraction {
  icon: string;
  name: string;
  description: string;
}

export interface Review {
  initials: string;
  name: string;
  meta: string;
  text: string;
  rating: number;
}

export interface Audience {
  id: string;
  label: string;
  emoji: string;
  headline: string;
  description: string;
  features: string[];
  image: string;
  cta: string;
}
