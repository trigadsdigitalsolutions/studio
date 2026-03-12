"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Moon, Star, Calendar, Clock, MapPin, Phone, Info } from 'lucide-react';

const packages = [
    {
        id: "umrah-premium",
        title: "UMRAH PREMIUM",
        duration: "15 Days Package",
        price: "Price on Request",
        highlight: "Close to Haram",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800",
        features: [
            "5-Star Hotels in Makkah & Madinah",
            "Buffet Breakfast & Dinner",
            "Full Ziyarat with Guide",
            "Premium Air-Conditioned Transport",
            "Umrah Visa & Insurance included",
            "Complimentary Zamzam (5L)"
        ],
        gradient: "from-[#14425e] to-[#1f5f84]"
    },
    {
        id: "umrah-economy",
        title: "UMRAH ECONOMY",
        duration: "15 Days Package",
        price: "Best Value",
        highlight: "Walkable distance",
        image: "https://sherytravels.com/wp-content/uploads/2025/07/1-1024x577.png",
        features: [
            "Comfortable 3-Star Accommodations",
            "Daily Meals Provided",
            "Standard Ziyarat Tours",
            "Reliable Bus Transportation",
            "Visa processing services",
            "Dedicated Group Leader"
        ],
        gradient: "from-[#2fb24c] to-[#1f5f84]"
    },
    {
        id: "hajj-2026",
        title: "HAJJ 2026",
        duration: "Full Season",
        price: "Registration Open",
        highlight: "Most Sacred Journey",
        image: "https://ihramtravel.co.uk/wp-content/uploads/2025/08/What-Do-You-Need-to-Know-About-the-Sacred-Sites-of-Haj.png",
        features: [
            "A-Category Tents in Mina",
            "Premium Maktab services",
            "Direct Flight Options",
            "Religious guidance by Scholars",
            "Medical Assistance 24/7",
            "Pre-Hajj Orientation Seminars"
        ],
        gradient: "from-[#f58d6e] to-[#c14a2d]"
    }
];

export default function HajjUmrahPage() {
    return (
        <div className="min-h-screen bg-[#050510] text-white">
            {/* Spiritual Hero Section */}
            <section className="relative h-[75vh] flex items-center justify-center overflow-hidden pt-28">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1565019053022-13d3f51ed107?auto=format&fit=crop&q=80&w=2070"
                        alt="Holy Makkah"
                        fill
                        className="object-cover opacity-40 brightness-75 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#050510]/80 to-[#050510]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="flex justify-center mb-8 gap-1">
                        <Star className="text-[#ffc745] fill-[#ffc745]" size={16} />
                        <Star className="text-[#ffc745] fill-[#ffc745]" size={16} />
                        <Star className="text-[#ffc745] fill-[#ffc745]" size={16} />
                        <Star className="text-[#ffc745] fill-[#ffc745]" size={16} />
                        <Star className="text-[#ffc745] fill-[#ffc745]" size={16} />
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none italic">
                        The Sacred <span className="text-[#84194f]">Journey</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 font-medium max-w-3xl mx-auto leading-relaxed border-l-4 border-[#84194f] pl-8">
                        Experience the ultimate spiritual blessing with <span className="text-white">Hifaza Travels Kozhikode</span>. 
                        As the <span className="text-white">best travels in Kozhikode</span> for pilgrimage, we offer meticulously planned 
                        <span className="text-white"> Hifaza tour packages</span> for Hajj and Umrah.
                    </p>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {packages.map((pkg) => (
                            <div key={pkg.id} className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[4rem] px-8 pt-8 pb-12 transition-all duration-700 hover:bg-white/[0.05] hover:border-white/20">
                                {/* Decorative Floating Ornament */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#84194f] border border-white/30 rounded-full flex items-center justify-center z-20 shadow-2xl transition-transform duration-500 group-hover:rotate-45">
                                    <Moon className="text-white" size={20} />
                                </div>

                                {/* Arch-shaped Image Container */}
                                <div className="relative w-full h-80 mb-10 overflow-hidden shadow-2xl" style={{ borderRadius: '150px 150px 40px 40px' }}>
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    
                                    {/* Bottom-aligned Badge inside Image */}
                                    <div className="absolute bottom-6 inset-x-0 flex justify-center">
                                        <div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">{pkg.highlight}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Header Section */}
                                <div className="text-center mb-10 px-4">
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#84194f]/50"></div>
                                        <Clock size={16} className="text-white shadow-sm" />
                                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#84194f]/50"></div>
                                    </div>
                                    
                                    <h2 className="text-4xl font-black text-white mb-3 uppercase tracking-tighter italic leading-none">{pkg.title}</h2>
                                    <p className="text-[#84194f] bg-white w-fit mx-auto px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-3">{pkg.duration}</p>
                                    <p className="text-2xl font-black text-white italic tracking-tight">{pkg.price}</p>
                                </div>

                                {/* Features List - Refined Layout */}
                                <div className="flex-1 space-y-5 px-4 mb-12">
                                    {pkg.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-5 group/item">
                                            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover/item:scale-150 transition-transform"></div>
                                            <span className="text-white/60 text-sm font-medium tracking-wide group-hover/item:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* High-End Action Button */}
                                <div className="px-4">
                                    <a
                                        href={`https://wa.me/918089296162?text=I'm interested in the ${pkg.title} package.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative block w-full overflow-hidden"
                                    >
                                        <div className="bg-[#84194f] hover:bg-white text-white hover:text-[#84194f] font-black py-6 rounded-3xl transition-all duration-300 flex items-center justify-center gap-4 group/btn shadow-[0_20px_40px_rgba(132,25,79,0.3)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] border border-white/10">
                                            <span className="text-sm uppercase tracking-[0.3em] pl-1">Inquire Now</span>
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center -mr-2 group-hover/btn:bg-[#84194f]/10 transition-colors">
                                                <Phone size={16} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Hifaza Section */}
            <section className="bg-white/5 py-32 px-6 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#f58d6e] font-black text-xs uppercase tracking-[0.3em] mb-4 block">WHY HIFAZA TRAVELS</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
                                Your Comfort is <br /><span className="text-[#2fb24c]">Our Commitment</span>
                            </h2>
                            <p className="text-xl text-white/50 mb-12 font-medium leading-relaxed max-w-xl">
                                We understand the spiritual significance of Hajj and Umrah. That's why we meticulously organize every step of your journey, ensuring complete peace of mind.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-3">
                                    <MapPin className="text-[#f58d6e]" size={32} />
                                    <h4 className="font-black uppercase tracking-tight text-white/90">Prime Locations</h4>
                                    <p className="text-sm text-white/40 leading-relaxed font-medium">Strategically selected hotels just steps away from the Holy Haram.</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Info className="text-[#2fb24c]" size={32} />
                                    <h4 className="font-black uppercase tracking-tight text-white/90">24/7 Assistance</h4>
                                    <p className="text-sm text-white/40 leading-relaxed font-medium">Direct support from our dedicated team throughout your stay.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[600px] rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2070"
                                alt="Prayer"
                                fill
                                className="object-cover brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent"></div>
                            <div className="absolute bottom-10 left-10 p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl max-w-xs">
                                <h4 className="text-2xl font-black text-white mb-2 leading-tight italic uppercase">Join Our Next Group</h4>
                                <p className="text-white/60 text-sm font-medium">Departure schedules for 2026 are now being finalized. Save your spot today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
