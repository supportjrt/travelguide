import { Package } from "../../type/model";

export const jewelsOfEastEurope: Package = {
  id: "jewels-of-east-europe",
  duration: "7 Nights/8 Days",
  days: 8,
  name: "JEWELS OF EAST EUROPE",
  price: "$1,849",
  image: "/images/JewelsofEastEurope/hero-image-SchönbrunnPalace.jpg",
  images: ["/images/JewelsofEastEurope/day2-ViennaOperaHouse.jpg", "/images/JewelsofEastEurope/day3-BratislavaCastle.jpg", "/images/JewelsofEastEurope/day7-CableCar.jpg"],
  highlights: ["Daily Continental buffet breakfast", "Zero out-of-pocket expense", "Jain, Veg, and Non-veg cuisine", "Comfortable AC Coach", "Professional English Speaking Guide", "Guaranteed Departure"],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Vienna",
      activity: "Arrival",
      description: "Welcome to Vienna, the capital of Austria, is a city renowned for its rich history, cultural heritage, and vibrant arts scene. Upon arrival at Vienna Airport, meet your private professional Tour Manager and later proceed to your hotel and check in. In the evening, enjoy a delightful dinner before returning to the hotel for an overnight stay. Overnight stay at the hotel in Vienna. (Dinner)",
      image: ""
    },
    {
      day: 2,
      title: "Vienna to Budapest",
      activity: "Vienna Sightseeing & Travel to Budapest",
      description: "After breakfast, check out and proceed to a guided city tour, admire landmarks such as the Ringstrasse, the Vienna Opera House, and St. Stephen's Cathedral. Visit the magnificent Schönbrunn Palace, once the summer residence of the Habsburgs. Relish an Indian lunch and enjoy free time. Later proceed back to Budapest. After dinner at an Indian restaurant, check into your hotel for an overnight stay. Overnight stay at the hotel in Budapest. (Breakfast, Lunch, Dinner)",
      image: "/images/JewelsofEastEurope/day2-ViennaOperaHouse.jpg"
    },
    {
      day: 3,
      title: "Discovering Budapest",
      activity: "Budapest City Tour",
      description: "Begin your day with breakfast and a guided city tour of Budapest, exploring landmarks like Buda Castle, the Hungarian Parliament, and Heroes' Square. After lunch at an Indian restaurant, experience a scenic Danube River cruise, offering stunning views of the city's illuminated skyline. Later proceed to Szentendre, a charming riverside town in Hungary, renowned for its picturesque streets, vibrant art scene, Mediterranean atmosphere. Enjoy dinner at an Indian restaurant before returning to your hotel. Overnight stay at the hotel in Budapest. (Breakfast, Lunch, Dinner)",
      image: ""
    },
    {
      day: 4,
      title: "Budapest – Bratislava – Prague",
      activity: "Bratislava Tour & Travel to Prague",
      description: "After breakfast, check out and travel to Bratislava, the quaint capital of Slovakia. Enjoy an orientation tour of the city's landmarks, including Bratislava Castle and the Old Town's medieval streets. After a lunch at an Indian restaurant, continue your journey to Prague, the enchanting capital of the Czech Republic. Upon arrival, savour a flavourful Indian dinner and unwind at your hotel. Overnight stay at the hotel in Prague. (Breakfast, Lunch, Dinner)",
      image: "/images/JewelsofEastEurope/day3-BratislavaCastle.jpg"
    },
    {
      day: 5,
      title: "Discover Prague",
      activity: "Prague City Tour",
      description: "Start your day with breakfast and a guided city tour of Prague. Discover the majestic Prague Castle, Charles Bridge, and the Old Town Square with its famous Astronomical Clock. Visit the castle viewing gallery for panoramic city views. After an Indian lunch drive to Kutná Hora - a historical town in the Czech Republic. Offering a fascinating glimpse into the medieval and Baroque eras. Later proceed back to Prague. Conclude the day with dinner at an Indian restaurant and an overnight stay in Prague. Overnight stay at the hotel in Prague. (Breakfast, Lunch, Dinner)",
      image: "/images/JewelsofEastEurope/day4-AstronomicalClock.jpg"
    },
    {
      day: 6,
      title: "Prague – Salzburg",
      activity: "Travel to Salzburg",
      description: "Begin your day with breakfast before heading to Salzburg, the city of Mozart. After a delicious lunch at an Indian restaurant, proceed to meet your professional English speaking guide who will provide a captivating exploration of this picturesque city known for its rich history and baroque architecture. Immerse in the birthplace of Mozart, discovering iconic landmarks like the Hohensalzburg fortress and Mirabell Palace. The tour weaves through charming streets, offering insights into Salzburg's cultural heritage, making it an engaging and informative experience for those seeking to uncover the city's enchanting secrets. Later savor a flavorful Indian dinner and unwind at your hotel. Overnight stay at the hotel in Flachau area. (Breakfast, Lunch, Dinner)",
      image: ""
    },
    {
      day: 7,
      title: "Salzburg – Hallstatt – Schladming – Munich",
      activity: "Hallstatt, Dachstein Glacier & Munich",
      description: "After breakfast, depart and drive to the picturesque village of Hallstatt, renowned for its scenic beauty and alpine charm. Stroll through its quaint streets or relax by the serene lake. Later proceed to Schladming, a charming alpine town. Experience the breathtaking Dachstein Glacier via a thrilling cable car ride. Enjoy lunch with stunning mountain views, and explore attractions like the Ice Palace, and the Suspension Bridge. Later drive to Munich, the vibrant capital of Bavaria! Upon arrival enjoy your day with dinner at an Indian restaurant before checking into your hotel in Munich. Overnight stay at the hotel in Munich. (Breakfast, Lunch, Dinner)",
      image: "/images/JewelsofEastEurope/day7-CableCar.jpg"
    },
    {
      day: 8,
      title: "Fly back home",
      activity: "Departure",
      description: "Your memorable holiday ends, and it's time to fly back home. Say goodbye to the wonderful new friends you have made on the tour. Check out and depart for the Airport with pleasant memories of your European trip which you will cherish for a lifetime. (Breakfast)",
      image: ""
    }
  ],
  sightseeing: [
    {
      country: "Austria",
      city: "Vienna",
      activities: [
        "Guided City tour of Vienna",
        "Visit to Schoenbrunn Palace"
      ]
    },
    {
      country: "Austria",
      city: "Salzburg",
      activities: [
        "Guided City tour of Salzburg"
      ]
    },
    {
      country: "Austria",
      city: "Hallstatt",
      activities: [
        "Cable Car to Daschstein Glacier",
        "Ice Palace, Suspension bridge etc"
      ]
    },
    {
      country: "Hungary",
      city: "Budapest",
      activities: [
        "Guided City tour of Budapest",
        "Cruise on River Danube"
      ]
    },
    {
      country: "Hungary",
      city: "Szentendre",
      activities: [
        "Orientation tour of Szentendre"
      ]
    },
    {
      country: "Slovakia",
      city: "Bratislava",
      activities: [
        "Orientation Tour of Bratislava"
      ]
    },
    {
      country: "Czech Republic",
      city: "Prague",
      activities: [
        "Guided City tour of Prague",
        "Visit to Prague Castle viewing Gallery",
        "Visit Kutna Hora"
      ]
    }
  ],
  accommodation: [
    {
      title: "Vienna",
      hotel: "Event Hotel Pyramid / Arion or similar"
    },
    {
      title: "Budapest",
      hotel: "Hotel Danubius Arena / Hungaria or similar"
    },
    {
      title: "Prague",
      hotel: "Hotel Duo / Panaroma Hotel or similar"
    },
    {
      title: "Flachau",
      hotel: "Hotel Flachauerhof 4 star or similar"
    },
    {
      title: "Munich",
      hotel: "Hotel Mercure / Dormero or similar"
    }
  ],
  route: [
    { city: "Vienna", days: 1 },
    { city: "Budapest", days: 2 },
    { city: "Prague", days: 2 },
    { city: "Flachau", days: 1 },
    { city: "Munich", days: 1 }
  ],
  meals: {
    inclusions: [
      "Daily Continental Buffet Breakfast",
      "06 Indian Jain/Vegetarian/Non-Vegetarian Lunches",
      "07 Indian Jain/Vegetarian/Non-Vegetarian Dinners",
      "Daily Mineral Water Bottle (500ml)"
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
    "Visit 5 countries in 08 days: Austria, Hungary, Slovakia, Czech Republic and Germany",
    "All Important attractions and sightseeing included with some new additions. Visit Schoenbrunn Palace, Cruise on Danube River, Orientation tour of Szentendre, Orientation tour of Bratislava, Visit to Prague Castle viewing Gallery, Visit Kutna Hora and Daschstein Glacier.",
    "Guided tour in Vienna, Budapest, Prague & Salzburg.",
    "Services of a Professional & Knowledgeable Tour Manager accompanying you throughout the Tour.",
    "Accommodation in superior 4-star hotels",
    "Daily Continental buffet breakfast.",
    "Delicious unlimited meals with variety of Jain, Veg and Nonveg cuisine (Indian / Local) included as per itinerary.",
    "Daily mineral water bottle (500ml) per person",
    "Driver tips included"
  ],
  additionalDelights: []
};
