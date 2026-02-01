import { Package } from "../../type/model";

export const germanExplorer: Package = {
  id: "german-explorer",
  duration: "7 Nights/8 Days",
  days: 8,
  name: "GERMAN EXPLORER",
  price: "$2,399",
  image: "/images/venice.png",
  images: ["/images/venice.png", "/images/paris.png", "/images/santorini.png"],
  route: [{ city: "Berlin", days: 3 }, { city: "Munich", days: 3 }, { city: "Black Forest", days: 2 }],
  highlights: ["Berlin Wall", "Neuschwanstein Castle", "Oktoberfest (Seasonal)"],
  itinerary: [
    { day: 1, title: "Willkommen in Berlin", activity: "Transfer", description: "Arrival in Berlin.", image: "/images/venice.png" },
    { day: 2, title: "Berlin History", activity: "Sightseeing", description: "Berlin Wall and Brandenburg Gate.", image: "/images/venice.png" },
    { day: 3, title: "Museum Island", activity: "Culture", description: "Pergamon Museum.", image: "/images/venice.png" },
    { day: 4, title: "Berlin to Munich", activity: "Train", description: "ICE train to Munich.", image: "/images/venice.png" },
    { day: 5, title: "Bavarian Castles", activity: "Excursion", description: "Neuschwanstein Castle.", image: "/images/venice.png" },
    { day: 6, title: "Munich City", activity: "Beer Hall", description: "Hofbrauhaus visit.", image: "/images/venice.png" },
    { day: 7, title: "Black Forest", activity: "Nature", description: " scenic drive and cuckoo clocks.", image: "/images/venice.png" },
    { day: 8, title: "Departure", activity: "Transfer", description: "Auf Wiedersehen!" }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
