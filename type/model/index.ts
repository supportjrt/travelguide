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
}

export interface SightseeingItem {
  country?: string;
  city: string;
  activities: string[];
  day?: number;
  image?: string;
}

export interface AccommodationItem {
  day?: number;
  title: string;
  hotel: string;
  image?: string;
}

export interface MealInfo {
  inclusions: string[];
  note?: string;
  driverTips?: string;
}

export interface ExclusionItem {
  description: string;
}

// ...

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
  sightseeing?: SightseeingItem[];
  accommodation?: AccommodationItem[];
  meals?: MealInfo;
  exclusions?: ExclusionItem[];
  instructions?: InstructionItem[];
  detailedHighlights?: string[];
  additionalDelights?: string[];
}

// ...

export interface ItineraryTabsProps {
  itinerary: ItineraryItem[];
  sightseeing?: SightseeingItem[];
  accommodation?: AccommodationItem[];
  meals?: MealInfo;
  exclusions?: ExclusionItem[];
  instructions?: InstructionItem[];
  highlights?: string[];
  additionalDelights?: string[];
}

export interface RouteTimelineProps {
  route: RouteItem[];
}

export interface HeroCarouselProps {
  images: string[];
  title: string;
  packageName?: string;
  location: string;
  rating?: number;
}

export interface RouteItem {
  city: string;
  days: number;
}

export interface InstructionItem {
  description: string;
}

export interface Tour {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  rating: number;
  category?: string;
  tag?: string;
  duration: string;
  description: string;
  packages?: Package[];
  itinerary?: ItineraryItem[];
}

export interface ItineraryProps {
  items: ItineraryItem[];
}

export interface DurationSelectorProps {
  packages: Package[];
  selectedPackage: Package | null;
  tourId: string;
  onPackageChange?: (pkg: Package) => void;
}
