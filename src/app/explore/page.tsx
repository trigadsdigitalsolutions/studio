"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Compass, Globe, Map, Sparkles, ArrowRight } from 'lucide-react';
import ChromaGrid from '@/components/ChromaGrid';

const ALL_EXPLORE_PACKAGES = [
    {
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
        title: "Europe",
        subtitle: "April 01 , May 13",
        description: "Experience the grand architecture and rich history of Western Europe.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #1e3a8a, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80&w=800",
        title: "USA",
        subtitle: "April 04 , May 13",
        description: "Discover the land of opportunity with our premium USA tour.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#EF4444",
        gradient: "linear-gradient(145deg, #7f1d1d, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "https://images.unsplash.com/photo-1543097692-fa13c6cd8595?auto=format&fit=crop&q=80&w=800",
        title: "China",
        subtitle: "April 02 , May 4",
        description: "Journey through time in the Middle Kingdom.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#F59E0B",
        gradient: "linear-gradient(145deg, #78350f, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
        title: "Kashmir",
        subtitle: "Nature Escape",
        description: "Known as 'Paradise on Earth', Kashmir offers serene landscapes.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#10B981",
        gradient: "linear-gradient(145deg, #064e3b, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
        title: "Malaysia",
        subtitle: "Exotic Mix",
        description: "Immerse yourself in the cultural melting pot of Southeast Asia.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#8B5CF6",
        gradient: "linear-gradient(145deg, #4c1d95, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800",
        title: "Vietnam",
        subtitle: "Hidden Gems",
        description: "Explore the hidden gems of Vietnam's stunning natural beauty.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#06B6D4",
        gradient: "linear-gradient(145deg, #164e63, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
        title: "Thailand",
        subtitle: "Land of Smiles",
        description: "The land of smiles awaits you with majestic temples and beaches.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#EAB308",
        gradient: "linear-gradient(145deg, #713f12, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "/azerbaijan.png",
        title: "Azerbaijan",
        subtitle: "Land of Fire",
        description: "Journey to the 'Land of Fire' with ultra-modern architecture.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#EC4899",
        gradient: "linear-gradient(145deg, #831843, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
        title: "Dubai",
        subtitle: "Urban Adventure",
        description: "Experience the pinnacle of luxury and modern engineering.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#F97316",
        gradient: "linear-gradient(145deg, #7c2d12, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800",
        title: "Singapore Malaysia",
        subtitle: "Twin-Destination",
        description: "A perfect twin-destination journey through Southeast Asia.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#6366F1",
        gradient: "linear-gradient(145deg, #312e81, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800",
        title: "Turkey",
        subtitle: "Heritage Trail",
        description: "Where East meets West in a treasure trove of wonders.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#14B8A6",
        gradient: "linear-gradient(145deg, #134e4a, #000)",
        url: "/#packages",
        category: "International"
    },
    {
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800",
        title: "Delhi",
        subtitle: "Capital Charm",
        description: "Discover the heart of India with its old-world charm.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#F59E0B",
        gradient: "linear-gradient(145deg, #78350f, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
        title: "Kerala",
        subtitle: "God's Own Country",
        description: "Experience the serene backwaters and tea gardens of Kerala.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#059669",
        gradient: "linear-gradient(145deg, #064e3b, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800",
        title: "Goa",
        subtitle: "Beach Escape",
        description: "Sun, sand, and serenity in India's favorite beach destination.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#DB2777",
        gradient: "linear-gradient(145deg, #831843, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800",
        title: "Rajasthan",
        subtitle: "Land of Kings",
        description: "Explore the royal heritage and vibrant culture of the desert.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#D97706",
        gradient: "linear-gradient(145deg, #78350f, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=800",
        title: "Himachal Pradesh",
        subtitle: "Mountain Retreat",
        description: "Escape to the snow-capped mountains and tranquil valleys.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#2563EB",
        gradient: "linear-gradient(145deg, #1e3a8a, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",
        title: "Agra",
        subtitle: "Symbol of Love",
        description: "Witness the eternal love at the grand Taj Mahal.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#EAB308",
        gradient: "linear-gradient(145deg, #713f12, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://www.deccanchronicle.com/h-upload/2025/12/27/1994122-munnar.webp",
        title: "Munnar",
        subtitle: "Tea Meadows",
        description: "Relax in the rolling hills and vast tea plantations.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#4ade80",
        gradient: "linear-gradient(145deg, #064e3b, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://www.wticabs.com:3001/global/app/v1/aws/getImage/offerimages/1741781770278_Places_to_visit_in_Wayanad.jpg",
        title: "Wayanad",
        subtitle: "Lush Malabar",
        description: "Discover the green paradise and wild beauty of Wayanad.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#16a34a",
        gradient: "linear-gradient(145deg, #064e3b, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://www.tourmyindia.com/states/ladakh/imagess/photography-in-ladakh2.jpg",
        title: "Ladakh",
        subtitle: "Roof of World",
        description: "Fly to the roof of the world and witness serene monasteries.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#38bdf8",
        gradient: "linear-gradient(145deg, #0c4a6e, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800",
        title: "Jaipur",
        subtitle: "Pink City",
        description: "Experience royal splendor and grand Amber Fort in Jaipur.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#f472b6",
        gradient: "linear-gradient(145deg, #831843, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?auto=format&fit=crop&q=80&w=800",
        title: "Andaman & Nicobar",
        subtitle: "Island Bliss",
        description: "The ultimate tropical getaway in crystal clear waters.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#22d3ee",
        gradient: "linear-gradient(145deg, #164e63, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800",
        title: "Uttarakhand",
        subtitle: "Land of Gods",
        description: "Experience divine tranquility and Himalayan majesty.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#fbbf24",
        gradient: "linear-gradient(145deg, #78350f, #000)",
        url: "/#packages",
        category: "Domestic"
    },
    {
        image: "https://ihramtravel.co.uk/wp-content/uploads/2025/08/What-Do-You-Need-to-Know-About-the-Sacred-Sites-of-Haj.png",
        title: "Hajj",
        subtitle: "Sacred Journey",
        description: "The journey of a lifetime with premium Hajj services.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#f58d6e",
        gradient: "linear-gradient(145deg, #c14a2d, #000)",
        url: "/prices",
        category: "Pilgrimage"
    },
    {
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800",
        title: "Umrah",
        subtitle: "Premium Blessing",
        description: "Perform your Umrah with complete peace of mind.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#2fb24c",
        gradient: "linear-gradient(145deg, #064e3b, #000)",
        url: "/prices",
        category: "Pilgrimage"
    },
    {
        image: "https://c.ndtvimg.com/2020-10/oedsacsc_ajmer-dargah-eidemiladunnabi-pti-photo_625x300_29_October_20.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
        title: "Ajmer",
        subtitle: "Ziyarat Tour",
        description: "A spiritual visit to the Dargah of Khwaja Moinuddin Chishti.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#ffc745",
        gradient: "linear-gradient(145deg, #713f12, #000)",
        url: "/#packages",
        category: "Pilgrimage"
    },
    {
        image: "https://cdn.tripuntold.com/media/photos/location/2018/12/23/98d4d6ae-b661-47d4-b942-0ac427c6b25c.jpg",
        title: "Erwadi",
        subtitle: "Tamil Nadu Ziyarat",
        description: "Devotional journey for a peaceful spiritual retreat.",
        handle: "@HIFAZA_TOURS",
        borderColor: "#14425e",
        gradient: "linear-gradient(145deg, #1f5f84, #000)",
        url: "/#packages",
        category: "Pilgrimage"
    }
];

const categories = ["All", "International", "Domestic", "Pilgrimage"];

export default function ExplorePage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = ALL_EXPLORE_PACKAGES.filter(item =>
        activeCategory === "All" ? true : item.category === activeCategory
    );

    return (
        <div className="min-h-screen bg-[#050510] text-white">
            {/* Immersive Hero Header */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden pt-28">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2070"
                        alt="Adventure"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/80 to-[#050510]"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <div className="flex justify-center mb-6">
                        <div className="bg-[#84194f]/20 p-4 rounded-full border border-[#84194f]/30 backdrop-blur-md">
                            <Compass className="text-[#84194f] animate-spin-slow" size={40} />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic drop-shadow-2xl">
                        Start Your <span className="text-[#84194f]">Adventure</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        From the peaks of the Swiss Alps to the spiritual heart of the Middle East.
                        Experience the best <span className="text-white">travels Kozhikode</span> has to offer with <span className="text-white">Hifaza Travels Calicut</span>.
                    </p>
                </div>
            </section>

            {/* Navigation / Filters */}
            <section className="sticky top-24 z-40 px-6 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 bg-white/5 border border-white/10 p-2 rounded-full backdrop-blur-xl w-fit mx-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all ${activeCategory === cat
                                    ? 'bg-[#84194f] text-white shadow-[0_0_20px_rgba(132,25,79,0.5)]'
                                    : 'text-white/40 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid Content */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    {filteredItems.length > 0 ? (
                        <ChromaGrid items={filteredItems} />
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
                            <Sparkles className="mx-auto text-[#84194f]/40 mb-4" size={48} />
                            <h3 className="text-2xl font-black text-white/60">Coming Soon!</h3>
                            <p className="text-white/30">We are currently crafting some amazing spiritual journeys for you.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* High Impact CTA */}
            <section className="bg-gradient-to-r from-[#4a0e2d] to-[#0a0a1a] py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl text-center md:text-left">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none">
                                Can't find the perfect trip?
                            </h2>
                            <p className="text-xl text-white/50 font-medium">
                                Let our experts design a custom itinerary just for you or your group. 100% personalized.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/918089296162?text=I'd like to plan a custom explore trip!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-[#84194f] hover:bg-white text-white hover:text-[#84194f] font-black px-12 py-5 rounded-[2rem] transition-all shadow-2xl flex items-center gap-4 text-xl border border-white/10"
                        >
                            Talk to Us <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
