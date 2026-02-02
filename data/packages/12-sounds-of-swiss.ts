import { Package } from "../../type/model";

export const soundsOfSwiss: Package = {
  id: "sounds-of-swiss",
  duration: "7 Nights/8 Days",
  days: 8,
  name: "SOUNDS OF SWISS",
  price: "$3,149",
  image: "/images/SoundsofSwiss/hero-image.jpg",
  images: ["/images/SoundsofSwiss/day3-Titlis.jpg", "/images/SoundsofSwiss/day2-Lindt.jpg", "/images/SoundsofSwiss/day7-BernClockTower.jpg"],
  highlights: ["Daily Continental buffet breakfast", "Zero out-of-pocket expense", "Jain, Veg, and Non-veg cuisine", "Comfortable AC Coach", "Professional English Speaking Guide", "Guaranteed Departure"],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Zurich - Transfer to Lucerne",
      activity: "Arrival",
      description: "Welcome to Zurich, the financial capital of Switzerland. On arrival at Zurich Airport, you will be met by our Tour Manager outside the customs area who will welcome you and take you to your hotel in Lucerne / Central Switzerland. (Check-in time is after 3.00 pm). Overnight in Central Switzerland.",
      image: ""
    },
    {
      day: 2,
      title: "Lucerne - Rhine Falls with Boat Ride - Lindt Home of Chocolate - Zurich - Lucerne",
      activity: "Zurich & Rhine Falls",
      description: "![Lindt Home of Chocolate](/images/SoundsofSwiss/day2-Lindt.jpg)\n\nToday, we drive to Schaffhausen to see the magnificent Rhine Falls. Enjoy a boat ride at the falls. Later, visit the Lindt Home of Chocolate in Zurich. Witness the world's largest chocolate fountain and enjoy unlimited chocolate tasting. Next, enjoy a funicular ride to the Polyterrasse for a panoramic view of Zurich. Enjoy an orientation tour of Zurich. Overnight in Central Switzerland.",
      image: "/images/SoundsofSwiss/day2-RhineFallsBoatRide.jpg"
    },
    {
      day: 3,
      title: "Lucerne - Mt. Titlis - Lucerne",
      activity: "Mt. Titlis",
      description: "Today, we proceed to Mt. Titlis. Take the world's first revolving cable car, the Rotair, to the summit. Visit the Ice Flyer and the Cliff Walk. Later, we proceed for an orientation tour of Lucerne. See the Lion Monument and the Chapel Bridge. Enjoy a scenic cruise on Lake Lucerne. Overnight in Central Switzerland.",
      image: "/images/SoundsofSwiss/day3-Titlis.jpg"
    },
    {
      day: 4,
      title: "Lucerne - Jungfraujoch - Interlaken",
      activity: "Jungfraujoch & Interlaken",
      description: "Today, we check out and drive to Grindelwald Terminal to take the Eiger Express to Jungfraujoch - Top of Europe. Visit the Ice Palace and Sphinx Observatory. Later, we proceed to Interlaken. Visit the scenic Interlaken city and the Trummelbach Falls. Overnight in Interlaken.",
      image: "/images/SoundsofSwiss/day4-CogwheelTrain.jpg"
    },
    {
      day: 5,
      title: "Interlaken - GoldenPass Line - Montreux - Vevey - Montreux",
      activity: "GoldenPass & Chaplin's World",
      description: "![Chaplin's World](/images/SoundsofSwiss/day5-Chaplin.jpg)\n\nToday, we check out and board the GoldenPass Line from Interlaken to Montreux. Enjoy the scenic journey. Refer to the table below for train timings. On arrival in Montreux, we proceed to Vevey to visit Chaplin's World. A museum dedicated to the life and work of Charlie Chaplin. Later, enjoy an orientation tour of Montreux. Overnight in Montreux.",
      image: "/images/SoundsofSwiss/day5-GoldenPass.jpg"
    },
    {
      day: 6,
      title: "Montreux - Zermatt - Geneva - Lausanne",
      activity: "Zermatt & Geneva",
      description: "![Jet d'Eau](/images/SoundsofSwiss/day6-Jetd_Eau.jpg)\n\nToday, we check out and drive to Tasch to take a shuttle train to Zermatt. Zermatt is a car-free village at the foot of the Matterhorn. Enjoy an orientation tour of Zermatt. Later, we drive to Geneva. Enjoy an orientation tour of Geneva and see the Jet D'eau. Overnight in Lausanne.",
      image: "/images/SoundsofSwiss/day6-Matterhorn.jpg"
    },
    {
      day: 7,
      title: "Lausanne - Gruyere - Bern - Zurich",
      activity: "Bern & Gruyere",
      description: "Today, we check out and visit the Olympic Museum in Lausanne. Next, we drive to Gruyere to visit the Maison du Gruyere cheese factory. Later, we proceed to Bern, the capital of Switzerland. Enjoy an orientation tour of Bern. See the Clock Tower and the Parliament Building. Finally, we drive to Zurich. Overnight in Zurich.",
      image: "/images/SoundsofSwiss/day7-BernClockTower.jpg"
    },
    {
      day: 8,
      title: "Departure",
      activity: "Fly back home",
      description: "Today, we check out and proceed to the airport for your flight back home. Arrive home with pleasant memories of your Swiss tour.",
      image: ""
    }
  ],
  sightseeing: [
    {
      country: "Switzerland",
      city: "Zurich",
      activities: [
        "Visit the magnificent Rhine Falls with Boat Ride",
        "Entrance to Lindt Home of Chocolate",
        "Funicular to Polyterrase",
        "Orientation tour of Zurich"
      ]
    },
    {
      country: "Switzerland",
      city: "Lucerne",
      activities: [
        "Orientation tour of Lucerne",
        "See the Lion Monument and Kappel Brucke",
        "Enjoy a scenic cruise on Lake Lucerne"
      ]
    },
    {
      country: "Switzerland",
      city: "Engelberg",
      activities: [
        "Witness breath-taking mountain peaks and glaciers at Mt. Titlis",
        "Ride in the world's first revolving cable car",
        "Walk on the Highest suspension bridge in Europe - Titlis Cliff Walk"
      ]
    },
    {
      country: "Switzerland",
      city: "Interlaken",
      activities: [
        "Excursion to Jungfraujoch - Top of Europe",
        "Visit scenic Interlaken city",
        "Visit Trummelbach Falls"
      ]
    },
    {
      country: "Switzerland",
      city: "Interlaken to Montreux",
      activities: [
        "GoldenPass Line from Interlaken to Montreux"
      ]
    },
    {
      country: "Switzerland",
      city: "Vevey",
      activities: [
        "Entrance to Chaplin’s World"
      ]
    },
    {
      country: "Switzerland",
      city: "Montreux",
      activities: [
        "Orientation tour of Montreux"
      ]
    },
    {
      country: "Switzerland",
      city: "Zermatt",
      activities: [
        "Visit the car free town of Zermatt",
        "Orientation tour of Zermatt",
        "View the Matterhorn"
      ]
    },
    {
      country: "Switzerland",
      city: "Geneva",
      activities: [
        "Orientation tour of Geneva",
        "See the Jet D’eau"
      ]
    },
    {
      country: "Switzerland",
      city: "Lausanne",
      activities: [
        "Entrance to Olympic Museum"
      ]
    },
    {
      country: "Switzerland",
      city: "Gruyere",
      activities: [
        "Entrance to Maison du Gruyere Cheese Factory"
      ]
    },
    {
      country: "Switzerland",
      city: "Bern",
      activities: [
        "Orientation tour of Bern"
      ]
    }
  ],
  accommodation: [
    {
      title: "Central Switzerland",
      hotel: "La Maison / Radisson or similar"
    },
    {
      title: "Meiringen",
      hotel: "Hotel Meiringen or similar"
    },
    {
      title: "Geneva",
      hotel: "Everness / Movenpick or similar"
    },
    {
      title: "Central Switzerland",
      hotel: "La Maison / Radisson or similar"
    }
  ],
  route: [
    { city: "Central Switzerland", days: 2 },
    { city: "Meiringen", days: 2 },
    { city: "Geneva", days: 2 },
    { city: "Central Switzerland", days: 1 }
  ],
  meals: {
    inclusions: [
      "Daily Continental Buffet Breakfast",
      "06 Indian Jain/Vegetarian/Non-Vegetarian Lunches",
      "07 Indian Jain/Vegetarian/Non-Vegetarian Dinners"
    ]
  },
  exclusions: [
    { description: "The cost of the Airfare, Visa charges, Overseas Travel Insurance, etc." },
    { description: "Any expenses of personal nature such as Porterage, Laundry, and Alcohol, Food or Drink not in the regular menus provided by us, mini bar and telephone calls" },
    { description: "Any extra meals not included in the itinerary. Meals are pre - set and a choice of menu is not available" },
    { description: "Cost of excursions, city sightseeing, entrance fees and local guides availed of by the passengers, other than that mentioned in ‘What your tour price includes’" },
    { description: "Anything which is not specified in the Itinerary" }
  ],
  detailedHighlights: [],
  additionalDelights: []
};
