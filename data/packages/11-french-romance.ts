import { Package } from "../../type/model";

export const frenchRomance: Package = {
  id: "french-romance",
  duration: "5 Nights/6 Days",
  days: 6,
  name: "FRENCH ROMANCE",
  price: "$1,999",
  image: "/images/paris.png",
  images: ["/images/paris.png", "/images/amalfi.png", "/images/santorini.png"],
  route: [{ city: "Paris", days: 4 }, { city: "Nice", days: 2 }],
  highlights: ["Eiffel Tower Dinner", "Seine Cruise", "Promenade des Anglais"],
  itinerary: [
     { day: 1, title: "Paris Arrival", activity: "Transfer", description: "Welcome to the City of Love.", image: "/images/paris.png" },
     { day: 2, title: "Romantic Seine", activity: "Cruise", description: "Dinner cruise on the Seine.", image: "/images/paris.png" },
     { day: 3, title: "Louvre Museum", activity: "Culture", description: "See the Mona Lisa.", image: "/images/paris.png" },
     { day: 4, title: "Montmartre", activity: "Walking Tour", description: "Artists' quarter tour.", image: "/images/paris.png" },
     { day: 5, title: "Paris to Nice", activity: "Flight", description: "Fly to Nice on the Riviera.", image: "/images/santorini.png" },
     { day: 6, title: "Departure", activity: "Transfer", description: "Au revoir!" }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
