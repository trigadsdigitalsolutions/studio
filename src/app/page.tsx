"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plane, Calendar, MapPin, CheckCircle2, ChevronRight, Star, Instagram, Facebook, Twitter } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SearchSection from "@/components/SearchSection";
import ChromaGrid from "@/components/ChromaGrid";
import { useSearch } from "@/context/SearchContext";

const ALL_PACKAGES = [
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600",
    title: "Europe",
    subtitle: "April 01 , May 13",
    description: "Experience the grand architecture and rich history of Western Europe. This comprehensive tour covers the iconic landmarks of Paris, Rome, and Zurich. From the artistic treasures of the Louvre to the majestic Swiss Alps, witness the best of European culture and scenery in one unforgettable journey.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #1e3a8a, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80&w=600",
    title: "USA",
    subtitle: "April 04 , May 13",
    description: "Discover the land of opportunity with our premium USA Coast-to-Coast tour. Explore the bright lights of New York City, the historical monuments of D.C., and the stunning natural beauty of the Grand Canyon. Our tour offers a perfect blend of metropolitan excitement and breathtaking landscapes.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#EF4444",
    gradient: "linear-gradient(145deg, #7f1d1d, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "https://images.unsplash.com/photo-1543097692-fa13c6cd8595?auto=format&fit=crop&q=80&w=600",
    title: "China",
    subtitle: "April 02 , May 4",
    description: "Journey through time in the Middle Kingdom. Walk along the Great Wall, explore the Forbidden City in Beijing, and witness the modern skyline of Shanghai. China offers a unique perspective on how ancient traditions seamlessly merge with cutting-edge technology and modern urban life.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #78350f, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=600",
    title: "Kashmir",
    subtitle: "April 14",
    description: "Known as 'Paradise on Earth', Kashmir offers serene landscapes, pristine lakes, and snow-capped mountains. Stay in luxurious houseboats on Dal Lake, walk through the vibrant Mughal Gardens, and enjoy the tranquil beauty of Gulmarg and Pahalgam. A truly spiritual and refreshing escape into nature.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #064e3b, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=600",
    title: "Malaysia",
    subtitle: "April 08 17 , May 02, 08, 27",
    description: "Immerse yourself in the cultural melting pot of Southeast Asia. From the futuristic Petronas Towers in Kuala Lumpur to the lush tea plantations of Genting Highlands and the tropical beaches of Langkawi. Malaysia offers an exotic mix of nature, cuisine, and world-class shopping experiences.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #4c1d95, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=600",
    title: "Vietnam",
    subtitle: "May 11",
    description: "Explore the hidden gems of Vietnam. Sail through the emerald waters of Ha Long Bay, wander through the ancient streets of Hoi An, and experience the buzzing energy of Hanoi. Vietnam is a land of stunning natural beauty and cultural complexities, of dynamic mega-cities and hill-tribe villages.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #164e63, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=600",
    title: "Thailand",
    subtitle: "April 4, 9, 17 , May 2, 9, 22",
    description: "The land of smiles awaits you. Visit the majestic temples of Bangkok, the vibrant markets of Chiang Mai, and the legendary beaches of Phuket. Thailand is world-renowned for its exquisite cuisine, rich Buddhist culture, and warm hospitality that makes every traveler feel at home.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#EAB308",
    gradient: "linear-gradient(145deg, #713f12, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "/azerbaijan.png",
    title: "Azerbaijan",
    subtitle: "April 18 , May 04",
    description: "Journey to the 'Land of Fire'. Experience the ultra-modern architecture of Baku's Flame Towers and the ancient history of the Old City. Azerbaijan offers a fascinating blend of Silk Road history and modern prosperity, set against a backdrop of unique natural phenomena and Caspian Sea views.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #831843, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
    title: "Dubai",
    subtitle: "April 20",
    description: "Experience the pinnacle of luxury and modern engineering. From the world's tallest building, the Burj Khalifa, to the world-class shopping in Dubai Mall and the thrill of desert safaris. Dubai is a city of superlatives where the impossible becomes possible in the middle of the Arabian desert.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#F97316",
    gradient: "linear-gradient(145deg, #7c2d12, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=600",
    title: "Singapore Malaysia",
    subtitle: "April 25 , May 26",
    description: "A perfect twin-destination journey. Explore the futuristic Garden City of Singapore with its stunning Marina Bay Sands before embarking on a Malaysian adventure through colonial history and modern wonders. This tour is designed for those who want to see the best of modern Southeast Asia in one trip.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#6366F1",
    gradient: "linear-gradient(145deg, #312e81, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=600",
    title: "Turkey",
    subtitle: "April 20 , May 6",
    description: "Where East meets West. Stand between two continents in Istanbul, witness the surreal landscape of Cappadocia from a hot air balloon, and walk through the ancient ruins of Ephesus. Turkey is a treasure trove of historical wonders and natural beauty that stays in your heart forever.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#14B8A6",
    gradient: "linear-gradient(145deg, #134e4a, #000)",
    url: "#packages",
    category: "International"
  },
  {
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600",
    title: "Delhi",
    subtitle: "April 22",
    description: "Discover the heart of India. Delhi, the capital city, is a mesmerizing blend of old-world charm and modern vibrancy. Visit the historic Red Fort, the majestic Qutub Minar, and experience the bustling energy of Chandni Chowk. A city and a story in every corner.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #78350f, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600",
    title: "Kerala",
    subtitle: "Weekly Departures",
    description: "Experience God's Own Country with the best Kerala tour packages from Kozhikode. From the serene backwaters of Alleppey to the misty tea gardens of Munnar. Hifaza Travels Calicut offers a perfect blend of rejuvenation and natural beauty.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#059669",
    gradient: "linear-gradient(145deg, #064e3b, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600",
    title: "Goa",
    subtitle: "May 10",
    description: "Sun, sand, and serenity. Enjoy the golden beaches, vibrant nightlife, and Portuguese architecture of India's favorite beach destination. Perfect for both adventure seekers and those looking for a relaxing getaway.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#DB2777",
    gradient: "linear-gradient(145deg, #831843, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600",
    title: "Rajasthan",
    subtitle: "May 15",
    description: "Walk through the land of Kings. Explore the majestic forts of Jaipur, the romantic lakes of Udaipur, and the golden sands of Jaisalmer. Experience the royal heritage and vibrant culture of India's desert jewel.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#D97706",
    gradient: "linear-gradient(145deg, #78350f, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=600",
    title: "Himachal Pradesh",
    subtitle: "May 20",
    description: "Escape to the snow-capped mountains. From the adventure hub of Manali to the tranquil beauty of Shimla and Dalhousie. Himachal offers breathtaking landscapes and a cool breeze that refreshes the soul.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#2563EB",
    gradient: "linear-gradient(145deg, #1e3a8a, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600",
    title: "Agra",
    subtitle: "Daily Tours",
    description: "Witness the symbol of eternal love. The Taj Mahal stands in its grand glory along the Yamuna river. Explore the history of the Mughal Empire through the Agra Fort and Fatehpur Sikri.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#EAB308",
    gradient: "linear-gradient(145deg, #713f12, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://www.deccanchronicle.com/h-upload/2025/12/27/1994122-munnar.webp",
    title: "Munnar",
    subtitle: "Tea Garden Special",
    description: "Relax in the rolling hills of Munnar, famous for its vast tea plantations and cool climate. Visit Eravikulam National Park, Mattupetty Dam, and enjoy the breathtaking panoramic views of the Western Ghats.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#4ade80",
    gradient: "linear-gradient(145deg, #064e3b, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://www.wticabs.com:3001/global/app/v1/aws/getImage/offerimages/1741781770278_Places_to_visit_in_Wayanad.jpg",
    title: "Wayanad",
    subtitle: "Into the Wild",
    description: "Discover the green paradise of Malabar. Explore the ancient Edakkal Caves, the majestic Banasura Sagar Dam, and the wild beauty of Wayanad's lush forests and spice plantations.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#16a34a",
    gradient: "linear-gradient(145deg, #064e3b, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://www.tourmyindia.com/states/ladakh/imagess/photography-in-ladakh2.jpg",
    title: "Ladakh",
    subtitle: "Adventure of a Lifetime",
    description: "Fly to the roof of the world. Witness the crystal clear waters of Pangong Lake, the high passes of Khardung La, and the serene Buddhist monasteries perched on rugged cliffs.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#38bdf8",
    gradient: "linear-gradient(145deg, #0c4a6e, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600",
    title: "Jaipur",
    subtitle: "The Pink City",
    description: "Experience the royal splendor of Rajasthan's capital. Visit the iconic Hawa Mahal, the grand Amber Fort, and the scientific marvel of Jantar Mantar while enjoying the vibrant local markets.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#f472b6",
    gradient: "linear-gradient(145deg, #831843, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?auto=format&fit=crop&q=80&w=600",
    title: "Andaman & Nicobar",
    subtitle: "Island Paradise",
    description: "The ultimate tropical getaway. Explore the crystal clear waters of Havelock Island, the historic Cellular Jail, and the pristine white sands of Radhanagar Beach.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#22d3ee",
    gradient: "linear-gradient(145deg, #164e63, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600",
    title: "Uttarakhand",
    subtitle: "Land of Gods",
    description: "From the spiritual vibes of Rishikesh and Haridwar to the scenic beauty of Nainital and Mussoorie. Experience the divine tranquility and Himalayan majesty of Uttarakhand.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#fbbf24",
    gradient: "linear-gradient(145deg, #78350f, #000)",
    url: "#packages",
    category: "Domestic"
  },
  {
    image: "https://ihramtravel.co.uk/wp-content/uploads/2025/08/What-Do-You-Need-to-Know-About-the-Sacred-Sites-of-Haj.png",
    title: "Hajj",
    subtitle: "Holy Season 2026",
    description: "The journey of a lifetime. Join our expertly organized Hajj groups with premium Maktab services, religious guidance from scholars, and meticulous logistics handling.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#f58d6e",
    gradient: "linear-gradient(145deg, #c14a2d, #000)",
    url: "/hajj-umrah",
    category: "Pilgrimage"
  },
  {
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=600",
    title: "Umrah",
    subtitle: "Premium & Economy",
    description: "Perform your Umrah with complete peace of mind. We offer hotels in close proximity to the Holy Haram, daily buffet meals, and comprehensive Ziyarat tours in Makkah and Madinah.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#2fb24c",
    gradient: "linear-gradient(145deg, #064e3b, #000)",
    url: "/hajj-umrah",
    category: "Pilgrimage"
  },
  {
    image: "https://c.ndtvimg.com/2020-10/oedsacsc_ajmer-dargah-eidemiladunnabi-pti-photo_625x300_29_October_20.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    title: "Ajmer",
    subtitle: "Ajmer Sharif Ziyarat",
    description: "A spiritual visit to the Dargah of Khwaja Moinuddin Chishti. Our organized group tours ensure a comfortable and disciplined Ziyarat experience with local history experts.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#ffc745",
    gradient: "linear-gradient(145deg, #713f12, #000)",
    url: "#packages",
    category: "Pilgrimage"
  },
  {
    image: "https://cdn.tripuntold.com/media/photos/location/2018/12/23/98d4d6ae-b661-47d4-b942-0ac427c6b25c.jpg",
    title: "Erwadi",
    subtitle: "Tamil Nadu Ziyarat",
    description: "Devotional journey to the Erwadi Dargah. We provide comfortable transportation and accommodation for groups and families seeking a peaceful spiritual retreat.",
    handle: "@HIFAZA_TOURS",
    borderColor: "#14425e",
    gradient: "linear-gradient(145deg, #1f5f84, #000)",
    url: "#packages",
    category: "Pilgrimage"
  }
];


export default function Home() {
  const { searchQuery, setSearchQuery } = useSearch();

  const filteredPackages = ALL_PACKAGES.filter((pkg) => {
    if (!searchQuery) return true;
    return pkg.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearch = (destination: string) => {
    setSearchQuery(destination === "Select" ? "" : destination);
    // Smooth scroll to results
    const element = document.getElementById("results-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative">
        <h1 className="sr-only">Hifaza Travels | Best Kerala Tour Packages from Kozhikode & Calicut</h1>
        <HeroSlider />
      </div>

      {/* Upcoming Group Departures - Polaroid Style */}
      <section id="packages" className="pb-24 pt-0 relative overflow-hidden bg-[#84194f]">
        {/* Search Section Integrated at Top */}
        <div className="relative z-50 pt-12 mb-8">
          <SearchSection onSearch={handleSearch} />
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=2070"
            alt="World Landmarks"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4a0e2d] via-[#84194f]/90 to-[#84194f]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div id="results-grid" className="text-center mb-16 pt-8">
            <h2 className="text-white/60 font-bold tracking-wider uppercase mb-2">
              {searchQuery ? `Results for "${searchQuery}"` : "Upcoming Departures"}
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              {searchQuery ? "Available Packages" : "Global Group Packages"}
            </h3>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto font-medium">
              As one of the <span className="text-white">best travels in Kozhikode</span>, Hifaza Travels Calicut provides premium
              <span className="text-white"> tour packages in Kozhikode</span> for spiritual and leisure seekers alike. Explore our exclusive
              <span className="text-white"> Hifaza tour packages</span> designed for excellence.
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto mt-6 rounded-full"></div>
          </div>

          {searchQuery && filteredPackages.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start bg-white/5 rounded-[2.5rem] p-6 md:p-12 border border-white/10 backdrop-blur-xl">
              {/* Left Side: The Card */}
              <div className="w-full max-w-[320px] md:max-w-sm flex-shrink-0">
                <ChromaGrid items={[filteredPackages[0]]} />
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-8 flex items-center gap-2 text-white/60 hover:text-white font-bold text-sm transition-colors mx-auto lg:mx-0"
                >
                  <ChevronRight className="rotate-180" size={18} /> Back to all packages
                </button>
              </div>

              {/* Right Side: Description */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-white text-[#84194f] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Featured Package</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-white text-white" />
                    ))}
                  </div>
                </div>

                <h4 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                  About <span className="text-white">{filteredPackages[0].title}</span>
                </h4>

                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 font-medium">
                  {filteredPackages[0].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h5 className="text-white/60 font-black text-sm uppercase tracking-widest mb-3">Highlights</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-white/90 text-sm font-bold"><CheckCircle2 size={16} className="text-white/40" /> Premium Hotel Stays</li>
                      <li className="flex items-center gap-2 text-white/90 text-sm font-bold"><CheckCircle2 size={16} className="text-white/40" /> Expert Guided Tours</li>
                      <li className="flex items-center gap-2 text-white/90 text-sm font-bold"><CheckCircle2 size={16} className="text-white/40" /> All Meals Included</li>
                    </ul>
                  </div>

                </div>

                <a
                  href={`https://wa.me/918089296162?text=${encodeURIComponent(`I am interested in booking the ${filteredPackages[0].title} package. Please provide more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#84194f] px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl flex items-center gap-4 group w-fit"
                >
                  Book on WhatsApp <ChevronRight className="transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <ChromaGrid
                items={filteredPackages.slice(0, 8)}
                onCardClick={(item) => handleSearch(item.title)}
              />
              <Link
                href="/explore"
                className="mt-16 group flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-[#84194f] px-12 py-4 rounded-2xl font-black text-lg transition-all shadow-xl hover:shadow-white/20 border border-white/10"
              >
                See More <ChevronRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          )}

          {filteredPackages.length === 0 && (
            <div className="text-center py-20 text-white/70">
              <p className="text-xl italic">No packages found for your search. Try another destination!</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold transition-all"
              >
                Show All Packages
              </button>
            </div>
          )}
        </div>
      </section>


    </div>
  );
}
