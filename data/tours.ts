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
        id: "grand-wonders-of-europe-2026",
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
            description: "Greetings! Today marks the commencement of our journey as we embark on a flight to a captivating city renowned for its vibrant culture, cosmopolitan atmosphere, and intriguing history – **London**, the capital of England.\n\n" +
            "Upon arrival, you will be warmly welcomed by our amiable and knowledgeable **Tour Manager**, who will guide you to your hotel and facilitate a smooth check-in process. Take some time to unwind and enjoy the comforts of your accommodation.\n\n" +
            "**Overnight stay at the hotel in London. (Dinner)**", 
            image: ""
          },
          { 
            day: 2, 
            title: "Guided city tour of London with Changing of Guards. Visit to the famous Madame Tussauds Wax Museum. Ride the London Eye. Enjoy a scenic Thames River Cruise.", 
            activity: "Sightseeing", 
            description: "![Tower Bridge](/images/GrandWondersofEurope/day2-TowerBridge.jpg)\n\n![Buckingham Palace](/images/GrandWondersofEurope/day2-Buckingham.jpg)\n\nPost breakfast, we drive to explore the city of London with our expert local guide. You will see important landmarks like the **Big Ben**, **Houses of Parliament**, **Westminster Abbey**, **Trafalgar Square**, **Piccadilly Circus**, **Tower Bridge**, **River Thames**, **Hyde Park** and many more.\n\nWitness the Changing of the Guards at **Buckingham Palace** (subject to operation). Next, we proceed to visit the renowned **Madame Tussauds wax museum**. Be enthralled by the world’s largest wax collection of famous personalities.\n\nLater we visit **London Eye**, one of the many iconic highlights of the city. Enjoy scenic views of the city while you ride the London eye. It is one of the most popular tourist attractions in the United Kingdom, standing at 135 meters tall overlooking the river Thames and the beautiful city of London followed by cruise on River Thames.\n\nExperience London from a different angle on a **Thames River Cruise**, passing by the city’s most famous landmarks in comfort and style.\n\n**Overnight stay at the hotel in London. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day2-TowerofLondon.jpg"
          },
          { 
            day: 3, 
            title: "Visit the legendary Lord’s Cricket Ground. Entrance to Tower of London. Free time at Oxford Street.", 
            activity: "Sightseeing", 
            description: "![Lord’s Cricket Ground](/images/GrandWondersofEurope/day3-LordsCricketStadium.jpg)\n\nToday, we proceed to visit one of the iconic cricketing venues in London – the Lord’s Cricket Ground. In Lord’s you will have an opportunity to go behind the scenes at the ‘Home of Cricket’, and to experience some of the most inspiring views in sport. See the iconic parts of the ground including the Grade II*-listed Victorian Pavilion, the world-famous Long Room, the Players’ Dressing Rooms, and the MCC Museum, home of the Ashes Urn – cricket’s best-known artefact.\n\n" +
            "Later, visit the historic Tower of London, a UNESCO World Heritage Site that has stood as a symbol of power for nearly a thousand years. Here, marvel at the spectacular Crown Jewels, including the world-famous Kohinoor diamond, and uncover the intriguing stories behind this legendary fortress. In the evening, enjoy free time at Oxford Street, London’s most popular shopping boulevard, lined with flagship stores, stylish boutiques, and lively cafés.\n\n" +
            "(In the events of matches scheduled at Lord’s Cricket Ground, group will be taken to the iconic cricketing venue in London – the Oval Cricket Ground)\n\n" +
            "**Overnight stay at the hotel in London. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day3-EurostarTrain.jpg"
          },
          { 
            day: 4, 
            title: "Proceed to Paris - the City of Romance, Lights and Glamour.", 
            activity: "Travel", 
            description: "Check out of your hotel as we proceed to travel by high speed train from London to Paris. Eurostar is a high-speed train service connecting London with Paris through the Channel Tunnel. En route enjoy the English and French Countryside. Offering a swift and efficient journey, it provides a seamless travel experience between these iconic European cities. After disembarking proceed to the fashionable and elegant city Paris, known for its haute couture, renowned museums, breath-taking beautiful monuments and sensational cabarets.\n\n**Overnight stay at the hotel in Paris. (Breakfast, Packed Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day4-VersaillesPalace.jpg"
          },
          { 
            day: 5, 
            title: "Experience a guided city tour of Paris, including a visit to the Eiffel Tower's 3rd (Top) Level. Visit the Palace of Versailles, a testament to the pinnacle of French 17th-century artistry and achievement. Enjoy a romantic cruise along the picturesque Seine River. Paris by Night Tour.", 
            activity: "Sightseeing", 
            description: "![Eiffel Tower](/images/GrandWondersofEurope/day5-EiffelTower.jpg)\n\nToday, we embark on a guided city tour of Paris, where you'll have the opportunity to marvel at some of the most exquisite Parisian attractions. Our journey will take us through iconic locations such as Place Vendôme, Place de l'Opéra Garnier, Musée d'Orsay, Place de la Concorde, the renowned Champs Elysées, the majestic Arc de Triomphe, Alexander Bridge, Les Invalides, and many more. Following our city exploration, we'll ascend to the 3rd Level of the iconic Eiffel Tower, providing us with a breathtaking panoramic view of the city. The Eiffel Tower, distinguished by its iconic tapering cast iron tip, not only symbolizes Paris but also represents the essence of all France.\n\nOur adventure continues with a visit to the Palace of Versailles, an internationally acclaimed masterpiece located in Versailles, approximately 12 miles (19 km) west of Paris, France. This magnificent palace is the property of the French Republic and has been under the stewardship of the Public Establishment of the Palace, Museum, and National Estate of Versailles, overseen by the French Ministry of Culture since 1995. Drawing in a staggering 15,000,000 visitors each year, the Palace, Park, and Gardens of Versailles rank among the most sought-after tourist destinations globally. Later in the day, we'll treat you to a romantic cruise along the Seine River, renowned as one of the world's most scenic journeys. Along the way, you'll be captivated by the sight of exquisite landmarks such as Notre Dame, the Eiffel Tower, the Orsay Museum, and many more. Glide gracefully under one picturesque bridge after another, enjoying views of the finest monuments in the heart of bustling Paris. After the cruise, we proceed for a captivating and enchanting experience to witness the City of Light in all its night time splendour. Paris, often referred to as the \"City of Light\". See some of Paris's most famous landmarks, all bathed in a soft, golden glow. These might include the Eiffel Tower, Notre-Dame Cathedral, Place de la Concorde, Champs-Élysées, and the Arc de Triomphe.\n\n**Overnight stay at the hotel in Paris. (Breakfast, Lunch, Dinner)**\n\n**(IMP NOTE - Please note that access to the Eiffel Tower's 3rd level is contingent on its operational status. If it happens to be closed during our visit, we will make the necessary adjustments and proceed to explore the 2nd level instead. Your experience will still be enriched by the fantastic views and the charm of the Eiffel Tower.)**\n\n**Day 5 & Day 6 can get swapped based on the availability of ticket slots of the tours**", 
            image: "/images/GrandWondersofEurope/day5-BoatRide.jpg"
          },
          { 
            day: 6, 
            title: "Indulge in a day of excitement at Disneyland® Paris, where you have the choice of exploring either Disney® Park or Walt Disney Studios® Park.", 
            activity: "Entertainment", 
            description: "![Disneyland Paris](/images/GrandWondersofEurope/day6-DisneyPark.jpg)\n\nToday promises a day filled with excitement at this beloved amusement park—a perfect destination to unwind and relish a variety of thrilling rides and cinematic experiences with your loved ones. You have the option to choose between Disney Park, where you can watch fairy tales come to life across five captivating realms brimming with classic attractions, dazzling shows, and lively street parades featuring beloved Disney Characters. Alternatively, you can explore the Walt Disney Studios Park and be awestruck by impressive stunt performances, witness the magic of film production, and behold the real-life sets used in blockbuster movies.\n\n**Overnight stay at the hotel in Paris. (Breakfast, Packed Lunch, Dinner)**\n\n**(Important Note – Keeping in mind the logistical consideration the Tour Manager reserves the right to alter or change the itinerary. However, we will ensure that all the attractions are covered)**", 
            image: "/images/GrandWondersofEurope/day6-DisneyPark.jpg"
          },
          { 
            day: 7, 
            title: "Onto Brussels. Visit Grand Place and Manneken Pis statue. Visit the miniature park – Mini Europe.", 
            activity: "Sightseeing", 
            description: "Today, our journey takes us to Brussels, known as the headquarters of the European Union and the capital of Belgium. Upon arriving in Brussels, our first stop is at the Grand Place, which is widely regarded as one of Europe's most beautiful squares. Here, you'll encounter the medieval Town Hall and the renowned Manneken Pis statue. Next, we proceed to visit Mini Europe, a captivating miniature park. Discover a unique miniature world. Mini-Europe is a park where all the wonders of Europe are exhibited in miniature. The park exhibits more than 350 monuments which were selected for their architectural quality and their European symbolism. They are reproduced to the finest detail.\n\n**Overnight stay at the hotel in Netherlands. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day7-MiniEurope.jpg"
          },
          { 
            day: 8, 
            title: "Visit Keukenhof Gardens (till 10th May). Visit picturesque Dutch Village of Windmills and Tradition (from 11th May). Explore Amsterdam with Canal Cruise. Drive to Germany.", 
            activity: "Sightseeing", 
            description: "![Amsterdam Canal Cruise](/images/GrandWondersofEurope/day8-Amsterdam.jpg)\n\nCheck out and later we relax in our coach as we travel to the charming city of Lisse. Here, we'll have the incredible opportunity to visit the renowned Keukenhof Gardens, open until May 10th. Prepare to be mesmerized by the vast displays of tulips, daffodils, and hyacinths, creating a breathtaking array of colours. From 11th May we proceed to charming Dutch village near Amsterdam known for its iconic windmills, traditional wooden houses, and artisan workshops, offering a glimpse into 18th-century Dutch life and culture. Next, we drive to the Dutch capital Amsterdam and embark on a glass-topped boat where you will have the opportunity to explore the rich history of this city. Immerse yourself in the vibrant legacy of the city, characterized by its 1,000 bridges and charming old houses. Afterward, continue your picturesque journey towards your hotel in the Frankfurt area and complete the check-in process.\n\n**Overnight stay at the hotel in Germany. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day8-KeukenhofGardens.jpg"
          },
          { 
            day: 9, 
            title: "Visit the Heidelberg Alstadt and see the Church of the Holy Spirit. Travel to the Heart of the Black Forest, where you'll have the chance to witness the grandeur of the largest waterfall in Switzerland, the Rhine Falls with a thrilling boat ride.", 
            activity: "Sightseeing", 
            description: "After checking out, relax in your coach as we drive Heidelberg Altstadt (Old Town) which spreads around the Market Square and stretches along the Neckar River. Sat just below Heidelberg Schloss (castle) it hosts old and modern houses in a maze of narrow, cobblestoned streets. During our time in the Alstadt, also see the Church of the Holy Spirit is a landmark of Heidelberg and is as fascinating as a medieval cathedral. Next we proceed to the heart of the Black Forest, renowned for its dense evergreen forests and charming villages. You'll be captivated by the scenic beauty of these quaint villages nestled in the heart of the Black Forest. Additionally, you'll have the unique opportunity to witness a demonstration of how traditional cuckoo clocks are crafted, a true Black Forest specialty.\n\n![Rhine Falls](/images/GrandWondersofEurope/day9-RhineFalls.jpg)\n\nLater relax and take in the picturesque journey en route to Switzerland. Explore the Rhine Falls with a boat ride which offers a thrilling close-up experience of the powerful cascading waters where you can behold the breathtaking Rhine Falls, the largest and most stunning waterfall in Europe. The cascading waters of the Rhine River create a mesmerizing spectacle, drawing visitors to its scenic surroundings and boat excursions for a closer encounter with this natural wonder. Later, we'll continue our drive to your hotel.\n\n**Overnight stay at the hotel in Central Switzerland. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day9-HeidelbergAlstadt.jpg"
          },
          { 
            day: 10, 
            title: "Enjoy the tour's crowning jewel: An enchanting alpine adventure to the summit of Europe, the breath taking Jungfraujoch included in your tour cost paired with the picturesque beauty of Interlaken.", 
            activity: "Adventure", 
            description: "Today we proceed to Interlaken - a picturesque Swiss town nestled between two stunning lakes, offering breath taking mountain views and serving as a gateway to numerous alpine adventures. Later, prepare yourself for an unforgettable and magical alpine journey to Jungfraujoch, also known as \"The Top of Europe\" — undoubtedly one of the highlights of your tour. Our adventure begins as we head to the Grindelwald Terminal. From there, the state-of-the-art 3S-Bahn Eiger Express whisks you away to the Eigergletscher station in a mere 15 minutes. Here, you'll step onto a cogwheel train that will transport you to the highest railway station in Europe, nestled at an awe-inspiring altitude of 11,333 feet.\n\n![Cogwheel Train to Jungfrau](/images/GrandWondersofEurope/day10-CogwheelTrain.jpg)\n\nUpon arrival, you'll find yourself in a realm of eternal ice and snow, where natural beauty knows no bounds. Explore the enchanting Ice Palace, where skilled artists craft their masterpieces from ice. Ascend to the Sphinx observatory deck, perched high above, and prepare to be captivated by a panoramic view that stretches across the Aletsch Glacier, the longest glacier in the Alps. This is a journey into a world of unparalleled natural splendour that you will remember for a lifetime.\n\n**Overnight stay at the hotel in Central Switzerland. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day10-CogwheelTrain.jpg"
          },
          { 
            day: 11, 
            title: "Visit Mt. Titlis- enjoy Cable car rides including the world’s first rotating cable car, the Rotair – to the top of Mt. Titlis at 3,020 metres. A brief orientation tour of Lucerne. Entrance to Switzerland’s ultimate chocolate attraction – The Lindt Home of Chocolate.", 
            activity: "Sightseeing", 
            description: "![Lindt Home of Chocolate](/images/GrandWondersofEurope/day11-Lindt.jpg)\n\nOur journey continues to Lucerne, where you'll be treated to breath taking scenery and a once-in-a-lifetime experience. We'll embark on an exhilarating trip to the summit of Mt. Titlis, reaching an elevation of 3,020 meters by way of various cable cars, including the Rotair, renowned as the world's first revolving cable car. At this lofty vantage point, prepare to be awestruck by a breath taking, unobstructed 360-degree panorama. You'll take in stunning views of the snow-capped peaks, deep crevasses, and pristine white snowfields, adorned with massive ice boulders, visible from every angle. Don't forget to include a visit to the \"Cliff Walk,\" Europe's highest suspension bridge, perched along the cliffs of Mt. Titlis. Later in the day, we'll proceed for a brief orientation tour of Lucerne, celebrated as one of Switzerland's most enchanting cities. You'll have the opportunity to visit the iconic Lion Monument and admire the charm of the Kapellbrücke, a covered wooden bridge. It's a day filled with cultural exploration and awe-inspiring natural beauty. Following the tour in Lucerne, get ready for an exciting tour through the world of chocolate, and learn everything you ever wanted to know about chocolate with a visit to Lindt.\n\n**Overnight stay at the hotel in Central Switzerland. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day11-CableCar.jpg"
          },
          { 
            day: 12, 
            title: "Drive to Vaduz, the capital at the Principality of Liechtenstein with a guided mini train ride. Visit Swarovski Crystal Museum – the dazzling world of crystals. Visit Innsbruck – The Tyrolean capital of picturesque Austria.", 
            activity: "Travel", 
            description: "![Swarovski Kristallwelten Wattens](/images/GrandWondersofEurope/day12-Swarovski.jpg)\n\nToday after breakfast, relax in your coach as you take a scenic drive to Innsbruck. Enroute arrive in Vaduz, the capital of Liechtenstein, a tiny principality nestled between Switzerland and Austria. It lies entirely within the Alps and covering an area of just sixty-two square miles. Liechtenstein is the sixth smallest independent nation in the world. It follows a policy of neutrality and is one of the few countries in the world that maintains no military. The Vaduz train ride offers a serene and immersive way to appreciate the natural beauty and idyllic surroundings that make Liechtenstein so special. Next we proceed to Wattens, where you'll have the opportunity to explore the Swarovski World of Crystals and be enchanted by the exquisite crystalline artworks on display. Following this captivating visit, we'll continue on to Innsbruck, a city of extraordinary beauty. During our orientation tour, you'll have the chance to admire the iconic Golden Roof, known for its fire-gilded copper tiles, which serves as a defining landmark of Innsbruck. Stroll along the charming cobblestone paths of Maria Theresien Strasse, where you can choose to relax at one of the many outdoor cafes. As you do so, you'll be treated to magnificent baroque architecture and the chance to immerse yourself in the rich culture of medieval Europe. With the splendid Alps as a backdrop, the setting is nothing short of a picture-postcard perfect.\n\n**Overnight stay at the hotel in Innsbruck / Seefeld. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day12-Swarovski.jpg"
          },
          { 
            day: 13, 
            title: "Welcome to Venice, Italy, the captivating floating city. Immerse yourself in the enchanting experience of a gondola ride through its picturesque waterways.", 
            activity: "Sightseeing", 
            description: "Check out from your hotel and embark on a journey to Venice, Italy, a city adorned with beautiful monuments and famed for its serpentine canals—a place that has inspired poetry and passion throughout the ages. Upon arrival at the pier in Venice, we'll board a private boat. Our destination is St. Mark's Square, the heart of Venice. Here, you'll have the opportunity to view St. Mark's Basilica, an exquisite example of Byzantine architecture. Witness the renowned Bell Tower and Clock Tower, the latter adorned with the dominant sign of the Zodiac and the current phase of the moon. As we explore further, you'll catch sight of the iconic Bridge of Sighs, a magnificent structure crafted from white limestone. It spans the Rio di Palazzo, connecting the old prisons with the interrogation rooms at the Doge's Palace. To truly embrace the enchantment of Venice, we'll treat you to a romantic gondola ride in a flat-bottomed Venetian rowing boat. Glide through the city's canals, surrounded by the stunning backdrop of baroque buildings—an experience that encapsulates the essence of this captivating city. Following our adventures, we'll return to the pier and proceed to check in at your hotel.\n\n**Overnight stay at the hotel in Padova/ Ferrara. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day13-Mark_sSquare.jpg"
          },
          { 
            day: 14, 
            title: "Guided city tour of Florence. View the Duomo – Florence most iconic landmark. View the remarkable and famous Leaning Tower of Pisa.", 
            activity: "Sightseeing", 
            description: "This morning, after checking out from your hotel, we'll embark on a journey to Florence, often referred to as the cradle of the Renaissance. Accompanied by an English-speaking local guide, you'll immerse yourself in the rich culture of this historic city. During your exploration, you'll have the opportunity to admire several iconic landmarks, including the Duomo, which stands as the city's most recognizable symbol. Gaze upon the Campanile and the Baptistery, the latter renowned for its Gates of Paradise. As we continue our journey through Florence, you'll encounter the vibrant Piazza Della Signoria—a veritable open-air museum adorned with Renaissance sculptures. This bustling square is bordered by historic cafes and dominated by the magnificent Palazzo Vecchio. We'll also take in the renowned Ponte Vecchio, a bridge that spans the River Arno. Following this captivating experience, we'll proceed towards Pisa. Upon arrival, you'll be treated to a view of the Square of Miracles, home to the astounding Leaning Tower of Pisa—a sight that never fails to leave a lasting impression.\n\n**Overnight stay at the hotel in Tuscany region. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day14-BasilicaDiSantaCroce.jpg"
          },
          { 
            day: 15, 
            title: "Trip to the eternal city of Rome. Visit the world’s smallest country – the Vatican City and St. Peter’s Basilica. Entrance to Vatican Museum & Sistine Chapel OR The Colosseum.", 
            activity: "Sightseeing", 
            description: "![Trevi Fountain](/images/GrandWondersofEurope/day15-TreviFountain.jpg)\n\nToday, it's time to check out and make our way to the eternal city of Rome. Prepare for an orientation city tour of Rome. Our stop is the Vatican City, the world's smallest country. (Please note that shorts or sleeveless vests are not allowed in the Vatican.) The tour also includes a visit to the famous Sistine Chapel, celebrated for its masterpiece, \"The Last Judgement,\" and recognized as the place where the Pope is elected. The divinely beautiful St. Peter's Basilica will leave you captivated by the works of Michelangelo and Bernini. Our journey continues as we drive to view the magnificent Colosseum, an immense amphitheater that remains impressively well-preserved. Next on our itinerary is a visit to the stunning Trevi Fountain. Legend has it that tossing a coin over your shoulder into the fountain ensures your return to Rome. We'll proceed to view the majestic Victor Emmanuel Monument, explore the Roman Forum, and discover several more remarkable sights that enrich the cultural tapestry of this extraordinary city. Please note that the entry to the Vatican Museums and Sistine Chapel may require standing in queue. The typical waiting time is approximately 1.5 hours, depending on the crowd size. Incase of non availability for the entracne tickets, then your TM will notify you in advance and instead will take you to the Colosseum with the entrance.\n\n**Overnight stay at the hotel in Rome. (Breakfast, Lunch, Dinner)**", 
            image: "/images/GrandWondersofEurope/day15-VaticanMuseum.jpg"
          },
          { 
            day: 16, 
            title: "Fly back home", 
            activity: "Departure", 
            description: "As your memorable holiday comes to a close, today marks the day to return home. Bid farewell to the wonderful new friends you've made during this tour. It's time to check out and make your way to the airport, carrying with you the pleasant memories of your European journey—a treasure you'll cherish for a lifetime. Safe travels! **(Breakfast)**",
            image: ""
          }
        ]
      },
      {
        id: "the-best-of-europe",
        duration: "12 Nights/13 Days",
        days: 13,
        name: "THE BEST OF EUROPE",
        price: "$3,299",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [
          { city: "Paris", days: 3 },
          { city: "Netherlands", days: 1 },
          { city: "Germany", days: 1 },
          { city: "Central Switzerland", days: 3 },
          { city: "Innsbruck/Seefeld", days: 1 },
          { city: "Padova/Ferrara", days: 1 },
          { city: "Tuscany", days: 1 },
          { city: "Rome", days: 1 }
        ],
        sightseeing: [
          {
            country: "FRANCE",
            city: "Paris",
            activities: [
              "City tour with a local guide",
              "Visit to the 3rd level of the Eiffel Tower",
              "Guided tour of Versailles Palace",
              "Full day excitement and thrill at Disneyland® Paris",
              "Enjoy romantic cruise on River Seine",
              "Paris by Night Tour"
            ]
          },
          {
            country: "BELGIUM",
            city: "Brussels",
            activities: [
              "Orientation tour of Brussels",
              "See the Mannekin Pis Statue",
              "Entrance to Mini Europe"
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
              "Visit scenic Interlaken"
            ]
          },
          {
            country: "SWITZERLAND",
            city: "Engelberg",
            activities: [
              "Witness breath-taking mountain peaks and glaciers at Mt. Titlis",
              "Ride in the world's first revolving cable car",
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
              "St. Mark's square by Private boat",
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
              "Visit the Vatican Museum & Sistine Chapel – see sculptures and masterpieces of Renaissance art",
              "Visit the magnificent St. Peter’s Basilica",
              "(Please note that if the Vatican Museum is not available, entry to the Colosseum will be arranged as an alternative.)"
            ]
          }
        ],
        accommodation: [
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
            "Daily Continental Buffet Breakfast",
            "11 Indian Jain/Vegetarian/Non-Vegetarian Lunches",
            "12 Indian Jain/Vegetarian/Non-Vegetarian Dinners",
            "Daily Mineral Water Bottle (500ml)"
          ],
          note: "Packed lunch will be served on the day you visit Disneyland Paris",
          driverTips: "Tips to coach drivers for the duration of the tour is included."
        },
        exclusions: [
          { description: "The cost of the Airfare, Visa charges, Overseas Travel Insurance, etc." },
          { description: "Any expenses of personal nature such as Porterage, Laundry, and Alcohol, Food or Drink not in the regular menus provided by us, mini bar and telephone calls" },
          { description: "Any extra meals not included in the itinerary. Meals are pre - set and a choice of menu is not available" },
          { description: "Cost of excursions, city sightseeing, entrance fees and local guides availed of by the passengers, other than that mentioned in 'What your tour price includes'" },
          { description: "Anything which is not specified in the Itinerary" }
        ],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        detailedHighlights: [
          "Value-for-Money holiday which you will cherish for a lifetime",
          "Visit 9 countries in 13 days: France, Belgium, The Netherlands, Germany, Switzerland, Liechtenstein, Austria, Italy and Vatican City",
          "All Important attractions and sightseeing included with some new additions. Eiffel Tower 3rd level, Guided tour of Versailles palace, Full day at Disneyland® Paris, River Seine Cruise, Paris by Night tour, Mini Europe, Keukenhof Gardens (till 10th May), Visit traditional village showcasing windmills and wooden houses (from 11th May), Heidelberg Alstadt, Excursion to Jungfrau included, Entrance to Mt. Titlis, Lindt Home of Chocolate, Mini Train ride in Vaduz, Swarovski Crystal Museum, Visit to St. Mark’s Square with Gondola Ride, Photo stop at Leaning Tower of Pisa and entrance to Vatican Museum & Sistine Chapel or The Colosseum with Local guide.",
          "Guided tour in Paris, Florence & Vatican Museum OR The Colosseum",
          "Services of a Professional & Knowledgeable Tour Manager accompanying you throughout the tour",
          "Accommodation in superior 4-star hotels",
          "Daily Continental buffet breakfast.",
          "Delicious unlimited meals with variety of Jain, Veg and Nonveg cuisine (Indian / Local) included as per itinerary.",
          "Daily mineral water bottle (500ml) per person",
          "Driver tips included"
        ],
        additionalDelights: [
          "A glass of <b>Champagne</b> in <b>France</b>",
          "<b>Souvenir</b> in <b>Holland</b>",
          "<b>Waffle</b> in <b>Belgium</b>",
          "<b>Black Forest Cake</b> in <b>Germany</b>",
          "<b>Swiss Chocolate Icecream</b> in <b>Swiss</b>",
          "<b>Pizza and Pasta</b> in <b>Italy</b>",
          "<b>Gelato Ice cream</b> in <b>Italy</b>",
          "A glass of local <b>Italian Red or White Wine</b> in <b>Italy</b>",
          "<b>Masala tea</b> and <b>Dinners</b> in the hotel in select cities"
        ],
        itinerary: [
          { 
            day: 1, 
            title: "Arrive into Paris - the City of Romance, Lights and Glamour.", 
            activity: "Arrival", 
            description: "Welcome! Today, we embark on our journey to Paris, a city celebrated for its high fashion, world-famous museums, awe-inspiring landmarks, and captivating cabarets. Upon arrival, you'll be warmly welcomed by our Travel Professional, who will guide you to your hotel and provide assistance with the check-in process.\n\n![Palace](/images/TheBestofEurope/day1-palace.jpg)\n\n**Overnight stay at the hotel in Paris. (Dinner)**", 
            image: "/images/TheBestofEurope/day1-PalaceofVersailles.jpg" 
          },
          { 
            day: 2, 
            title: "Experience a guided city tour of Paris, including a visit to the Eiffel Tower's 3rd (Top) Level. Visit the Palace of Versailles, a testament to the pinnacle of French 17th-century artistry and achievement. Enjoy a romantic cruise along the picturesque Seine River. Paris by Night Tour.", 
            activity: "Sightseeing", 
            description: "![Eiffel Tower](/images/TheBestofEurope/day2-EiffelTowel.jpg)\n\nToday, we embark on a guided city tour of Paris, where you'll have the opportunity to marvel at some of the most exquisite Parisian attractions. Our journey will take us through iconic locations such as Place Vendôme, Place de l'Opéra Garnier, Musée d'Orsay, Place de la Concorde, the renowned Champs Elysées, the majestic Arc de Triomphe, Alexander Bridge, Les Invalides, and many more. Following our city exploration, we'll ascend to the 3rd Level of the iconic Eiffel Tower, providing us with a breathtaking panoramic view of the city. The Eiffel Tower, distinguished by its iconic tapering cast iron tip, not only symbolizes Paris but also represents the essence of all France.\n\nOur adventure continues with a visit to the Palace of Versailles, an internationally acclaimed masterpiece located in Versailles, approximately 12 miles (19 km) west of Paris, France. This magnificent palace is the property of the French Republic and has been under the stewardship of the Public Establishment of the Palace, Museum, and National Estate of Versailles, overseen by the French Ministry of Culture since 1995. Drawing in a staggering 15,000,000 visitors each year, the Palace, Park, and Gardens of Versailles rank among the most sought-after tourist destinations globally. Later in the day, we'll treat you to a romantic cruise along the Seine River, renowned as one of the world's most scenic journeys. Along the way, you'll be captivated by the sight of exquisite landmarks such as Notre Dame, the Eiffel Tower, the Orsay Museum, and many more. Glide gracefully under one picturesque bridge after another, enjoying views of the finest monuments in the heart of bustling Paris. After the cruise, we proceed for a captivating and enchanting experience to witness the City of Light in all its night time splendour. Paris, often referred to as the \"City of Light\". See some of Paris's most famous landmarks, all bathed in a soft, golden glow. These might include the Eiffel Tower, Notre-Dame Cathedral, Place de la Concorde, Champs-Élysées, and the Arc de Triomphe.\n\n**Overnight stay at the hotel in Paris. (Breakfast, Lunch, Dinner)**\n\n**(IMP NOTE - Please note that access to the Eiffel Tower's 3rd level is contingent on its operational status. If it happens to be closed during our visit, we will make the necessary adjustments and proceed to explore the 2nd level instead. Your experience will still be enriched by the fantastic views and the charm of the Eiffel Tower.)**\n\n**Day 2 & Day 3 can get swapped based on the availability of ticket slots of the tours**", 
            image: "/images/TheBestofEurope/day2-BoatRide.jpg" 
          },
          { 
            day: 3, 
            title: "Indulge in a day of excitement at Disneyland® Paris, where you have the choice of exploring either Disney® Park or Walt Disney Studios® Park.", 
            activity: "Entertainment", 
            description: "![Disneyland](/images/TheBestofEurope/day3-DisneyPark.jpg)\n\nToday promises a day filled with excitement at this beloved amusement park—a perfect destination to unwind and relish a variety of thrilling rides and cinematic experiences with your loved ones. You have the option to choose between Disney Park, where you can watch fairy tales come to life across five captivating realms brimming with classic attractions, dazzling shows, and lively street parades featuring beloved Disney Characters. Alternatively, you can explore the Walt Disney Studios Park and be awestruck by impressive stunt performances, witness the magic of film production, and behold the real-life sets used in blockbuster movies.\n\n**Overnight stay at the hotel in Paris. (Breakfast, Lunch, Dinner)**\n\n**(Important Note – Keeping in mind the logistical consideration the Tour Manager reserves the right to alter or change the itinerary. However, we will ensure that all the attractions are covered)**", 
            image: "/images/TheBestofEurope/day3-DisneyPark.jpg" 
          },
          { 
            day: 4, 
            title: "Onto Brussels. Visit Grand Place and Manneken Pis statue. Visit the miniature park – Mini Europe.", 
            activity: "Sightseeing", 
            description: "![Keukenhof Gardens](/images/TheBestofEurope/day4-KeukenhofGardens.jpg)\n\nToday, our journey takes us to Brussels, known as the headquarters of the European Union and the capital of Belgium. Upon arriving in Brussels, our first stop is at the Grand Place, which is widely regarded as one of Europe's most beautiful squares. Here, you'll encounter the medieval Town Hall and the renowned Manneken Pis statue. Next, we proceed to visit Mini Europe, a captivating miniature park. Discover a unique miniature world. Mini-Europe is a park where all the wonders of Europe are exhibited in miniature. The park exhibits more than 350 monuments which were selected for their architectural quality and their European symbolism. They are reproduced to the finest detail.\n\n**Overnight stay at the hotel in Netherlands. (Breakfast, Lunch, Dinner)**", 
            image: "/images/TheBestofEurope/day4-MiniEurope.jpg" 
          },
          { 
            day: 5, 
            title: "Visit Keukenhof Gardens (till 10th May). Visit picturesque Dutch Village of Windmills and Tradition (from 11th May). Explore Amsterdam with Canal Cruise. Drive to Germany.", 
            activity: "Sightseeing", 
            description: "Check out and later we relax in our coach as we travel to the charming city of Lisse. Here, we'll have the incredible opportunity to visit the renowned Keukenhof Gardens, open until May 10th. Prepare to be mesmerized by the vast displays of tulips, daffodils, and hyacinths, creating a breathtaking array of colours. From 11th May we proceed to charming Dutch village near Amsterdam known for its iconic windmills, traditional wooden houses, and artisan workshops, offering a glimpse into 18th-century Dutch life and culture. Next, we drive to the Dutch capital Amsterdam and embark on a glass-topped boat where you will have the opportunity to explore the rich history of this city. Immerse yourself in the vibrant legacy of the city, characterized by its 1,000 bridges and charming old houses. Afterward, continue your picturesque journey towards your hotel in the Frankfurt area and complete the check-in process.\n\n**Overnight stay at the hotel in Germany. (Breakfast, Lunch, Dinner)**", 
            image: "/images/TheBestofEurope/day5-Amsterdam.jpg" 
          },
          { 
            day: 6, 
            title: "Visit the Heidelberg Alstadt and see the Church of the Holy Spirit. Travel to the Heart of the Black Forest, where you'll have the chance to witness the grandeur of the largest waterfall in Switzerland, the Rhine Falls with a thrilling boat ride.", 
            activity: "Sightseeing", 
            description: "After checking out, relax in your coach as we drive Heidelberg Altstadt (Old Town) which spreads around the Market Square and stretches along the Neckar River. Sat just below Heidelberg Schloss (castle) it hosts old and modern houses in a maze of narrow, cobblestoned streets. During our time in the Alstadt, also see the Church of the Holy Spirit is a landmark of Heidelberg and is as fascinating as a medieval cathedral. Next we proceed to the heart of the Black Forest, renowned for its dense evergreen forests and charming villages. You'll be captivated by the scenic beauty of these quaint villages nestled in the heart of the Black Forest. Additionally, you'll have the unique opportunity to witness a demonstration of how traditional cuckoo clocks are crafted, a true Black Forest specialty.\n\n![Heidelberg](/images/TheBestofEurope/day6-HeidelbergAlstadt.jpg)\n\nLater relax and take in the picturesque journey en route to Switzerland. Explore the Rhine Falls with a boat ride which offers a thrilling close-up experience of the powerful cascading waters where you can behold the breathtaking Rhine Falls, the largest and most stunning waterfall in Europe. The cascading waters of the Rhine River create a mesmerizing spectacle, drawing visitors to its scenic surroundings and boat excursions for a closer encounter with this natural wonder. Later, we’ll continue our drive to your hotel.\n\n**Overnight stay at the hotel in Central Switzerland. (Breakfast, Lunch, Dinner)**", 
            image: "/images/TheBestofEurope/day6-RhineFalls.jpg" 
          },
          { 
            day: 7, 
            title: "Enjoy the tour's crowning jewel: An enchanting alpine adventure to the summit of Europe, the breath taking Jungfraujoch included in your tour cost paired with the picturesque beauty of Interlaken.", 
            activity: "Adventure", 
            description: "Today we proceed to Interlaken - a picturesque Swiss town nestled between two stunning lakes, offering breath taking mountain views and serving as a gateway to numerous alpine adventures. Later, prepare yourself for an unforgettable and magical alpine journey to Jungfraujoch, also known as \"The Top of Europe\" — undoubtedly one of the highlights of your tour. Our adventure begins as we head to the Grindelwald Terminal. From there, the state-of-the-art 3S-Bahn Eiger Express whisks you away to the Eigergletscher station in a mere 15 minutes. Here, you'll step onto a cogwheel train that will transport you to the highest railway station in Europe, nestled at an awe-inspiring altitude of 11,333 feet. Upon arrival, you'll find yourself in a realm of eternal ice and snow, where natural beauty knows no bounds. Explore the enchanting Ice Palace, where skilled artists craft their masterpieces from ice. Ascend to the Sphinx observatory deck, perched high above, and prepare to be captivated by a panoramic view that stretches across the Aletsch Glacier, the longest glacier in the Alps. This is a journey into a world of unparalleled natural splendour that you will remember for a lifetime.\n\n**Overnight stay at the hotel in Central Switzerland. (Breakfast, Lunch, Dinner).**", 
            image: "/images/TheBestofEurope/day7-alpine.jpg" 
          },
          { 
            day: 8, 
            title: "Visit Mt. Titlis- enjoy Cable car rides including the world's first rotating cable car, the Rotair – to the top of Mt. Titlis at 3,020 metres. A brief orientation tour of Lucerne. Entrance to Switzerland’s ultimate chocolate attraction – The Lindt Home of Chocolate.", 
            activity: "Sightseeing", 
            description: "![Lindt](/images/TheBestofEurope/day8-Lindt.jpg)\n\nOur journey continues to Lucerne, where you'll be treated to breath taking scenery and a once-in-a-lifetime experience. We'll embark on an exhilarating trip to the summit of Mt. Titlis, reaching an elevation of 3,020 meters by way of various cable cars, including the Rotair, renowned as the world's first revolving cable car. At this lofty vantage point, prepare to be awestruck by a breath taking, unobstructed 360-degree panorama. You'll take in stunning views of the snow-capped peaks, deep crevasses, and pristine white snowfields, adorned with massive ice boulders, visible from every angle. Don't forget to include a visit to the \"Cliff Walk,\" Europe's highest suspension bridge, perched along the cliffs of Mt. Titlis. Later in the day, we'll proceed for a brief orientation tour of Lucerne, celebrated as one of Switzerland's most enchanting cities. You'll have the opportunity to visit the iconic Lion Monument and admire the charm of the Kapellbrücke, a covered wooden bridge. It's a day filled with cultural exploration and awe-inspiring natural beauty. Following the tour in Lucerne, get ready for an exciting tour through the world of chocolate, and learn everything you ever wanted to know about chocolate with a visit to Lindt.\n\n**Overnight stay at the hotel in Central Switzerland. (Breakfast, Lunch, Dinner)**", 
            image: "/images/TheBestofEurope/day8-CableCar.jpg" 
          },
          { 
            day: 9, 
            title: "Drive to Vaduz, the capital at the Principality of Liechtenstein with a guided mini train ride. Visit Swarovski Crystal Museum – the dazzling world of crystals. Visit Innsbruck – The Tyrolean capital of picturesque Austria.", 
            activity: "Sightseeing", 
            description: "Today after breakfast, Relax in your coach as you take a scenic drive to Innsbruck. Enroute arrive in Vaduz, the capital of Liechtenstein, a tiny principality nestled between Switzerland and Austria. It lies entirely within the Alps and covering an area of just sixty-two square miles. Liechtenstein is the sixth smallest independent nation in the world. It follows a policy of neutrality and is one of the few countries in the world that maintains no military. The Vaduz train ride offers a serene and immersive way to appreciate the natural beauty and idyllic surroundings that make Liechtenstein so special. Next we proceed to Wattens, where you'll have the opportunity to explore the Swarovski World of Crystals and be enchanted by the exquisite crystalline artworks on display. Following this captivating visit, we'll continue on to Innsbruck, a city of extraordinary beauty. During our orientation tour, you'll have the chance to admire the iconic Golden Roof, known for its fire-gilded copper tiles, which serves as a defining landmark of Innsbruck. Stroll along the charming cobblestone paths of Maria Theresien Strasse, where you can choose to relax at one of the many outdoor cafes. As you do so, you'll be treated to magnificent baroque architecture and the chance to immerse yourself in the rich culture of medieval Europe. With the splendid Alps as a backdrop, the setting is nothing short of a picture-postcard perfect.\n\n**Overnight stay at the hotel in Innsbruck / Seefeld. (Breakfast, Lunch, Dinner)**", 
            image: "/images/TheBestofEurope/day9-Swarovski.jpg" 
          },
          { 
            day: 10, 
            title: "Welcome to Venice, Italy, the captivating floating city. Immerse yourself in the enchanting experience of a gondola ride through its picturesque waterways.", 
            activity: "Sightseeing", 
            description: "Check out from your hotel and embark on a journey to Venice, Italy, a city adorned with beautiful monuments and famed for its serpentine canals—a place that has inspired poetry and passion throughout the ages. Upon arrival at the pier in Venice, we'll board a private boat. Our destination is St. Mark's Square, the heart of Venice. Here, you'll have the opportunity to view St. Mark's Basilica, an exquisite example of Byzantine architecture. Witness the renowned Bell Tower and Clock Tower, the latter adorned with the dominant sign of the Zodiac and the current phase of the moon. As we explore further, you'll catch sight of the iconic Bridge of Sighs, a magnificent structure crafted from white limestone. It spans the Rio di Palazzo, connecting the old prisons with the interrogation rooms at the Doge's Palace. To truly embrace the enchantment of Venice, we'll treat you to a romantic gondola ride in a flat-bottomed Venetian rowing boat. Glide through the city's canals, surrounded by the stunning backdrop of baroque buildings—an experience that encapsulates the essence of this captivating city. Following our adventures, we'll return to the pier and proceed to check in at your hotel.\n\n**Overnight stay at the hotel in Padova/Bologna/Ferrara. (Breakfast, Lunch, Dinner)**", 
            image: "/images/TheBestofEurope/day10-Mark_sSquare.jpg" 
          },
          { 
            day: 11, 
            title: "Guided city tour of Florence. View the Duomo – Florence most iconic landmark. View the remarkable and famous Leaning Tower of Pisa.", 
            activity: "Sightseeing", 
            description: "This morning, after checking out from your hotel, we'll embark on a journey to Florence, often referred to as the cradle of the Renaissance. Accompanied by an English-speaking local guide, you'll immerse yourself in the rich culture of this historic city. During your exploration, you'll have the opportunity to admire several iconic landmarks, including the Duomo, which stands as the city's most recognizable symbol. Gaze upon the Campanile and the Baptistery, the latter renowned for its Gates of Paradise. As we continue our journey through Florence, you'll encounter the vibrant Piazza Della Signoria—a veritable open-air museum adorned with Renaissance sculptures. This bustling square is bordered by historic cafes and dominated by the magnificent Palazzo Vecchio. We'll also take in the renowned Ponte Vecchio, a bridge that spans the River Arno. Following this captivating experience, we'll proceed towards Pisa. Upon arrival, you'll be treated to a view of the Square of Miracles, home to the astounding Leaning Tower of Pisa—a sight that never fails to leave a lasting impression.\n\n**Overnight stay at the hotel in Tuscany region. (Breakfast, Lunch, Dinner)**", 
            image: "/images/TheBestofEurope/day11-BasilicaDiSantaCroce.jpg" 
          },
          { 
            day: 12, 
            title: "Trip to the eternal city of Rome. Visit the world’s smallest country – the Vatican City and St. Peter’s Basilica", 
            activity: "Sightseeing", 
            description: "Today, it's time to check out and make our way to the eternal city of Rome. Prepare for an orientation city tour of Rome. Our stop is the Vatican City, the world's smallest country. (Please note that shorts or sleeveless vests are not allowed in the Vatican.) The tour also includes a visit to the famous Sistine Chapel, celebrated for its masterpiece, \"The Last Judgement,\" and recognized as the place where the Pope is elected. The divinely beautiful St. Peter's Basilica will leave you captivated by the works of Michelangelo and Bernini. Our journey continues as we drive to view the magnificent Colosseum, an immense amphitheater that remains impressively well-preserved. Next on our itinerary is a visit to the stunning Trevi Fountain. Legend has it that tossing a coin over your shoulder into the fountain ensures your return to Rome. We'll proceed to view the majestic Victor Emmanuel Monument, explore the Roman Forum, and discover several more remarkable sights that enrich the cultural tapestry of this extraordinary city. Please note that the entry to the Vatican Museums and Sistine Chapel may require standing in queue. The typical waiting time is approximately 1.5 hours, depending on the crowd size. Incase of non availability for the entracne tickets, then your TM will notify you in advance and instead will take you to the Colosseum with the entrance.\n\n![Trevi Fountain](/images/TheBestofEurope/day12-TreviFountain.jpg)\n\n**Overnight stay at the hotel in Rome. (Breakfast, Lunch, Dinner)**", 
            image: "/images/TheBestofEurope/day12-VaticanMuseum.jpg" 
          },
          { 
            day: 13, 
            title: "Fly back home", 
            activity: "Departure", 
            description: "As your memorable holiday comes to a close, today marks the day to return home. Bid farewell to the wonderful new friends you’ve made during this tour. It’s time to check out and make your way to the airport, carrying with you the pleasant memories of your European journey—a treasure you’ll cherish for a lifetime. Safe travels! **(Breakfast)**", 
            image: "/images/hero_bg.png" 
          }
        ]
      },
      {
        id: "grand-exclusive-europe",
        duration: "12 Nights/13 Days",
        days: 13,
        name: "GRAND EXCLUSIVE EUROPE",
        price: "$3,649",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/venice.png", "/images/paris.png"],
        highlights: ["Eiffel Tower", "Swiss Alps", "Gondola Ride", "Colosseum"],
        itinerary: [

           { 
             day: 1, 
             title: "Arrive into London, the capital of England and the United Kingdom.", 
             activity: "Transfer", 
             description: "Greetings! Today marks the commencement of our journey as we embark on a flight to a captivating city renowned for its vibrant culture, cosmopolitan atmosphere, and intriguing history – **London**, the capital of England. Upon arrival, you will be warmly welcomed by our amiable and knowledgeable **Tour Manager**, who will guide you to your hotel and facilitate a smooth check-in process. Take some time to unwind and enjoy the comforts of your accommodation.\n\n**Overnight stay at the hotel in London. (Dinner)**", 
             image: "/images/GrandExclusiveEurope/day2-TowerBridge.jpg" 
           },
           { 
             day: 2, 
             title: "Guided city tour of London with Changing of Guards. Visit the legendary Lord’s Cricket Ground. Ride the London Eye.", 
             activity: "Sightseeing", 
             description: "![Tower Bridge](/images/GrandExclusiveEurope/day2-TowerBridge.jpg)\n\nPost breakfast, we drive to explore the city of London with our expert local guide. You will see important landmarks like the **Big Ben**, **Houses of Parliament**, **Westminster Abbey**, **Trafalgar Square**, **Piccadilly Circus**, **Tower Bridge**, **River Thames**, **Hyde Park** and many more. Witness the Changing of the Guards at **Buckingham Palace** (subject to operation). Next we proceed to visit one of the iconic cricketing venues in London – the Lord’s Cricket Ground. In Lord’s you will have an opportunity to go behind the scenes at the ‘Home of Cricket’, and to experience some of the most inspiring views in sport. See the iconic parts of the ground including the Grade II*-listed Victorian Pavilion, the world-famous Long Room, the Players’ Dressing Rooms, and the MCC Museum, home of the Ashes Urn – cricket’s best-known artefact. Later we visit **London Eye**, one of the many iconic highlights of the city. Enjoy scenic views of the city while you ride the London eye. It is one of the most popular tourist attractions in the United Kingdom, standing at 135 meters tall overlooking the river Thames and the beautiful city of London.\n\n**Overnight stay at the hotel in London. (Breakfast, Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day2-TowerBridge.jpg" 
           },
           { 
             day: 3, 
             title: "Visit to the famous Madame Tussauds Wax Museum. Proceed to Paris - the City of Romance, Lights and Glamour.", 
             activity: "Travel", 
             description: "![Eurostar Train](/images/GrandExclusiveEurope/day3-EurostarTrain.jpg)\n\nCheck out of your hotel as we proceed to visit the renowned **Madame Tussauds wax museum**. Be enthralled by the world’s largest wax collection of famous personalities. Later we proceed to travel by high-speed train from London to Paris. **Eurostar** is a high-speed train service connecting London with Paris through the Channel Tunnel. En route enjoy the English and French Countryside. Offering a swift and efficient journey, it provides a seamless travel experience between these iconic European cities. After disembarking proceed to the fashionable and elegant city **Paris**, known for its haute couture, renowned museums, breath-taking beautiful monuments and sensational cabarets.\n\n**Overnight stay at the hotel in Paris. (Breakfast, Packed Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day3-EurostarTrain.jpg" 
           },
           { 
             day: 4, 
             title: "Guided city tour of Paris. Visit to Eiffel tower 3rd (Top) Level. Visit the Palace of Versailles, a testament to the pinnacle of French 17th-century artistry and achievement. Enjoy a romantic cruise on the River Seine.", 
             activity: "Sightseeing", 
             description: "![Arc De Triomphe](/images/GrandExclusiveEurope/day4-ArcDeTriomphe.jpg)\n\n![Palace of Versailles](/images/GrandExclusiveEurope/day4-PalaceofVersailles.jpg)\n\nToday proceed for a guided city tour of Paris. Marvel at the finest Parisian tourist attractions, Place Vendôme, Place de l'Opéra Garnier, Musée d'Orsay, Place de la Concorde, Champs Elysées, one of the most recognized fashionable avenues in the world, Arc de Triomphe, Alexander Bridge, Les Invalides and several others. Next visit the iconic **Eiffel Tower – 3rd Level**, and get a stunning view of the city from the top. With its famous tapering cast iron tip, the Eiffel Tower is not just the symbol of Paris but of all of France. Our adventure continues with a visit to the **Palace of Versailles**, an internationally acclaimed masterpiece located in Versailles, approximately 12 miles (19 km) west of Paris, France. This magnificent palace is the property of the French Republic and has been under the stewardship of the Public Establishment of the Palace, Museum, and National Estate of Versailles, overseen by the French Ministry of Culture since 1995. Later take a romantic cruise down the river Seine, one of the world’s most scenic cruise, flanked by exquisite monuments like Notre Dame, Eiffel Tower, Orsay Museum and many more. Gliding under one bridge to one another with a view of the finest monuments in the heart of bustling Paris.\n\n**(IMP NOTE - Please note that access to the Eiffel Tower's 3rd level is contingent on its operational status. If it happens to be closed during our visit, we will make the necessary adjustments and proceed to explore the 2nd level instead. Your experience will still be enriched by the fantastic views and the charm of the Eiffel Tower.)**\n\n**Overnight stay at the hotel in Paris. (Breakfast, Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day4-ArcDeTriomphe.jpg" 
           },
           { 
             day: 5, 
             title: "Enjoy your fun filled day at Disneyland® Paris choice of Disney® Park or Walt Disney Studios® Park.", 
             activity: "Entertainment", 
             description: "![Disneyland Paris](/images/GrandExclusiveEurope/day5-Disneyland.jpg)\n\nGet ready for a day full of excitement at **Disneyland Paris**- a popular amusement park. Enjoy different kind of thrill rides and studio movies with your loved ones. You may choose between **Disney Park**, where fairy tales take flight across five incredible lands filled with classic attractions, shows and street parades with Disney Characters OR you may visit the **Walt Disney Studios Park Studios** and be astounded by the outstanding stunt shows, watch a film being made and see real-life sets used for creating blockbuster movies.\n\n**Overnight stay at the hotel in Paris. (Breakfast, Packed Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day5-Disneyland.jpg" 
           },
           { 
             day: 6, 
             title: "Orientation tour of Geneva.", 
             activity: "Sightseeing", 
             description: "![Jet d’Eau](/images/GrandExclusiveEurope/day6-Jetd_Eau.jpg)\n\nCheck out from your hotel and proceed to Switzerland, a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. On arrival proceed for orientation tour of **Geneva**. See **The Jet d’Eau**, a large fountain in Geneva, Switzerland and is one of the city's most famous landmarks, UN Buildings - The United Nations Office and the Flower Clock, located just in front of the famous Lake Geneva. Later proceed to your hotel and check-in and relax in the comforts of your hotel.\n\n**Overnight stay at the hotel in Geneva. (Breakfast, Packed Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day6-Jetd_Eau.jpg" 
           },
           { 
             day: 7, 
             title: "Enjoy a magical alpine excursion to the top of Europe - the amazing Jungfraujoch which is included in your tour and scenic Interlaken.", 
             activity: "Adventure", 
             description: "![Cogwheel Train](/images/GrandExclusiveEurope/day7-CogwheelTrain.jpg)\n\nGet set for a memorable magical alpine excursion to **Jungfraujoch** – The Top of Europe, a high–point of your tour. First proceed to Grindelwald Terminal. The new 3S-Bahn Eiger Express takes you from the Grindelwald Terminal to the Eigergletscher station in just 15 minutes. There you board a cogwheel train to reach the highest railway station in Europe at 11,333 feet – a world of eternal ice and snow. Visit the Ice Palace where artistes create their work of art in ice. Visit the Sphinx observatory deck to experience a breath-taking panoramic view of the longest glacier in the Alps - Aletsch Glacier.\n\n**Overnight stay at the hotel in Central Switzerland. (Breakfast, Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day7-CogwheelTrain.jpg" 
           },
           { 
             day: 8, 
             title: "Visit Mt. Titlis- enjoy Cable car rides including the world’s first rotating cable car, the Rotair – to the top of Mt. Titlis at 3,020 metres. Enjoy a scenic cruise on Lake Lucerne.", 
             activity: "Adventure", 
             description: "![Mt. Titlis](/images/GrandExclusiveEurope/day8-MtTitlis.jpg)\n\nToday enjoy amazing scenery, a once in a lifetime experience with an exhilarating trip to the top of **Mt Titlis** at 3020 metres on various cable cars including Rotair, the world’s first revolving cable car. Get a breath taking unrestricted 360 degrees stunning view of the dazzling snow caped peak, deep crevasses and pristine white snow fields, dotted with massive ice boulders from every angle. Do not forget to visit the “Cliff Walk” the highest suspension bridge in Europe along the cliff of Mt.Titlis. Later proceed on an orientation tour of **Lucerne** one of most beautiful cities in Switzerland. Visit the Lion Monument, Kapell Brucke with some free time to shop for famous Swiss watches, knives and chocolates. Later enjoy a scenic and relaxing cruise on **Lake Lucerne**.\n\n**Overnight stay at the hotel in Central Switzerland. (Breakfast, Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day8-MtTitlis.jpg" 
           },
           { 
             day: 9, 
             title: "Visit the magnificent Rhine Falls. Visit Swarovski Crystal Museum – the dazzling world of crystals. Visit Innsbruck – The Tyrolean capital of picturesque Austria.", 
             activity: "Sightseeing", 
             description: "![Swarovski Crystal](/images/GrandExclusiveEurope/day9-Swarovski.jpg)\n\nToday after breakfast, sit back and enjoy the scenic drive towards Schaffhausen, where you see the magnificent **Rhine Falls** – Europe’s biggest and most spectacular falls. Next we proceed to Wattens, where you’ll have the opportunity to explore the **Swarovski World of Crystals** and be enchanted by the exquisite crystalline artworks on display. Following this captivating visit, we’ll continue on to **Innsbruck**, a city of extraordinary beauty. During our orientation tour, you’ll have the chance to admire the iconic **Golden Roof**, known for its fire-gilded copper tiles, which serves as a defining landmark of Innsbruck. Stroll along the charming cobblestone paths of Maria Theresien Strasse, where you can choose to relax at one of the many outdoor cafes. As you do so, you’ll be treated to magnificent baroque architecture and the chance to immerse yourself in the rich culture of medieval Europe. With the splendid Alps as a backdrop, the setting is nothing short of a picture-postcard perfect.\n\n**Overnight stay at the hotel in Innsbruck / Seefeld. (Breakfast, Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day9-Swarovski.jpg" 
           },
           { 
             day: 10, 
             title: "Welcome to Venice - the floating city of Italy. Enjoy Gondola ride.", 
             activity: "Sightseeing", 
             description: "![Venice](/images/GrandExclusiveEurope/day10-Venice.jpg)\n\nCheck out of your hotel and proceed towards **Venice** – Italy. City of Beautiful Monuments, Serpentine Canals, city that inspired poetry and passion through the ages. Arrive at the pier in Venice, where we board a private boat to arrive at **St. Mark’s Square** – the main square of Venice. View St Mark’s Basilica - one of the best examples of Byzantine architecture, Witness the famed Bell Tower and Clock Tower with the dominant sign of the Zodiac and current phase of the moon. See the Bridge of Sighs, made of white limestone, that passes over the Rio di Palazzo, connecting the old prisons with interrogations rooms at the Doge’s Palace. Treasure a romantic **Gondola ride** in a flat-bottomed Venetian rowing boat, amidst the stunning backdrop of baroque buildings. This truly is the best way to enjoy this enchanting city. We return to the pier and later check in to your hotel.\n\n**Overnight stay at the hotel in Padova/Ferrara. (Breakfast, Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day10-Venice.jpg" 
           },
           { 
             day: 11, 
             title: "Guided walking city tour of Florence. View the remarkable and famous Leaning Tower of Pisa.", 
             activity: "Sightseeing", 
             description: "![Florence Duomo](/images/GrandExclusiveEurope/day11-FlorenceDuomo.jpg)\n\nThis morning check out and drive to **Florence** – the cradle of the Renaissance. Along with your English-speaking local guide, walk and absorb into the culture of the historic city. View the **Duomo** – the city’s most iconic landmark, the Campanile and the Baptistery with its Gates to Paradise. Also see the Piazza Della Signoria – an open-air museum crammed with Renaissance sculptures, edged by historic cafes and presided over by the magnificent Palazzo Vecchio and the famed Ponte Vecchio (bridge) across the River Arno. Later proceed towards **Pisa**. On arrival see the Square of Miracles with the stupendous **Leaning Tower of Pisa**.\n\n**Overnight stay at the hotel in Tuscany region. (Breakfast, Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day11-FlorenceDuomo.jpg" 
           },
           { 
             day: 12, 
             title: "All roads lead to Rome – the eternal city. Visit the world’s smallest country – the Vatican City and see the St. Peter’s Basilica.", 
             activity: "Sightseeing", 
             description: "![Trevi Fountain](/images/GrandExclusiveEurope/day12-TreviFountain.jpg)\n\nToday, we drive to the eternal city of Rome. Our first destination is the **Vatican City**, the world's smallest independent country. Here, you'll have the opportunity to explore the exquisitely beautiful **St. Peter's Basilica**, where you can marvel at the magnificent works of art created by masters such as Michelangelo and Bernini.\n\nOur exploration of Rome continues to see the awe-inspiring **Colosseum**, an immense amphitheater that has endured the passage of centuries, retaining its grandeur and historical significance. Our next stop on the itinerary is the enchanting **Trevi Fountain**. According to legend, tossing a coin over your shoulder into the fountain guarantees your return to Rome, making it a cherished tradition among visitors. Check in to your hotel.\n\n**Overnight stay at the hotel in Rome. (Breakfast, Lunch, Dinner)**", 
             image: "/images/GrandExclusiveEurope/day12-TreviFountain.jpg" 
           },
           { 
             day: 13, 
             title: "Fly back home", 
             activity: "Departure", 
             description: "Your memorable holiday ends, today it’s time to fly back home. Say goodbye to the wonderful new friends you have made on the tour. Check out and depart for the Airport with pleasant memories of your European trip which you will cherish for a lifetime.\n\n**(Breakfast)**", 
             image: "/images/GrandExclusiveEurope/hero-image.jpg" 
           }
        ],
        sightseeing: [
          {
            country: "UNITED KINGDOM",
            city: "London",
            activities: [
              "City tour with a local guide",
              "Entrance to Madame Tussauds Wax Museum",
              "Ride the London Eye",
              "Entrance to Lord’s Cricket Ground"
            ]
          },
          {
            country: "FRANCE",
            city: "Paris",
            activities: [
              "City tour with a local guide",
              "Visit to the 3rd level of the Eiffel Tower",
              "Romantic cruise on River Seine",
              "Guided tour of Versailles Palace",
              "Full day excitement and thrill at Disneyland® Paris"
            ]
          },
          {
            country: "SWITZERLAND",
            city: "Geneva",
            activities: [
              "Orientation tour of Geneva",
              "See the Jet d’Eau"
            ]
          },
          {
            country: "SWITZERLAND",
            city: "Interlaken",
            activities: [
              "Excursion to Jungfraujoch - Top of Europe",
              "Visit scenic Interlaken"
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
              "Orientation tour of Lucerne",
              "Lake Lucerne Cruise"
            ]
          },
          {
            country: "SWITZERLAND",
            city: "Schaffhausen",
            activities: [
              "View the magnificent Rhine Falls"
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
              "Guided walking city tour with a local English-speaking guide"
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
              "Visit to Trevi Fountain"
            ]
          },
          {
            country: "VATICAN CITY",
            city: "Vatican City",
            activities: [
              "Visit the magnificent St. Peter’s Basilica"
            ]
          }
        ],
        route: [
          { city: "London", days: 2 },
          { city: "Paris", days: 3 },
          { city: "Geneva", days: 1 },
          { city: "Central Switzerland", days: 2 },
          { city: "Innsbruck/Seefeld", days: 1 },
          { city: "Padova/Ferrara", days: 1 },
          { city: "Tuscany", days: 1 },
          { city: "Rome", days: 1 }
        ],
        accommodation: [
          { title: "London (02 Nights)", hotel: "Atrium / Courtyard LHR or similar" },
          { title: "Paris (03 Nights)", hotel: "B&B / Millennium CDG or similar" },
          { title: "Geneva (01 Night)", hotel: "Everness / Movenpick or similar" },
          { title: "Central Switzerland (02 Nights)", hotel: "La Maison / Radisson or similar" },
          { title: "Innsbruck / Seefeld (01 Night)", hotel: "Alpenkoning / Hocheder or similar" },
          { title: "Padova / Ferrara (01 Night)", hotel: "Four Points by Sheraton / Blue Dream or similar" },
          { title: "Tuscany (01 Night)", hotel: "Park / Le Fonti or similar" },
          { title: "Rome (01 Night)", hotel: "SHG / Selene / Simon or similar" }
        ],
        meals: {
          inclusions: [
            "Daily Continental Buffet Breakfast.",
            "11 Indian Jain/Vegetarian/Non-Vegetarian Lunches.",
            "12 Indian Jain/Vegetarian/Non-Vegetarian Dinners.",
            "Daily Mineral Water Bottle (500ml) per person"
          ],
          note: "(Packed lunch will be served on the day you travel to Paris via Eurostar, on the day of Disneyland Paris and when the group drives to Geneva)",
          driverTips: "Tips to coach drivers for the duration of the tour is included."
        },
        exclusions: [
          { description: "The cost of the Airfare, Visa charges, Overseas Travel Insurance, etc." },
          { description: "Any expenses of personal nature such as Porterage, Laundry, and Alcohol, Food or Drink not in the regular menus provided by us, mini bar and telephone calls" },
          { description: "Any extra meals not included in the itinerary. Meals are pre - set and a choice of menu is not available" },
          { description: "Cost of excursions, city sightseeing, entrance fees and local guides availed of by the passengers, other than that mentioned in 'What your tour price includes'" },
          { description: "Anything which is not specified in the Itinerary" }
        ],
        detailedHighlights: [
          "Value-for-Money holiday which you will cherish for a lifetime",
          "Visit 6 countries in 13 days: United Kingdom, France, Switzerland, Austria, Italy & Vatican City",
          "All Important attractions and sightseeing included: Madame Tussauds, London Eye, Lord’s Cricket Ground, Eurostar train from London to Paris, Guided tour of Versailles Palace, Eiffel Tower 3rd level, Full day at Disneyland® Paris, River Seine Cruise, Excursion to Jungfrau included, Entrance to Mt. Titlis, Swarovski Crystal Museum, Visit to St. Mark’s Square with Gondola Ride, Photo stop at Leaning Tower of Pisa and Visit Vatican City with St. Peter’s Basilica.",
          "Guided tour in London, Paris & Florence",
          "Services of a Professional & Knowledgeable Tour Manager accompanying you throughout the tour",
          "Accommodation in superior 4-star hotels",
          "Daily Continental buffet breakfast.",
          "Delicious unlimited variety of Jain, veg and nonveg Indian cuisine included as per itinerary.",
          "Daily Mineral Water Bottle (500ml) per person",
          "Driver tips included"
        ],
        additionalDelights: []
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
        ,
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ,
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ],
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ,
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ,
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ,
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ,
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ],
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ,
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ],
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ],
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ],
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
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
        ],
        sightseeing: [],
        accommodation: [],
        meals: { inclusions: [] },
        exclusions: [],
        detailedHighlights: [],
        additionalDelights: []
      }
    ]
  },
];
