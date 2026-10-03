import type { Walk } from '../types';

export const WALKS: Walk[] = [
  {
    id: 'peshwa-heritage-walk',
    title: 'Peshwa Heritage Walk',
    category: 'Heritage',
    distance: '3.2 km',
    duration: '1 hr 45 min',
    difficulty: 'Easy',
    description: 'Walk through the epic heart of the Maratha Empire. From the towering fortified gates of Shaniwar Wada to the childhood palace of Shivaji Maharaj, sacred patron shrines, and the carved teakwood splendor of Vishrambaug Wada.',
    image: '/images/monuments/shaniwar-wada-hero.jpg',
    startPoint: 'Shaniwar Wada (Delhi Gate)',
    endPoint: 'Vishrambaug Wada (Bajirao Road)',
    routeCoordinates: [
      [18.5191, 73.8555],
      [18.5197, 73.8569],
      [18.5208, 73.8576],
      [18.5173, 73.8562],
      [18.5135, 73.8530]
    ],
    stops: [
      {
        id: 'stop-1',
        name: 'Shaniwar Wada (Dilli Darwaza)',
        category: 'Fortress',
        distanceFromPrev: '0 m (Start)',
        estimatedTime: '45 mins',
        description: 'Begin at the monumental Delhi Gate with its elephant-deterring iron spikes and stone ramparts built in 1732 by Peshwa Baji Rao I.',
        latitude: 18.5191,
        longitude: 73.8555,
        monumentId: 'shaniwar-wada',
        image: '/images/monuments/shaniwar-wada-hero.jpg',
        storyChapter: 'The foundation stone of Shaniwar Wada was laid on a Saturday in 1730 by Bajirao the First.'
      },
      {
        id: 'stop-2',
        name: 'Lal Mahal',
        category: 'Palace',
        distanceFromPrev: '450 m',
        estimatedTime: '30 mins',
        description: 'Cross into Kasba Peth to visit the legendary Red Palace where young Shivaji Maharaj trained and executed the midnight strike against Shaista Khan in 1663.',
        latitude: 18.5197,
        longitude: 73.8569,
        monumentId: 'lal-mahal',
        image: '/images/monuments/lal-mahal.jpg',
        storyChapter: 'In 1663, Shivaji Maharaj led a legendary stealth raid right inside Lal Mahal.'
      },
      {
        id: 'stop-3',
        name: 'Kasba Ganapati Temple',
        category: 'Temple',
        distanceFromPrev: '300 m',
        estimatedTime: '20 mins',
        description: 'Offer respects at Pune’s ancient Gramdaivat temple established by Rajmata Jijabai in 1630, honored as Manacha Pahila Ganpati.',
        latitude: 18.5208,
        longitude: 73.8576,
        monumentId: 'kasba-ganapati',
        image: '/images/monuments/kasba-ganapati.jpg',
        storyChapter: 'The Gramdaivat is the first deity to lead Pune’s iconic Ganesh Visarjan procession.'
      },
      {
        id: 'stop-4',
        name: 'Vishrambaug Wada',
        category: 'Wada',
        distanceFromPrev: '1.1 km',
        estimatedTime: '40 mins',
        description: 'Conclude the trail at the 1807 residence of Peshwa Bajirao II, marveling at hand-carved teakwood pillars and the famous Meghdambari balcony.',
        latitude: 18.5135,
        longitude: 73.8530,
        monumentId: 'vishrambaug-wada',
        image: '/images/monuments/vishrambaug-wada.jpg',
        storyChapter: 'Built in 1807, Vishrambaug Wada showcases the pinnacle of Maratha teakwood artistry.'
      }
    ]
  },
  {
    id: 'old-peths-walk',
    title: 'Old Peths Walk',
    category: 'Culture',
    distance: '2.5 km',
    duration: '2 hrs',
    difficulty: 'Easy',
    description: 'Explore the narrow lanes, historic wadas and vibrant local culture of Pune’s historical wards. Feel the buzz of Tulshibaug, historic brassware alleys, and centuries-old spice markets.',
    image: '/images/walks/peths-walk.jpg',
    startPoint: 'Shaniwar Peth',
    endPoint: 'Mahatma Phule Mandai',
    routeCoordinates: [
      [18.5191, 73.8555],
      [18.5164, 73.8561],
      [18.5158, 73.8555],
      [18.5130, 73.8550]
    ],
    stops: [
      {
        id: 'op-1',
        name: 'Shaniwar Peth Heritage Alleys',
        category: 'Historic Neighborhood',
        distanceFromPrev: '0 m (Start)',
        estimatedTime: '25 mins',
        description: 'Wander past traditional timber framed houses and copper-craft shops established during the Peshwa administration.',
        latitude: 18.5191,
        longitude: 73.8555,
        image: '/images/monuments/shaniwar-wada-hero.jpg'
      },
      {
        id: 'op-2',
        name: 'Dagdusheth Halwai Ganapati Temple',
        category: 'Temple',
        distanceFromPrev: '600 m',
        estimatedTime: '30 mins',
        description: 'Witness the gilded marble shrine founded in 1893 that sparked the mass public freedom movement via Sarvajanik Ganeshotsav.',
        latitude: 18.5164,
        longitude: 73.8561,
        monumentId: 'dagdusheth-ganapati',
        image: '/images/monuments/dagdusheth-ganapati.jpg'
      },
      {
        id: 'op-3',
        name: 'Tulshibaug Ram Temple & Bazaar',
        category: 'Bazaar & Shrine',
        distanceFromPrev: '250 m',
        estimatedTime: '35 mins',
        description: 'Immerse yourself in Pune’s most vibrant traditional bazaar, home to glass bangles, copper idols, and a soaring 18th-century temple spire.',
        latitude: 18.5158,
        longitude: 73.8555,
        image: '/images/walks/peths-walk.jpg'
      },
      {
        id: 'op-4',
        name: 'Mahatma Phule Mandai',
        category: 'Colonial Architecture',
        distanceFromPrev: '450 m',
        estimatedTime: '30 mins',
        description: 'Admire the 1885 gothic basalt market building with its soaring 80-foot central octagonal tower and lively fresh produce market.',
        latitude: 18.5130,
        longitude: 73.8550,
        image: '/images/walks/food-walk.jpg'
      }
    ]
  },
  {
    id: 'wada-trail',
    title: 'Wada Trail',
    category: 'Heritage',
    distance: '3.0 km',
    duration: '3 hrs',
    difficulty: 'Moderate',
    description: 'Visit iconic wadas and learn about the Peshwas and early social reformers. Discover courtyards with hidden cisterns, timber colonnades, and historic meeting rooms.',
    image: '/images/walks/wada-trail.jpg',
    startPoint: 'Vishrambaug Wada',
    endPoint: 'Bhide Wada',
    routeCoordinates: [
      [18.5135, 73.8530],
      [18.5175, 73.8540],
      [18.5173, 73.8562],
      [18.5191, 73.8555]
    ],
    stops: [
      {
        id: 'wt-1',
        name: 'Vishrambaug Wada',
        category: 'Wada',
        distanceFromPrev: '0 m (Start)',
        estimatedTime: '45 mins',
        description: 'Examine the intricate woodwork, open courtyards, and museum galleries on Bajirao Road.',
        latitude: 18.5135,
        longitude: 73.8530,
        monumentId: 'vishrambaug-wada',
        image: '/images/monuments/vishrambaug-wada.jpg'
      },
      {
        id: 'wt-2',
        name: 'Nana Wada',
        category: 'Wada',
        distanceFromPrev: '900 m',
        estimatedTime: '35 mins',
        description: 'Constructed in 1780 by Nana Phadnavis, the chief administrator of the Peshwas, famed for its cypress timber hall and fortress-like austerity.',
        latitude: 18.5175,
        longitude: 73.8540,
        image: '/images/walks/wada-trail.jpg'
      },
      {
        id: 'wt-3',
        name: 'Bhide Wada',
        category: 'Historic School',
        distanceFromPrev: '400 m',
        estimatedTime: '35 mins',
        description: 'Pay tribute at the birthplace of modern Indian girls’ education founded in 1848 by Savitribai and Jyotirao Phule.',
        latitude: 18.5173,
        longitude: 73.8562,
        monumentId: 'bhide-wada',
        image: '/images/monuments/bhide-wada.jpg'
      }
    ]
  },
  {
    id: 'riverside-walk',
    title: 'Riverside Walk',
    category: 'Nature',
    distance: '2.0 km',
    duration: '1 hr 30 min',
    difficulty: 'Easy',
    description: 'A peaceful walk along the Mutha river with heritage ghats, ancient Shiva temples, and stone bridges carrying centuries of Pune lore.',
    image: '/images/walks/riverside-walk.jpg',
    startPoint: 'Omkareshwar Mandir Ghat',
    endPoint: 'Z-Bridge Promenade',
    routeCoordinates: [
      [18.5201, 73.8475],
      [18.5220, 73.8490],
      [18.5270, 73.8498]
    ],
    stops: [
      {
        id: 'rw-1',
        name: 'Omkareshwar Temple & Ghat',
        category: 'Temple Ghat',
        distanceFromPrev: '0 m (Start)',
        estimatedTime: '35 mins',
        description: 'Constructed in 1738 by Shivaram Bhat Chitrav with donations from Chimaji Appa, featuring stone steps descending into the holy Mutha waters.',
        latitude: 18.5201,
        longitude: 73.8475,
        image: '/images/walks/riverside-walk.jpg'
      },
      {
        id: 'rw-2',
        name: 'Mutha Riverfront Heritage Path',
        category: 'Riverfront',
        distanceFromPrev: '700 m',
        estimatedTime: '30 mins',
        description: 'Stroll along the river promenade flanked by ancient banyan trees and historic river crossings connecting Peth areas to Deccan Gymkhana.',
        latitude: 18.5220,
        longitude: 73.8490,
        image: '/images/walks/riverside-walk.jpg'
      },
      {
        id: 'rw-3',
        name: 'Pataleshwar Cave Temple',
        category: 'Cave Temple',
        distanceFromPrev: '850 m',
        estimatedTime: '40 mins',
        description: 'End at Pune’s oldest 8th-century rock-cut Rashtrakuta monolithic cave temple.',
        latitude: 18.5270,
        longitude: 73.8498,
        monumentId: 'pataleshwar-cave',
        image: '/images/monuments/pataleshwar-cave.jpg'
      }
    ]
  },
  {
    id: 'pune-food-heritage-walk',
    title: 'Pune Food Heritage Walk',
    category: 'Food',
    distance: '2.2 km',
    duration: '2 hrs',
    difficulty: 'Easy',
    description: 'Taste the iconic flavors of old Pune: spicy Puneri Misal, famous Bakarwadi from Chitale Bandhu, thick mango Mastani, and fresh Puran Poli.',
    image: '/images/experiences/maharashtrian-food.jpg',
    startPoint: 'Vaidya Upahar Gruha',
    endPoint: 'Sujata Mastani (Sadashiv Peth)',
    routeCoordinates: [
      [18.5185, 73.8560],
      [18.5160, 73.8540],
      [18.5140, 73.8510],
      [18.5120, 73.8500]
    ],
    stops: [
      {
        id: 'pf-1',
        name: 'Vaidya Upahar Gruha',
        category: 'Culinary Heritage',
        distanceFromPrev: '0 m (Start)',
        estimatedTime: '30 mins',
        description: 'Operating since 1910, famous for serving authentic fiery green-chili Puneri Misal.',
        latitude: 18.5185,
        longitude: 73.8560,
        image: '/images/walks/food-walk.jpg'
      },
      {
        id: 'pf-2',
        name: 'Chitale Bandhu Mithaiwale',
        category: 'Iconic Sweets',
        distanceFromPrev: '450 m',
        estimatedTime: '25 mins',
        description: 'Pune’s legendary confectioner, globally famous for crispy sweet-and-spicy Bakarwadi and Amba Barfi.',
        latitude: 18.5160,
        longitude: 73.8540,
        image: '/images/experiences/maharashtrian-food.jpg'
      },
      {
        id: 'pf-3',
        name: 'Sujata Mastani',
        category: 'Dessert Heritage',
        distanceFromPrev: '600 m',
        estimatedTime: '25 mins',
        description: 'Invented in Pune and named after Peshwa Baji Rao’s beloved Mastani, this thick milk shake crowned with ice cream and nuts is legendary.',
        latitude: 18.5120,
        longitude: 73.8500,
        image: '/images/experiences/maharashtrian-food.jpg'
      }
    ]
  }
];
