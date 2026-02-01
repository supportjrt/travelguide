import { Package } from "../../type/model";

export const spanishFiesta: Package = {
  id: "spanish-fiesta",
  duration: "9 Nights/10 Days",
  days: 10,
  name: "SPANISH FIESTA",
  price: "$2,699",
  image: "/images/santorini.png",
  images: ["/images/santorini.png", "/images/venice.png", "/images/paris.png"],
  route: [{ city: "Madrid", days: 3 }, { city: "Seville", days: 2 }, { city: "Barcelona", days: 4 }],
  highlights: ["Sagrada Familia", "Alhambra", "Flamenco Show"],
  itinerary: [
     { day: 1, title: "Hola Madrid", activity: "Transfer", description: "Arrival in Madrid.", image: "/images/santorini.png" },
     { day: 2, title: "Royal Madrid", activity: "Sightseeing", description: "Royal Palace and Prado Museum.", image: "/images/santorini.png" },
     { day: 3, title: "Toledo Day Trip", activity: "Excursion", description: "Ancient city of Toledo.", image: "/images/santorini.png" },
     { day: 4, title: "Madrid to Seville", activity: "Train", description: "High-speed train to Seville.", image: "/images/santorini.png" },
     { day: 5, title: "Seville Culture", activity: "Show", description: "Flamenco show and tapas.", image: "/images/santorini.png" },
     { day: 6, title: "Seville to Barcelona", activity: "Train", description: "Train to Barcelona.", image: "/images/santorini.png" },
     { day: 7, title: "Gaudi's Barcelona", activity: "Sightseeing", description: "Sagrada Familia and Park Guell.", image: "/images/santorini.png" },
     { day: 8, title: "Gothic Quarter", activity: "Walking Tour", description: "Explore historic Barcelona.", image: "/images/santorini.png" },
     { day: 9, title: "Beach Day", activity: "Leisure", description: "Relax at Barceloneta Beach.", image: "/images/santorini.png" },
     { day: 10, title: "Departure", activity: "Transfer", description: "Adios Espana!" }
  ],
  sightseeing: [],
  accommodation: [],
  meals: { inclusions: [] },
  exclusions: [],
  detailedHighlights: [],
  additionalDelights: []
};
