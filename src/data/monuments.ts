import type { Monument } from '../types';

export const MONUMENTS: Monument[] = [
  {
    id: 'shaniwar-wada',
    name: 'Shaniwar Wada',
    category: 'Fort',
    area: 'Shaniwar Peth',
    historicalPeriod: '18th century',
    shortDescription: 'The magnificent seat of the Peshwas, built in 1732. A monumental symbol of Maratha power and architectural grandeur.',
    description: 'Shaniwar Wada, the seat of the Peshwas, is one of the most important historical landmarks in Pune. Built in 1732 by Peshwa Baji Rao I, it stands as a symbol of Maratha power, grandeur and architectural brilliance. The fortress had seven-storey palaces inside its perimeter before being devastated by an inferno in 1828.',
    openingHours: '9:00 AM – 5:30 PM',
    entryFee: '₹25 (Indian) / ₹300 (Foreigner)',
    estimatedTime: '1 – 2 hours',
    latitude: 18.5191,
    longitude: 73.8555,
    heroImage: '/images/monuments/shaniwar-wada-hero.jpg',
    gallery: [
      '/images/monuments/shaniwar-wada-hero.jpg',
      '/images/monuments/shaniwar-wada-night.jpg',
      '/images/monuments/shaniwar-wada-then.png'
    ],
    history: {
      builtYear: '1732 CE',
      builder: 'Peshwa Baji Rao I',
      significance: 'Headquarters of the Maratha Empire under the Peshwas until 1818.',
      architectureStyle: 'Maratha Fortified Palace with Mughal-influenced teakwood columns and massive stone bastions.',
      keyEvents: [
        { year: '1730', event: 'Foundation stone laid on a Saturday (Shaniwar), giving it its iconic name.' },
        { year: '1732', event: 'Completion of the primary residential palace complex and ceremonial gates.' },
        { year: '1773', event: 'Assassination of the young Peshwa Narayanrao within the palace walls.' },
        { year: '1818', event: 'Surrendered to the British East India Company following the Battle of Khadki.' },
        { year: '1828', event: 'A catastrophic fire raged for seven days, destroying the wooden upper palaces.' }
      ]
    },
    thenNow: {
      thenImage: '/images/monuments/shaniwar-wada-then.png',
      nowImage: '/images/monuments/shaniwar-wada-hero.jpg',
      thenLabel: '1820 Historical Painting',
      nowLabel: 'Present Day Delhi Gate',
      description: 'Compare how the towering fortified entrance and multi-storey wooden palace complex appeared in 1820 before the 1828 fire, contrasted with the conserved stone bastions and Delhi Gate today.'
    },
    audioNarration: {
      title: 'The Story of Shaniwar Wada',
      totalDuration: '03:45',
      chapters: [
        {
          id: 'ch-1',
          title: '01 — The Beginning',
          duration: '00:52',
          text: 'Welcome to Shaniwar Wada. On the 10th of January 1730, Peshwa Baji Rao the First laid the ceremonial foundation stone of this fortress palace. Because work commenced on a Saturday—Shaniwar in Marathi—the palace received its name: Shaniwar Wada. Teak was brought from the jungles of Junnar, stone came from the quarries of Chinchwad, and limestone was shipped from the hills of Jejuri. By 1732, the palace was officially inaugurated.'
        },
        {
          id: 'ch-2',
          title: '02 — The Peshwa Era',
          duration: '01:05',
          text: 'During the eighteenth century, Shaniwar Wada stood at the pulsating heart of the Maratha Empire. From this grand fortress, administrative directives governed territories stretching from the Indus River in the north to the plains of southern India. The complex housed seven storied palaces, the renowned Hazari Karanje fountain with its thousand dancing water jets, courtrooms of justice, and defensive ramparts guarded by cannons.'
        },
        {
          id: 'ch-3',
          title: '03 — The Fire of 1828',
          duration: '00:58',
          text: 'Following the fall of the Peshwas to the British in 1818, the Wada fell into decline. Then, on February 27th, 1828, an unexplained fire broke out inside the complex. Fed by the dry seasoned teakwood of the palace residences, the blaze roared uncontrollably for seven consecutive days. Thick smoke blanketed Pune as centuries of intricate wooden carvings, painted frescos, and courtyards were reduced to ash.'
        },
        {
          id: 'ch-4',
          title: '04 — Shaniwar Wada Today',
          duration: '00:50',
          text: 'Today, the towering perimeter ramparts, the fortified bastions, and the colossal Delhi Gate—fitted with 72 sharp steel elephant spikes—still stand proud. Maintained as a protected national monument, Shaniwar Wada invites thousands of travelers and heritage lovers every day to walk through the stone foundations where the destiny of India was once decided.'
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
    historicalPeriod: '19th century',
    shortDescription: 'Built in 1807 by Peshwa Bajirao II, renowned for its exquisite carved teakwood facade and cypress pillars.',
    description: 'Vishrambaug Wada is a luxurious three-storey mansion built in 1807 by the last Peshwa, Bajirao II. It is famed for its breathtaking carved teakwood facade, suru cypress pillars, and decorative wooden brackets called Meghdambari. Today, it hosts heritage exhibitions celebrating Pune’s historical evolution.',
    openingHours: '10:00 AM – 5:00 PM',
    entryFee: '₹10 (Indian) / ₹100 (Foreigner)',
    estimatedTime: '45 mins – 1 hour',
    latitude: 18.5135,
    longitude: 73.8530,
    heroImage: '/images/monuments/vishrambaug-wada.jpg',
    gallery: [
      '/images/monuments/vishrambaug-wada.jpg',
      '/images/walks/wada-trail.jpg'
    ],
    history: {
      builtYear: '1807 CE',
      builder: 'Peshwa Bajirao II',
      significance: 'Private residence and pleasure palace of the last Peshwa ruler.',
      architectureStyle: 'Classic Peshwa Wada architecture featuring teakwood arches, central courtyards, and ornamental ceilings.',
      keyEvents: [
        { year: '1807', event: 'Construction finished at an estimated cost of ₹200,000.' },
        { year: '1818', event: 'Following the surrender of Bajirao II, the British repurposed the wada as a prison and government office.' },
        { year: '1930', event: 'Acquired by the Pune Municipal Corporation.' },
        { year: '2004', event: 'Major conservation and restoration completed by INTACH and PMC.' }
      ]
    },
    thenNow: {
      thenImage: '/images/walks/wada-trail.jpg',
      nowImage: '/images/monuments/vishrambaug-wada.jpg',
      thenLabel: 'Historic Woodwork Detail',
      nowLabel: 'Restored Exterior Facade',
      description: 'Observe the intricate hand-carved teakwood columns preserved from 1807 alongside the restored exterior facade on Bajirao Road.'
    },
    audioNarration: {
      title: 'The Splendor of Vishrambaug Wada',
      totalDuration: '03:10',
      chapters: [
        {
          id: 'vw-1',
          title: '01 — The Pleasure Palace',
          duration: '00:50',
          text: 'Vishrambaug Wada represents the sunset of the Peshwa era. Built in 1807 by Bajirao the Second, the wada was designed not for defensive warfare, but for luxurious relaxation—hence the name Vishram, meaning rest or repose.'
        },
        {
          id: 'vw-2',
          title: '02 — Teakwood Mastery',
          duration: '01:05',
          text: 'Look upward at the front facade: the deep brown teakwood is carved with motifs of blooming lotuses, cypress trees, and peacocks. The open balcony on the second floor, known as a Meghdambari, offered musicians and court poets a shaded gallery overlooking the city.'
        },
        {
          id: 'vw-3',
          title: '03 — Guardians of Memory',
          duration: '01:15',
          text: 'Over two centuries, Vishrambaug has served as a royal residence, an educational academy, a municipal headquarters, and a post office. Today, its courtyards hold heritage displays that preserve the crafts and manuscripts of old Pune for future generations.'
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
    historicalPeriod: '17th century',
    shortDescription: 'The historic red palace built in 1640 where Chhatrapati Shivaji Maharaj spent his boyhood and launched his daring 1663 raid.',
    description: 'Lal Mahal, or the Red Palace, was erected in 1640 by Shahaji Raje Bhosale for his wife Jijabai and young son Shivaji Maharaj. It was here that Shivaji Maharaj grew up, learned statecraft, and in 1663 executed one of the most audacious military night-raids in history against Mughal general Shaista Khan.',
    openingHours: '9:00 AM – 1:00 PM, 4:00 PM – 8:00 PM',
    entryFee: '₹10 (Indian & Foreigner)',
    estimatedTime: '45 mins',
    latitude: 18.5197,
    longitude: 73.8569,
    heroImage: '/images/monuments/lal-mahal.jpg',
    gallery: [
      '/images/monuments/lal-mahal.jpg'
    ],
    history: {
      builtYear: '1640 CE',
      builder: 'Shahaji Raje Bhosale',
      significance: 'Boyhood residence of Chhatrapati Shivaji Maharaj and site of the 1663 victory over Shaista Khan.',
      architectureStyle: 'Red stone and brick construction with traditional Chhatri domes and Maratha wall murals.',
      keyEvents: [
        { year: '1640', event: 'Shahaji Raje builds Lal Mahal to rejuvenate the war-torn town of Pune.' },
        { year: '1663', event: 'Shivaji Maharaj leads 400 soldiers in a stealth night raid against Mughal forces.' },
        { year: '1988', event: 'Modern reconstruction inaugurated by Pune Municipal Corporation with commemorative exhibits.' }
      ]
    },
    audioNarration: {
      title: 'The Legends of Lal Mahal',
      totalDuration: '03:15',
      chapters: [
        {
          id: 'lm-1',
          title: '01 — A Mother and Her Prince',
          duration: '00:55',
          text: 'In 1640, Pune was a desolated settlement following years of border conflict. Shahaji Raje Bhosale commanded the construction of Lal Mahal as a safe home for Jijabai and the young Shivaji. Here, under his mother’s tutelage and Dadoji Konddeo’s mentorship, Shivaji learned the virtues of courage, dharma, and guerilla warfare.'
        },
        {
          id: 'lm-2',
          title: '02 — The Midnight Strike',
          duration: '01:20',
          text: 'In 1663, the Mughal viceroy Shaista Khan occupied Pune and took up residence inside Lal Mahal with thousands of imperial troops. On the night of April 5th, Shivaji Maharaj and four hundred chosen warriors disguised themselves as a wedding party, breached the perimeter walls, and slipped inside. In the chaos of the night skirmish, Shaista Khan barely escaped with his life through a window, losing three fingers in the clash.'
        },
        {
          id: 'lm-3',
          title: '03 — The Memorial Today',
          duration: '01:00',
          text: 'The reconstructed Lal Mahal stands beside Shaniwar Wada in Kasba Peth. Inside, visitors can admire massive oil paintings depicting Shivaji Maharaj’s life, alongside statues of Jijabai and a golden plough symbolizing the renewal of Pune.'
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
    historicalPeriod: '19th century',
    shortDescription: 'Italianate palace built in 1892, national monument of India’s Freedom Movement where Mahatma Gandhi was interned.',
    description: 'Set amidst tranquil Italian arches and expansive manicured gardens, the Aga Khan Palace was constructed in 1892 by Sultan Muhammed Shah Aga Khan III. During the 1942 Quit India Movement, the British interned Mahatma Gandhi, Kasturba Gandhi, and Mahadev Desai here. It preserves Gandhi’s personal belongings and sacred memorial samadhis.',
    openingHours: '9:00 AM – 5:30 PM',
    entryFee: '₹25 (Indian) / ₹300 (Foreigner)',
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
      builder: 'Sultan Muhammed Shah Aga Khan III',
      significance: 'Built as a famine relief project; internment site for Mahatma Gandhi during the Quit India struggle.',
      architectureStyle: 'Indo-Saracenic and Italian Renaissance blend with sweeping verandahs and open corridors.',
      keyEvents: [
        { year: '1892', event: 'Constructed to provide employment to famine-hit villagers around Pune.' },
        { year: '1942', event: 'Gandhiji, Kasturba Gandhi, and freedom fighters imprisoned following the Quit India resolution.' },
        { year: '1944', event: 'Kasturba Gandhi passes away at the palace; Mahatma Gandhi released shortly after.' },
        { year: '1969', event: 'Prince Karim El Hussani Aga Khan IV donates the palace to the government of India.' },
        { year: '2003', event: 'Declared a Monument of National Importance by ASI.' }
      ]
    },
    audioNarration: {
      title: 'A Sanctuary of Freedom: Aga Khan Palace',
      totalDuration: '03:30',
      chapters: [
        {
          id: 'ak-1',
          title: '01 — Born of Compassion',
          duration: '00:55',
          text: 'In 1892, a terrible drought plagued western Maharashtra. To provide dignity and living wages to thousands of starving villagers, the 20-year-old Sultan Muhammed Shah Aga Khan the Third commissioned the construction of this palace, spending twelve lakh rupees to fund local labor.'
        },
        {
          id: 'ak-2',
          title: '02 — The 1942 Internment',
          duration: '01:25',
          text: 'Following the declaration of the Quit India movement in Mumbai on August 8, 1942, British colonial authorities arrested Mahatma Gandhi and his companions at dawn, transporting them secretly to this palace. For twenty-one months, the world watched Pune as Gandhiji undertook a historic 21-day fast here.'
        },
        {
          id: 'ak-3',
          title: '03 — Sacred Samadhis',
          duration: '01:10',
          text: 'Behind the tranquil garden corridors lie the simple marble samadhis of Kasturba Gandhi and Mahadev Desai, who both breathed their last during captivity here. Today, the palace museum preserves Gandhiji’s spinning charkha, sandals, writing desk, and personal letters.'
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
    historicalPeriod: '17th century',
    shortDescription: 'The revered Gramdaivat (patron deity) of Pune, established in 1630 by Rajmata Jijabai Bhosale.',
    description: 'The Kasba Ganapati Temple houses the Gramdaivat—the supreme presiding guardian deity of Pune. Established in 1630 by Jijabai after an idol of Lord Ganesha was discovered near a temple clearing, it holds the prime place of honor (Manacha Pahila Ganpati) during Pune’s world-renowned Ganeshotsav procession.',
    openingHours: '6:00 AM – 10:00 PM',
    entryFee: 'Free entry',
    estimatedTime: '30 – 45 mins',
    latitude: 18.5208,
    longitude: 73.8576,
    heroImage: '/images/monuments/kasba-ganapati.jpg',
    gallery: [
      '/images/monuments/kasba-ganapati.jpg'
    ],
    history: {
      builtYear: '1630 CE',
      builder: 'Rajmata Jijabai & Dadoji Konddeo',
      significance: 'Gramdaivat of Pune and First Ganapati of Honor (Manacha Pahila).',
      architectureStyle: 'Traditional Maratha temple architecture with wood carvings and open sabha mandap.',
      keyEvents: [
        { year: '1630', event: 'Idol discovered by Vinayak Thakar; Jijabai constructs the sanctum sanctorum.' },
        { year: '1893', event: 'Lokmanya Tilak standardizes the immersion procession order, placing Kasba Ganapati first.' }
      ]
    },
    audioNarration: {
      title: 'The Guardian of Pune: Kasba Ganapati',
      totalDuration: '02:45',
      chapters: [
        {
          id: 'kg-1',
          title: '01 — The Sacred Discovery',
          duration: '00:50',
          text: 'When young Shivaji and his mother Jijabai arrived in Pune in 1630, local families discovered a self-manifested swayambhu idol of Ganesha near their house. Jijabai saw this as a divine omen of victory and ordered a stone temple to be erected immediately.'
        },
        {
          id: 'kg-2',
          title: '02 — Manacha Pahila',
          duration: '01:05',
          text: 'Every year during the magnificent ten-day Ganesh festival, when hundreds of idols gather on the streets of Pune for the immersion parade, no procession can cross Lakshmi Road until the Kasba Ganapati chariot has moved forward. It remains the first among all honored deities.'
        },
        {
          id: 'kg-3',
          title: '03 — Living Faith',
          duration: '00:50',
          text: 'Today, the sanctum remains filled with the aroma of camphor, marigold flowers, and Vedic chants. Devotees visit before beginning any new business, examination, or auspicious household ceremony.'
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
    historicalPeriod: '19th century',
    shortDescription: 'Cradle of modern Indian women’s education, where Savitribai and Jyotirao Phule started India’s first girls’ school in 1848.',
    description: 'Bhide Wada in Budhwar Peth is one of modern India’s most monumental social heritage landmarks. On January 1, 1848, social visionaries Mahatma Jyotirao Phule and Krantijyoti Savitribai Phule, with the support of Tatyasaheb Bhide, established the nation’s very first indigenous school for girls here.',
    openingHours: '8:00 AM – 7:00 PM',
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
      builder: 'Tatyasaheb Bhide / Mahatma Jyotirao Phule & Savitribai Phule',
      significance: 'Site of the first school for girls founded by Indian social reformers.',
      architectureStyle: 'Vernacular wooden wada architecture of the old Budhwar Peth.',
      keyEvents: [
        { year: '1848', event: 'First batch of 9 girls admitted on January 1st under teacher Savitribai Phule.' },
        { year: '1851', event: 'Enrollment expands rapidly despite fierce orthodoxy opposition.' },
        { year: '2023', event: 'Historic acquisition by government to build a world-class national memorial.' }
      ]
    },
    audioNarration: {
      title: 'Dawn of Equality: Bhide Wada',
      totalDuration: '03:00',
      chapters: [
        {
          id: 'bw-1',
          title: '01 — The Courageous Step',
          duration: '00:55',
          text: 'In the mid-nineteenth century, education for girls was strictly prohibited by religious dogma. Yet on New Year’s Day 1848, inside this very building in Budhwar Peth, Mahatma Jyotirao Phule and Savitribai Phule opened the doors to nine brave young daughters of Pune.'
        },
        {
          id: 'bw-2',
          title: '02 — Walking Through The Storm',
          duration: '01:10',
          text: 'Every morning as Savitribai walked from her home to Bhide Wada, orthodox opponents threw mud, stones, and insults at her. Undaunted, she carried a spare saree in her bag, changed upon reaching the classroom, and taught mathematics, science, and literature with dignity.'
        },
        {
          id: 'bw-3',
          title: '03 — An Immortal Flame',
          duration: '00:55',
          text: 'From this humble brick-and-timber wada sprang the entire educational movement for women and marginalized communities in modern India. A visit here is a pilgrimage of gratitude to the pioneer educators of our country.'
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
    historicalPeriod: 'Ancient / 17th century',
    shortDescription: 'The legendary Lion Fort perched at 1,312 meters, famous for Tanaji Malusare’s valiant 1670 battle.',
    description: 'Perched high in the Sahyadri range south-west of Pune, Sinhagad (the Lion Fort) sits at an elevation of 1,312 meters. Originally known as Kondhana, it was the site of the legendary 1670 midnight assault led by Subedar Tanaji Malusare. Upon hearing of Tanaji’s martyrdom, Shivaji Maharaj uttered the immortal words: “Gad aala, pan sinh gela” (The fort is won, but the lion is lost).',
    openingHours: '5:00 AM – 6:00 PM',
    entryFee: '₹50 (Vehicle Entry) / ₹20 (Trekking fee)',
    estimatedTime: '3 – 4 hours',
    latitude: 18.3663,
    longitude: 73.7558,
    heroImage: '/images/monuments/sinhagad-fort.jpg',
    gallery: [
      '/images/monuments/sinhagad-fort.jpg'
    ],
    history: {
      builtYear: 'Circa 14th century / Fortified 1670',
      builder: 'Koli Chieftain Nag Naik / Enhanced by Chhatrapati Shivaji Maharaj',
      significance: 'Impregnable bastion protecting Pune and crucial gateway to the Deccan plateau.',
      architectureStyle: 'Natural cliff-edge fortification, rock-cut water cisterns (Devtake), and stone gateways.',
      keyEvents: [
        { year: '1670', event: 'Tanaji Malusare scales the sheer western cliff using monitor lizards and recaptures the fort.' },
        { year: '1906', event: 'Lokmanya Tilak builds a summer bungalow here and meets Mahatma Gandhi.' }
      ]
    },
    audioNarration: {
      title: 'The Echo of the Lion: Sinhagad',
      totalDuration: '03:40',
      chapters: [
        {
          id: 'sh-1',
          title: '01 — The Sahyadri Sentinel',
          duration: '00:55',
          text: 'Sinhagad commands panoramic views across Pune, the Khadakwasla reservoir, and the surrounding mountain ridges. For centuries, whichever power held this mountain summit controlled the military passes leading south.'
        },
        {
          id: 'sh-2',
          title: '02 — The 1670 Midnight Ascent',
          duration: '01:35',
          text: 'On a freezing moonless night in February 1670, Tanaji Malusare and three hundred loyal Mavala warriors scaled the near-vertical western cliff face known as the Dronagiri precipice. Surprising the Mughal garrison inside, a ferocious sword battle ensued. Though Tanaji fell defending his saffron flag, his brother Suryaji rallied the troops to final victory.'
        },
        {
          id: 'sh-3',
          title: '03 — Cloud-Kissed Memories',
          duration: '01:10',
          text: 'Today, trekking up Sinhagad in morning mist is a rite of passage for Pune residents. Visitors savor steaming Pitla Bhakri with spicy Thecha cooked by local villagers, sip sweet fresh curd in earthen kulhads, and pay homage at Tanaji’s memorial monument.'
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
    historicalPeriod: '19th century',
    shortDescription: 'Founded in 1893, one of India’s most beloved temples and a radiant centerpiece of Pune’s public Ganeshotsav.',
    description: 'The Shreemant Dagdusheth Halwai Ganapati Temple was established in 1893 by sweetmeat merchant Dagdusheth Gadve and his wife Lakshmibai following the tragic loss of their son to the plague. Encouraged by Lokmanya Bal Gangadhar Tilak, it became a pioneer in transforming the private household worship of Ganesha into a mass public festival of cultural solidarity.',
    openingHours: '6:00 AM – 11:00 PM',
    entryFee: 'Free entry',
    estimatedTime: '45 mins – 1 hour',
    latitude: 18.5164,
    longitude: 73.8561,
    heroImage: '/images/monuments/dagdusheth-ganapati.jpg',
    gallery: [
      '/images/monuments/dagdusheth-ganapati.jpg'
    ],
    history: {
      builtYear: '1893 CE',
      builder: 'Shreemant Dagdusheth Halwai & Lakshmibai',
      significance: 'Historic catalyst of the public Sarvajanik Ganeshotsav festival in India.',
      architectureStyle: 'Intricately gilded marble sanctum sanctorum with grand glass chandeliers and silver-plated doors.',
      keyEvents: [
        { year: '1893', event: 'Consecration of the idol by Dagdusheth Halwai on Tilak’s advice.' },
        { year: '2026', event: 'Celebrated 133 continuous years of philanthropic and spiritual service.' }
      ]
    },
    audioNarration: {
      title: 'Devotion and Community: Dagdusheth Ganapati',
      totalDuration: '02:50',
      chapters: [
        {
          id: 'dg-1',
          title: '01 — Solace from Sorrow',
          duration: '00:55',
          text: 'In the late nineteenth century, a devastating plague struck Pune. Dagdusheth Gadve, a sweetmaker and respected confectioner, lost his beloved son to the epidemic. In their grief, he and his wife Lakshmibai commissioned sculptor Shankarrao Gole to create a benevolent idol of Ganesha to channel their sorrow into public service.'
        },
        {
          id: 'dg-2',
          title: '02 — The Public Movement',
          duration: '01:05',
          text: 'Lokmanya Tilak recognized that this idol had the power to bring people of all castes and walks of life together under colonial rule. Dagdusheth became one of the key pillars of the Sarvajanik Ganeshotsav, inspiring unity through cultural speeches, music, and social aid.'
        },
        {
          id: 'dg-3',
          title: '03 — The Golden Radiance',
          duration: '00:50',
          text: 'Adorned in nearly eight kilograms of pure gold ornaments, the deity’s serene smile attracts over two million pilgrims annually. The temple trust also manages free medical clinics, orphanages, and educational scholarships.'
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
    historicalPeriod: '8th century Rashtrakuta',
    shortDescription: '8th-century monolithic rock-cut Shiva temple excavated from a single basalt hill, featuring a circular Nandi pavilion.',
    description: 'Carved out of a massive single basalt rock in the 8th century during the Rashtrakuta dynasty, Pataleshwar Cave Temple is Pune’s oldest architectural monument. Dedicated to Lord Shiva, the cave temple is celebrated for its monumental pillared hall and an extraordinary circular stone Nandi Mandapa supported by massive square columns.',
    openingHours: '8:00 AM – 5:30 PM',
    entryFee: 'Free entry',
    estimatedTime: '45 mins – 1 hour',
    latitude: 18.5270,
    longitude: 73.8498,
    heroImage: '/images/monuments/pataleshwar-cave.jpg',
    gallery: [
      '/images/monuments/pataleshwar-cave.jpg'
    ],
    history: {
      builtYear: '8th century CE (c. 750–800)',
      builder: 'Rashtrakuta Dynasty artisans',
      significance: 'Oldest rock-cut monolithic monument in Pune, contemporary to the Kailasa Temple at Ellora.',
      architectureStyle: 'Rock-cut basalt architecture with monolithic circular Nandi canopy and subterranean sanctum.',
      keyEvents: [
        { year: 'c. 750', event: 'Carved downward into bedrock hill by skilled stone artisans.' },
        { year: '1960', event: 'Declared a protected monument under the Archaeological Survey of India.' }
      ]
    },
    audioNarration: {
      title: 'Echoes from the Bedrock: Pataleshwar',
      totalDuration: '02:40',
      chapters: [
        {
          id: 'pt-1',
          title: '01 — Twelve Hundred Years Ago',
          duration: '00:50',
          text: 'Step below street level into the cool shade of ancient basalt. Twelve hundred years ago, during the reign of the Rashtrakuta kings, sculptors carved directly into the bedrock to hollow out this cave temple, using only chisels, hammers, and oil lamps.'
        },
        {
          id: 'pt-2',
          title: '02 — The Circular Nandi Mandapa',
          duration: '01:00',
          text: 'Notice the massive circular stone pavilion at the entrance. Unlike most Hindu temples which have square Nandi shelters, Pataleshwar features an umbrella-like monolithic roof resting on twelve massive pillars, sheltering a carved stone bull facing the Shiva lingam.'
        },
        {
          id: 'pt-3',
          title: '03 — The Unfinished Symphony',
          duration: '00:50',
          text: 'If you examine the rear cavern walls, you will notice unfinished surfaces. Historians believe a fault line in the stone halted excavation midway, leaving a tantalizing glimpse into how ancient Indian sculptors planned their rock excavations.'
        }
      ]
    },
    nearbyExperienceIds: ['heritage-photography-masterclass', 'peths-heritage-walk']
  }
];
