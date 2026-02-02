import { Package } from "../../type/model";

export const beautyOfEurope: Package = {
  id: "beauty-of-europe",
  duration: "8 Nights/9 Days",
  days: 9,
  name: "BEAUTY OF EUROPE",
  price: "$2,799",
  image: "/images/amalfi.png",
  images: ["/images/amalfi.png", "/images/venice.png", "/images/santorini.png"],
  highlights: ["Daily Continental buffet breakfast", "Zero out-of-pocket expense", "Jain, Veg, and Non-veg cuisine", "Comfortable AC Coach", "Professional English Speaking Guide", "Guaranteed Departure"],
  itinerary: [
    {
      day: 1,
      title: "Welcome to France",
      activity: "Arrival in Paris",
      description: "Welcome to Paris, the capital of France. On arrival at CDG Airport / Paris Station, you will be met by our Tour Manager outside the customs area who will welcome you and take you to your hotel. (Check-in time is after 3.00 pm). Overnight in Paris.",
      image: ""
    },
    {
      day: 2,
      title: "Guided tour of Paris - Visit Eiffel Tower 3rd Level - Guided tour of Versailles Palace",
      activity: "Paris City Tour & Versailles",
      description: "![Versailles Palace](/images/BeautyofEurope/day2-VersaillesPalace.jpg)\n\nToday, proceed for a guided city tour of Paris. See the Place de la Concorde, the majestic Arc de Triomphe, the fashionable Champs Elysees and the magnificent Opera House. Later, visit the 3rd level of the Eiffel Tower to witness a spectacular panoramic view of the city. After lunch, we proceed for a guided tour of the Palace of Versailles, one of the most prestigious monuments of the world's artistic heritage. Overnight in Paris.",
      image: "/images/BeautyofEurope/day2-EiffelTower.jpg"
    },
    {
      day: 3,
      title: "Full day excitement & thrill at Disneyland ® Paris",
      activity: "Disneyland Paris",
      description: "Today, we proceed to Disneyland® Paris for a fun-filled day. You have a choice to visit Disney Park OR Walt Disney Studios Park. In Disney Park you can meet your favourite Disney characters and watch the amazing parade. In Walt Disney Studios® Park, you can discover the magical world of cinema and television at Walt Disney Studios® Park. Overnight in Paris.",
      image: "/images/BeautyofEurope/day3-DisneyPark.jpg"
    },
    {
      day: 4,
      title: "Onto Brussels - Visit Mini Europe - Orientation tour of Brussels",
      activity: "Brussels City Tour",
      description: "Today, we drive to Brussels, the capital of Belgium. On arrival, visit Mini Europe - the only place where you can have a tour of all Europe in a few hours. Later, we proceed for an orientation tour of Brussels. See the Grand Place, one of the most beautiful squares in the world and the Manneken Pis. Overnight in Netherlands.",
      image: "/images/BeautyofEurope/day4-MiniEurope.jpg"
    },
    {
      day: 5,
      title: "Heineken Experience - Keukenhof Gardens / Volendam",
      activity: "Amsterdam & Countryside",
      description: "![Amsterdam Canal Cruise](/images/BeautyofEurope/day5-Amsterdam.jpg)\n\nToday, proceed to Amsterdam. On arrival, enjoy a canal cruise on the scenic canals of Amsterdam. Later, visit Keukenhof Gardens (till 10th May), the world's largest flower garden. From 11th May, visit Volendam, a traditional Dutch fishing village. Witness the wooden shoes and cheese making process. Overnight in Germany.",
      image: "/images/BeautyofEurope/day5-KeukenhofGardens.jpg"
    },
    {
      day: 6,
      title: "Heidelberg - Black Forest - Cuckoo Clock demonstration - Rhine Falls",
      activity: "Germany & Rhine Falls",
      description: "![Heidelberg Alstadt](/images/BeautyofEurope/day6-HeidelbergAlstadt.jpg)\n\nToday, we check out and drive to Heidelberg, a romantic city in Germany. We walk down the Alstadt and see the Church of the Holy Spirit. Later, we drive to the heart of the Black Forest, known for its dense, evergreen forests and picturesque villages. Here, you will witness a demonstration of how Cuckoo Clocks are made. Next, we drive to Switzerland and visit the Rhine Falls, the largest waterfall in Europe. Enjoy a thrilling boat ride at the falls. Overnight in Central Switzerland.",
      image: "/images/BeautyofEurope/day6-RhineFalls.jpg"
    },
    {
      day: 7,
      title: "Top of Europe - Jungfraujoch - Interlaken",
      activity: "Jungfraujoch Excursion",
      description: "Today, get ready for an excursion to Jungfraujoch - Top of Europe. Board the cogwheel train from Grindelwald / Lauterbrunnen to Jungfraujoch, the highest railway station in Europe. Visit the Ice Palace and the Sphinx Observatory. Later, we visit Interlaken, a scenic city nestled between two lakes. Overnight in Central Switzerland.",
      image: "/images/BeautyofEurope/day7-CogwheelTrain.jpg"
    },
    {
      day: 8,
      title: "Mt. Titlis - Orientation tour of Lucerne - Lindt Home of Chocolate",
      activity: "Mt. Titlis & Lucerne",
      description: "![Lindt Home of Chocolate](/images/BeautyofEurope/day8-Lindt.jpg)\n\nToday, we proceed to Mt. Titlis. Take the world's first revolving cable car, the Rotair, to the summit. Visit the Ice Flyer and the Cliff Walk. Later, we proceed for an orientation tour of Lucerne. See the Lion Monument and the Chapel Bridge. Finally, we visit the Lindt Home of Chocolate in Zurich. Overnight in Central Switzerland.",
      image: "/images/BeautyofEurope/day8-CableCar.jpg"
    },
    {
      day: 9,
      title: "Fly back home",
      activity: "Departure",
      description: "Today, check out and proceed to the airport for your flight back home. Arrive home with pleasant memories of your European tour.",
      image: ""
    }
  ],
  sightseeing: [
    {
      country: "France",
      city: "Paris",
      activities: [
        "City tour with a local guide",
        "Visit to the 3rd level of the Eiffel Tower",
        "Guided tour of Versailles Palace",
        "Enjoy romantic cruise on River Seine",
        "Paris by Night Tour",
        "Full day excitement and thrill at Disneyland® Paris"
      ]
    },
    {
      country: "Belgium",
      city: "Brussels",
      activities: [
        "Entrance to Mini Europe",
        "Orientation tour of Brussels with a visit to Grand Place",
        "See the Mannekin Pis Statue"
      ]
    },
    {
      country: "Netherlands",
      city: "Amsterdam",
      activities: [
        "Entrance to Keukenhof (till 10th May)",
        "Visit traditional Dutch fishing village and windmills (from 11th May)",
        "Amsterdam Canal Cruise"
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
        "See the magnificent Rhine falls with a thrilling boat ride"
      ]
    },
    {
      country: "Switzerland",
      city: "Interlaken",
      activities: [
        "Excursion to Jungfraujoch - Top of Europe",
        "Visit scenic Interlaken city"
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
      country: "Switzerland",
      city: "Zurich",
      activities: [
        "Entrance to Lindt Home of Chocolate"
      ]
    }
  ],
  accommodation: [
    {
      title: "Paris",
      hotel: "B&B / Millennium CDG or similar"
    },
    {
      title: "Netherlands",
      hotel: "Amrath / Van der Valk or similar"
    },
    {
      title: "Germany",
      hotel: "Intercity / Elaya or similar"
    },
    {
      title: "Central Switzerland",
      hotel: "La Maison / Radisson or similar"
    }
  ],
  route: [
    { city: "Paris", days: 3 },
    { city: "Netherlands", days: 1 },
    { city: "Germany", days: 1 },
    { city: "Central Switzerland", days: 3 }
  ],
  meals: {
    inclusions: [
      "Daily Continental Buffet Breakfast",
      "07 Indian Jain/Vegetarian/Non-Vegetarian Lunches",
      "08 Indian Jain/Vegetarian/Non-Vegetarian Dinners",
      "Daily Mineral Water Bottle (500ml) per person"
    ],
    note: "Packed lunch will be served on the day you visit Disneyland Paris",
    driverTips: "Tips to coach drivers for the duration of the tour is included"
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
    "Visit 5 countries in 09 days: France, Belgium, The Netherlands, Germany, Switzerland",
    "All Important attractions and sightseeing included : Eiffel Tower 3rd level, Guided tour of Versailles Palace, Full day at Disneyland® Paris, River Seine Cruise, Paris by Night tour, Mini Europe, Keukenhof Gardens (till 10th May), Visit traditional village showcasing windmills and wooden houses (from 11th May), Heidelberg Alstadt, Excursion to Jungfrau included, Entrance to Mt. Titlis, Lindt Home of Chocolate.",
    "Guided tour in Paris",
    "Services of a Professional & Knowledgeable Tour Manager accompanying you throughout the tour",
    "Accommodation in superior 4-star hotels",
    "Daily Continental buffet breakfast.",
    "Delicious unlimited meals with variety of Jain, Veg and Nonveg cuisine (Indian / Local) included as per itinerary.",
    "Daily mineral water bottle (500ml) per person",
    "Driver tips included"
  ],
  additionalDelights: [
    "A glass of Champagne in France",
    "Souvenir in Holland",
    "A Waffle in Brussels",
    "Black Forest Cake in Germany",
    "Swiss Chocolate Icecream in Swiss",
    "Masala tea and Dinners in the hotel in select cities"
  ],
};
