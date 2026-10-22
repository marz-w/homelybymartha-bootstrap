/**
 * Homely Student Residents - Listings & Agents Data
 * Single Source of Truth
 */

const agentsData = [
  {
    id: "faith-wanjiku",
    name: "Faith Wanjiku",
    role: "Student Housing Agent - Roysambu & Kahawa",
    photo: "assets/img/agents/agent-woman-green-blazer.jpg",
    phone: "+254 712 345 678",
    phoneClean: "254712345678",
    email: "faith.wanjiku@homely.co.ke",
    areas: ["Roysambu/Kasarani", "Kahawa Sukari"],
    bio: "Faith specializes in secure student accommodations around USIU-Africa and Kenyatta University (KU). With 4+ years of local experience, she guides students and parents through transparent leases, clean water compounds, and verified tokens."
  },
  {
    id: "peter-kamau",
    name: "Peter Kamau",
    role: "Student Housing Agent - Juja & Ruaka",
    photo: "assets/img/agents/agent-man-blue-shirt.jpg",
    phone: "+254 723 456 789",
    phoneClean: "254723456789",
    email: "peter.kamau@homely.co.ke",
    areas: ["Juja", "Ruaka"],
    bio: "Peter covers JKUAT Main Campus surroundings and Ruaka's vibrant student scene. He helps students secure modern bedsitters and one-bedrooms with high-speed fiber internet, private balconies, and proximity to lecture halls."
  },
  {
    id: "brian-otieno",
    name: "Brian Otieno",
    role: "Student Housing Agent - Rongai & Syokimau",
    photo: "assets/img/agents/agent-man-white-shirt.jpg",
    phone: "+254 734 567 890",
    phoneClean: "254734567890",
    email: "brian.otieno@homely.co.ke",
    areas: ["Rongai/Ngong", "Syokimau"],
    bio: "Brian is our trusted agent for Multimedia University (MMU) in Rongai and Daystar University in Syokimau. He focuses on quiet, safe study environments close to matatu stages and student shopping centers."
  }
];

const areasData = [
  {
    name: "Roysambu/Kasarani",
    campus: "Near USIU-Africa & Kenyatta University",
    icon: "bi-mortarboard-fill",
    description: "Vibrant student hub along Thika Road with quick stage access and lively amenities."
  },
  {
    name: "Juja",
    campus: "Near JKUAT Main Campus",
    icon: "bi-building-check",
    description: "Walking distance to Gate A & Gate C, packed with student cafeterias and study lounges."
  },
  {
    name: "Kahawa Sukari",
    campus: "Near Kenyatta University (KU)",
    icon: "bi-shield-check",
    description: "Quiet, peaceful residential neighborhood with paved streets and high security."
  },
  {
    name: "Ruaka",
    campus: "Near Two Rivers & Westlands Colleges",
    icon: "bi-geo-alt-fill",
    description: "Modern apartments with elevators, rooftop terraces, and swift expressway access."
  },
  {
    name: "Rongai/Ngong",
    campus: "Near Multimedia University (MMU)",
    icon: "bi-tree-fill",
    description: "Affordable, scenic student living just minutes from the MMU gate and Rongai stages."
  },
  {
    name: "Syokimau",
    campus: "Near Daystar University Campus",
    icon: "bi-bus-front-fill",
    description: "Serene gated compounds with reliable water reservoirs and dedicated university shuttles."
  }
];

const listingsData = [
  {
    id: 1,
    title: "Spacious Modern Bedsitter in Roysambu",
    type: "Bedsitter",
    area: "Roysambu/Kasarani",
    price: 8500,
    deposit: "1 month (KSh 8,500)",
    campusDistance: "8 min walk to USIU",
    badge: "Walk to campus",
    amenities: ["Wi-Fi", "24/7 water", "security", "prepaid electricity tokens", "near matatu stage"],
    description: "Bright and airy bedsitter located off Lumumba Drive in Roysambu. Features tiled floors, an open kitchenette with granite counter, and 24/7 CCTV surveillance. Only an 8-minute walk to USIU-Africa gate and 3 minutes to the main matatu stage.",
    agentId: "faith-wanjiku",
    cover: "assets/img/properties/a-bedsitter-1-main-room.jpg",
    gallery: [
      "assets/img/properties/a-bedsitter-1-main-room.jpg",
      "assets/img/properties/a-bedsitter-2-spacious.jpg",
      "assets/img/properties/a-bedsitter-3-kitchenette.jpg"
    ]
  },
  {
    id: 2,
    title: "Sunlit Studio Bedsitter near JKUAT Gate C",
    type: "Bedsitter",
    area: "Juja",
    price: 7500,
    deposit: "1 month (KSh 7,500)",
    campusDistance: "5 min walk to JKUAT Gate C",
    badge: "Walk to campus",
    amenities: ["Wi-Fi", "24/7 water", "security", "prepaid electricity tokens"],
    description: "Conveniently situated right near JKUAT Gate C, this student bedsitter provides a peaceful study retreat with reliable borehole water backup and unlimited fiber Wi-Fi included. Ideal for tech and engineering students wanting zero commute.",
    agentId: "peter-kamau",
    cover: "assets/img/properties/a-bedsitter-2-spacious.jpg",
    gallery: [
      "assets/img/properties/a-bedsitter-2-spacious.jpg",
      "assets/img/properties/a-bedsitter-1-main-room.jpg",
      "assets/img/properties/a-bedsitter-3-kitchenette.jpg"
    ]
  },
  {
    id: 3,
    title: "Executive Bedsitter in Kahawa Sukari",
    type: "Bedsitter",
    area: "Kahawa Sukari",
    price: 9500,
    deposit: "1 month (KSh 9,500)",
    campusDistance: "10 min walk to KU Main Campus",
    badge: "Walk to campus",
    amenities: ["Wi-Fi", "24/7 water", "security", "prepaid electricity tokens", "furnished"],
    description: "Semi-furnished executive bedsitter in a secure gated court in Kahawa Sukari. Comes with built-in study desk, private hot shower, and a high perimeter wall with electric fencing. Just 10 minutes walk to KU Footbridge and campus entrance.",
    agentId: "faith-wanjiku",
    cover: "assets/img/properties/b-bedsitter-1-main-room.jpg",
    gallery: [
      "assets/img/properties/b-bedsitter-1-main-room.jpg",
      "assets/img/properties/b-bedsitter-2-kitchenette.jpg",
      "assets/img/properties/b-bedsitter-3-bathroom.jpg",
      "assets/img/properties/b-exterior-bedsitter-compound.jpg"
    ]
  },
  {
    id: 4,
    title: "Student Compound Bedsitter in Rongai",
    type: "Bedsitter",
    area: "Rongai/Ngong",
    price: 8000,
    deposit: "1 month (KSh 8,000)",
    campusDistance: "5 min to stage / MMU Shuttle",
    badge: "5 min to stage",
    amenities: ["24/7 water", "security", "prepaid electricity tokens", "near matatu stage"],
    description: "Budget-friendly bedsitter in an exclusively student-occupied compound in Ongata Rongai. Enjoy a quiet study courtyard, dedicated caretaker, dependable water storage tanks, and direct access to MMU commuter shuttles.",
    agentId: "brian-otieno",
    cover: "assets/img/properties/b-exterior-bedsitter-compound.jpg",
    gallery: [
      "assets/img/properties/b-exterior-bedsitter-compound.jpg",
      "assets/img/properties/b-bedsitter-1-main-room.jpg",
      "assets/img/properties/b-bedsitter-2-kitchenette.jpg",
      "assets/img/properties/b-bedsitter-3-bathroom.jpg"
    ]
  },
  {
    id: 5,
    title: "Premium One Bedroom Apartment in Ruaka",
    type: "One Bedroom",
    area: "Ruaka",
    price: 17000,
    deposit: "1 month (KSh 17,000)",
    campusDistance: "12 min matatu ride to campus",
    badge: "5 min to stage",
    amenities: ["Wi-Fi", "24/7 water", "security", "prepaid electricity tokens", "near matatu stage"],
    description: "Spacious one-bedroom flat with separate living room and modern fitted kitchen in Ruaka. Perfect for students sharing rent or post-graduates wanting dedicated study and resting zones. Quick access to Limuru Road and Northern Bypass stages.",
    agentId: "peter-kamau",
    cover: "assets/img/properties/a-onebed-1-living-room.jpg",
    gallery: [
      "assets/img/properties/a-onebed-1-living-room.jpg",
      "assets/img/properties/a-onebed-2-bedroom.jpg",
      "assets/img/properties/a-onebed-3-kitchen.jpg",
      "assets/img/properties/a-onebed-4-bathroom.jpg"
    ]
  },
  {
    id: 6,
    title: "Serene One Bedroom Suite in Syokimau",
    type: "One Bedroom",
    area: "Syokimau",
    price: 15500,
    deposit: "1 month (KSh 15,500)",
    campusDistance: "7 min shuttle to Daystar",
    badge: "Walk to campus",
    amenities: ["Wi-Fi", "24/7 water", "security", "prepaid electricity tokens", "furnished"],
    description: "Quiet and well-designed one-bedroom student apartment located in a master-planned community in Syokimau. Features reliable solar water heating, high-speed fiber link, and a quiet ambiance ideal for focused academic work.",
    agentId: "brian-otieno",
    cover: "assets/img/properties/a-onebed-2-bedroom.jpg",
    gallery: [
      "assets/img/properties/a-onebed-2-bedroom.jpg",
      "assets/img/properties/a-onebed-1-living-room.jpg",
      "assets/img/properties/a-onebed-3-kitchen.jpg",
      "assets/img/properties/a-onebed-4-bathroom.jpg"
    ]
  },
  {
    id: 7,
    title: "Deluxe One Bedroom Flat in Roysambu",
    type: "One Bedroom",
    area: "Roysambu/Kasarani",
    price: 19000,
    deposit: "1 month (KSh 19,000)",
    campusDistance: "6 min walk to Lumumba Stage",
    badge: "5 min to stage",
    amenities: ["Wi-Fi", "24/7 water", "security", "prepaid electricity tokens", "near matatu stage", "furnished"],
    description: "Stylishly finished one bedroom close to TRM Mall and USIU-Africa. Offers high-speed internet, instant hot showers, balcony with skyline views, and secure biometric gate access. Easy sharing option for two university roommates.",
    agentId: "faith-wanjiku",
    cover: "assets/img/properties/b-onebed-1-living-room.jpg",
    gallery: [
      "assets/img/properties/b-onebed-1-living-room.jpg",
      "assets/img/properties/b-onebed-2-bedroom.jpg",
      "assets/img/properties/b-onebed-3-kitchen.jpg",
      "assets/img/properties/b-onebed-4-bathroom.jpg",
      "assets/img/properties/b-exterior-onebed-apartments.jpg"
    ]
  },
  {
    id: 8,
    title: "Modern One Bedroom Apartments in Juja",
    type: "One Bedroom",
    area: "Juja",
    price: 14500,
    deposit: "1 month (KSh 14,500)",
    campusDistance: "10 min walk to JKUAT Gate A",
    badge: "Walk to campus",
    amenities: ["Wi-Fi", "24/7 water", "security", "prepaid electricity tokens", "near matatu stage"],
    description: "New one-bedroom units in Juja town within walking distance of JKUAT Main Campus Gate A. Features ceramic tile flooring, kitchen storage cabinets, secure rooftop laundry area, and 24-hour guarded gate with fingerprint reader.",
    agentId: "peter-kamau",
    cover: "assets/img/properties/b-exterior-onebed-apartments.jpg",
    gallery: [
      "assets/img/properties/b-exterior-onebed-apartments.jpg",
      "assets/img/properties/b-onebed-1-living-room.jpg",
      "assets/img/properties/b-onebed-2-bedroom.jpg",
      "assets/img/properties/b-onebed-3-kitchen.jpg",
      "assets/img/properties/b-onebed-4-bathroom.jpg"
    ]
  }
];

// Helper functions for formatting & filtering
function formatPrice(amount) {
  return "KSh " + Number(amount).toLocaleString() + " / month";
}

function getAgentById(id) {
  return agentsData.find(agent => agent.id === id) || agentsData[0];
}

function getListingById(id) {
  const numericId = parseInt(id, 10);
  return listingsData.find(item => item.id === numericId) || listingsData[0];
}

function getListingsByAgent(agentId) {
  return listingsData.filter(item => item.agentId === agentId);
}

function getListingCountByArea(areaName) {
  return listingsData.filter(item => item.area.toLowerCase() === areaName.toLowerCase()).length;
}

// Export for module systems and global browser scope
if (typeof window !== "undefined") {
  window.listingsData = listingsData;
  window.agentsData = agentsData;
  window.areasData = areasData;
  window.formatPrice = formatPrice;
  window.getAgentById = getAgentById;
  window.getListingById = getListingById;
  window.getListingsByAgent = getListingsByAgent;
  window.getListingCountByArea = getListingCountByArea;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    listingsData,
    agentsData,
    areasData,
    formatPrice,
    getAgentById,
    getListingById,
    getListingsByAgent,
    getListingCountByArea
  };
}
