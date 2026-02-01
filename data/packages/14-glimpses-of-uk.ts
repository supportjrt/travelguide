import { Package } from "../../type/model";

export const glimpsesOfUK: Package = {
  id: "glimpses-of-uk",
  duration: "7 Nights/8 Days",
  days: 8,
  name: "GLIMPSES OF UK",
  price: "$2,149",
  image: "/images/paris.png",
  images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
  route: [{ city: "Amsterdam", days: 3 }, { city: "Brussels", days: 3 }],
  highlights: ["Canal Cruise", "Grand Place", "Chocolates"],
  itinerary: [
    { day: 1, title: "Hello Amsterdam", activity: "Transfer", description: "Arrival in Amsterdam.", image: "/images/paris.png" },
    { day: 2, title: "Canals & Culture", activity: "Sightseeing", description: "Canal cruise and Van Gogh Museum.", image: "/images/paris.png" },
    { day: 3, title: "Dutch Countryside", activity: "Excursion", description: "Windmills of Zaanse Schans.", image: "/images/paris.png" },
    { day: 4, title: "Amsterdam to Brussels", activity: "Train", description: "Thalys train to Brussels.", image: "/images/paris.png" },
    { day: 5, title: "Best of Brussels", activity: "Sightseeing", description: "Grand Place and Atomium.", image: "/images/paris.png" },
    { day: 6, title: "Departure", activity: "Transfer", description: "Transfer to airport." }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
