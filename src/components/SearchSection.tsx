"use client";
import React, { useState } from 'react';

interface SearchSectionProps {
    onSearch?: (destination: string) => void;
}

import { MapPin, Compass, Search, ChevronDown } from 'lucide-react';

export default function SearchSection({ onSearch }: SearchSectionProps) {
    const [category, setCategory] = useState("International");
    const [destination, setDestination] = useState("Select");

    const internationalDestinations = [
        "Europe", "USA", "China", "Malaysia", "Vietnam", "Thailand", "Azerbaijan", "Dubai", "Singapore Malaysia", "Turkey"
    ];

    const domesticDestinations = [
        "Kashmir", "Delhi", "Kerala", "Goa", "Rajasthan", "Himachal Pradesh", "Andaman & Nicobar", "Uttarakhand", "Ladakh", "Sikkim", "Maharashtra", "Tamil Nadu", "Karnataka", "Agra", "Jaipur", "Munnar", "Wayanad"
    ];

    const pilgrimageDestinations = [
        "Hajj", "Umrah", "Ajmer", "Erwadi"
    ];

    const currentDestinations = category === "International"
        ? internationalDestinations
        : category === "Domestic"
            ? domesticDestinations
            : pilgrimageDestinations;

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(destination === "Select" ? "" : destination);
        }
    };

    return (
        <div className="relative z-50 px-4 mx-auto w-full max-w-5xl">
            <div className="group relative">
                {/* Maroon Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#84194f]/20 via-[#84194f]/40 to-[#84194f]/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Search Bar Container */}
                <div className="relative bg-[#0a0a16]/80 backdrop-blur-2xl px-6 md:px-10 py-5 md:py-6 rounded-[2.5rem] shadow-2xl border border-white/10">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        {/* Category Selector */}
                        <div className="flex-1 w-full space-y-2">
                            <label className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                                <Compass size={12} className="text-[#84194f]" />
                                <span>Category</span>
                            </label>
                            <div className="relative group/select">
                                <select
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                        setDestination("Select");
                                    }}
                                    className="w-full bg-white/5 hover:bg-white/10 text-white py-3 px-5 rounded-2xl appearance-none focus:outline-none focus:ring-1 focus:ring-[#84194f]/50 transition-all font-bold text-sm cursor-pointer border border-white/5"
                                >
                                    <option className="bg-[#0a0a16] text-white">International</option>
                                    <option className="bg-[#0a0a16] text-white">Domestic</option>
                                    <option className="bg-[#0a0a16] text-white">Pilgrimage</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover/select:text-white transition-colors" size={16} />
                            </div>
                        </div>

                        {/* Divider for Desktop */}
                        <div className="hidden md:block h-12 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                        {/* Destination Selector */}
                        <div className="flex-1 w-full space-y-2">
                            <label className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                                <MapPin size={12} className="text-[#84194f]" />
                                <span>Destination</span>
                            </label>
                            <div className="relative group/select">
                                <select
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    className="w-full bg-white/5 hover:bg-white/10 text-white py-3 px-5 rounded-2xl appearance-none focus:outline-none focus:ring-1 focus:ring-[#84194f]/50 transition-all font-bold text-sm cursor-pointer border border-white/5"
                                >
                                    <option className="bg-[#0a0a16] text-white">Select</option>
                                    {currentDestinations.map(dest => (
                                        <option key={dest} value={dest} className="bg-[#0a0a16] text-white">{dest}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover/select:text-white transition-colors" size={16} />
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="w-full md:w-auto pt-2 md:pt-6">
                            <button
                                onClick={handleSearchClick}
                                className="group/btn relative w-full md:w-44 bg-[#84194f] hover:bg-white text-white hover:text-[#84194f] font-black py-4 px-8 rounded-2xl transition-all duration-300 shadow-[0_10px_20px_rgba(132,25,79,0.3)] flex items-center justify-center gap-3 text-sm uppercase tracking-widest overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                                <Search size={18} className="transition-transform group-hover/btn:scale-110" />
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
