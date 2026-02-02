import { Package } from "../../type/model";

export const glimpsesOfUK: Package = {
  id: "glimpses-of-uk",
  duration: "7 Nights/8 Days",
  days: 8,
  name: "GLIMPSES OF UK",
  price: "$2,149",
  image: "/images/GlimpsesoftheUnitedKingdom/hero-image.jpg",
  images: ["/images/GlimpsesoftheUnitedKingdom/day2-TowerBridge.jpg", "/images/GlimpsesoftheUnitedKingdom/day3-WaxMuseum.jpg", "/images/GlimpsesoftheUnitedKingdom/day6-Manchester.jpg"],
  highlights: ["Daily Continental buffet breakfast", "Zero out-of-pocket expense", "Jain, Veg, and Non-veg cuisine", "Comfortable AC Coach", "Professional English Speaking Guide", "Guaranteed Departure"],
  itinerary: [
    {
      day: 1,
      title: "Arrive into London, the capital of England and the United Kingdom",
      activity: "Arrival",
      description: "Welcome to London, a city that boasts a seamless blend of timeless elegance and modern vibrance. Upon arrival at London - Heathrow Airport, meet your private professional Tour Manager and later proceed to your hotel and check in. Take some time to relax and enjoy the comforts of your accommodation. Overnight stay at the hotel in London. (Dinner)",
      image: ""
    },
    {
      day: 2,
      title: "Guided city tour of London with Changing of Guards. Visit to the famous Madame Tussauds Wax Museum. Visit the legendary Lord's Cricket Ground. Ride the London Eye.",
      activity: "London Sightseeing",
      description: "![Lord's Cricket Ground](/images/GlimpsesoftheUnitedKingdom/day2-LordsCricketStadium.jpg)\n\nPost breakfast, we proceed to explore the city of London with our expert local guide. You will see important landmarks like the Big Ben, Houses of Parliament, Westminster Abbey, Trafalgar Square, Piccadilly Circus, Tower Bridge, River Thames, Hyde Park and many more. Witness the Changing of the Guards at Buckingham Palace (subject to operation). Next, we proceed to visit the renowned Madame Tussauds wax museum. Be enthralled by the world’s largest wax collection of famous personalities. Later we proceed to visit the Lord's Cricket Ground, also known as the Home of Cricket. See the Long Room, Player's Dressing Rooms, and the MCC Museum - home of the Ashes Urn. Post lunch we proceed to ride the London Eye, one of the many iconic highlights of the city. Enjoy scenic views of the city while you ride the London eye. It is one of the most popular tourist attractions in the United Kingdom, standing at 135 meters tall overlooking the river Thames and the beautiful city of London. Overnight stay at the hotel in London. (Breakfast, Lunch, Dinner)",
      image: "/images/GlimpsesoftheUnitedKingdom/day2-TowerBridge.jpg"
    },
    {
      day: 3,
      title: "Visit Windsor Castle. Drive to Heathrow upon Avon. Drive to Scotland.",
      activity: "Windsor Castle & Travel to Scotland",
      description: "Post breakfast check out of your hotel as we proceed to visit the magnificent Windsor Castle, the oldest and largest inhabited castle in the world and the Queen's favourite weekend home. (During apex dates when Windsor Castle is closed, enjoy an alternative visit to the Stonehenge, a UNESCO World Heritage Site and one of the world's most mysterious prehistoric landmarks). Later we continue our journey to Heathrow upon Avon, the birthplace of William Shakespeare, one of the greatest playwrights in the English language. After lunch continue the road car drive to Scotland checking in to your hotel near Lake Loch Lomond area. Overnight stay at the hotel in Manchester / Lancaster. (Breakfast, Lunch, Dinner)",
      image: "/images/GlimpsesoftheUnitedKingdom/day3-WaxMuseum.jpg"
    },
    {
      day: 4,
      title: "Lake Windermere. Enjoy Cruise on Lake Windermere. Enjoy Scotch Distillery tour. Drive to Glasgow.",
      activity: "Lake Windermere & Distillery Tour",
      description: "After breakfast, we check out and proceed to Lake Windermere, the largest lake in England, set in the heart of the Lake District National Park. Enjoy the Windermere Lake Cruise, the most popular attraction in Cumbria. Windermere is England's largest lake, in the heart of the Lake District. We then visit a Scotch Distillery to learn the art of scotch whisky making. Learn about the ancient art of whisky making and enjoy a glass of whisky. Later drive to Glasgow. Overnight stay at the hotel in Glasgow / Strathclyde. (Breakfast, Lunch, Dinner)",
      image: "/images/GlimpsesoftheUnitedKingdom/day4-LakeWindermere.jpg"
    },
    {
      day: 5,
      title: "Guided city tour of Edinburgh. Visit the Edinburgh Castle. Cruise on Lake Loch Lomond.",
      activity: "Edinburgh Sightseeing",
      description: "After breakfast, we begin our day with a guided tour of Edinburgh, the capital of Scotland. With your guide, see the Royal Mile, Holyrood Palace and the new Scottish Parliament building. We then visit the Edinburgh Castle, a historic fortress which dominates the skyline of the city of Edinburgh - from every side. Later proceed to experience the stunning beauty of the Trossachs National Park and Loch Lomond on this one-hour cruise. Take in the spectacular scenery of the mountain ranges and the loch. Back to the hotel and relax. Overnight stay at the hotel in Glasgow / Strathclyde. (Breakfast, Lunch, Dinner)",
      image: "/images/GlimpsesoftheUnitedKingdom/day5-EdinburghCastle.jpg"
    },
    {
      day: 6,
      title: "Orientation tour of Manchester. Drive Birmingham",
      activity: "Manchester & Birmingham",
      description: "After checking out from the hotel, we proceed to Manchester. Upon arrival, embark on an orientation tour of the city. Manchester is alive with culture, energy, and excitement. After lunch we drive to Birmingham. On your tour to Birmingham, you’ll see the Bullring, the Town Hall, the Council House and the famous canal network. In the evening we check into our hotel in Birmingham. (Breakfast, Lunch, Dinner)",
      image: "/images/GlimpsesoftheUnitedKingdom/day6-Manchester.jpg"
    },
    {
      day: 7,
      title: "Drive to London via visit Oxford – the University Town for an orientation tour",
      activity: "Oxford & Travel to London",
      description: "After breakfast, check out and proceed to drive to London, with a stop at Oxford for an enriching experience of an orientation tour. Explore this iconic university city, renowned for its prestigious colleges, charming streets, and historic architecture. Afterwards, continue your drive to London, where you'll check in to your hotel for a comfortable overnight stay. Overnight stay at the hotel in London. (Breakfast, Lunch, Dinner)",
      image: "/images/GlimpsesoftheUnitedKingdom/day7-Oxford.jpg"
    },
    {
      day: 8,
      title: "Fly back home",
      activity: "Departure",
      description: "As your memorable holiday comes to a close, today marks the day to return home. Bid farewell to the wonderful new friends you have made during the tour. It's time to check out and make your way to the airport, carrying with you pleasant memories of your European journey—memories you'll cherish for a lifetime. (Breakfast)",
      image: ""
    }
  ],
  sightseeing: [
    {
      country: "England",
      city: "London",
      activities: [
        "City tour with a local guide",
        "Ride the London Eye",
        "Entrance to Madame Tussauds Wax Museum",
        "Entrance to Lord’s Cricket Ground"
      ]
    },
    {
      country: "England",
      city: "Windsor",
      activities: [
        "Visit Windsor Castle"
      ]
    },
    {
      country: "England",
      city: "Stratford Upon Avon",
      activities: [
        "Orientation tour"
      ]
    },
    {
      country: "England",
      city: "Windermere",
      activities: [
        "Cruise on Lake Windermere"
      ]
    },
    {
      country: "Scotland",
      city: "Glasgow",
      activities: [
        "Scottish Distillery",
        "Cruise on Loch Lomond"
      ]
    },
    {
      country: "England",
      city: "Manchester",
      activities: [
        "Orientation tour of Manchester"
      ]
    },
    {
      country: "Scotland",
      city: "Edinburgh",
      activities: [
        "Entrance to Edinburgh Castle",
        "Guided Tour of Edinburgh"
      ]
    },
    {
      country: "England",
      city: "Oxford",
      activities: [
        "Orientation tour of Oxford city"
      ]
    }
  ],
  accommodation: [
    {
      title: "London",
      hotel: "Hotel Sheraton Skyline / Mercure LHR or similar"
    },
    {
      title: "Manchester / Lancaster",
      hotel: "Hotel Copthrone or similar"
    },
    {
      title: "Glasgow",
      hotel: "Hotel Millenium / Malmaison or Similar"
    },
    {
      title: "Birmingham",
      hotel: "Hotel Arguyle or similar"
    },
    {
      title: "London",
      hotel: "Hotel Sheraton Skyline / Mercure LHR or similar"
    }
  ],
  route: [
    { city: "London", days: 2 },
    { city: "Manchester / Lancaster", days: 1 },
    { city: "Glasgow", days: 2 },
    { city: "Birmingham", days: 1 },
    { city: "London", days: 1 }
  ],
  meals: {
    inclusions: [
      "Daily Continental Buffet Breakfast",
      "6 Indian/ Local Jain/Vegetarian/Non-Vegetarian Lunches",
      "7 Indian Jain/Vegetarian/Non-Vegetarian Dinners",
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
    "Visit 02 Countries in 08 days: Scotland & England.",
    "All Important attractions and sightseeing included. Madame Tussauds, London Eye, Lord’s Cricket Ground, Cruise on Lake Windermere, Scottish Distillery tour, Visit to Edinburgh Castle, Cruise on Lake Loch Lomond, Visit to Windsor Castle etc.",
    "Guided city tour of London & Edinburgh",
    "Services of a Professional & Knowledgeable Tour Manager accompanying you throughout the tour",
    "Accommodation in 4-star category hotels",
    "Daily Continental buffet breakfast",
    "Daily mineral water bottle (500ml) per person",
    "Driver tips included."
  ],
  additionalDelights: []
};
