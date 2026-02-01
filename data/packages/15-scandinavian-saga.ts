import { Package } from "../../type/model";

export const scandinavianSaga: Package = {
  id: "scandinavian-saga",
  duration: "11 Nights/12 Days",
  days: 12,
  name: "SCANDINAVIAN SAGA",
  price: "$3,499",
  image: "/images/venice.png",
  images: ["/images/venice.png", "/images/paris.png", "/images/santorini.png"],
  route: [{ city: "Copenhagen", days: 3 }, { city: "Oslo", days: 2 }, { city: "Stockholm", days: 3 }, { city: "Helsinki", days: 2 }],
  highlights: ["Fjords", "Viking Ships", "Northern Lights (Winter)"],
  itinerary: [
    { day: 1, title: "Arrival in Copenhagen", activity: "Transfer", description: "Welcome to Denmark.", image: "/images/venice.png" },
    { day: 2, title: "Copenhagen Classics", activity: "Sightseeing", description: "Little Mermaid and Tivoli Gardens.", image: "/images/venice.png" },
    { day: 3, title: "Overnight Cruise", activity: "Cruise", description: "DFDS Seaways to Oslo.", image: "/images/venice.png" },
    { day: 4, title: "Oslo Discovery", activity: "Sightseeing", description: "Viking Ship Museum.", image: "/images/venice.png" },
    { day: 5, title: "Scenic Train", activity: "Train", description: "Train to Stockholm.", image: "/images/venice.png" },
    { day: 6, title: "Stockholm Archipelago", activity: "Boat Tour", description: "Island hopping.", image: "/images/venice.png" },
    { day: 7, title: "Vasa Museum", activity: "Culture", description: "See the preserved warship.", image: "/images/venice.png" },
    { day: 8, title: "Silja Line Cruise", activity: "Cruise", description: "Overnight cruise to Helsinki.", image: "/images/venice.png" },
    { day: 9, title: "Hello Helsinki", activity: "Sightseeing", description: "Rock Church and Senate Square.", image: "/images/venice.png" },
    { day: 10, title: "Suomenlinna Fortress", activity: "Excursion", description: "Ferry to the fortress island.", image: "/images/venice.png" },
    { day: 11, title: "Leisure Day", activity: "Leisure", description: "Explore at your own pace.", image: "/images/venice.png" },
    { day: 12, title: "Departure", activity: "Transfer", description: "Return home." }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
