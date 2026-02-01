import { Package } from "../../type/model";

export const europeanGrandeur: Package = {
  id: "european-grandeur",
  duration: "12 Nights/13 Days",
  days: 13,
  name: "EUROPEAN GRANDEUR",
  price: "$3,899",
  image: "/images/paris.png",
  images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
  route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }],
  highlights: ["Eiffel Tower Visit", "Seine River Cruise", "Zurich Old Town"],
  itinerary: [
    { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris! Private transfer to hotel.", image: "/images/paris.png" },
    { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png" },
    { day: 3, title: "Paris to Zurich", activity: "Train", description: "High-speed TGV train to Zurich.", image: "/images/venice.png" },
    { day: 4, title: "Zurich Highlights", activity: "Tour", description: "Walking tour of Zurich Old Town and Lake Zurich.", image: "/images/venice.png" },
    { day: 5, title: "Departure", activity: "Transfer", description: "Transfer to airport for departure." }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
