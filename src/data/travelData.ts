import rajasthanImg from "@/assets/rajasthan.jpg";
import keralaImg from "@/assets/kerala.jpg";
import goaImg from "@/assets/goa.jpg";
import himachalImg from "@/assets/himachal.jpg";
import tamilnaduImg from "@/assets/tamilnadu.jpg";
import uttarpradeshImg from "@/assets/uttarpradesh.jpg";
import maharashtraImg from "@/assets/maharashtra.jpg";
import karnatakaImg from "@/assets/karnataka.jpg";

export interface Place {
  name: string;
  description: string;
  mustWatch: boolean;
  timeNeeded: string;
}

export interface Hotel {
  name: string;
  rating: number;
  priceRange: string;
  priceMin: number;
  priceMax: number;
  amenities: string[];
  description: string;
}

export interface Activity {
  name: string;
  cost: number;
  duration: string;
  category: "adventure" | "culture" | "nature" | "food" | "wellness";
  description: string;
}

export interface LocalFood {
  name: string;
  description: string;
  price: string;
  spiceLevel: 1 | 2 | 3 | 4 | 5;
  isVeg: boolean;
  emoji: string;
}

export interface StateData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  bestTime: string;
  language: string;
  currency: string;
  avgTemp: string;
  places: Place[];
  hotels: Hotel[];
  activities: Activity[];
  foods: LocalFood[];
  tips: string[];
}

export const states: StateData[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Land of Kings & Colors",
    description: "Experience the royal heritage of India with majestic forts, vibrant culture, and golden deserts. Rajasthan is a treasure trove of history and tradition.",
    image: rajasthanImg,
    bestTime: "October – March",
    language: "Hindi, Rajasthani",
    currency: "INR (₹)",
    avgTemp: "25°C – 35°C",
    places: [
      { name: "Jaipur – Hawa Mahal", description: "The iconic 'Palace of Winds' with 953 small windows, a stunning pink sandstone landmark.", mustWatch: true, timeNeeded: "2-3 hours" },
      { name: "Udaipur – City Palace", description: "A magnificent complex overlooking Lake Pichola, blending Rajasthani and Mughal architecture.", mustWatch: true, timeNeeded: "3-4 hours" },
      { name: "Jaisalmer Fort", description: "A living fort rising from the golden sands of the Thar Desert, one of the largest in the world.", mustWatch: true, timeNeeded: "Half day" },
      { name: "Pushkar Lake", description: "Sacred lake surrounded by 52 bathing ghats and the only Brahma temple in the world.", mustWatch: false, timeNeeded: "2-3 hours" },
      { name: "Ranthambore National Park", description: "One of India's best tiger reserves set among ancient ruins.", mustWatch: false, timeNeeded: "Full day" },
      { name: "Mehrangarh Fort, Jodhpur", description: "Towering fort with panoramic views of the Blue City below.", mustWatch: true, timeNeeded: "3-4 hours" },
    ],
    hotels: [
      { name: "Taj Lake Palace", rating: 5, priceRange: "₹25,000 – ₹60,000/night", priceMin: 25000, priceMax: 60000, amenities: ["Spa", "Pool", "Lake View", "Fine Dining"], description: "A floating marble palace on Lake Pichola." },
      { name: "Rambagh Palace", rating: 5, priceRange: "₹20,000 – ₹50,000/night", priceMin: 20000, priceMax: 50000, amenities: ["Heritage Rooms", "Golf", "Spa", "Gardens"], description: "Former residence of the Maharaja of Jaipur." },
      { name: "Hotel Haveli", rating: 3, priceRange: "₹2,000 – ₹5,000/night", priceMin: 2000, priceMax: 5000, amenities: ["WiFi", "Restaurant", "Rooftop"], description: "Charming budget haveli in the old city." },
    ],
    activities: [
      { name: "Camel Safari in Thar Desert", cost: 2500, duration: "3-4 hours", category: "adventure", description: "Ride through golden sand dunes at sunset" },
      { name: "Rajasthani Puppet Show", cost: 500, duration: "1 hour", category: "culture", description: "Traditional string puppet performance" },
      { name: "Hot Air Balloon Ride", cost: 12000, duration: "1 hour", category: "adventure", description: "Soar above Jaipur's forts and palaces" },
      { name: "Cooking Class", cost: 1500, duration: "3 hours", category: "food", description: "Learn to make authentic dal baati churma" },
      { name: "Lake Pichola Boat Ride", cost: 800, duration: "1 hour", category: "nature", description: "Scenic boat ride with palace views" },
    ],
    foods: [
      { name: "Dal Baati Churma", description: "Baked wheat balls with lentil curry and sweet crumble", price: "₹200-400", spiceLevel: 2, isVeg: true, emoji: "🫓" },
      { name: "Laal Maas", description: "Fiery red mutton curry with Mathania chillies", price: "₹350-500", spiceLevel: 5, isVeg: false, emoji: "🍖" },
      { name: "Ghewar", description: "Disc-shaped honeycomb sweet soaked in sugar syrup", price: "₹100-250", spiceLevel: 1, isVeg: true, emoji: "🍯" },
      { name: "Pyaaz Kachori", description: "Deep-fried pastry stuffed with spiced onion filling", price: "₹30-60", spiceLevel: 3, isVeg: true, emoji: "🥟" },
    ],
    tips: ["Carry sunscreen and stay hydrated", "Bargain at local markets", "Try dal baati churma", "Book desert safari in advance"],
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    description: "Lush backwaters, serene beaches, spice plantations, and Ayurvedic traditions make Kerala a tropical paradise unlike any other.",
    image: keralaImg,
    bestTime: "September – March",
    language: "Malayalam",
    currency: "INR (₹)",
    avgTemp: "22°C – 33°C",
    places: [
      { name: "Alleppey Backwaters", description: "Cruise through palm-fringed canals on a traditional houseboat — a quintessential Kerala experience.", mustWatch: true, timeNeeded: "Full day" },
      { name: "Munnar Tea Gardens", description: "Rolling hills carpeted in emerald tea plantations with misty mountain views.", mustWatch: true, timeNeeded: "Full day" },
      { name: "Fort Kochi", description: "Historic port town with Chinese fishing nets, colonial churches, and vibrant street art.", mustWatch: true, timeNeeded: "Half day" },
      { name: "Periyar Wildlife Sanctuary", description: "Spot elephants and rare birds in this pristine forest around Periyar Lake.", mustWatch: false, timeNeeded: "Full day" },
      { name: "Varkala Cliff Beach", description: "Dramatic red cliffs dropping to golden sand and turquoise waters.", mustWatch: false, timeNeeded: "Half day" },
    ],
    hotels: [
      { name: "Kumarakom Lake Resort", rating: 5, priceRange: "₹18,000 – ₹45,000/night", priceMin: 18000, priceMax: 45000, amenities: ["Ayurvedic Spa", "Pool", "Houseboat", "Lake View"], description: "Luxury heritage resort on Vembanad Lake." },
      { name: "Spice Village", rating: 4, priceRange: "₹8,000 – ₹15,000/night", priceMin: 8000, priceMax: 15000, amenities: ["Eco Resort", "Spa", "Pool", "Spice Garden"], description: "Eco-friendly cottages amid a working spice plantation." },
      { name: "Zostel Alleppey", rating: 3, priceRange: "₹800 – ₹3,000/night", priceMin: 800, priceMax: 3000, amenities: ["WiFi", "Common Kitchen", "Backwater View"], description: "Popular backpacker hostel near the backwaters." },
    ],
    activities: [
      { name: "Houseboat Cruise", cost: 8000, duration: "Full day", category: "nature", description: "Float through serene backwater canals" },
      { name: "Ayurvedic Massage", cost: 3000, duration: "2 hours", category: "wellness", description: "Traditional Kerala Ayurvedic rejuvenation" },
      { name: "Kathakali Dance Show", cost: 400, duration: "2 hours", category: "culture", description: "Classical dance-drama performance" },
      { name: "Spice Plantation Tour", cost: 600, duration: "2 hours", category: "nature", description: "Walk through cardamom, pepper, and tea estates" },
      { name: "Bamboo Rafting", cost: 1500, duration: "3 hours", category: "adventure", description: "Raft through Periyar's jungle waterways" },
    ],
    foods: [
      { name: "Kerala Sadya", description: "Grand vegetarian feast served on banana leaf with 20+ dishes", price: "₹300-600", spiceLevel: 3, isVeg: true, emoji: "🍌" },
      { name: "Malabar Fish Curry", description: "Tangy coconut-based curry with pearl spot fish", price: "₹250-450", spiceLevel: 3, isVeg: false, emoji: "🐟" },
      { name: "Appam with Stew", description: "Lacy rice pancake with mild coconut vegetable stew", price: "₹150-250", spiceLevel: 1, isVeg: true, emoji: "🥞" },
      { name: "Banana Chips", description: "Crispy chips fried in coconut oil, sweet and salty varieties", price: "₹50-100", spiceLevel: 1, isVeg: true, emoji: "🍌" },
    ],
    tips: ["Try a traditional Kerala sadya meal", "Book houseboat in advance", "Carry rain gear", "Experience Kathakali dance performance"],
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Sun, Sand & Soul",
    description: "India's smallest state packs the biggest punch — world-class beaches, Portuguese heritage, vibrant nightlife, and laid-back coastal charm.",
    image: goaImg,
    bestTime: "November – February",
    language: "Konkani, English",
    currency: "INR (₹)",
    avgTemp: "25°C – 33°C",
    places: [
      { name: "Basilica of Bom Jesus", description: "UNESCO World Heritage Site housing the remains of St. Francis Xavier.", mustWatch: true, timeNeeded: "1-2 hours" },
      { name: "Dudhsagar Falls", description: "Spectacular four-tiered waterfall cascading 310 meters through lush forest.", mustWatch: true, timeNeeded: "Full day" },
      { name: "Palolem Beach", description: "Crescent-shaped bay with calm waters, perfect for swimming and kayaking.", mustWatch: true, timeNeeded: "Half day" },
      { name: "Fort Aguada", description: "17th-century Portuguese fort with panoramic views of the Arabian Sea.", mustWatch: false, timeNeeded: "2 hours" },
      { name: "Anjuna Flea Market", description: "Vibrant Wednesday market with handicrafts, clothes, and street food.", mustWatch: false, timeNeeded: "3-4 hours" },
    ],
    hotels: [
      { name: "Taj Exotica", rating: 5, priceRange: "₹15,000 – ₹40,000/night", priceMin: 15000, priceMax: 40000, amenities: ["Beach Access", "Spa", "Pool", "Golf"], description: "Mediterranean-style luxury resort on Benaulim Beach." },
      { name: "Alila Diwa Goa", rating: 4, priceRange: "₹8,000 – ₹18,000/night", priceMin: 8000, priceMax: 18000, amenities: ["Infinity Pool", "Spa", "Paddy Field View"], description: "Contemporary resort surrounded by lush paddy fields." },
      { name: "Zostel Goa", rating: 3, priceRange: "₹600 – ₹2,500/night", priceMin: 600, priceMax: 2500, amenities: ["WiFi", "Common Area", "Near Beach"], description: "Fun backpacker hostel minutes from Anjuna Beach." },
    ],
    activities: [
      { name: "Scuba Diving", cost: 4500, duration: "3 hours", category: "adventure", description: "Explore coral reefs at Grande Island" },
      { name: "Spice Plantation Visit", cost: 800, duration: "2 hours", category: "nature", description: "Tour organic spice farm with lunch" },
      { name: "Sunset Cruise", cost: 1800, duration: "2 hours", category: "nature", description: "Mandovi river cruise with live music" },
      { name: "Beach Yoga Session", cost: 500, duration: "1 hour", category: "wellness", description: "Sunrise yoga on the beach" },
      { name: "Old Goa Heritage Walk", cost: 300, duration: "3 hours", category: "culture", description: "Guided tour of Portuguese colonial churches" },
    ],
    foods: [
      { name: "Goan Fish Curry Rice", description: "Tangy coconut curry with fresh catch served over rice", price: "₹200-350", spiceLevel: 3, isVeg: false, emoji: "🍛" },
      { name: "Bebinca", description: "Traditional 7-layered Goan coconut pudding dessert", price: "₹150-250", spiceLevel: 1, isVeg: true, emoji: "🍰" },
      { name: "Pork Vindaloo", description: "Spicy pork curry with vinegar, a Portuguese-Goan classic", price: "₹300-450", spiceLevel: 4, isVeg: false, emoji: "🍖" },
      { name: "Feni", description: "Local cashew or coconut spirit, Goa's signature drink", price: "₹100-300", spiceLevel: 1, isVeg: true, emoji: "🥃" },
    ],
    tips: ["Rent a scooter to explore", "Visit North Goa for nightlife, South for peace", "Try Goan fish curry rice", "Respect local fishing communities"],
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    tagline: "Adventures in the Himalayas",
    description: "Snow-capped peaks, alpine meadows, ancient temples, and thrilling adventure sports — Himachal is a paradise for nature lovers and thrill seekers.",
    image: himachalImg,
    bestTime: "March – June, September – November",
    language: "Hindi, Pahari",
    currency: "INR (₹)",
    avgTemp: "5°C – 25°C",
    places: [
      { name: "Shimla – The Ridge", description: "Colonial hill station charm with stunning mountain views and heritage architecture.", mustWatch: true, timeNeeded: "Half day" },
      { name: "Manali – Rohtang Pass", description: "High-altitude pass with breathtaking snow views and adventure activities.", mustWatch: true, timeNeeded: "Full day" },
      { name: "Dharamshala & McLeod Ganj", description: "Home of the Dalai Lama, Tibetan culture, and serene mountain monasteries.", mustWatch: true, timeNeeded: "1-2 days" },
      { name: "Spiti Valley", description: "Remote high-altitude desert valley with ancient monasteries and stark beauty.", mustWatch: true, timeNeeded: "3-5 days" },
      { name: "Kasol", description: "Backpacker's paradise nestled in the Parvati Valley with Israeli cafés and scenic treks.", mustWatch: false, timeNeeded: "1-2 days" },
    ],
    hotels: [
      { name: "Wildflower Hall", rating: 5, priceRange: "₹20,000 – ₹50,000/night", priceMin: 20000, priceMax: 50000, amenities: ["Mountain View", "Spa", "Pool", "Trekking"], description: "Oberoi luxury amid cedar forests above Shimla." },
      { name: "The Himalayan", rating: 4, priceRange: "₹6,000 – ₹12,000/night", priceMin: 6000, priceMax: 12000, amenities: ["Valley View", "Restaurant", "Bonfire"], description: "Cozy mountain retreat in Manali with valley views." },
      { name: "Hosteller Kasol", rating: 3, priceRange: "₹500 – ₹2,000/night", priceMin: 500, priceMax: 2000, amenities: ["WiFi", "Mountain View", "Café"], description: "Popular hostel on the banks of Parvati River." },
    ],
    activities: [
      { name: "Paragliding in Bir Billing", cost: 3000, duration: "30 mins", category: "adventure", description: "World's second-highest paragliding site" },
      { name: "Trekking to Triund", cost: 1500, duration: "Full day", category: "adventure", description: "Moderate trek with stunning Dhauladhar views" },
      { name: "River Rafting in Kullu", cost: 1800, duration: "2 hours", category: "adventure", description: "White water rafting on the Beas River" },
      { name: "Monastery Visit", cost: 0, duration: "2 hours", category: "culture", description: "Explore ancient Tibetan Buddhist monasteries" },
      { name: "Snow Activities at Solang", cost: 2000, duration: "3 hours", category: "adventure", description: "Skiing, snowboarding, and snow tubing" },
    ],
    foods: [
      { name: "Siddu", description: "Steamed wheat bread stuffed with poppy seeds, served with ghee", price: "₹80-150", spiceLevel: 1, isVeg: true, emoji: "🍞" },
      { name: "Madra", description: "Rich chickpea curry cooked in yogurt and spices", price: "₹150-250", spiceLevel: 2, isVeg: true, emoji: "🫘" },
      { name: "Thukpa", description: "Tibetan noodle soup with vegetables or meat", price: "₹100-200", spiceLevel: 2, isVeg: false, emoji: "🍜" },
      { name: "Dham", description: "Traditional festive meal with rajma, rice, and sweet rice", price: "₹200-350", spiceLevel: 2, isVeg: true, emoji: "🍚" },
    ],
    tips: ["Carry warm layers even in summer", "Acclimatize before high altitude treks", "Book Spiti Valley permits in advance", "Try local Siddu bread"],
  },
  {
    id: "tamilnadu",
    name: "Tamil Nadu",
    tagline: "Temple Trails & Coastal Beauty",
    description: "Ancient Dravidian temples, classical dance, aromatic cuisine, and beautiful coastline make Tamil Nadu a cultural powerhouse of South India.",
    image: tamilnaduImg,
    bestTime: "November – February",
    language: "Tamil",
    currency: "INR (₹)",
    avgTemp: "24°C – 35°C",
    places: [
      { name: "Meenakshi Temple, Madurai", description: "Spectacular temple complex with 14 colorful gopurams and thousands of sculptures.", mustWatch: true, timeNeeded: "3-4 hours" },
      { name: "Mahabalipuram Shore Temple", description: "UNESCO-listed 7th-century temple overlooking the Bay of Bengal.", mustWatch: true, timeNeeded: "2-3 hours" },
      { name: "Ooty Hill Station", description: "The 'Queen of Hill Stations' with tea gardens, botanical gardens, and toy train.", mustWatch: true, timeNeeded: "1-2 days" },
      { name: "Rameshwaram", description: "Sacred island with the Ramanathaswamy Temple and India's first sea bridge.", mustWatch: false, timeNeeded: "Full day" },
      { name: "Chettinad", description: "Heritage region known for grand mansions and spicy, aromatic cuisine.", mustWatch: false, timeNeeded: "1 day" },
    ],
    hotels: [
      { name: "Taj Coromandel", rating: 5, priceRange: "₹12,000 – ₹30,000/night", priceMin: 12000, priceMax: 30000, amenities: ["Spa", "Pool", "Fine Dining", "City View"], description: "Premier luxury hotel in the heart of Chennai." },
      { name: "Svatma Heritage", rating: 4, priceRange: "₹7,000 – ₹15,000/night", priceMin: 7000, priceMax: 15000, amenities: ["Heritage Rooms", "Yoga", "Ayurveda", "Cultural Shows"], description: "Boutique heritage hotel in Thanjavur." },
      { name: "Hotel Tamil Nadu", rating: 3, priceRange: "₹1,500 – ₹4,000/night", priceMin: 1500, priceMax: 4000, amenities: ["WiFi", "Restaurant", "AC Rooms"], description: "Government-run hotel chain across the state." },
    ],
    activities: [
      { name: "Bharatanatyam Show", cost: 500, duration: "1.5 hours", category: "culture", description: "Classical Tamil dance performance" },
      { name: "Ooty Toy Train Ride", cost: 300, duration: "5 hours", category: "nature", description: "Heritage train through Nilgiri mountains" },
      { name: "Temple Trail Tour", cost: 1200, duration: "Full day", category: "culture", description: "Guided tour of Madurai's ancient temples" },
      { name: "Chettinad Cooking Class", cost: 1500, duration: "3 hours", category: "food", description: "Master the art of Chettinad spice cooking" },
      { name: "Crocodile Bank Visit", cost: 200, duration: "2 hours", category: "nature", description: "Asia's largest reptile zoo near Chennai" },
    ],
    foods: [
      { name: "Filter Coffee", description: "Strong, frothy South Indian coffee brewed in a brass filter", price: "₹20-50", spiceLevel: 1, isVeg: true, emoji: "☕" },
      { name: "Chettinad Chicken", description: "Fiery chicken curry with freshly ground spice blend", price: "₹250-400", spiceLevel: 5, isVeg: false, emoji: "🍗" },
      { name: "Masala Dosa", description: "Crispy rice crepe filled with spiced potato", price: "₹80-150", spiceLevel: 2, isVeg: true, emoji: "🫓" },
      { name: "Jigarthanda", description: "Madurai's famous cold drink with almond gum and ice cream", price: "₹50-100", spiceLevel: 1, isVeg: true, emoji: "🥤" },
    ],
    tips: ["Remove shoes before entering temples", "Try filter coffee and dosa", "Visit temples early morning to avoid crowds", "Carry modest clothing for temples"],
  },
  {
    id: "uttarpradesh",
    name: "Uttar Pradesh",
    tagline: "Heritage of the Ages",
    description: "Home to the Taj Mahal, spiritual Varanasi, and the birthplace of Lord Rama — UP is where India's ancient history comes alive.",
    image: uttarpradeshImg,
    bestTime: "October – March",
    language: "Hindi, Urdu",
    currency: "INR (₹)",
    avgTemp: "20°C – 35°C",
    places: [
      { name: "Taj Mahal, Agra", description: "The iconic marble monument of love — one of the Seven Wonders of the World.", mustWatch: true, timeNeeded: "3-4 hours" },
      { name: "Varanasi Ghats", description: "Ancient ghats along the Ganges where life and spirituality merge at sunrise aarti.", mustWatch: true, timeNeeded: "Full day" },
      { name: "Fatehpur Sikri", description: "Magnificent abandoned Mughal city built by Emperor Akbar.", mustWatch: true, timeNeeded: "3-4 hours" },
      { name: "Lucknow – Bara Imambara", description: "Grand 18th-century Mughal complex with an intricate labyrinth.", mustWatch: false, timeNeeded: "2-3 hours" },
      { name: "Sarnath", description: "Sacred Buddhist site where Buddha gave his first sermon after enlightenment.", mustWatch: false, timeNeeded: "2-3 hours" },
    ],
    hotels: [
      { name: "The Oberoi Amarvilas", rating: 5, priceRange: "₹30,000 – ₹70,000/night", priceMin: 30000, priceMax: 70000, amenities: ["Taj Mahal View", "Spa", "Pool", "Butler Service"], description: "Uninterrupted views of the Taj Mahal from every room." },
      { name: "BrijRama Palace", rating: 4, priceRange: "₹10,000 – ₹25,000/night", priceMin: 10000, priceMax: 25000, amenities: ["Ghat View", "Heritage", "Boat Rides", "Yoga"], description: "Heritage palace hotel on Darbhanga Ghat, Varanasi." },
      { name: "Hotel Ganges View", rating: 3, priceRange: "₹2,000 – ₹5,000/night", priceMin: 2000, priceMax: 5000, amenities: ["River View", "WiFi", "Rooftop Café"], description: "Charming hotel overlooking the sacred Ganges." },
    ],
    activities: [
      { name: "Sunrise Boat Ride on Ganges", cost: 500, duration: "1.5 hours", category: "culture", description: "Witness the sacred morning aarti from the river" },
      { name: "Taj Mahal Guided Tour", cost: 2000, duration: "3 hours", category: "culture", description: "Expert-led tour with historical insights" },
      { name: "Street Food Walk in Lucknow", cost: 800, duration: "3 hours", category: "food", description: "Taste legendary kebabs and chaat" },
      { name: "Yoga Session in Rishikesh", cost: 600, duration: "2 hours", category: "wellness", description: "Traditional yoga at the Ganges banks" },
      { name: "Silk Weaving Workshop", cost: 1000, duration: "2 hours", category: "culture", description: "Learn Banarasi silk weaving techniques" },
    ],
    foods: [
      { name: "Lucknowi Kebab", description: "Melt-in-mouth galouti and kakori kebabs, Awadhi royalty", price: "₹200-400", spiceLevel: 3, isVeg: false, emoji: "🥩" },
      { name: "Banarasi Paan", description: "Betel leaf loaded with sweet fillings, a Varanasi ritual", price: "₹20-100", spiceLevel: 1, isVeg: true, emoji: "🌿" },
      { name: "Petha", description: "Agra's famous translucent ash gourd sweet", price: "₹100-300/box", spiceLevel: 1, isVeg: true, emoji: "🍬" },
      { name: "Chaat", description: "Tangy, spicy street snack mix — Varanasi style", price: "₹30-80", spiceLevel: 3, isVeg: true, emoji: "🥗" },
    ],
    tips: ["Visit Taj Mahal at sunrise", "Take a boat ride on the Ganges at dawn", "Try Lucknowi kebabs and biriyani", "Hire a local guide for historical context"],
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    tagline: "Gateway to Wonders",
    description: "From Mumbai's bustling energy to Ajanta's ancient caves, Maharashtra blends cosmopolitan flair with rich historical and natural heritage.",
    image: maharashtraImg,
    bestTime: "October – March",
    language: "Marathi, Hindi",
    currency: "INR (₹)",
    avgTemp: "22°C – 34°C",
    places: [
      { name: "Gateway of India, Mumbai", description: "Iconic arch monument overlooking the Arabian Sea, Mumbai's most famous landmark.", mustWatch: true, timeNeeded: "1-2 hours" },
      { name: "Ajanta & Ellora Caves", description: "UNESCO World Heritage rock-cut caves with stunning Buddhist, Hindu and Jain art.", mustWatch: true, timeNeeded: "Full day" },
      { name: "Lonavala & Khandala", description: "Twin hill stations with waterfalls, forts, and lush monsoon beauty.", mustWatch: false, timeNeeded: "1 day" },
      { name: "Shirdi", description: "Sacred pilgrimage site of Sai Baba with the grand Samadhi Mandir.", mustWatch: false, timeNeeded: "Half day" },
      { name: "Raigad Fort", description: "Capital fort of the Maratha Empire with stunning views and cable car access.", mustWatch: true, timeNeeded: "Full day" },
    ],
    hotels: [
      { name: "Taj Mahal Palace", rating: 5, priceRange: "₹18,000 – ₹50,000/night", priceMin: 18000, priceMax: 50000, amenities: ["Sea View", "Spa", "Pool", "Heritage"], description: "Iconic luxury hotel facing the Gateway of India." },
      { name: "The Fern Goregaon", rating: 4, priceRange: "₹5,000 – ₹10,000/night", priceMin: 5000, priceMax: 10000, amenities: ["Eco-Friendly", "Pool", "Restaurant"], description: "Green hotel with modern amenities in Mumbai." },
      { name: "FabHotel", rating: 3, priceRange: "₹1,500 – ₹4,000/night", priceMin: 1500, priceMax: 4000, amenities: ["WiFi", "AC", "Breakfast"], description: "Budget-friendly chain across major cities." },
    ],
    activities: [
      { name: "Bollywood Studio Tour", cost: 1500, duration: "3 hours", category: "culture", description: "Behind-the-scenes look at Film City" },
      { name: "Mumbai Street Food Tour", cost: 1000, duration: "3 hours", category: "food", description: "Taste vada pav, pav bhaji, and more" },
      { name: "Elephanta Caves Ferry", cost: 600, duration: "Half day", category: "culture", description: "Ferry ride to ancient rock-cut cave temples" },
      { name: "Trekking at Rajmachi Fort", cost: 800, duration: "Full day", category: "adventure", description: "Scenic monsoon trek near Lonavala" },
      { name: "Dabba Wala Experience", cost: 500, duration: "2 hours", category: "culture", description: "Follow Mumbai's legendary lunchbox delivery system" },
    ],
    foods: [
      { name: "Vada Pav", description: "Mumbai's iconic spicy potato fritter in a bun", price: "₹20-50", spiceLevel: 3, isVeg: true, emoji: "🍔" },
      { name: "Pav Bhaji", description: "Spiced mashed vegetable curry with buttered bread rolls", price: "₹80-150", spiceLevel: 3, isVeg: true, emoji: "🫓" },
      { name: "Puran Poli", description: "Sweet flatbread stuffed with jaggery and lentil filling", price: "₹50-100", spiceLevel: 1, isVeg: true, emoji: "🫓" },
      { name: "Bombay Sandwich", description: "Layered veggie sandwich with green chutney and cheese", price: "₹40-80", spiceLevel: 2, isVeg: true, emoji: "🥪" },
    ],
    tips: ["Use local trains in Mumbai to get around", "Visit Ajanta/Ellora early to beat crowds", "Try vada pav and pav bhaji", "Monsoon is magical for hill stations"],
  },
  {
    id: "karnataka",
    name: "Karnataka",
    tagline: "One State, Many Worlds",
    description: "Tech capital Bangalore, royal Mysore, ancient Hampi, and coffee plantations — Karnataka offers an incredible diversity of experiences.",
    image: karnatakaImg,
    bestTime: "October – February",
    language: "Kannada",
    currency: "INR (₹)",
    avgTemp: "20°C – 34°C",
    places: [
      { name: "Hampi Ruins", description: "Surreal boulder-strewn landscape with remains of the mighty Vijayanagara Empire.", mustWatch: true, timeNeeded: "1-2 days" },
      { name: "Mysore Palace", description: "Opulent Indo-Saracenic palace illuminated by 97,000 lights during Dasara.", mustWatch: true, timeNeeded: "3-4 hours" },
      { name: "Coorg (Kodagu)", description: "Misty coffee plantation region with waterfalls, trekking, and spice gardens.", mustWatch: true, timeNeeded: "2-3 days" },
      { name: "Gokarna Beach", description: "Pristine beaches and Om-shaped bay, a quieter alternative to Goa.", mustWatch: false, timeNeeded: "1-2 days" },
      { name: "Jog Falls", description: "India's second-highest plunge waterfall, spectacular during monsoon season.", mustWatch: false, timeNeeded: "Half day" },
    ],
    hotels: [
      { name: "Evolve Back, Hampi", rating: 5, priceRange: "₹15,000 – ₹35,000/night", priceMin: 15000, priceMax: 35000, amenities: ["Heritage", "Pool", "Spa", "Ruin Views"], description: "Luxury resort inspired by Vijayanagara architecture." },
      { name: "Tamara Coorg", rating: 4, priceRange: "₹10,000 – ₹22,000/night", priceMin: 10000, priceMax: 22000, amenities: ["Coffee Estate", "Spa", "Nature Walks"], description: "Eco-luxury amid 180 acres of coffee and spice plantations." },
      { name: "Zostel Gokarna", rating: 3, priceRange: "₹600 – ₹2,500/night", priceMin: 600, priceMax: 2500, amenities: ["Beach View", "WiFi", "Common Area"], description: "Beachside hostel overlooking Kudle Beach." },
    ],
    activities: [
      { name: "Hampi Bicycle Tour", cost: 500, duration: "Full day", category: "adventure", description: "Cycle through ancient ruins and boulder landscapes" },
      { name: "Coffee Estate Stay", cost: 5000, duration: "1 day", category: "nature", description: "Experience coffee harvesting in Coorg" },
      { name: "Mysore Palace Light Show", cost: 100, duration: "1 hour", category: "culture", description: "Watch 97,000 bulbs illuminate the palace" },
      { name: "Beach Trek in Gokarna", cost: 200, duration: "4 hours", category: "adventure", description: "Trek between five pristine beaches" },
      { name: "Silk Saree Shopping", cost: 3000, duration: "2 hours", category: "culture", description: "Buy authentic Mysore silk sarees" },
    ],
    foods: [
      { name: "Bisi Bele Bath", description: "Spiced rice-lentil dish with vegetables, a Karnataka staple", price: "₹80-150", spiceLevel: 3, isVeg: true, emoji: "🍚" },
      { name: "Mysore Pak", description: "Rich, ghee-laden gram flour sweet from Mysore", price: "₹50-150", spiceLevel: 1, isVeg: true, emoji: "🍮" },
      { name: "Mangalorean Fish Curry", description: "Tangy coconut-based curry with local fish", price: "₹200-350", spiceLevel: 3, isVeg: false, emoji: "🐟" },
      { name: "Coorg Pandi Curry", description: "Coorgi-style pork curry with kachampuli vinegar", price: "₹250-400", spiceLevel: 4, isVeg: false, emoji: "🍖" },
    ],
    tips: ["Visit Hampi at sunrise for best photos", "Try Bisi Bele Bath and Mysore Pak", "Book Coorg stays during weekdays", "Carry umbrella during monsoon season"],
  },
];
