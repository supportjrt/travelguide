export const tours = [
    {
    id: "europe-tour-packages-2026",
    title: "2026 Europe Tours",
    location: "Switzerland • France • Italy",
    price: "$1,150 / person",
    image: "/images/paris.png",
    rating: 4.7,
    category: "Multi-Country",
    tag: "Best Seller",
    duration: "Multiple Options",
    description: "Embark on a journey through the heart of Europe. Choose from our curated packages ranging from quick getaways to extensive explorations.",
    packages: [
      {
        id: "europe-tour-packages-2026-london-express",
        duration: "15 Nights/16 Days",
        days: 16,
        name: "GRAND WONDERS OF EUROPE",
        price: "$4,299",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
        route: [
          { city: "London", days: 3 },
          { city: "Paris", days: 3 },
          { city: "Netherlands", days: 1 },
          { city: "Germany", days: 1 },
          { city: "Switzerland", days: 3 },
          { city: "Innsbruck", days: 1 },
          { city: "Venice", days: 1 },
          { city: "Florence", days: 1 },
          { city: "Rome", days: 1 }
        ],
        highlights: ["Eiffel Tower Visit", "Seine River Cruise", "Zurich Old Town"],
        detailedHighlights: [
          "Value-for-Money holiday which you will cherish for a lifetime",
          "Visit 10 countries in 16 days: United Kingdom, France, Belgium, The Netherlands, Germany, Switzerland, Liechtenstein, Austria, Italy and Vatican City",
          "All Important attractions and sightseeing included : Madame Tussauds, London Eye, Lord’s Cricket Ground, Tower of London, River Thames Cruise, Eurostar train from London to Paris, Eiffel Tower 3rd level, Guided tour of Versailles Palace, Full day at Disneyland® Paris, River Seine Cruise, Paris by Night tour, Mini Europe, Keukenhof Gardens (till 10th May), Visit traditional village showcasing windmills and wooden houses (from 11th May), Heidelberg Alstadt, Excursion to Jungfrau included, Entrance to Mt. Titlis, Lindt Home of Chocolate, Mini Train ride in Vaduz, Swarovski Crystal Museum, Visit to St. Mark’s Square with Gondola Ride, Photo stop at Leaning Tower of Pisa and entrance to Vatican Museum & Sistine Chapel / Colosseum with Local guide.",
          "Guided tour in London, Paris, Vaduz, Florence, & Vatican Museum / Colosseum",
          "Services of a Professional & Knowledgeable Tour Manager accompanying you throughout the tour",
          "Accommodation in superior 4-star hotels",
          "Daily Continental buffet breakfast",
          "Delicious unlimited meals with variety of Jain, Veg and Nonveg cuisine (Indian / Local) included as per itinerary",
          "Daily mineral water bottle (500ml) per person",
          "Driver tips included"
        ],
        additionalDelights: [
          "A glass of <b>Champagne</b> in <b>France</b>",
          "<b>Waffle</b> in <b>Brussels</b>",
          "<b>Souvenir</b> in <b>Holland</b>",
          "<b>Black Forest Cake</b> in <b>Germany</b>",
          "<b>Swiss Chocolate Icecream</b> in <b>Swiss</b>",
          "<b>Pizza and Pasta</b> in <b>Italy</b>",
          "<b>Gelato Ice cream</b> in <b>Italy</b>",
          "A glass of local <b>Italian Red or White Wine</b> in <b>Italy</b>",
          "<b>Masala tea</b> and <b>Dinners</b> in the hotel in select cities"
        ],
        sightseeing: [
          {
            country: "UNITED KINGDOM",
            city: "London",
            activities: [
              "City tour with a local guide",
              "Ride the London Eye",
              "Entrance to Madame Tussauds Wax Museum",
              "Thames River Cruise",
              "Entrance to Lord’s Cricket Ground",
              "Entrance to Tower of London",
              "Free time at Oxford Street",
              "Highspeed Eurostar Train from London to Paris"
            ]
          },
          {
            country: "FRANCE",
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
            country: "BELGIUM",
            city: "Brussels",
            activities: [
              "Entrance to Mini Europe",
              "Orientation tour of Brussels with a visit to Grand Place",
              "See the Mannekin Pis Statue"
            ]
          },
          {
            country: "NETHERLANDS",
            city: "Amsterdam",
            activities: [
              "Entrance to Keukenhof (till 10th May)",
              "Visit traditional Dutch fishing village and windmills (from 11th May)",
              "Amsterdam Canal Cruise"
            ]
          },
          {
            country: "GERMANY",
            city: "Heidelberg",
            activities: [
              "Walk down the Heidelberg Alstadt",
              "See the Church of the Holy Spirit"
            ]
          },
          {
            country: "GERMANY",
            city: "Titisee",
            activities: [
              "Drive to the heart of the Black Forest",
              "Witness a demonstration of Cuckoo Clocks"
            ]
          },
          {
            country: "SWITZERLAND",
            city: "Schaffhausen",
            activities: [
              "See the magnificent Rhine falls with a thrilling boat ride"
            ]
          },
          {
            country: "SWITZERLAND",
            city: "Interlaken",
            activities: [
              "Excursion to Jungfraujoch - Top of Europe",
              "Visit scenic Interlaken city"
            ]
          },
          {
            country: "SWITZERLAND",
            city: "Engelberg",
            activities: [
              "Witness breath-taking mountain peaks and glaciers at Mt. Titlis",
              "Ride in the world’s first revolving cable car",
              "Walk on the Highest suspension bridge in Europe - Titlis Cliff Walk"
            ]
          },
          {
            country: "SWITZERLAND",
            city: "Lucerne",
            activities: [
              "Orientation tour of Lucerne"
            ]
          },
          {
            country: "SWITZERLAND",
            city: "Zurich",
            activities: [
              "Entrance to Lindt Home of Chocolate"
            ]
          },
          {
            country: "LIECHTENSTEIN",
            city: "Vaduz",
            activities: [
              "Guided tour of Vaduz with a mini train ride"
            ]
          },
          {
            country: "AUSTRIA",
            city: "Innsbruck",
            activities: [
              "See the Maria Theresien Strasse and the Golden Roof"
            ]
          },
          {
            country: "AUSTRIA",
            city: "Wattens",
            activities: [
              "Visit the Swarovski Crystal Museum and shop"
            ]
          },
          {
            country: "ITALY",
            city: "Venice",
            activities: [
              "St. Mark’s square by Private boat",
              "Enjoy a classic Venetian Gondola ride"
            ]
          },
          {
            country: "ITALY",
            city: "Florence",
            activities: [
              "Guided walking city tour with a local English-speaking guide."
            ]
          },
          {
            country: "ITALY",
            city: "Pisa",
            activities: [
              "Visit Square of Miracles",
              "Photo-stop at the Leaning Tower"
            ]
          },
          {
            country: "ITALY",
            city: "Rome",
            activities: [
              "Rome Orientation tour",
              "Visit to Trevi Fountain"
            ]
          },
          {
            country: "VATICAN CITY",
            city: "Vatican City",
            activities: [
              "Visit the Vatican Museum and Sistine Chapel – see sculptures and masterpieces of Renaissance art OR Visit the Colosseum",
              "Visit the magnificent St. Peter’s Basilica"
            ]
          }
        ],
        accommodation: [
          { title: "London (03 Nights)", hotel: "Atrium / Courtyard by Mariott LHR / Sheraton Skyline or similar" },
          { title: "Paris (03 Nights)", hotel: "B&B / Millennium CDG or similar" },
          { title: "Netherlands (01 Night)", hotel: "Amrath / Van der Valk or similar" },
          { title: "Germany (01 Night)", hotel: "Intercity / Elaya or similar" },
          { title: "Central Switzerland (03 Nights)", hotel: "La Maison / Radisson or similar" },
          { title: "Innsbruck / Seefeld (01 Night)", hotel: "Alpenkoning / Hocheder or similar" },
          { title: "Padova / Ferrara (01 Night)", hotel: "Four Points by Sheraton / Blue Dream or similar" },
          { title: "Tuscany (01 Night)", hotel: "Park / Le Fonti or similar" },
          { title: "Rome (01 Night)", hotel: "SHG / Selene / Simon or similar" }
        ],
        meals: {
          inclusions: [
            "Daily Continental Buffet Breakfast.",
            "14 Indian Jain/Vegetarian/Non-Vegetarian Lunches.",
            "15 Indian Jain/Vegetarian/Non-Vegetarian Dinners.",
            "Daily Mineral Water Bottle (500ml) per person"
          ],
          note: "(Packed lunch will be served on the day you travel from London to Paris and on the day you visit Disneyland Paris)",
          driverTips: "Tips to coach drivers for the duration of the tour is included."
        },
        exclusions: [
          { description: "The cost of the Airfare, Visa charges, Overseas Travel Insurance, etc." },
          { description: "Any expenses of personal nature such as Porterage, Laundry, and Alcohol, Food or Drink not in the regular menus provided by us, mini bar and telephone calls" },
          { description: "Any extra meals not included in the itinerary. Meals are pre - set and a choice of menu is not available" },
          { description: "Cost of excursions, city sightseeing, entrance fees and local guides availed of by the passengers, other than that mentioned in ‘What your tour price includes’" },
          { description: "Anything which is not specified in the Itinerary" }
        ],
        instructions: [],
        itinerary: [
          { 
            day: 1, 
            title: "Arrive into London, the capital of England and the United Kingdom.", 
            activity: "Transfer", 
            description: "Greetings! Today marks the commencement of our journey as we embark on a flight to a captivating city renowned for its vibrant culture, cosmopolitan atmosphere, and intriguing history – <b class='text-orange-600'>London</b>, the capital of England." +
            "<br/><br/>" +
            "Upon arrival, you will be warmly welcomed by our amiable and knowledgeable <b class='text-orange-600'>Tour Manager</b>, who will guide you to your hotel and facilitate a smooth check-in process. Take some time to unwind and enjoy the comforts of your accommodation." +
            "<br/><br/>" +
            "<b>Overnight stay at the hotel in London. (Dinner)</b>", 
            image: "/images/paris.png"
          },
          { 
            day: 2, 
            title: "Guided city tour of London with Changing of Guards. Visit to the famous Madame Tussauds Wax Museum. Ride the London Eye. Enjoy a scenic Thames River Cruise.", 
            activity: "Sightseeing", 
            description: "Post breakfast, we drive to explore the city of London with our expert local guide. You will see important landmarks like the <b class='text-orange-600'>Big Ben</b>, <b class='text-orange-600'>Houses of Parliament</b>, <b class='text-orange-600'>Westminster Abbey</b>, <b class='text-orange-600'>Trafalgar Square</b>, <b class='text-orange-600'>Piccadilly Circus</b>, <b class='text-orange-600'>Tower Bridge</b>, <b class='text-orange-600'>River Thames</b>, <b class='text-orange-600'>Hyde Park</b> and many more." +
            "<br/><br/>" +
            "Witness the Changing of the Guards at <b class='text-orange-600'>Buckingham Palace</b> (subject to operation). Next, we proceed to visit the renowned <b class='text-orange-600'>Madame Tussauds wax museum</b>. Be enthralled by the world’s largest wax collection of famous personalities." +
            "<br/><br/>" +
            "Later we visit <b class='text-orange-600'>London Eye</b>, one of the many iconic highlights of the city. Enjoy scenic views of the city while you ride the London eye. It is one of the most popular tourist attractions in the United Kingdom, standing at 135 meters tall overlooking the river Thames and the beautiful city of London followed by cruise on River Thames." +
            "<br/><br/>" +
            "Experience London from a different angle on a <b class='text-orange-600'>Thames River Cruise</b>, passing by the city’s most famous landmarks in comfort and style." +
            "<br/><br/>" +
            "<b>Overnight stay at the hotel in London. (Breakfast, Lunch, Dinner)</b>", 
            image: "/images/paris.png"
          },
          { 
            day: 3, 
            title: "Visit the legendary Lord’s Cricket Ground. Entrance to Tower of London. Free time at Oxford Street.", 
            activity: "Sightseeing", 
            description: "Today, we proceed to visit one of the iconic cricketing venues in London – the Lord’s Cricket Ground. In Lord’s you will have an opportunity to go behind the scenes at the ‘Home of Cricket’, and to experience some of the most inspiring views in sport. See the iconic parts of the ground including the Grade II*-listed Victorian Pavilion, the world-famous Long Room, the Players’ Dressing Rooms, and the MCC Museum, home of the Ashes Urn – cricket’s best-known artefact." +
            "<br/><br/>" +
            "Later, visit the historic Tower of London, a UNESCO World Heritage Site that has stood as a symbol of power for nearly a thousand years. Here, marvel at the spectacular Crown Jewels, including the world-famous Kohinoor diamond, and uncover the intriguing stories behind this legendary fortress. In the evening, enjoy free time at Oxford Street, London’s most popular shopping boulevard, lined with flagship stores, stylish boutiques, and lively cafés." +
            "<br/><br/>" +
            "(In the events of matches scheduled at Lord’s Cricket Ground, group will be taken to the iconic cricketing venue in London – the Oval Cricket Ground)" +
            "<br/><br/>" +
            "<b>Overnight stay at the hotel in London. (Breakfast, Lunch, Dinner)</b>", 
            image: "/images/hero_bg.png"
          },
          { 
            day: 4, 
            title: "Paris - Versailles", 
            activity: "Sightseeing", 
            description: "Visit the Eiffel Tower (3rd Level) and the magnificent Palace of Versailles.", 
            image: "/images/paris.png"
          },
          { 
            day: 5, 
            title: "Disneyland Paris", 
            activity: "Entertainment", 
            description: "Full day of excitement at Disneyland Paris.", 
            image: "/images/paris.png"
          },
          { 
            day: 6, 
            title: "Paris - Brussels - Netherlands", 
            activity: "Travel", 
            description: "Visit Mini Europe in Brussels and continue to the Netherlands.", 
            image: "/images/venice.png"
          },
          { 
            day: 7, 
            title: "Netherlands - Germany", 
            activity: "Sightseeing", 
            description: "Visit Keukenhof Gardens (seasonal) or Volendam, then travel to Germany (Cologne/Rhineland).", 
            image: "/images/venice.png"
          },
          { 
            day: 8, 
            title: "Germany - Black Forest - Switzerland", 
            activity: "Travel", 
            description: "Drive through the Black Forest, visit Titisee, and see the Rhine Falls before arriving in Switzerland.", 
            image: "/images/venice.png"
          },
          { 
            day: 9, 
            title: "Mt. Titlis & Lucerne", 
            activity: "Adventure", 
            description: "Excursion to Mt. Titlis with the Rotair revolving cable car and orientation tour of Lucerne.", 
            image: "/images/venice.png"
          },
          { 
            day: 10, 
            title: "Jungfraujoch & Interlaken", 
            activity: "Adventure", 
            description: "Day trip to Jungfraujoch - Top of Europe, and visit scenic Interlaken.", 
            image: "/images/venice.png"
          },
          { 
            day: 11, 
            title: "Switzerland - Liechtenstein - Austria", 
            activity: "Travel", 
            description: "Visit Vaduz (Liechtenstein) and continue to Innsbruck, Austria. Visit Swarovski Crystal World.", 
            image: "/images/venice.png"
          },
          { 
            day: 12, 
            title: "Austria - Italy (Venice)", 
            activity: "Travel", 
            description: "Travel to Italy. Arrive in Venice.", 
            image: "/images/venice.png"
          },
          { 
            day: 13, 
            title: "Venice - Florence", 
            activity: "Sightseeing", 
            description: "Tour of Venice (St. Mark's Square, Gondola Ride) then travel to Florence.", 
            image: "/images/amalfi.png"
          },
          { 
            day: 14, 
            title: "Florence - Pisa - Rome", 
            activity: "Sightseeing", 
            description: "Walking tour of Florence, visit Leaning Tower of Pisa, then continue to Rome.", 
            image: "/images/amalfi.png"
          },
          { 
            day: 15, 
            title: "Rome & Vatican City", 
            activity: "Sightseeing", 
            description: "Guided tour of Vatican Museum, Sistine Chapel, St. Peter's Basilica, and Colosseum.", 
            image: "/images/amalfi.png"
          },
          { 
            day: 16, 
            title: "Departure", 
            activity: "Transfer", 
            description: "Transfer to the airport for your flight back home.",
            image: "/images/amalfi.png"
          }
        ]
      },
      {
        id: "european-trio-paris-zurich-milan",
        duration: "12 Nights/13 Days",
        days: 13,
        name: "THE BEST OF EUROPE",
        price: "$3,299",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [
          { city: "Paris", days: 3 },
          { city: "Zurich", days: 2 },
          { city: "Milan", days: 3 }
        ],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png" },
          { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png" },
          { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png" },
          { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png" },
          { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport." }
        ]
      },
      {
        id: "grand-european-discovery",
        duration: "12 Nights/13 Days",
        days: 13,
        name: "GRAND EXCLUSIVE EUROPE",
        price: "$3,649",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/venice.png", "/images/paris.png"],
        route: [
          { city: "Paris", days: 3 },
          { city: "Zurich", days: 2 },
          { city: "Venice", days: 2 },
          { city: "Rome", days: 5 }
        ],
        highlights: ["Eiffel Tower", "Swiss Alps", "Gondola Ride", "Colosseum"],
        itinerary: [
           { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png" },
           { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png" },
           { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png" },
           { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png" },
           { day: 5, title: "Zurich to Venice", activity: "Train", description: "Train to Venice.", image: "/images/venice.png" },
           { day: 6, title: "Venice Canals", activity: "Boat Tour", description: "Gondola ride and St. Mark's Square.", image: "/images/venice.png" },
           { day: 7, title: "Venice to Rome", activity: "Train", description: "High-speed train to Rome.", image: "/images/santorini.png" },
           { day: 8, title: "Ancient Rome", activity: "History", description: "Colosseum and Roman Forum.", image: "/images/santorini.png" },
           { day: 9, title: "Vatican City", activity: "Culture", description: "St. Peter's Basilica and Vatican Museums.", image: "/images/santorini.png" },
           { day: 10, title: "Rome Leisure", activity: "Leisure", description: "Free day for shopping.", image: "/images/santorini.png" },
           { day: 11, title: "Farewell Dinner", activity: "Dining", description: "Authentic Italian dinner.", image: "/images/santorini.png" },
           { day: 12, title: "Departure", activity: "Transfer", description: "Transfer to airport." }
        ]
      },
      {
        id: "exclusive-europe",
        duration: "10 Nights/11 Days",
        days: 11,
        name: "EXCLUSIVE EUROPE",
        price: "$2,899",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }],
        highlights: ["Eiffel Tower Visit", "Seine River Cruise", "Zurich Old Town"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris! Private transfer to hotel.", image: "/images/paris.png" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Visit Eiffel Tower, Louvre, and Notre Dame.", image: "/images/paris.png" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "High-speed TGV train to Zurich.", image: "/images/venice.png" },
          { day: 4, title: "Zurich Highlights", activity: "Tour", description: "Walking tour of Zurich Old Town and Lake Zurich.", image: "/images/venice.png" },
          { day: 5, title: "Departure", activity: "Transfer", description: "Transfer to airport for departure." }
        ]
      },
      {
        id: "grand-fascinating-europe",
        duration: "9 Nights/10 Days",
        days: 10,
        name: "GRAND FASCINATING EUROPE",
        price: "$2,999",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Milan", days: 3 }],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png" },
          { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png" },
          { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png" },
          { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png" },
          { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport." }
        ]
      },
      {
        id: "fascinating-europe",
        duration: "7 Nights/8 Days",
        days: 8,
        name: "FASCINATING EUROPE",
        price: "$2,299",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/venice.png", "/images/paris.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Venice", days: 2 }, { city: "Rome", days: 5 }],
        highlights: ["Eiffel Tower", "Swiss Alps", "Gondola Ride", "Colosseum"],
        itinerary: [
           { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png" },
           { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png" },
           { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png" },
           { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png" },
           { day: 5, title: "Zurich to Venice", activity: "Train", description: "Train to Venice.", image: "/images/venice.png" },
           { day: 6, title: "Venice Canals", activity: "Boat Tour", description: "Gondola ride and St. Mark's Square.", image: "/images/venice.png" },
           { day: 7, title: "Venice to Rome", activity: "Train", description: "High-speed train to Rome.", image: "/images/santorini.png" },
           { day: 8, title: "Ancient Rome", activity: "History", description: "Colosseum and Roman Forum.", image: "/images/santorini.png" },
           { day: 9, title: "Vatican City", activity: "Culture", description: "St. Peter's Basilica and Vatican Museums.", image: "/images/santorini.png" },
           { day: 10, title: "Rome Leisure", activity: "Leisure", description: "Free day for shopping.", image: "/images/santorini.png" },
           { day: 11, title: "Farewell Dinner", activity: "Dining", description: "Authentic Italian dinner.", image: "/images/santorini.png" },
           { day: 12, title: "Departure", activity: "Transfer", description: "Transfer to airport." }
        ]
      },
      {
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
        ]
      },
      {
        id: "mini-grandeur",
        duration: "9 Nights/10 Days",
        days: 10,
        name: "MINI GRANDEUR",
        price: "$3,099",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Milan", days: 3 }],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png" },
          { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png" },
          { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png" },
          { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png" },
          { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport." }
        ]
      },
      {
        id: "swiss-delight",
        duration: "6 Nights/7 Days",
        days: 7,
        name: "SWISS DELIGHT",
        price: "$2,499",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/paris.png", "/images/santorini.png"],
        route: [{ city: "Zurich", days: 2 }, { city: "Lucerne", days: 2 }, { city: "Interlaken", days: 3 }],
        highlights: ["Rhine Falls", "Mount Pilatus", "Lake Brienz"],
        itinerary: [
          { day: 1, title: "Arrival in Zurich", activity: "Transfer", description: "Welcome to Zurich.", image: "/images/venice.png" },
          { day: 2, title: "Rhine Falls", activity: "Sightseeing", description: "Visit Europe's largest waterfall.", image: "/images/venice.png" },
          { day: 3, title: "Zurich to Lucerne", activity: "Train", description: "Train to Lucerne.", image: "/images/venice.png" },
          { day: 4, title: "Mount Pilatus", activity: "Adventure", description: "Golden round trip to Mt. Pilatus.", image: "/images/venice.png" },
          { day: 5, title: "Lucerne to Interlaken", activity: "Train", description: " scenic train to Interlaken.", image: "/images/venice.png" },
          { day: 6, title: "Lake Brienz Cruise", activity: "Leisure", description: "Relaxing boat cruise.", image: "/images/venice.png" },
          { day: 7, title: "Departure", activity: "Transfer", description: "Transfer to airport." }
        ]
      },
      {
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
        ]
      },
      {
        id: "french-romance",
        duration: "5 Nights/6 Days",
        days: 6,
        name: "FRENCH ROMANCE",
        price: "$1,999",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/amalfi.png", "/images/santorini.png"],
        route: [{ city: "Paris", days: 4 }, { city: "Nice", days: 2 }],
        highlights: ["Eiffel Tower Dinner", "Seine Cruise", "Promenade des Anglais"],
        itinerary: [
           { day: 1, title: "Paris Arrival", activity: "Transfer", description: "Welcome to the City of Love.", image: "/images/paris.png" },
           { day: 2, title: "Romantic Seine", activity: "Cruise", description: "Dinner cruise on the Seine.", image: "/images/paris.png" },
           { day: 3, title: "Louvre Museum", activity: "Culture", description: "See the Mona Lisa.", image: "/images/paris.png" },
           { day: 4, title: "Montmartre", activity: "Walking Tour", description: "Artists' quarter tour.", image: "/images/paris.png" },
           { day: 5, title: "Paris to Nice", activity: "Flight", description: "Fly to Nice on the Riviera.", image: "/images/santorini.png" },
           { day: 6, title: "Departure", activity: "Transfer", description: "Au revoir!" }
        ]
      },
      {
        id: "spanish-fiesta",
        duration: "7 Nights/8 Days",
        days: 8,
        name: "SPANISH FIESTA",
        price: "$2,650",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/paris.png", "/images/venice.png"],
        route: [{ city: "Madrid", days: 2 }, { city: "Seville", days: 2 }, { city: "Barcelona", days: 4 }],
        highlights: ["Royal Palace", "Flamenco Show", "Sagrada Familia"],
        itinerary: [
          { day: 1, title: "Arrival in Madrid", activity: "Transfer", description: "Welcome to Spain.", image: "/images/santorini.png" },
          { day: 2, title: "Madrid Highlights", activity: "Sightseeing", description: "Prado Museum and Royal Palace.", image: "/images/santorini.png" },
          { day: 3, title: "Madrid to Seville", activity: "Train", description: "AVE train to Seville.", image: "/images/santorini.png" },
          { day: 4, title: "Seville Culture", activity: "Show", description: "Alcazar and Flamenco show.", image: "/images/santorini.png" },
          { day: 5, title: "Seville to Barcelona", activity: "Flight", description: "Fly to Barcelona.", image: "/images/santorini.png" },
          { day: 6, title: "Gaudi Tour", activity: "Sightseeing", description: "Park Guell and Sagrada Familia.", image: "/images/santorini.png" },
          { day: 7, title: "Gothic Quarter", activity: "Walking Tour", description: "Explore the historic center.", image: "/images/santorini.png" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Adios!" }
        ]
      },
      {
        id: "german-explorer",
        duration: "6 Nights/7 Days",
        days: 7,
        name: "GERMAN EXPLORER",
        price: "$2,399",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/paris.png", "/images/amalfi.png"],
        route: [{ city: "Munich", days: 3 }, { city: "Berlin", days: 4 }],
        highlights: ["Neuschwanstein Castle", "Brandenburg Gate", "Berlin Wall"],
        itinerary: [
           { day: 1, title: "Arrival in Munich", activity: "Transfer", description: "Welcome to Bavaria.", image: "/images/venice.png" },
           { day: 2, title: "Castles Tour", activity: "sightseeing", description: "Day trip to Neuschwanstein.", image: "/images/venice.png" },
           { day: 3, title: "Munich City", activity: "Walking Tour", description: "Marienplatz and Hofbrauhaus.", image: "/images/venice.png" },
           { day: 4, title: "Munich to Berlin", activity: "Train", description: "ICE train to Berlin.", image: "/images/venice.png" },
           { day: 5, title: "Berlin History", activity: "Sightseeing", description: "Brandenburg Gate and Reichstag.", image: "/images/venice.png" },
           { day: 6, title: "Berlin Wall", activity: "Culture", description: "East Side Gallery.", image: "/images/venice.png" },
           { day: 7, title: "Departure", activity: "Transfer", description: "Tschuss!" }
        ]
      },
      {
        id: "amsterdam-brussels",
        duration: "5 Nights/6 Days",
        days: 6,
        name: "DUTCH & BELGIAN TREATS",
        price: "$2,100",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
        route: [{ city: "Amsterdam", days: 3 }, { city: "Brussels", days: 3 }],
        highlights: ["Canal Cruise", "Van Gogh Museum", "Grand Place"],
        itinerary: [
           { day: 1, title: "Arrival in Amsterdam", activity: "Transfer", description: "Welcome to the Netherlands.", image: "/images/paris.png" },
           { day: 2, title: "Cultural Amsterdam", activity: "Museum", description: "Rijksmuseum and Van Gogh Museum.", image: "/images/paris.png" },
           { day: 3, title: "Canals & Windmills", activity: "Excursion", description: "Zaanse Schans tour.", image: "/images/paris.png" },
           { day: 4, title: "Amsterdam to Brussels", activity: "Train", description: "Thalys train to Brussels.", image: "/images/paris.png" },
           { day: 5, title: "Brussels Highlights", activity: "Sightseeing", description: "Atomium and Grand Place.", image: "/images/paris.png" },
           { day: 6, title: "Departure", activity: "Transfer", description: "Tot ziens!" }
        ]
      },
      {
        id: "scandinavian-saga",
        duration: "9 Nights/10 Days",
        days: 10,
        name: "SCANDINAVIAN SAGA",
        price: "$3,599",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/paris.png", "/images/venice.png"],
        route: [{ city: "Copenhagen", days: 3 }, { city: "Oslo", days: 3 }, { city: "Stockholm", days: 4 }],
        highlights: ["Tivoli Gardens", "Viking Ship Museum", "Vasa Museum"],
        itinerary: [
           { day: 1, title: "Arrival in Copenhagen", activity: "Transfer", description: "Welcome to Denmark.", image: "/images/santorini.png" },
           { day: 2, title: "Copenhagen Charm", activity: "Sightseeing", description: "Little Mermaid and Nyhavn.", image: "/images/santorini.png" },
           { day: 3, title: "Tivoli Gardens", activity: "Leisure", description: "Evening at Tivoli.", image: "/images/santorini.png" },
           { day: 4, title: "Copenhagen to Oslo", activity: "Cruise", description: "Overnight cruise to Oslo.", image: "/images/santorini.png" },
           { day: 5, title: "Oslo History", activity: "Museum", description: "Viking Ship Museum.", image: "/images/santorini.png" },
           { day: 6, title: "Oslo to Stockholm", activity: "Train", description: "Train to Stockholm.", image: "/images/santorini.png" },
           { day: 7, title: "Stockholm Old Town", activity: "Walking Tour", description: "Gamla Stan.", image: "/images/santorini.png" },
           { day: 8, title: "Vasa Museum", activity: "Culture", description: "See the Vasa ship.", image: "/images/santorini.png" },
           { day: 9, title: "Archipelago", activity: "Boat Tour", description: "Stockholm archipelago cruise.", image: "/images/santorini.png" },
           { day: 10, title: "Departure", activity: "Transfer", description: "Farvel!" }
        ]
      },
      {
        id: "greek-odyssey",
        duration: "7 Nights/8 Days",
        days: 8,
        name: "GREEK ODYSSEY",
        price: "$2,799",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/amalfi.png", "/images/venice.png"],
        route: [{ city: "Athens", days: 2 }, { city: "Santorini", days: 3 }, { city: "Mykonos", days: 3 }],
        highlights: ["Acropolis", "Sunset in Oia", "Mykonos Windmills"],
        itinerary: [
           { day: 1, title: "Arrival in Athens", activity: "Transfer", description: "Welcome to Greece.", image: "/images/santorini.png" },
           { day: 2, title: "Ancient Athens", activity: "Sightseeing", description: "Acropolis and Parthenon.", image: "/images/santorini.png" },
           { day: 3, title: "Athens to Santorini", activity: "Ferry", description: "High-speed ferry to Santorini.", image: "/images/santorini.png" },
           { day: 4, title: "Santorini Views", activity: "Leisure", description: "Explore Fira and Oia.", image: "/images/santorini.png" },
           { day: 5, title: "Santorini to Mykonos", activity: "Ferry", description: "Ferry to Mykonos.", image: "/images/santorini.png" },
           { day: 6, title: "Mykonos Beaches", activity: "Relaxation", description: "Enjoy the beaches.", image: "/images/santorini.png" },
           { day: 7, title: "Mykonos Town", activity: "Walking Tour", description: "Little Venice and windmills.", image: "/images/santorini.png" },
           { day: 8, title: "Departure", activity: "Transfer", description: "Yassas!" }
        ]
      }
    ]
  },
];
