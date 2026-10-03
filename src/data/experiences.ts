import type { Experience } from '../types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'classical-music-evening',
    title: 'Classical Music Evening',
    category: 'Music',
    duration: '2 hours',
    price: 1000,
    priceFormatted: '₹1000',
    badge: 'Limited Seats',
    description: 'Experience the divine blend of classical music in a heritage setting. Featuring renowned artists, sitar masters, and live baithak performances in an authentic courtyard setting.',
    highlights: [
      'Live classical music performance featuring Sitar, Sarod and Tabla',
      'Historic venue with traditional baithak ambience and floor seating',
      'Curated lineup of celebrated Pune gharana artists',
      'Welcome herbal infusion and traditional refreshments included'
    ],
    included: [
      'Reserved floor seating / chair seating in the heritage courtyard',
      'Artisan welcome tea & snacks',
      'Interactive Q&A session with the performing maestros',
      'Souvenir program booklet on Pune’s classical musical heritage'
    ],
    image: '/images/experiences/classical-music.jpg',
    location: 'Historic Wada Courtyard, Sadashiv Peth, Pune',
    latitude: 18.5135,
    longitude: 73.8530,
    upcomingDates: [
      { date: '12 March 2027', time: '6:00 PM – 8:00 PM', seatsLeft: 8 },
      { date: '25 March 2027', time: '6:00 PM – 8:00 PM', seatsLeft: 14 },
      { date: '08 April 2027', time: '6:30 PM – 8:30 PM', seatsLeft: 18 },
      { date: '22 April 2027', time: '6:30 PM – 8:30 PM', seatsLeft: 22 }
    ]
  },
  {
    id: 'traditional-maharashtrian-feast',
    title: 'Traditional Maharashtrian Culinary Feast',
    category: 'Food',
    duration: '2.5 hours',
    price: 750,
    priceFormatted: '₹750',
    badge: 'Best Seller',
    description: 'Savor an authentic multicourse Maharashtrian dining feast served on fresh banana leaves. Learn about heritage recipes, spices of the Western Ghats, and the cultural philosophy of Marathi dining.',
    highlights: [
      'Full royal Thali including Puran Poli, Pitla-Bhakri, Kothimbir Vadi, and Solkadhi',
      'Guided culinary narrative explaining the placement of salt, lemon, chutneys, and sweets',
      'Live demonstration of rolling paper-thin hot Puran Poli with pure ghee',
      'Hosted inside a 120-year-old family dining hall in Old Pune'
    ],
    included: [
      'Complete unlimited traditional banquet thali',
      'Welcome Aam Panna or Solkadhi drink',
      'Recipe cards for 4 traditional heritage dishes',
      'Interaction with heritage culinary historians'
    ],
    image: '/images/experiences/maharashtrian-food.jpg',
    location: 'Heritage Dining Hall, Shaniwar Peth, Pune',
    latitude: 18.5190,
    longitude: 73.8548,
    upcomingDates: [
      { date: '14 March 2027', time: '12:30 PM – 3:00 PM', seatsLeft: 12 },
      { date: '20 March 2027', time: '7:30 PM – 10:00 PM', seatsLeft: 6 },
      { date: '28 March 2027', time: '12:30 PM – 3:00 PM', seatsLeft: 16 }
    ]
  },
  {
    id: 'paithani-weaving-workshop',
    title: 'Paithani & Puneri Pagadi Handloom Workshop',
    category: 'Workshops',
    duration: '3 hours',
    price: 1200,
    priceFormatted: '₹1200',
    badge: 'Hands-on',
    description: 'Immerse yourself in the centuries-old textile heritage of Maharashtra. Meet master weavers, try your hand at the shuttle on a traditional wooden loom, and learn how the regal Puneri Pagadi is crafted.',
    highlights: [
      'Live demonstration of pure silk and gold zari Paithani weaving',
      'Hands-on session: learn the intricate interlocking tapestry technique',
      'Learn the story and origami folds behind Lokmanya Tilak’s famous Puneri Pagadi',
      'Direct purchase opportunity from authentic cooperative handloom weavers'
    ],
    included: [
      'Hands-on weaving materials and miniature sample to take home',
      'Puneri Pagadi souvenir keepsake',
      'Traditional tea & Marathi savories',
      'Guided tour of the heritage textile studio'
    ],
    image: '/images/experiences/paithani-workshop.jpg',
    location: 'Artisan Guild, Budhwar Peth, Pune',
    latitude: 18.5168,
    longitude: 73.8560,
    upcomingDates: [
      { date: '16 March 2027', time: '10:00 AM – 1:00 PM', seatsLeft: 10 },
      { date: '23 March 2027', time: '2:30 PM – 5:30 PM', seatsLeft: 8 },
      { date: '30 March 2027', time: '10:00 AM – 1:00 PM', seatsLeft: 12 }
    ]
  },
  {
    id: 'heritage-photography-masterclass',
    title: 'Heritage Photography Masterclass',
    category: 'Art',
    duration: '3 hours',
    price: 850,
    priceFormatted: '₹850',
    badge: 'Popular',
    description: 'Capture the golden light playing across centuries-old wada balconies, stone arches, and bustling bazaar alleys. Led by award-winning architectural photographers.',
    highlights: [
      'Golden hour walking shoot around Shaniwar Wada and old Peth streets',
      'Master composition techniques for historic woodwork and stone textures',
      'Guidance for both DSLR and smartphone photography',
      'Group photo critique and review over cutting chai'
    ],
    included: [
      'Expert architectural photography mentorship',
      'Access to private wada courtyards normally closed to casual tourists',
      'Curated digital guidebook on heritage street photography in India',
      'Hot chai and Pune bakery biscuits'
    ],
    image: '/images/experiences/photography-walk.jpg',
    location: 'Meeting at Delhi Gate, Shaniwar Wada, Pune',
    latitude: 18.5191,
    longitude: 73.8555,
    upcomingDates: [
      { date: '15 March 2027', time: '4:00 PM – 7:00 PM', seatsLeft: 6 },
      { date: '21 March 2027', time: '6:30 AM – 9:30 AM', seatsLeft: 10 },
      { date: '29 March 2027', time: '4:00 PM – 7:00 PM', seatsLeft: 8 }
    ]
  },
  {
    id: 'pottery-workshop',
    title: 'Traditional Clay Pottery & Idol Crafting',
    category: 'Workshops',
    duration: '2 hours',
    price: 600,
    priceFormatted: '₹600',
    badge: 'Family Friendly',
    description: 'Work with organic Pen river clay (Shadu maati) guided by traditional potters from the Kumbar ves of Kasba Peth. Shape your own terracotta lamp or eco-friendly Ganesha idol.',
    highlights: [
      'Learn the ancient technique of potter wheel spinning and centering',
      'Create eco-friendly clay art using natural red river clay',
      'Hear stories of Kumbhar ves—the ancient potters’ quarter of Pune',
      'Take home your dried handcrafted terracotta creation'
    ],
    included: [
      'All natural clay, sculpting tools, and pottery wheel access',
      'Firing/baking instructions and protective packaging',
      'Apron and studio cleanup provided',
      'Refreshments'
    ],
    image: '/images/experiences/pottery-workshop.jpg',
    location: 'Kumbhar Ves, Kasba Peth, Pune',
    latitude: 18.5215,
    longitude: 73.8580,
    upcomingDates: [
      { date: '18 March 2027', time: '11:00 AM – 1:00 PM', seatsLeft: 15 },
      { date: '24 March 2027', time: '3:00 PM – 5:00 PM', seatsLeft: 12 },
      { date: '31 March 2027', time: '11:00 AM – 1:00 PM', seatsLeft: 20 }
    ]
  },
  {
    id: 'pune-food-trail',
    title: 'Pune Heritage Food Trail',
    category: 'Food',
    duration: '2.5 hours',
    price: 550,
    priceFormatted: '₹550',
    badge: 'Must Try',
    description: 'Eat your way through a century of culinary heritage! Taste fiery Misal at legendary 1910 cafes, sample world-famous Chitale Bakarwadi fresh from the kitchen, and cool down with creamy Mango Mastani.',
    highlights: [
      '6 distinct tasting stops across historic Peth alleys',
      'Skip-the-line privileges at iconic confectionery institutions',
      'Stories of how food shaped the social life of the Peshwas and college youth',
      'All food tastings and beverages included'
    ],
    included: [
      'All food samples, snacks, and dessert drinks',
      'Bottled drinking water',
      'Experienced culinary storyteller and local food historian',
      'Pune culinary souvenir gift pack'
    ],
    image: '/images/walks/food-walk.jpg',
    location: 'Appa Balwant Chowk, Pune',
    latitude: 18.5170,
    longitude: 73.8535,
    upcomingDates: [
      { date: '13 March 2027', time: '8:30 AM – 11:00 AM', seatsLeft: 8 },
      { date: '19 March 2027', time: '4:30 PM – 7:00 PM', seatsLeft: 10 },
      { date: '27 March 2027', time: '8:30 AM – 11:00 AM', seatsLeft: 14 }
    ]
  }
];
