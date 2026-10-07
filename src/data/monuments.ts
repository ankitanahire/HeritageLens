import type { Monument } from '../types';

export const MONUMENTS: Monument[] = [
  {
    id: 'shaniwar-wada',
    name: 'Shaniwar Wada',
    category: 'Fort',
    area: 'Shaniwar Peth',
    historicalPeriod: '18th century (1730–1732 CE)',
    shortDescription: 'The fortified 18th-century headquarters of the Maratha Peshwas, founded by Peshwa Baji Rao I. Protected heritage monument under ASI.',
    description: 'Shaniwar Wada is a historic 18th-century fortification located in the heart of Pune. Commissioned on Saturday, January 10, 1730 by Peshwa Baji Rao I—Prime Minister to Chhatrapati Shahu I—it served as the seat of political authority for the Maratha Empire until 1818. Famous for its imposing basalt ramparts, nine bastions, and the colossal Dilli Darwaza fitted with iron elephant spikes, the complex once housed seven-storeyed wooden palaces before being devastated by a massive seven-day fire in 1828. Today, it is conserved and protected by the Archaeological Survey of India (ASI).',
    openingHours: '9:00 AM – 5:30 PM (Daily)',
    entryFee: '₹25 (Indian Nationals & SAARC) / ₹300 (Foreign Nationals)',
    estimatedTime: '1 – 2 hours',
    latitude: 18.5191,
    longitude: 73.8555,
    heroImage: '/images/monuments/shaniwar-wada-night.png',
    gallery: [
      '/images/monuments/shaniwar-wada-hero.jpg',
      '/images/monuments/shaniwar-wada-night.jpg',
      '/images/monuments/shaniwar-wada-then.png'
    ],
    history: {
      builtYear: '1730–1732 CE',
      builder: 'Peshwa Baji Rao I',
      significance: 'Administrative and military headquarters of the Maratha Confederacy until the Third Anglo-Maratha War in 1818.',
      architectureStyle: 'Maratha Fortified Palace blending Mughal stone masonry with carved teakwood framing, featuring 5 ceremonial gates (Dilli, Mastani, Khidki, Ganesh, and Jambhul Darwaza).',
      keyEvents: [
        { year: '1730', event: 'Ceremonial foundation stone laid on a Saturday (Shaniwar) by Peshwa Baji Rao I.' },
        { year: '1732', event: 'Formal housewarming ceremony (Vastu Shanti) after completing the primary palace structures at a cost of ₹16,110.' },
        { year: '1773', event: 'Peshwa Narayanrao assassinated inside the palace complex during an internal coup.' },
        { year: '1818', event: 'Surrendered to the British East India Company following the Battle of Khadki; British Union Jack hoisted on the ramparts.' },
        { year: '1828', event: 'A catastrophic fire raged for seven days, gutting the multi-storeyed wooden residential palaces.' },
        { year: '1919', event: 'Declared a protected monument under the Archaeological Survey of India (ASI).' }
      ]
    },
    thenNow: {
      thenImage: '/images/monuments/shaniwar-wada-then.png',
      nowImage: '/images/monuments/shaniwar-wada-hero.jpg',
      thenLabel: '1820 Historical Painting & Lithograph',
      nowLabel: 'Conserved Delhi Gate & Stone Bastions',
      description: 'Historical records from 1820 document the multi-tiered wooden balconies and seven-storey residences inside the fortified curtain walls before the devastating 1828 fire.'
    },
    audioNarration: {
      title: 'The Fortress of the Peshwas: Shaniwar Wada',
      totalDuration: '03:45',
      chapters: [
        {
          id: 'ch-1',
          title: '01 — Foundation by Baji Rao I',
          duration: '00:52',
          text: 'On Saturday, January 10th, 1730, Peshwa Baji Rao the First—the undefeated military commander and Prime Minister of the Maratha Empire—laid the foundation stone for this fortified capital. Because the auspicious ritual took place on a Saturday, known as Shaniwar in Marathi, the fort was christened Shaniwar Wada. Teak was transported from the forests of Junnar, stone came from the basalt quarries of Chinchwad, and limestone was brought from Jejuri.'
        },
        {
          id: 'ch-2',
          title: '02 — Seat of Imperial Power',
          duration: '01:05',
          text: 'Throughout the 18th century, Shaniwar Wada functioned as the nerve center of the Maratha Confederacy. From this compound, administrative treaties governed vast territories across the Indian subcontinent. The inner fortress encompassed seven storied residential wings, including the Thorlya Rayancha Diwankhana, the Juna Aarse Mahal, and the famed Hazari Karanje—a lotus-shaped fountain engineered with one thousand synchronized water jets.'
        },
        {
          id: 'ch-3',
          title: '03 — The Fire of 1828 & Decline',
          duration: '00:58',
          text: 'Following the Third Anglo-Maratha War in 1818, British forces occupied the wada and established military offices. On February 27th, 1828, an immense fire broke out within the palace quarters. Fueled by dry seasoned teakwood timber, the inferno raged unabated for seven days, reducing the intricate upper storeys and courtyards to their enduring stone foundations.'
        },
        {
          id: 'ch-4',
          title: '04 — Archaeological Conservation Today',
          duration: '00:50',
          text: 'Today, the Archaeological Survey of India protects the towering stone ramparts, the fortified semi-circular bastions, and the colossal Dilli Darwaza—replete with 72 sharp steel elephant deterrent spikes. Shaniwar Wada remains an eternal symbol of Maratha pride and civic identity in Pune.'
        }
      ]
    },
    nearbyExperienceIds: ['classical-music-evening', 'pune-food-trail', 'peths-heritage-walk']
  },
  {
    id: 'vishrambaug-wada',
    name: 'Vishrambaug Wada',
    category: 'Wada',
    area: 'Sadashiv Peth',
    historicalPeriod: '19th century (1807–1811 CE)',
    shortDescription: 'The 1807 mansion of Peshwa Baji Rao II, celebrated for its exquisite hand-carved teakwood facade and cypress pillars. Grade-I Heritage site.',
    description: 'Vishrambaug Wada is an opulent three-storey historic mansion situated at the junction of Thorale Bajirao Road and Laxmi Road in Pune. Built between 1807 and 1811 by Peshwa Baji Rao II at an estimated cost of ₹200,000, it served as the last Peshwa’s favored private residence and retreat. The building is renowned across India as a quintessential specimen of late Maratha timber architecture, highlighted by its Suru (cypress-shaped) carved teak pillars, ornamental wooden brackets, Meghdambari balcony, and three tranquil inner courtyards. After 1818, it served as an incubator for premier educational institutes like Deccan College and College of Engineering Pune, and is now preserved as a Grade-I heritage monument by the Pune Municipal Corporation (PMC).',
    openingHours: '10:00 AM – 5:00 PM (Tuesday to Sunday, Closed Mondays)',
    entryFee: '₹10 (General Entry) / ₹5 (Children)',
    estimatedTime: '45 mins – 1 hour',
    latitude: 18.5135,
    longitude: 73.8530,
    heroImage: '/images/monuments/vishrambaug-wada.png',
    gallery: [
      '/images/monuments/vishrambaug-wada.png',
      '/images/walks/wada-trail.png'
    ],
    history: {
      builtYear: '1807–1811 CE',
      builder: 'Peshwa Baji Rao II',
      significance: 'Private residence of the last Maratha Peshwa and birth site of early modern educational institutions in Pune.',
      architectureStyle: 'Classic Maratha Wada style with introverted triple courtyards (Chowks), suru-style teakwood columns, terracotta tiling, and carved Meghdambari viewing balconies.',
      keyEvents: [
        { year: '1807', event: 'Construction commenced under the patronage of Peshwa Baji Rao II as a private leisure residence.' },
        { year: '1818', event: 'Surrendered to the British administration following the Battle of Khadki and Baji Rao II’s exile to Bithoor.' },
        { year: '1821', event: 'Pune Sanskrit Pathshala founded here by Mountstuart Elphinstone, laying the roots for Deccan College.' },
        { year: '1930', event: 'Purchased by the Pune Municipal Corporation (PMC) from the Bombay Presidency government for ₹100,000.' },
        { year: '2004', event: 'Comprehensive heritage conservation completed under PMC and INTACH, creating a Maratha history museum curated by Babasaheb Purandare.' }
      ]
    },
    thenNow: {
      thenImage: '/images/walks/wada-trail.png',
      nowImage: '/images/monuments/vishrambaug-wada.png',
      thenLabel: 'Historic Carved Teakwood Balcony',
      nowLabel: 'Restored Heritage Facade on Bajirao Road',
      description: 'The distinctive warm ochre and terracotta facade with hand-carved teakwood pillars on Bajirao Road has been painstakingly conserved to its 1807 glory.'
    },
    audioNarration: {
      title: 'Timber Mastery: Vishrambaug Wada',
      totalDuration: '03:10',
      chapters: [
        {
          id: 'vw-1',
          title: '01 — The Last Peshwa’s Retreat',
          duration: '00:50',
          text: 'Completed in 1811 by the last Peshwa, Baji Rao the Second, Vishrambaug Wada was conceived not as a defensive stronghold like Shaniwar Wada, but as a luxurious residential haven—aptly named Vishram, meaning rest and leisure. It was built at an extraordinary expenditure of two lakh rupees.'
        },
        {
          id: 'vw-2',
          title: '02 — Architectural Splendor',
          duration: '01:05',
          text: 'The wada’s street facade on Bajirao Road features some of the finest woodcraft of the late Maratha era. Slender teakwood pillars carved in the form of cypress trees—known as Suru pillars—support an open projecting balcony called the Meghdambari, where classical musicians and dancers once performed for the court.'
        },
        {
          id: 'vw-3',
          title: '03 — Cradle of Education and Memory',
          duration: '01:15',
          text: 'Following British annexation in 1818, Vishrambaug Wada became an intellectual nucleus, housing the Sanskrit Pathshala, Deccan College, and the College of Engineering. Today, maintained by the Pune Municipal Corporation, its upper halls house "Punawadi te Punyanagari"—a museum narrating the rich historical evolution of Pune.'
        }
      ]
    },
    nearbyExperienceIds: ['paithani-weaving-workshop', 'peths-heritage-walk', 'traditional-maharashtrian-feast']
  },
  {
    id: 'lal-mahal',
    name: 'Lal Mahal',
    category: 'Palace',
    area: 'Kasba Peth',
    historicalPeriod: '17th century (1630 CE; Reconstructed 1988)',
    shortDescription: 'The historic Red Palace where Chhatrapati Shivaji Maharaj spent his boyhood and staged the famous 1663 raid against Shaista Khan.',
    description: 'Lal Mahal (the Red Palace) is one of Pune’s most venerated historical memorials, situated in Kasba Peth adjacent to Shaniwar Wada. Originally constructed in 1630 CE by Shahaji Raje Bhosale for his wife Rajmata Jijabai and their young son Shivaji, it served as the cradle where Shivaji Maharaj spent his formative childhood and received education in statecraft and warfare under the guardianship of Dadoji Konddeo. It was here in April 1663 that Shivaji Maharaj executed his legendary midnight counter-assault against Mughal viceroy Shaista Khan. While the original mud-and-brick wada fell to decay over centuries, the Pune Municipal Corporation reconstructed the red-stone memorial on the historic site in 1988.',
    openingHours: '9:00 AM – 1:00 PM, 4:00 PM – 8:00 PM (Daily)',
    entryFee: '₹10 (Adults) / ₹5 (Children)',
    estimatedTime: '45 mins',
    latitude: 18.5197,
    longitude: 73.8569,
    heroImage: '/images/monuments/lal-mahal.jpg',
    gallery: [
      '/images/monuments/lal-mahal.jpg'
    ],
    history: {
      builtYear: '1630 CE (Reconstructed 1988 CE)',
      builder: 'Shahaji Raje Bhosale / Reconstruction by Pune Municipal Corporation',
      significance: 'Childhood home of Chhatrapati Shivaji Maharaj, site of his first marriage to Saibai, and location of the historic 1663 surgical raid against Shaista Khan.',
      architectureStyle: 'Traditional red-stone memorial architecture with arched jharokhas, chhatris, and commemorative historical galleries.',
      keyEvents: [
        { year: '1630', event: 'Shahaji Raje commissions Lal Mahal to re-establish the town of Pune for Jijabai and young Shivaji.' },
        { year: '1640', event: 'Shivaji Maharaj weds Maharani Saibai at the Lal Mahal premises.' },
        { year: '1663', event: 'On April 5, Shivaji Maharaj and 400 soldiers execute a daring night raid on Mughal viceroy Shaista Khan inside the palace.' },
        { year: '1988', event: 'PMC inaugurates the reconstructed Lal Mahal memorial with statues and historic murals.' }
      ]
    },
    audioNarration: {
      title: 'Cradle of Swarajya: Lal Mahal',
      totalDuration: '03:15',
      chapters: [
        {
          id: 'lm-1',
          title: '01 — Rebuilding Pune in 1630',
          duration: '00:55',
          text: 'In 1630, Pune was a war-ravaged, desolate outpost. Shahaji Raje Bhosale commissioned the construction of Lal Mahal as a secure residence for Rajmata Jijabai and the young prince Shivaji. Together with administrator Dadoji Konddeo, Jijabai plowed the fields with a ceremonial golden plough to restore faith and prosperity among the citizens.'
        },
        {
          id: 'lm-2',
          title: '02 — The Midnight Strike on Shaista Khan',
          duration: '01:20',
          text: 'In 1663, Mughal general Shaista Khan occupied Pune and took up residence in Lal Mahal with a massive imperial garrison. On the night of April 5th, Shivaji Maharaj led a hand-picked detachment of 400 Mavala warriors disguised as a wedding party. Infiltrating the palace kitchen, they struck with precision; Shaista Khan escaped into the darkness through a courtyard window, losing three fingers to Shivaji Maharaj’s sword.'
        },
        {
          id: 'lm-3',
          title: '03 — The Modern Memorial',
          duration: '01:00',
          text: 'The reconstructed Lal Mahal stands today as a public tribute. Visitors enter past statues of Jijabai and a young Shivaji, leading into exhibition halls displaying life-size oil paintings that illustrate pivotal milestones in the establishment of the Maratha Empire.'
        }
      ]
    },
    nearbyExperienceIds: ['pune-food-trail', 'peths-heritage-walk', 'classical-music-evening']
  },
  {
    id: 'aga-khan-palace',
    name: 'Aga Khan Palace',
    category: 'Palace',
    area: 'Yerwada',
    historicalPeriod: '19th century (1892 CE)',
    shortDescription: 'National Monument of India’s Freedom Movement built in 1892. Internment site of Mahatma Gandhi & memorial of Kasturba Gandhi. Protected by ASI.',
    description: 'The Aga Khan Palace in Yerwada is an iconic national monument and museum of India’s freedom movement. Built in 1892 by Sultan Muhammed Shah Aga Khan III as a charitable famine-relief project to provide employment to local villagers, the palace spans 19 acres of manicured gardens and Italianate architecture. Following the launch of the Quit India Movement in August 1942, British colonial authorities interned Mahatma Gandhi, his wife Kasturba Gandhi, secretary Mahadev Desai, and Sarojini Naidu here. Both Kasturba Gandhi and Mahadev Desai passed away during captivity at this site, and their samadhis are preserved in the serene rear gardens. In 1969, Aga Khan IV donated the palace to the Government of India, and on March 3, 2003, the Archaeological Survey of India (ASI) officially declared it a Monument of National Importance.',
    openingHours: '9:00 AM – 5:30 PM (Daily)',
    entryFee: '₹25 (Indian Nationals) / ₹300 (Foreign Nationals)',
    estimatedTime: '1.5 – 2 hours',
    latitude: 18.5524,
    longitude: 73.9015,
    heroImage: '/images/monuments/aga-khan-palace.jpg',
    gallery: [
      '/images/monuments/aga-khan-palace.jpg',
      '/images/experiences/photography-walk.jpg'
    ],
    history: {
      builtYear: '1892 CE',
      builder: 'Sultan Muhammed Shah, Aga Khan III',
      significance: 'Famine-relief architectural initiative; internment site of Mahatma Gandhi during the Quit India struggle; Monument of National Importance under ASI.',
      architectureStyle: 'Indo-Saracenic and Italian Renaissance blend with sweeping multi-arched verandahs, high ceilings, and 19 acres of landscaped lawns.',
      keyEvents: [
        { year: '1892', event: 'Commissioned by Aga Khan III to generate employment for drought-affected villagers around Pune, taking 5 years to build.' },
        { year: '1942', event: 'On August 9, Mahatma Gandhi, Kasturba Gandhi, and Mahadev Desai detained under the Defence of India Rules following Quit India resolution.' },
        { year: '1942', event: 'Mahadev Desai passes away in internment on August 15; samadhi erected in the palace grounds.' },
        { year: '1944', event: 'Kasturba Gandhi breathes her last on February 22; Gandhi released on May 6, 1944.' },
        { year: '1969', event: 'Prince Karim El Hussani (Aga Khan IV) donates the property to the Government of India.' },
        { year: '2003', event: 'On March 3, officially notified as a "Monument of National Importance" by the Archaeological Survey of India.' }
      ]
    },
    audioNarration: {
      title: 'Sanctuary of Freedom: Aga Khan Palace',
      totalDuration: '03:30',
      chapters: [
        {
          id: 'ak-1',
          title: '01 — Built of Compassion (1892)',
          duration: '00:55',
          text: 'In the late 19th century, severe drought and famine gripped rural Maharashtra. To provide dignified wages and employment to over a thousand starving workers, the 20-year-old Sultan Muhammed Shah, Aga Khan the Third, commissioned the construction of this grand estate, investing twelve lakh rupees into local labor over five years.'
        },
        {
          id: 'ak-2',
          title: '02 — The 1942 Quit India Internment',
          duration: '01:25',
          text: 'Following the declaration of the Quit India movement in Bombay on August 8, 1942, British authorities arrested Mahatma Gandhi, Kasturba Gandhi, Mahadev Desai, and Sarojini Naidu at dawn, secretly confining them inside this palace. For 21 months, the palace became the epicenter of global attention as Gandhiji undertook a landmark 21-day fast here in 1943.'
        },
        {
          id: 'ak-3',
          title: '03 — The Sacred Samadhis & Museum',
          duration: '01:10',
          text: 'Tucked beneath quiet neem and banyan trees in the palace gardens lie the marble samadhis of Kasturba Gandhi and Mahadev Desai. Inside the palace, the museum lovingly preserves Mahatma Gandhi’s spinning charkhas, sandals, handwritten correspondence, and personal utensils, curated by the Gandhi National Memorial Society.'
        }
      ]
    },
    nearbyExperienceIds: ['heritage-photography-masterclass', 'paithani-weaving-workshop']
  },
  {
    id: 'kasba-ganapati',
    name: 'Kasba Ganapati Temple',
    category: 'Temple',
    area: 'Kasba Peth',
    historicalPeriod: '17th century (1630 CE)',
    shortDescription: 'The sacred Gramdaivat (presiding deity) of Pune, established in 1630 by Rajmata Jijabai. The Manacha Pahila Ganpati of Pune.',
    description: 'The Kasba Ganapati Temple is the spiritual heart of historic Pune, venerated as the city’s official Gramdaivat (presiding guardian deity). Established in 1630 CE after a swayambhu (self-manifested) stone idol of Lord Ganesha was discovered near the residence of Vinayak Bhatt Thakar, the temple was consecrated by Rajmata Jijabai Bhosale. Regarded as an auspicious milestone for the founding of Swarajya, the temple holds the paramount status of "Manacha Pahila Ganpati" (First Honoured Ganapati) formalized by Lokmanya Tilak in 1893, leading all immersion processions in Pune’s world-renowned Ganeshotsav.',
    openingHours: '6:00 AM – 10:00 PM (Daily)',
    entryFee: 'Free entry (All visitors welcome)',
    estimatedTime: '30 – 45 mins',
    latitude: 18.5208,
    longitude: 73.8576,
    heroImage: '/images/monuments/kasba-ganpati.png',
    gallery: [
      '/images/monuments/kasba-ganpati.png'
    ],
    history: {
      builtYear: '1630 CE',
      builder: 'Rajmata Jijabai Bhosale & Dadoji Konddeo',
      significance: 'Gramdaivat of Pune and First Ganapati of Honor (Manacha Pahila Ganpati) in Pune’s cultural hierarchy.',
      architectureStyle: 'Traditional Maratha temple architecture featuring a carved wooden Sabha Mandap, open pillars, and a stone sanctum sanctorum.',
      keyEvents: [
        { year: '1630', event: 'Swayambhu idol discovered by the Thakar family; Rajmata Jijabai builds a stone temple sanctum.' },
        { year: '1893', event: 'Lokmanya Bal Gangadhar Tilak standardizes the Sarvajanik Ganeshotsav protocol, awarding Kasba Ganapati the first position of honor.' },
        { year: 'Present', event: 'Every year, the ceremonial immersion parade on Laxmi Road begins only after the Kasba Ganapati chariot has passed.' }
      ]
    },
    audioNarration: {
      title: 'The Guardian of Pune: Kasba Ganapati',
      totalDuration: '02:45',
      chapters: [
        {
          id: 'kg-1',
          title: '01 — The Auspicious Discovery of 1630',
          duration: '00:50',
          text: 'When young Shivaji and his mother Jijabai relocated to Pune in 1630, the local Thakar family discovered a swayambhu stone idol of Ganesha near their home in Kasba Peth. Rajmata Jijabai recognized this as an auspicious divine blessing for the rejuvenation of Pune and consecrated the original stone shrine.'
        },
        {
          id: 'kg-2',
          title: '02 — Manacha Pahila Ganpati',
          duration: '01:05',
          text: 'In 1893, when freedom fighter Lokmanya Bal Gangadhar Tilak transformed the private domestic worship of Ganesha into a mass public festival for national unity, he established the protocol of the Five Manache Ganpati. As the ancient Gramdaivat, Kasba Ganapati was declared Manacha Pahila—the first among all honored deities.'
        },
        {
          id: 'kg-3',
          title: '03 — Living Faith & Tradition',
          duration: '00:50',
          text: 'To this day, by time-honored tradition, wedding invitations, new ventures, and civic ceremonies in Pune are blessed at Kasba Ganapati. On Anant Chaturdashi, no festival chariot crosses Laxmi Road until the silver palanquin of Kasba Ganapati leads the way.'
        }
      ]
    },
    nearbyExperienceIds: ['peths-heritage-walk', 'traditional-maharashtrian-feast', 'pune-food-trail']
  },
  {
    id: 'bhide-wada',
    name: 'Bhide Wada',
    category: 'Wada',
    area: 'Budhwar Peth',
    historicalPeriod: '19th century (1848 CE; National Memorial 2024–2026)',
    shortDescription: 'Cradle of modern Indian women’s education, where Savitribai & Jyotirao Phule established India’s first indigenous girls’ school in 1848.',
    description: 'Bhide Wada in Budhwar Peth is one of India’s most monumental landmarks of social reform and education. On January 1, 1848, social visionaries Krantijyoti Savitribai Phule and Mahatma Jyotirao Phule—with the gracious support of landowner Tatyasaheb Bhide—opened India’s very first indigenous school for girls in this building. Starting with nine pioneer girl students and Savitribai Phule as the head teacher, this historic institution broke deep-seated social taboos and catalyzed modern women’s literacy and social equality across the nation. Following historic Supreme Court proceedings and municipal acquisition, the Pune Municipal Corporation (PMC) is redeveloping the site into a world-class National Memorial featuring interactive exhibitions, audio-visual galleries, and women’s skill development centers.',
    openingHours: '8:00 AM – 7:00 PM (Daily)',
    entryFee: 'Free entry',
    estimatedTime: '30 – 45 mins',
    latitude: 18.5173,
    longitude: 73.8562,
    heroImage: '/images/monuments/bhide-wada.jpg',
    gallery: [
      '/images/monuments/bhide-wada.jpg'
    ],
    history: {
      builtYear: '1848 CE (School Founding)',
      builder: 'Tatyasaheb Bhide / Mahatma Jyotirao Phule & Krantijyoti Savitribai Phule (Memorial by PMC)',
      significance: 'Birthplace of modern Indian women’s education and national center for social reform.',
      architectureStyle: 'Historic timber wada site redeveloped into a multi-storey National Memorial (1,114 sq. m) with exhibition halls, VR galleries, and educational facilities.',
      keyEvents: [
        { year: '1848', event: 'On January 1, Savitribai and Jyotirao Phule admit the first batch of 9 girls, pioneering modern female education in India.' },
        { year: '1851', event: 'Student enrollment expands rapidly; additional schools for marginalized communities are established across Pune.' },
        { year: '2023', event: 'Supreme Court and Bombay High Court clear legal hurdles, enabling PMC acquisition for the National Memorial.' },
        { year: '2026', event: 'Multi-storey National Memorial structure completed by Pune Municipal Corporation.' }
      ]
    },
    audioNarration: {
      title: 'Dawn of Equality: Bhide Wada',
      totalDuration: '03:00',
      chapters: [
        {
          id: 'bw-1',
          title: '01 — The First School of 1848',
          duration: '00:55',
          text: 'On New Year’s Day, January 1st, 1848, inside this wada owned by Tatyasaheb Bhide in Budhwar Peth, Mahatma Jyotirao Phule and his wife Savitribai Phule opened India’s first indigenous school for girls. Savitribai, having trained as a teacher under Cynthia Farrar in Ahmednagar, became India’s first female school headmistress.'
        },
        {
          id: 'bw-2',
          title: '02 — Courage Against Orthodoxy',
          duration: '01:10',
          text: 'In 1848, educating women was considered radical and strictly opposed by conservative society. Every morning as Savitribai walked to Bhide Wada, orthodox detractors threw stones, mud, and verbal insults at her. Resolute in her noble mission, she carried a spare saree in her bag, changing after reaching the school to teach mathematics, science, and poetry with dignity.'
        },
        {
          id: 'bw-3',
          title: '03 — The National Memorial',
          duration: '00:55',
          text: 'From this humble brick-and-timber wada emerged the entire democratic framework of modern women’s rights and education in India. Today, the reconstructed National Memorial honors Savitribai and Jyotirao Phule with public exhibition halls and skill centers for young women.'
        }
      ]
    },
    nearbyExperienceIds: ['peths-heritage-walk', 'paithani-weaving-workshop']
  },
  {
    id: 'sinhagad-fort',
    name: 'Sinhagad Fort',
    category: 'Fort',
    area: 'Haveli / Sinhagad',
    historicalPeriod: 'Ancient / 17th century (1670 CE)',
    shortDescription: 'The ancient 1,312m Sahyadri hill fortress, renowned for Subedar Tanaji Malusare’s legendary 1670 battle. Protected by ASI & Forest Dept.',
    description: 'Sinhagad Fort (originally named Kondhana) is an ancient Sahyadri hill fortress perched at an elevation of 1,312 meters (4,304 feet) above sea level, located 30 km southwest of Pune. With a history spanning over 2,000 years, the fort was strategically vital for controlling the trade routes across the Deccan plateau. The fort is immortalized in Maratha history for the legendary Battle of Sinhagad on February 4, 1670, when Subedar Tanaji Malusare and 300 Mavala warriors scaled the sheer western Dronagiri cliff under cover of night to recapture the fort from the Mughal garrison. Upon hearing of Tanaji’s heroic martyrdom in victory, Chhatrapati Shivaji Maharaj uttered the immortal words: "Gad aala, pan sinh gela" ("The fort is won, but the lion is lost"), renaming the fortress Sinhagad (Lion Fort). The site is protected by the Archaeological Survey of India (ASI) and Maharashtra Forest Department.',
    openingHours: '5:00 AM – 6:00 PM (Daily)',
    entryFee: '₹50 (Four-Wheeler Entry) / ₹20 (Two-Wheeler / Trekking)',
    estimatedTime: '3 – 4 hours',
    latitude: 18.3663,
    longitude: 73.7558,
    heroImage: '/images/monuments/sinhagad-fort.png',
    gallery: [
      '/images/monuments/sinhagad-fort.png'
    ],
    history: {
      builtYear: 'Ancient origins (Over 2,000 years; fortified 1670 CE)',
      builder: 'Ancient Koli Chieftain Nag Naik / Re-fortified by Chhatrapati Shivaji Maharaj',
      significance: 'Impregnable Sahyadri stronghold; site of Tanaji Malusare’s 1670 victory; retreat bungalow of Lokmanya Tilak.',
      architectureStyle: 'Natural cliff-top military fortification featuring Kalyan Darwaza, Pune Darwaza, rock-cut Devtake water cisterns, and Tanaji Malusare Samadhi memorial.',
      keyEvents: [
        { year: '1340', event: 'Muhammad bin Tughluq captures Kondhana from Koli chieftain Nag Naik after an eight-month siege.' },
        { year: '1647', event: 'Young Shivaji Maharaj acquires Kondhana through strategic negotiation, establishing early Maratha control.' },
        { year: '1670', event: 'On February 4, Subedar Tanaji Malusare scales the Dronagiri cliff, winning the fort before dying in battle; renamed Sinhagad.' },
        { year: '1906', event: 'Lokmanya Tilak builds a mountain retreat bungalow at Sinhagad, where he met Mahatma Gandhi and Subhas Chandra Bose.' }
      ]
    },
    audioNarration: {
      title: 'Echo of the Lion: Sinhagad Fort',
      totalDuration: '03:40',
      chapters: [
        {
          id: 'sh-1',
          title: '01 — The Sentinel of the Sahyadris',
          duration: '00:55',
          text: 'Perched 1,312 meters above sea level, Sinhagad commands panoramic vistas across Pune, the Khadakwasla reservoir, and the rugged mountain ranges of Maharashtra. For over two millennia, control over Kondhana determined military mastery over the trade corridors connecting Pune to the Konkan coast.'
        },
        {
          id: 'sh-2',
          title: '02 — The 1670 Midnight Ascent',
          duration: '01:35',
          text: 'On a moonless night in February 1670, Subedar Tanaji Malusare and 300 Mavala warriors stealthily scaled the near-vertical western cliff face, known as the Dronagiri precipice. Surprising the Mughal garrison under Udaybhan Rathod, a fierce battle raged by torchlight. Though Tanaji made the ultimate sacrifice in combat, his brother Suryaji rallied the Maratha warriors to decisive victory.'
        },
        {
          id: 'sh-3',
          title: '03 — Living Mountain Heritage',
          duration: '01:10',
          text: 'When news of the triumph and tragedy reached Shivaji Maharaj, he wept and said: "Gad aala, pan sinh gela"—The fort is won, but the lion is lost. In tribute, Kondhana became Sinhagad. Today, thousands hike to the summit to honor Tanaji’s samadhi, marvel at Kalyan Darwaza, and taste traditional pitla-bhakri and matka curd prepared by local mountain families.'
        }
      ]
    },
    nearbyExperienceIds: ['traditional-maharashtrian-feast', 'heritage-photography-masterclass']
  },
  {
    id: 'dagdusheth-ganapati',
    name: 'Dagdusheth Halwai Ganapati Temple',
    category: 'Temple',
    area: 'Budhwar Peth',
    historicalPeriod: '19th century (1893 CE)',
    shortDescription: 'Beloved 1893 shrine established by Shrimant Dagdusheth Halwai, pivotal in Lokmanya Tilak’s Sarvajanik Ganeshotsav movement.',
    description: 'The Shrimant Dagdusheth Halwai Ganapati Temple in Budhwar Peth is one of the most prominent, revered, and philanthropic Hindu temples in India. Founded in 1893 by prosperous sweetmeat merchant (halwai) Shrimant Dagdusheth Gadve and his wife Lakshmibai following the tragic loss of their son to the plague epidemic, the couple consecrated the idol under the spiritual guidance of their guru Shri Madhavnath Maharaj. Working in close association with freedom fighter Lokmanya Bal Gangadhar Tilak, Dagdusheth Halwai made the temple a vital catalyst for the public Sarvajanik Ganeshotsav movement to unify citizens against colonial rule. The radiant 2.2-meter high idol is adorned with over 40 kilograms of pure gold, and the trust operates extensive charitable hospitals, orphanages, and disaster-relief operations.',
    openingHours: '6:00 AM – 11:00 PM (Daily)',
    entryFee: 'Free entry (All devotees welcome)',
    estimatedTime: '45 mins – 1 hour',
    latitude: 18.5164,
    longitude: 73.8561,
    heroImage: '/images/monuments/dagdusheth-ganapati.jpg',
    gallery: [
      '/images/monuments/dagdusheth-ganapati.jpg'
    ],
    history: {
      builtYear: '1893 CE',
      builder: 'Shrimant Dagdusheth Halwai & Lakshmibai',
      significance: 'Historic foundation of the public Sarvajanik Ganeshotsav festival in India and major philanthropic trust.',
      architectureStyle: 'Ornate marble temple complex featuring gold and silver-embossed sanctum portals, Venetian glass chandeliers, and a gilded deity shrine.',
      keyEvents: [
        { year: '1893', event: 'Consecration of the idol by Dagdusheth Halwai and Lakshmibai with Lokmanya Tilak’s encouragement.' },
        { year: '1904', event: 'Lakshmibai Dagdusheth Halwai establishes the iconic Datta Mandir in Budhwar Peth.' },
        { year: 'Present', event: 'Welcomes millions of pilgrims annually during the 10-day Ganeshotsav festival, managing extensive social welfare initiatives.' }
      ]
    },
    audioNarration: {
      title: 'Devotion and Unity: Dagdusheth Ganapati',
      totalDuration: '02:50',
      chapters: [
        {
          id: 'dg-1',
          title: '01 — From Personal Grief to Public Grace',
          duration: '00:55',
          text: 'In the late 19th century, a severe outbreak of bubonic plague struck Pune. Shrimant Dagdusheth Gadve, a respected confectioner and trader, tragically lost his only son to the epidemic. In their profound sorrow, Dagdusheth and his wife Lakshmibai turned to their spiritual guru, Shri Madhavnath Maharaj, who advised them to consecrate a deity that would belong to the entire community.'
        },
        {
          id: 'dg-2',
          title: '02 — Lokmanya Tilak & The 1893 Movement',
          duration: '01:05',
          text: 'The year was 1893. Lokmanya Bal Gangadhar Tilak was launching the public Sarvajanik Ganeshotsav to unite all strata of society against British colonial oppression. Tilak and Dagdusheth collaborated closely, transforming the temple into a cultural assembly where political ideas, patriotic songs, and communal brotherhood flourished.'
        },
        {
          id: 'dg-3',
          title: '03 — The Golden Deity and Social Service',
          duration: '00:50',
          text: 'Adorned in pure gold ornaments and housed in a magnificent sanctum, the benevolent deity draws millions of pilgrims every year. Today, the Dagdusheth Halwai Trust channels devotee contributions into free multi-specialty healthcare, old age homes, educational scholarships, and farmer welfare programs.'
        }
      ]
    },
    nearbyExperienceIds: ['peths-heritage-walk', 'pune-food-trail', 'traditional-maharashtrian-feast']
  },
  {
    id: 'pataleshwar-cave',
    name: 'Pataleshwar Cave Temple',
    category: 'Cave Temple',
    area: 'Shivajinagar',
    historicalPeriod: '8th century CE (Rashtrakuta Dynasty)',
    shortDescription: '8th-century monolithic rock-cut Shiva temple carved from a single basalt hill, featuring a circular Nandi Mandapa. Protected by ASI.',
    description: 'The Pataleshwar Cave Temple (also historically known as the Panchaleshvara or Bhamburde Cave Temple) is Pune’s oldest standing architectural monument, dating to the 8th century CE during the Rashtrakuta dynasty. Hewn entirely out of a single monolithic basalt rock formation—contemporary in craftsmanship and era to the Kailasa Temple at Ellora and Elephanta Caves—the subterranean rock-cut sanctuary is dedicated to Lord Shiva as Pataleshwar ("Lord of the Underworld"). The complex is globally celebrated for its distinctive circular Nandi Mandapa resting under an umbrella-like monolithic stone canopy supported by twelve square pillars. The rock-cut hall houses sanctums for Shiva (Linga), Parvati, and Ganesha. The temple is a protected Monument of National Importance under the Archaeological Survey of India (ASI).',
    openingHours: '8:00 AM – 5:30 PM (Daily)',
    entryFee: 'Free entry (ASI Protected Monument)',
    estimatedTime: '45 mins – 1 hour',
    latitude: 18.5270,
    longitude: 73.8498,
    heroImage: '/images/monuments/pataleshwar-cave.jpg',
    gallery: [
      '/images/monuments/pataleshwar-cave.jpg'
    ],
    history: {
      builtYear: '8th century CE (c. 750–800 CE)',
      builder: 'Rashtrakuta Dynasty rock-cut artisans',
      significance: 'Oldest rock-cut monolithic monument in Pune; stylistic contemporary to Ellora and Elephanta; Monument of National Importance under ASI.',
      architectureStyle: 'Subterranean rock-cut basalt architecture featuring a circular monolithic Nandi pavilion, pillared central mandapa, and rock-hewn sanctums.',
      keyEvents: [
        { year: 'c. 750 CE', event: 'Excavated downwards into solid basalt bedrock by Rashtrakuta sculptors using chisels and hammers.' },
        { year: 'c. 800 CE', event: 'Excavation halted intentionally before completion, leaving raw stone chisel marks and fault lines visible today.' },
        { year: '1960', event: 'Notified as a Protected Monument of National Importance by the Archaeological Survey of India (ASI).' }
      ]
    },
    audioNarration: {
      title: 'Monolith from the Bedrock: Pataleshwar',
      totalDuration: '02:40',
      chapters: [
        {
          id: 'pt-1',
          title: '01 — Twelve Hundred Years into the Basalt',
          duration: '00:50',
          text: 'Step below modern street level on Jangali Maharaj Road into the cool, silent depths of volcanic basalt. Excavated in the 8th century CE during the reign of the Rashtrakuta kings, Pataleshwar is Pune’s oldest surviving architectural marvel, carved out of a single immense rock hill with hand chisels and oil lamps.'
        },
        {
          id: 'pt-2',
          title: '02 — The Monolithic Circular Nandi Mandapa',
          duration: '01:00',
          text: 'Notice the extraordinary circular pavilion in the courtyard. Unlike traditional square Hindu shrines, Pataleshwar features an umbrella-shaped monolithic rock roof resting on twelve massive square pillars, sheltering a hand-hewn stone Nandi bull gazing directly toward the central Shiva lingam.'
        },
        {
          id: 'pt-3',
          title: '03 — The Unfinished Masterpiece',
          duration: '00:50',
          text: 'Examining the inner sanctuary walls reveals rough chisel marks and uncarved surfaces. Geologists and archaeologists believe a hidden fracture fault line in the bedrock halted excavation, preserving an authentic window into ancient Indian rock-cut engineering techniques.'
        }
      ]
    },
    nearbyExperienceIds: ['heritage-photography-masterclass', 'peths-heritage-walk']
  }
];
