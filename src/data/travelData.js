export const DESTINATIONS = [
  {
    id: 'somnath',
    name: 'Somnath',
    title: 'The First Jyotirlinga by the Arabian Sea',
    tagline: 'Divine Coastal Aarti & Eternal Faith',
    image: '/images/destinations/somnath.webp',
    distance: 'Base Location (0 km)',
    duration: '1 - 2 Days',
    bestTime: 'Year Round (Best: Oct - Mar)',
    tags: ['Jyotirlinga Darshan', 'Sound & Light Show', 'Triveni Sangam', 'Bhalka Tirth'],
    description: 'Stand at the shores of the Arabian Sea where Lord Shiva reigns as Someshwar. Experience the thunderous evening Aarti, walk the Sagar Darshan pathway, and witness the confluence of Hiran, Kapila and Saraswati rivers.',
    itineraryHighlight: 'Morning Abhishek & Darshan → Triveni Sangam holy dip → Bhalka Tirth → Evening Light & Sound Show at Somnath Beach.',
  },
  {
    id: 'gir',
    name: 'Sasan Gir',
    title: 'The Kingdom of the Asiatic Lion',
    tagline: 'Thrilling Wilderness & Teak Forests',
    image: '/images/destinations/gir.webp',
    distance: '45 km from Somnath (1 hr)',
    duration: '1 - 2 Days',
    bestTime: 'Mid-Oct to Mid-June',
    tags: ['Open Jeep Safari', 'Devalia Park', 'Maldhari Tribes', 'Kamleshwar Dam'],
    description: 'The sole sanctuary in the world where the majestic Asiatic Lion roams free. Traverse through dry teak deciduous forests on open 4x4 Gypsy safaris accompanied by government forest trackers.',
    itineraryHighlight: 'Early morning 6 AM Forest Safari → Visit Devalia Interpretation Zone → Authentic Kathiyawadi farm lunch → Crocodile breeding center.',
  },
  {
    id: 'diu',
    name: 'Diu Island',
    title: 'Portuguese Coastal Fortress & Beaches',
    tagline: 'Sun-Kissed Shorelines & Colonial Heritage',
    image: '/images/destinations/diu.webp',
    distance: '85 km from Somnath (2 hrs)',
    duration: '1 - 2 Days',
    bestTime: 'October to April',
    tags: ['Nagoa Beach', 'Portuguese Fort', 'Naida Caves', 'Ghoghla Watersports'],
    description: 'An idyllic coastal haven dotted with 16th-century Portuguese ramparts, sea-carved limestone caves at Naida, and tranquil horseshoe bays. The perfect coastal wind-down after temple visits.',
    itineraryHighlight: 'Explore Diu Fort cannon towers → Walk through surreal Naida Caves → Sunset relaxation & watersports at Nagoa Beach.',
  },
  {
    id: 'dwarka',
    name: 'Dwarka',
    title: 'Lord Krishna’s Golden Coastal Capital',
    tagline: 'Sacred Mokshapuri & Blue Flag Beach',
    image: '/images/destinations/dwarka.webp',
    distance: '235 km from Somnath (4.5 hrs)',
    duration: '2 Days',
    bestTime: 'September to March',
    tags: ['Dwarkadhish Jagat Mandir', 'Bet Dwarka Island', 'Shivrajpur Beach', 'Nageshwar Jyotirlinga'],
    description: 'The ancient kingdom submerged beneath the Arabian waves. Marvel at the 52-yard Dhwaja atop the Jagat Mandir, take a sea boat to Bet Dwarka, and visit Nageshwar Jyotirlinga.',
    itineraryHighlight: 'Dwarkadhish Mangla Aarti → Boat ride to Bet Dwarka island → Nageshwar Jyotirlinga darshan → Sunset at Shivrajpur Blue Flag beach.',
  }
];

export const SERVICES = [
  {
    id: 'cabs',
    title: 'Local & Outstation Cabs',
    subtitle: 'AC Innova Crysta, Ertiga & Sedans',
    icon: 'Car',
    image: '/images/services/cab-luxury.jpg',
    desc: 'Chauffeur-driven sanitized vehicles with experienced local drivers who know every scenic shortcut and temple route in Saurashtra.',
    features: ['Pick & Drop from Veraval / Rajkot / Ahmedabad', 'Fixed fair pricing, 0 hidden tolls', 'Spacious AC boot space for family luggage']
  },
  {
    id: 'hotel',
    title: 'Handpicked Hotels & Stays',
    subtitle: 'Walking distance to Somnath Temple',
    icon: 'Hotel',
    image: '/images/services/hotel-luxury.jpg',
    desc: 'Carefully vetted sea-facing hotels and heritage dharamshalas with clean linen, hot water, AC rooms, and high family safety standards.',
    features: ['Sea-view & Temple-adjacent properties', 'Early check-in assistance for morning trains', 'Safe, couple & elderly-friendly']
  },
  {
    id: 'food',
    title: 'Pure Gujarati & Kathiyawadi Food',
    subtitle: 'Satvik Dining & Authentic Flavours',
    icon: 'Utensils',
    image: '/images/services/food.webp',
    desc: 'Savor piping hot Bajra Rotla, Ringna no Olo, authentic Gujarati Thali, and pure Satvik vegetarian food curated by locals.',
    features: ['100% Pure Vegetarian & Satvik options', 'Hygiene verified dining partners', 'Traditional Saurashtrian hospitality']
  },
  {
    id: 'guidance',
    title: 'VIP Darshan & Local Guidance',
    subtitle: 'Aarti Timings & Pandit Coordination',
    icon: 'Compass',
    image: '/images/services/darshan.webp',
    desc: 'Skip confusing crowds with our verified ground coordinator guiding you on darshan slots, shoe-stall locations, and Aarti entry.',
    features: ['Somnath & Dwarka Aarti timings guide', 'Wheelchair assistance for senior citizens', 'Local Pandit coordination for puja & abhishek']
  }
];

export const PACKAGES = [
  {
    name: 'Somnath Divine Pilgrimage',
    tag: 'Most Popular for Weekend Trips',
    duration: '2 Days / 1 Night',
    route: 'Somnath • Bhalka Tirth • Triveni Sangam',
    highlights: ['VIP Darshan Guidance', 'Sound & Light Show pass', 'Comfortable AC Stay', 'Private AC Cab'],
    idealFor: 'Senior citizens & short family visits'
  },
  {
    name: 'Somnath + Sasan Gir Wildlife Escape',
    tag: 'Pilgrimage + Safari',
    duration: '3 Days / 2 Nights',
    route: 'Somnath • Sasan Gir Safari • Devalia',
    highlights: ['Somnath Temple Darshan', 'Gir 4x4 Gypsy Forest Safari', 'Teak Forest Stay', 'Authentic Kathiyawadi dining'],
    idealFor: 'Families with kids & wildlife lovers'
  },
  {
    name: 'Grand Saurashtra Circuit',
    tag: 'The Complete Gujarat Experience',
    duration: '5 Days / 4 Nights',
    route: 'Somnath • Sasan Gir • Diu Island • Dwarka',
    highlights: ['2 Jyotirlingas (Somnath & Nageshwar)', 'Dwarkadhish & Bet Dwarka', 'Diu Beach & Portuguese Fort', 'Dedicated Private Cab entire tour'],
    idealFor: 'Comprehensive family vacation'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh & Meena Sharma',
    city: 'Ahmedabad',
    rating: 5,
    text: 'Traveling with elderly parents was made completely stress-free. The local host picked us up from Veraval station at 5 AM, arranged a wheelchair at Somnath temple, and took us to the best Kathiyawadi bhojanalaya!',
    date: 'Travelled Oct 2026'
  },
  {
    name: 'Vikram Joshi',
    city: 'Mumbai',
    rating: 5,
    text: 'Somnath Local Host arranged our entire Somnath - Sasan Gir - Diu tour. The Innova cab was spotless, driver was extremely courteous and knowledgeable. Best price without any haggling.',
    date: 'Travelled Sep 2026'
  },
  {
    name: 'Dr. Sunita Verma',
    city: 'Delhi',
    rating: 5,
    text: 'Bas ek call kiya aur sab kuch organize ho gaya. Inka personal coordinator mandir darshan se lekar hotel check-in tak saath raha. True family-like care!',
    date: 'Travelled Aug 2026'
  }
];
