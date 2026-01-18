export interface BookingCardProps {
  price: string;
  duration: string;
  packageName?: string;
  availableDates?: string;
  groupSize?: string;
  onEnquire?: () => void;
}

export interface ConnectDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface DestinationCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  rating?: number;
  category?: string;
  tag?: string;
  linkPrefix?: string;
}

export interface DealCountdownProps {
  onClaim?: () => void;
}

export interface ItineraryItem {
  day?: number;
  title: string;
  activity: string;
  description: string;
  image?: string;
  stay?: string;
  transfer?: string;
}

export interface RouteItem {
  city: string;
  days: number;
}

export interface Package {
  id: string;
  name: string;
  duration: string;
  days: number;
  price: string;
  image: string;
  images?: string[];
  route: RouteItem[] | string[];
  highlights: string[];
  itinerary: ItineraryItem[];
}

export interface DurationSelectorProps {
  packages: Package[];
  selectedPackage: Package | null;
  tourId: string;
}

export interface HeroCarouselProps {
  images: string[];
  title: string;
  packageName?: string;
  location: string;
  rating: number;
}

export interface ItineraryProps {
  items: ItineraryItem[];
}

export interface ItineraryTabsProps {
  items: ItineraryItem[];
}

export interface RouteTimelineProps {
  route: RouteItem[];
}
