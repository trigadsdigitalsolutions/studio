"use client";
import React from 'react';
import { Instagram, Facebook, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#050510] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    {/* Brand & Mission section */}
                    <div className="max-w-sm">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-white mb-6 block uppercase italic">
                            HIFAZA<span className="text-white">TRAVELS</span>
                        </Link>
                        <p className="text-white/60 text-sm font-medium leading-relaxed mb-8">
                            Based in <span className="text-white italic">Kozhikode</span>, Hifaza Travels Calicut offers premium spiritual
                            and leisure travel experiences. We are committed to being the <span className="text-white italic">best travels in Kozhikode</span>
                            through our signature <span className="text-white italic">Hifaza tour packages</span>.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/hifaza_travels/" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#84194f] transition-all border border-white/10 group">
                                <Instagram size={18} className="text-white group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="mailto:hifazatravels@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#84194f] transition-all border border-white/10 group">
                                <Mail size={18} className="text-white group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Usage Content Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 xl:gap-24 text-left">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8">EXPLORE</h4>
                            <ul className="space-y-4">
                                {['Home', 'Explore', 'Hajj & Umrah', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={item === 'Home' ? '/' : item === 'Hajj & Umrah' ? '/hajj-umrah' : `/${item.toLowerCase()}`}
                                            className="text-white hover:text-[#84194f] transition-colors text-xs font-black uppercase tracking-widest flex items-center gap-2 group"
                                        >
                                            {item}
                                            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8">USAGE</h4>
                            <ul className="space-y-4">
                                {['Terms', 'Privacy', 'Refund', 'Legal'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white hover:text-[#84194f] transition-colors text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                                            {item}
                                            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden lg:block">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8">SERVICES</h4>
                            <ul className="space-y-4">
                                {['Flights', 'Hotels', 'Visa', 'Insurance'].map((item) => (
                                    <li key={item}>
                                        <Link href="/explore" className="text-white hover:text-[#84194f] transition-colors text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                                            {item}
                                            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
                        &copy; {new Date().getFullYear()} HIFAZA TRAVELS. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">DESIGNED WITH EXCELLENCE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
