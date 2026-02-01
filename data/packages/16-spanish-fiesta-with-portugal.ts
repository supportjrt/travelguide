import { Package } from "../../type/model";

export const spanishFiestaWithPortugal: Package = {
  id: "spanish-fiesta-with-portugal",
  duration: "10 Nights/11 Days",
  days: 11,
  name: "SPANISH FIESTA WITH PORTUGAL",
  price: "$2,549",
  image: "/images/santorini.png",
  images: ["/images/santorini.png", "/images/amalfi.png", "/images/venice.png"],
  route: [{ city: "Athens", days: 3 }, { city: "Mykonos", days: 3 }, { city: "Santorini", days: 3 }],
  highlights: ["Acropolis", "Sunset in Oia", "Beach Parties"],
  itinerary: [
    { day: 1, title: "Athens Arrival", activity: "Transfer", description: "Kalimera Athens!", image: "/images/santorini.png" },
    { day: 2, title: "Ancient Athens", activity: "Sightseeing", description: "Acropolis and Parthenon.", image: "/images/santorini.png" },
    { day: 3, title: "Ferry to Mykonos", activity: "Ferry", description: "High-speed ferry to Mykonos.", image: "/images/santorini.png" },
    { day: 4, title: "Mykonos Beaches", activity: "Leisure", description: "Paradise Beach and Windmills.", image: "/images/santorini.png" },
    { day: 5, title: "Delos Day Trip", activity: "Excursion", description: "Boat trip to ancient Delos.", image: "/images/santorini.png" },
    { day: 6, title: "Ferry to Santorini", activity: "Ferry", description: "Sail to Santorini.", image: "/images/santorini.png" },
    { day: 7, title: "Santorini Views", activity: "Sightseeing", description: "Fira and Oia sunset.", image: "/images/santorini.png" },
    { day: 8, title: "Volcano Tour", activity: "Adventure", description: "Hot springs and caldera boat tour.", image: "/images/santorini.png" },
    { day: 9, title: "Departure", activity: "Transfer", description: "Fly home from Santorini." }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
