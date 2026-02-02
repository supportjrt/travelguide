import { Package } from "../../type/model";

export const europeanHighlights: Package = {
  id: "european-highlights",
  duration: "9 Nights/10 Days",
  days: 10,
  name: "EUROPEAN HIGHLIGHTS",
  price: "$2,099",
  image: "/images/EuropeanHighlights/day2-PalaceofVersailles.jpg",
  images: ["/images/EuropeanHighlights/day2-EiffelTower.jpg", "/images/EuropeanHighlights/day6-AletschGlacier.jpg", "/images/EuropeanHighlights/day8-Mark_sSquare.jpg"],
  highlights: ["Daily Continental buffet breakfast", "Zero out-of-pocket expense", "Jain, Veg, and Non-veg cuisine", "Comfortable AC Coach", "Professional English Speaking Guide", "Guaranteed Departure"],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Paris - City of Romance, Lights and Glamour",
      activity: "Arrival in Paris",
      description: "Welcome to Paris, the capital of France. On arrival at CDG Airport / Paris Station, you will be met by our Tour Manager outside the customs area who will welcome you and take you to your hotel. (Check-in time is after 3.00 pm). Overnight in Paris.",
      image: "/images/EuropeanHighlights/day1-paris.jpg"
    },
    {
      day: 2,
      title: "Etiffel Tower 2nd Level - Guided Tour of Versailles Palace - River Seine Cruise",
      activity: "Paris Sightseeing",
      description: "![Palace of Versailles](/images/EuropeanHighlights/day2-PalaceofVersailles.jpg)\n\nToday, we visit the Eiffel Tower, the symbol of Paris, where a bird’s eye view from the 2nd level will leave you breathless. The excitement continues as we proceed for a guided tour of the Palace of Versailles, one of the most prestigious monuments of the world's artistic heritage. Later, enjoy a romantic cruise on River Seine. Overnight in Paris.",
      image: "/images/EuropeanHighlights/day2-EiffelTower.jpg"
    },
    {
      day: 3,
      title: "Onto Brussels - Visit Grand Place and Manneken Pis - Proceed to Netherlands",
      activity: "Brussels City Tour",
      description: "Today, we check out and drive to Brussels, the capital of Belgium. On arrival, we visit the Grand Place, one of the most beautiful squares in the world and the Manneken Pis statue. Later, we drive to the Netherlands. Overnight in Netherlands.",
      image: ""
    },
    {
      day: 4,
      title: "Visit Keukenhof Gardens (till 10th May) OR Madurodam (from 11th May) - Amsterdam Canal Cruise",
      activity: "Dutch Sightseeing",
      description: "Today, visit Keukenhof Gardens (till 10th May), the world's largest flower garden. From 11th May, visit Madurodam, a miniature park. Later, enjoy a canal cruise on the scenic canals of Amsterdam. Overnight in Netherlands.",
      image: "/images/EuropeanHighlights/day4-Amsterdam.jpg"
    },
    {
      day: 5,
      title: "Heidelberg - Black Forest - Rhine Falls - Switzerland",
      activity: "Germany & Rhine Falls",
      description: "![Rhine Falls](/images/EuropeanHighlights/day5-RhineFalls.jpg)\n\nToday, we check out and drive to Heidelberg, a romantic city in Germany. We walk down the Alstadt and see the Church of the Holy Spirit. Later, we drive to the heart of the Black Forest, known for its dense, evergreen forests and picturesque villages. Next, we drive to Switzerland and visit the Rhine Falls, the largest waterfall in Europe. Overnight in Central Switzerland.",
      image: "/images/EuropeanHighlights/day5-HeidelbergAlstadt.jpg"
    },
    {
      day: 6,
      title: "Mt. Titlis - Lucerne",
      activity: "Mt. Titlis & Lucerne",
      description: "Today, we proceed to Mt. Titlis. Take the world's first revolving cable car, the Rotair, to the summit. Visit the Ice Flyer and the Cliff Walk. Later, we proceed for an orientation tour of Lucerne. See the Lion Monument and the Chapel Bridge. Overnight in Central Switzerland.",
      image: "/images/EuropeanHighlights/day6-AletschGlacier.jpg"
    },
    {
      day: 7,
      title: "Vaduz - Swarovski Crystal Worlds - Innsbruck",
      activity: "Austria & Liechtenstein",
      description: "Today, we check out and drive to Vaduz, the capital of Liechtenstein. Later, we drive to Wattens to visit the Swarovski Crystal Worlds. Next, we proceed to Innsbruck, the capital of Tyrol. Enjoy an orientation tour of Innsbruck. See the Golden Roof and Maria Theresien Strasse. Overnight in Innsbruck / Seefeld.",
      image: "/images/EuropeanHighlights/day7-CableCar.jpg"
    },
    {
      day: 8,
      title: "Venice - St. Mark's Island - Gondola Ride",
      activity: "Venice Sightseeing",
      description: "Today, we check out and drive to Venice, Italy. We take a private boat to St. Mark's Island. Visit St. Mark's Square and see the Basilica, Duke's Palace and Bridge of Sighs. Enjoy a gondola ride. Overnight in Padova / Ferrara.",
      image: "/images/EuropeanHighlights/day8-Mark_sSquare.jpg"
    },
    {
      day: 9,
      title: "Rome - Vatican City - Trevi Fountain",
      activity: "Rome City Tour",
      description: "Today, we check out and drive to Rome. Visit the Vatican City, the world's smallest country. Visit St. Peter's Basilica. Later, see the Trevi Fountain. Overnight in Rome.",
      image: "/images/EuropeanHighlights/day9-TreviFountain.jpg"
    },
    {
      day: 10,
      title: "Departure",
      activity: "Fly back home",
      description: "Today, we check out and proceed to the airport for your flight back home. Arrive home with pleasant memories of your European tour.",
      image: ""
    }
  ],
  sightseeing: [
    {
      country: "France",
      city: "Paris",
      activities: [
        "Orientation tour of Paris",
        "Visit to the 2nd level of the Eiffel Tower",
        "Enjoy romantic cruise on River Seine",
        "Guided tour of Versailles Palace"
      ]
    },
    {
      country: "Belgium",
      city: "Brussels",
      activities: [
        "Orientation tour of Brussels with a visit to Grand Place",
        "See the Mannekin Pis Statue"
      ]
    },
    {
      country: "Netherlands",
      city: "Amsterdam",
      activities: [
        "Amsterdam Canal Cruise",
        "Entrance to Keukenhof Gardens (till 10th May)",
        "Entrance to Madurodam (from 11th May)"
      ]
    },
    {
      country: "Germany",
      city: "Heidelberg",
      activities: [
        "Walk down the Heidelberg Alstadt",
        "See the Church of the Holy Spirit"
      ]
    },
    {
      country: "Germany",
      city: "Titisee",
      activities: [
        "Drive to the heart of the Black Forest",
        "Witness a demonstration of Cuckoo Clocks"
      ]
    },
    {
      country: "Switzerland",
      city: "Schaffhausen",
      activities: [
        "See the magnificent Rhine falls"
      ]
    },
    {
      country: "Switzerland",
      city: "Engelberg",
      activities: [
        "Witness breath-taking mountain peaks and glaciers at Mt. Titlis",
        "Ride in the world’s first revolving cable car",
        "Walk on the Highest suspension bridge in Europe - Titlis Cliff Walk"
      ]
    },
    {
      country: "Switzerland",
      city: "Lucerne",
      activities: [
        "Orientation tour of Lucerne"
      ]
    },
    {
      country: "Austria",
      city: "Innsbruck",
      activities: [
        "Visit to Swarovski Crystal Shop",
        "Orientation tour of Innsbruck"
      ]
    },
    {
      country: "Italy",
      city: "Venice",
      activities: [
        "St. Mark’s square by Private boat",
        "Orientation tour of St. Mark’s Square"
      ]
    },
    {
      country: "Italy",
      city: "Rome",
      activities: [
        "Orientation tour of Rome",
        "Photostop at the Colosseum",
        "Visit to Trevi Fountain"
      ]
    },
    {
      country: "Vatican City",
      city: "Vatican City",
      activities: [
        "Visit the magnificent St. Peter’s Basilica only"
      ]
    }
  ],
  accommodation: [
    {
      title: "Paris",
      hotel: "B&B / Ace or similar"
    },
    {
      title: "Netherlands",
      hotel: "Amrath / Holiday Inn Express or similar"
    },
    {
      title: "Germany",
      hotel: "Elaya / Intercity or similar"
    },
    {
      title: "Central Switzerland",
      hotel: "Dormero / Du Parc or similar"
    },
    {
      title: "Innsbruck / Seefeld",
      hotel: "Hotel Olympia or similar"
    },
    {
      title: "Padova / Ferrara",
      hotel: "Blue Dream / B&B or similar"
    },
    {
      title: "Rome",
      hotel: "B&B / Pineta or similar"
    }
  ],
  route: [
    { city: "Paris", days: 2 },
    { city: "Netherlands", days: 1 },
    { city: "Germany", days: 1 },
    { city: "Central Switzerland", days: 2 },
    { city: "Innsbruck", days: 1 },
    { city: "Venice", days: 1 },
    { city: "Rome", days: 1 }
  ],
  meals: {
    inclusions: [
      "Daily Continental Buffet Breakfast",
      "8 Indian Jain/Vegetarian/Non-Vegetarian Lunches",
      "9 Indian Jain/Vegetarian/Non-Vegetarian Dinners"
    ]
  },
  exclusions: [
    { description: "The cost of the Airfare, Visa charges, Overseas Travel Insurance, etc." },
    { description: "Any expenses of personal nature such as Porterage, Laundry, and Alcohol, Food or Drink not in the regular menus provided by us, mini bar and telephone calls" },
    { description: "Any extra meals not included in the itinerary. Meals are pre - set and a choice of menu is not available" },
    { description: "Cost of excursions, city sightseeing, entrance fees and local guides availed of by the passengers, other than that mentioned in ‘What your tour price includes’" },
    { description: "Anything which is not specified in the Itinerary" }
  ],
  detailedHighlights: [
    "Value-for-Money holiday which you will cherish for a lifetime",
    "Visit 8 countries in 10 days: France, Belgium, Netherlands, Germany, Switzerland, Austria, Italy and Vatican City",
    "All Important attractions and sightseeing included. Eiffel Tower 2nd level, Guided tour of Versailles Palace, River Seine Cruise, Keukenhof Gardens (till 10th May), Madurodam (from 11th May) Amsterdam Canal Cruise, Visit the Black Forest, See the magnificent Rhine Falls, Excursion to Mt. Titlis, Visit St. Mark’s Island in Venice, Visit St. Peter’s Basilica, Vatican City only and Trevi Fountain",
    "Orientation tour in Paris, Brussels, Volendam, Heidelberg, Lucerne, Innsbruck, Venice, Rome and Vatican City",
    "Services of a Professional & Knowledgeable Tour Manager accompanying you throughout the tour",
    "Accommodation in 3 & 4-star hotels",
    "Daily Continental buffet breakfast.",
    "Delicious unlimited variety of Jain, Veg and Nonveg Indian cuisine as per itinerary."
  ],
  additionalDelights: []
};
