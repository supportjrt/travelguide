import { Package } from "../../type/model";

export const grandEuropeanHighlights: Package = {
  id: "grand-european-highlights",
  duration: "11 Nights/12 Days",
  days: 12,
  name: "GRAND EUROPEAN HIGHLIGHTS",
  price: "$2,849",
  image: "/images/venice.png",
  images: ["/images/venice.png", "/images/paris.png", "/images/santorini.png"],
  route: [{ city: "Zurich", days: 2 }, { city: "Lucerne", days: 2 }, { city: "Interlaken", days: 3 }],
  highlights: ["Rhine Falls", "Mount Pilatus", "Lake Brienz"],
  itinerary: [
    { day: 1, title: "Arrival in Zurich", activity: "Transfer", description: "Welcome to Zurich.", image: "/images/venice.png" },
    { day: 2, title: "Rhine Falls", activity: "Sightseeing", description: "Visit Europe's largest waterfall.", image: "/images/venice.png" },
    { day: 3, title: "Zurich to Lucerne", activity: "Train", description: "Train to Lucerne.", image: "/images/venice.png" },
    { day: 4, title: "Mount Pilatus", activity: "Adventure", description: "Golden round trip to Mt. Pilatus.", image: "/images/venice.png" },
    { day: 5, title: "Lucerne to Interlaken", activity: "Train", description: " scenic train to Interlaken.", image: "/images/venice.png" },
    { day: 6, title: "Lake Brienz Cruise", activity: "Leisure", description: "Relaxing boat cruise.", image: "/images/venice.png" },
    { day: 7, title: "Departure", activity: "Transfer", description: "Transfer to airport." }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
