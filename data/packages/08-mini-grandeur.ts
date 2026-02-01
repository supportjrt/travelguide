import { Package } from "../../type/model";

export const miniGrandeur: Package = {
  id: "mini-grandeur",
  duration: "9 Nights/10 Days",
  days: 10,
  name: "MINI GRANDEUR",
  price: "$3,099",
  image: "/images/venice.png",
  images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
  route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Milan", days: 3 }],
  highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
  itinerary: [
    { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png" },
    { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png" },
    { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png" },
    { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png" },
    { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png" },
    { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png" },
    { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png" },
    { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport." }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
