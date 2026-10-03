export type MonumentCategory = 'Fort' | 'Wada' | 'Temple' | 'Palace' | 'Cave Temple' | 'Museum';

export interface MonumentChapter {
  id: string;
  title: string;
  duration: string;
  text: string;
}

export interface Monument {
  id: string;
  name: string;
  category: MonumentCategory;
  area: string;
  historicalPeriod: string;
  shortDescription: string;
  description: string;
  openingHours: string;
  entryFee: string;
  estimatedTime: string;
  latitude: number;
  longitude: number;
  heroImage: string;
  gallery: string[];
  history: {
    builtYear: string;
    builder: string;
    significance: string;
    architectureStyle: string;
    keyEvents: { year: string; event: string }[];
  };
  thenNow?: {
    thenImage: string;
    nowImage: string;
    thenLabel: string;
    nowLabel: string;
    description: string;
  };
  audioNarration: {
    title: string;
    totalDuration: string;
    chapters: MonumentChapter[];
  };
  nearbyExperienceIds: string[];
}

export interface WalkStop {
  id: string;
  name: string;
  category: string;
  distanceFromPrev: string;
  estimatedTime: string;
  description: string;
  latitude: number;
  longitude: number;
  monumentId?: string;
  image: string;
  storyChapter?: string;
}

export interface Walk {
  id: string;
  title: string;
  category: 'Heritage' | 'Food' | 'Culture' | 'Nature';
  distance: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  description: string;
  image: string;
  startPoint: string;
  endPoint: string;
  stops: WalkStop[];
  routeCoordinates: [number, number][];
}

export interface UpcomingSlot {
  date: string;
  time: string;
  seatsLeft: number;
}

export interface Experience {
  id: string;
  title: string;
  category: 'Food' | 'Art' | 'Culture' | 'Music' | 'Workshops' | 'Shopping';
  duration: string;
  price: number;
  priceFormatted: string;
  badge: string;
  description: string;
  highlights: string[];
  included: string[];
  image: string;
  location: string;
  latitude: number;
  longitude: number;
  upcomingDates: UpcomingSlot[];
}

export interface ItineraryItem {
  id: string;
  placeId: string;
  type: 'monument' | 'experience' | 'walk' | 'custom';
  title: string;
  time: string;
  duration: string;
  category: string;
  location: string;
  notes?: string;
  image: string;
  latitude: number;
  longitude: number;
}

export interface Booking {
  id: string;
  experienceId: string;
  experienceTitle: string;
  date: string;
  time: string;
  guests: number;
  totalPrice: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  bookingReference: string;
  createdAt: string;
}

export interface FilterState {
  category: string;
  area: string;
  sort: string;
  search: string;
}
