import { Package } from "../../type/model";

export const italianEscape: Package = {
  id: "italian-escape",
  duration: "8 Nights/9 Days",
  days: 9,
  name: "ITALIAN ESCAPE",
  price: "$2,899",
  image: "/images/amalfi.png",
  images: ["/images/amalfi.png", "/images/venice.png", "/images/santorini.png"],
  route: [{ city: "Rome", days: 3 }, { city: "Florence", days: 3 }, { city: "Venice", days: 3 }],
  highlights: ["Colosseum", "Uffizi Gallery", "Grand Canal"],
  itinerary: [
    { day: 1, title: "Arrival in Rome", activity: "Transfer", description: "Benvenuto a Roma!", image: "/images/amalfi.png" },
    { day: 2, title: "Ancient Rome", activity: "Sightseeing", description: "Colosseum and Roman Forum.", image: "/images/amalfi.png" },
    { day: 3, title: "Vatican City", activity: "Culture", description: "St. Peter's Basilica.", image: "/images/amalfi.png" },
    { day: 4, title: "Rome to Florence", activity: "Train", description: "High-speed train to Florence.", image: "/images/amalfi.png" },
    { day: 5, title: "Florence Art", activity: "Museum", description: "Uffizi Gallery tour.", image: "/images/amalfi.png" },
    { day: 6, title: "Tuscan Countryside", activity: "Excursion", description: "Wine tasting in Chianti.", image: "/images/amalfi.png" },
    { day: 7, title: "Florence to Venice", activity: "Train", description: "Train to Venice.", image: "/images/venice.png" },
    { day: 8, title: "Venice Highlights", activity: "Walking Tour", description: "St. Mark's Square and Rialto Bridge.", image: "/images/venice.png" },
    { day: 9, title: "Departure", activity: "Transfer", description: "Arrivederci!" }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
