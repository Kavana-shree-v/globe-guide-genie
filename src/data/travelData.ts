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
  amenities: string[];
  description: string;
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
      { name: "Taj Lake Palace", rating: 5, priceRange: "₹25,000 – ₹60,000/night", amenities: ["Spa", "Pool", "Lake View", "Fine Dining"], description: "A floating marble palace on Lake Pichola." },
      { name: "Rambagh Palace", rating: 5, priceRange: "₹20,000 – ₹50,000/night", amenities: ["Heritage Rooms", "Golf", "Spa", "Gardens"], description: "Former residence of the Maharaja of Jaipur." },
      { name: "Hotel Haveli", rating: 3, priceRange: "₹2,000 – ₹5,000/night", amenities: ["WiFi", "Restaurant", "Rooftop"], description: "Charming budget haveli in the old city." },
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
      { name: "Kumarakom Lake Resort", rating: 5, priceRange: "₹18,000 – ₹45,000/night", amenities: ["Ayurvedic Spa", "Pool", "Houseboat", "Lake View"], description: "Luxury heritage resort on Vembanad Lake." },
      { name: "Spice Village", rating: 4, priceRange: "₹8,000 – ₹15,000/night", amenities: ["Eco Resort", "Spa", "Pool", "Spice Garden"], description: "Eco-friendly cottages amid a working spice plantation." },
      { name: "Zostel Alleppey", rating: 3, priceRange: "₹800 – ₹3,000/night", amenities: ["WiFi", "Common Kitchen", "Backwater View"], description: "Popular backpacker hostel near the backwaters." },
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
      { name: "Taj Exotica", rating: 5, priceRange: "₹15,000 – ₹40,000/night", amenities: ["Beach Access", "Spa", "Pool", "Golf"], description: "Mediterranean-style luxury resort on Benaulim Beach." },
      { name: "Alila Diwa Goa", rating: 4, priceRange: "₹8,000 – ₹18,000/night", amenities: ["Infinity Pool", "Spa", "Paddy Field View"], description: "Contemporary resort surrounded by lush paddy fields." },
      { name: "Zostel Goa", rating: 3, priceRange: "₹600 – ₹2,500/night", amenities: ["WiFi", "Common Area", "Near Beach"], description: "Fun backpacker hostel minutes from Anjuna Beach." },
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
      { name: "Wildflower Hall", rating: 5, priceRange: "₹20,000 – ₹50,000/night", amenities: ["Mountain View", "Spa", "Pool", "Trekking"], description: "Oberoi luxury amid cedar forests above Shimla." },
      { name: "The Himalayan", rating: 4, priceRange: "₹6,000 – ₹12,000/night", amenities: ["Valley View", "Restaurant", "Bonfire"], description: "Cozy mountain retreat in Manali with valley views." },
      { name: "Hosteller Kasol", rating: 3, priceRange: "₹500 – ₹2,000/night", amenities: ["WiFi", "Mountain View", "Café"], description: "Popular hostel on the banks of Parvati River." },
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
      { name: "Taj Coromandel", rating: 5, priceRange: "₹12,000 – ₹30,000/night", amenities: ["Spa", "Pool", "Fine Dining", "City View"], description: "Premier luxury hotel in the heart of Chennai." },
      { name: "Svatma Heritage", rating: 4, priceRange: "₹7,000 – ₹15,000/night", amenities: ["Heritage Rooms", "Yoga", "Ayurveda", "Cultural Shows"], description: "Boutique heritage hotel in Thanjavur." },
      { name: "Hotel Tamil Nadu", rating: 3, priceRange: "₹1,500 – ₹4,000/night", amenities: ["WiFi", "Restaurant", "AC Rooms"], description: "Government-run hotel chain across the state." },
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
      { name: "The Oberoi Amarvilas", rating: 5, priceRange: "₹30,000 – ₹70,000/night", amenities: ["Taj Mahal View", "Spa", "Pool", "Butler Service"], description: "Uninterrupted views of the Taj Mahal from every room." },
      { name: "BrijRama Palace", rating: 4, priceRange: "₹10,000 – ₹25,000/night", amenities: ["Ghat View", "Heritage", "Boat Rides", "Yoga"], description: "Heritage palace hotel on Darbhanga Ghat, Varanasi." },
      { name: "Hotel Ganges View", rating: 3, priceRange: "₹2,000 – ₹5,000/night", amenities: ["River View", "WiFi", "Rooftop Café"], description: "Charming hotel overlooking the sacred Ganges." },
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
      { name: "Taj Mahal Palace", rating: 5, priceRange: "₹18,000 – ₹50,000/night", amenities: ["Sea View", "Spa", "Pool", "Heritage"], description: "Iconic luxury hotel facing the Gateway of India." },
      { name: "The Fern Goregaon", rating: 4, priceRange: "₹5,000 – ₹10,000/night", amenities: ["Eco-Friendly", "Pool", "Restaurant"], description: "Green hotel with modern amenities in Mumbai." },
      { name: "FabHotel", rating: 3, priceRange: "₹1,500 – ₹4,000/night", amenities: ["WiFi", "AC", "Breakfast"], description: "Budget-friendly chain across major cities." },
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
      { name: "Evolve Back, Hampi", rating: 5, priceRange: "₹15,000 – ₹35,000/night", amenities: ["Heritage", "Pool", "Spa", "Ruin Views"], description: "Luxury resort inspired by Vijayanagara architecture." },
      { name: "Tamara Coorg", rating: 4, priceRange: "₹10,000 – ₹22,000/night", amenities: ["Coffee Estate", "Spa", "Nature Walks"], description: "Eco-luxury amid 180 acres of coffee and spice plantations." },
      { name: "Zostel Gokarna", rating: 3, priceRange: "₹600 – ₹2,500/night", amenities: ["Beach View", "WiFi", "Common Area"], description: "Beachside hostel overlooking Kudle Beach." },
    ],
    tips: ["Visit Hampi at sunrise for best photos", "Try Bisi Bele Bath and Mysore Pak", "Book Coorg stays during weekdays", "Carry umbrella during monsoon season"],
  },
];
