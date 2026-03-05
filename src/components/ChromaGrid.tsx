"use client";
import React from 'react';
import Image from 'next/image';

export interface ChromaGridItem {
    image: string;
    title: string;
    subtitle: string;
    handle: string;
    borderColor: string;
    gradient: string;
    url: string;
    category?: string;
}

interface ChromaGridProps {
    items: ChromaGridItem[];
    onCardClick?: (item: ChromaGridItem) => void;
}

export default function ChromaGrid({ items, onCardClick }: ChromaGridProps) {
    return (
        <div className={`grid gap-6 md:gap-8 w-full group/grid ${items.length === 1
            ? 'grid-cols-1 max-w-[350px] mx-auto lg:mx-0'
            : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}>
            {items.map((item, index) => (
                <ChromaCard key={index} item={item} onClick={() => onCardClick?.(item)} />
            ))}
        </div>
    );
}

export function ChromaCard({ item, onClick }: { item: ChromaGridItem; onClick?: () => void }) {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <a
            href={item.url}
            onClick={handleClick}
            className="relative flex flex-col h-[380px] w-full rounded-[2rem] overflow-hidden group/card hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
        >
            {/* Content Container */}
            <div className="absolute inset-[2px] rounded-[1.9rem] flex flex-col overflow-hidden z-20 border border-white/10"
                style={{ background: item.gradient }}>

                {/* Background Overlay to dark center slightly */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Top Image Section */}
                <div className="relative w-full h-[55%]">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Bottom Content Area */}
                <div className="relative flex flex-col justify-end p-6 h-[45%]">
                    <div className="flex justify-between items-end mb-1">
                        <h3 className="text-white font-black text-2xl tracking-wide drop-shadow-md">
                            {item.title}
                        </h3>
                        {/* Static Arrow */}
                        <div
                            className="bg-white/10 p-2 rounded-full border border-white/20 text-white"
                            style={{ boxShadow: `0 0 15px ${item.borderColor}40` }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>

                    <p className="text-white/60 font-medium text-xs mt-3 uppercase tracking-wider">{item.handle}</p>
                </div>
            </div>
        </a>
    );
}
