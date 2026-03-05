"use client";

import React from 'react';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Shafeeq Rahman",
        role: "Managing Director",
        image: "/photo_3_2026-03-05_17-40-45.jpg",
        tag: "EXPERT ADVISOR"
    },
    {
        name: "Muhammed Unais",
        role: "Head of Operations",
        image: "/photo_1_2026-03-05_17-40-45.jpg",
        tag: "LOGISTICS PRO"
    },
    {
        name: "Mohammed Shafeeq",
        role: "Travel Consultant",
        image: "/photo_2_2026-03-05_17-40-45.jpg",
        tag: "TRIP DESIGNER"
    }
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-[#0a0a1a] text-white pt-44 pb-32">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
                        Leading <span className="text-[#84194f]">Hifaza</span>
                    </h2>
                    <p className="text-white/40 font-medium text-lg max-w-2xl">
                        Meet the experts at <span className="text-white">Hifaza Travels Calicut</span> dedicated to crafting the
                        <span className="text-white"> best tour packages in Kozhikode</span> with precision and care.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-[#121212] border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(132,25,79,0.2)]"
                            >
                                {/* Radial Spotlight Background */}
                                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(132,25,79,0.15)_0%,_transparent_60%)] group-hover:bg-[radial-gradient(circle_at_50%_40%,_rgba(132,25,79,0.25)_0%,_transparent_70%)] transition-all duration-700"></div>

                                {/* Person Image */}
                                <div className="absolute inset-0 z-10">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top brightness-90 group-hover:brightness-110 transition-all duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    {/* Bottom Shadow Mask for text legibility */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/40 to-transparent"></div>
                                </div>

                                {/* Content Overlays */}
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">
                                            {member.name}
                                        </h3>
                                        <p className="text-[#84194f] text-xs md:text-sm font-black uppercase tracking-[0.2em] opacity-80 mb-2">
                                            {member.role}
                                        </p>
                                        <div className="w-8 h-1 bg-[#84194f] rounded-full transition-all duration-500 group-hover:w-full opacity-40"></div>
                                    </div>
                                </div>

                                {/* Top Badge Tag */}
                                <div className="absolute top-6 left-6 z-30">
                                    <span className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">
                                        {member.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
