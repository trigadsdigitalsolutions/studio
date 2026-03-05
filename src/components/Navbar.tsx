"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/context/SearchContext';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/explore', label: 'Explore' },
    { path: '/team', label: 'Team' },
    { path: '/prices', label: 'Hajj & Umrah' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { triggerSearch } = useSearch();
    const pathname = usePathname();

    const handleSearchClick = () => {
        if (pathname !== '/') {
            window.location.href = '/#packages';
        } else {
            const element = document.getElementById("results-grid");
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-[90%] max-w-5xl">
            <div className="relative rounded-full px-4 md:px-6 py-2 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden"
                style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(24px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(255,255,255,0.1)'
                }}
            >
                {/* Inner top shimmer highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                {/* Logo */}
                <Link href="/" className="flex items-center group cursor-pointer relative w-[100px] sm:w-[130px] md:w-[160px] h-6 sm:h-7 md:h-9 z-10">
                    <Image
                        src="/logo whiii@4x.png"
                        alt="Hifaza Travels Logo"
                        fill
                        className="object-contain object-left transition-transform group-hover:scale-105"
                        priority
                    />
                </Link>

                {/* Desktop Links Container */}
                <div
                    className="hidden md:flex items-center bg-white/10 rounded-full p-1 border border-white/20 z-10 relative"
                    onMouseLeave={() => setHoveredPath(null)}
                >
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        const isHovered = hoveredPath === item.path;

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onMouseEnter={() => setHoveredPath(item.path)}
                                className={`relative px-5 py-2 text-[13px] font-semibold transition-colors duration-300 rounded-full z-10 ${isActive ? 'text-gray-900' : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-active"
                                        className="absolute inset-0 bg-[#84194f] rounded-full -z-10 shadow-lg"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                {isHovered && !isActive && (
                                    <motion.div
                                        layoutId="navbar-hover"
                                        className="absolute inset-0 bg-white/15 rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-20">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 md:gap-3 z-10">
                    <button
                        onClick={handleSearchClick}
                        className="flex w-8 h-8 md:w-9 md:h-9 items-center justify-center text-white/80 hover:text-white transition hover:bg-white/15 rounded-full cursor-pointer border border-transparent hover:border-white/20"
                    >
                        <Search size={18} />
                    </button>
                    <Link href="/contact" className="bg-[#84194f] hover:bg-white text-white hover:text-[#84194f] border border-[#84194f]/20 px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[10px] sm:text-[11px] md:text-[13px] font-bold transition-all shadow-lg whitespace-nowrap backdrop-blur-sm">
                        Contact
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-8 h-8 flex items-center justify-center text-white/90 hover:text-white transition rounded-full hover:bg-white/15"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-16 left-0 right-0 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl md:hidden"
                        style={{ background: 'rgba(10,10,30,0.7)', backdropFilter: 'blur(24px) saturate(200%)', WebkitBackdropFilter: 'blur(24px) saturate(200%)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">Home</Link>
                        <Link href="/work" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">Work</Link>
                        <Link href="/explore" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-sm font-semibold text-gray-900 bg-white shadow-md rounded-lg transition-all">Explore</Link>
                        <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">Team</Link>
                        <Link href="/prices" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">Prices</Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all mt-2 border-t border-white/10 pt-4">Contact Us</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
