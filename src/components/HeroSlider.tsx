"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        title: "KERALA",
        subtitle: "God's Own Country",
        description: "Experience the best Kerala tour packages from Kozhikode. Our premium Hifaza tour packages offer serene backwater escapes and misty hill station retreats in Kerala.",
        bgImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=2070",
        thumbnailImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
        rating: 5
    },
    {
        id: 2,
        title: "KASHMIR",
        subtitle: "Paradise on Earth",
        description: "Experience the magic of Gulmarg with special Hifaza tour packages. A timeless journey through white winter dreams and silent peaks.",
        bgImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=2070",
        thumbnailImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
        rating: 5
    },
    {
        id: 3,
        title: "SWITZERLAND",
        subtitle: "Alpine Dream",
        description: "Discover the crystal lakes of the Swiss Alps. Hifaza Travels Calicut brings you the ultimate fairytale world of luxury and peace.",
        bgImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=2070",
        thumbnailImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
        rating: 5
    },
    {
        id: 4,
        title: "MALDIVES",
        subtitle: "Ocean Paradise",
        description: "Endless turquoise horizons await. Book the best tour packages in Kozhikode for an unforgettable tropical retreat by the sea.",
        bgImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2070",
        thumbnailImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
        rating: 5
    },
    {
        id: 5,
        title: "TURKEY",
        subtitle: "Historical Wonders",
        description: "Fly over Cappadocia or walk through Istanbul's history. Hifaza Travels Kozhikode offers historical wonder in every step.",
        bgImage: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&q=80&w=2070",
        thumbnailImage: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&q=80&w=800",
        rating: 5
    }
];

export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [cardWidth, setCardWidth] = useState(290);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef(false);

    // Sync mobile scroll container with active index
    useEffect(() => {
        if (!isScrollingRef.current && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const activeCard = container.children[activeIndex] as HTMLElement;
            if (activeCard) {
                const scrollPos = activeCard.offsetLeft - container.clientWidth / 2 + activeCard.clientWidth / 2;
                container.scrollTo({ left: scrollPos, behavior: 'smooth' });
            }
        }
    }, [activeIndex]);

    const handleMobileScroll = () => {
        if (!scrollContainerRef.current) return;
        
        isScrollingRef.current = true;
        const container = scrollContainerRef.current;
        const scrollCenter = container.scrollLeft + container.clientWidth / 2;
        
        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((child, index) => {
            const rect = (child as HTMLElement);
            const childCenter = rect.offsetLeft + rect.clientWidth / 2;
            const distance = Math.abs(scrollCenter - childCenter);
            
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }

        // Reset the scrolling flag after a delay
        clearTimeout((container as any).scrollTimeout);
        (container as any).scrollTimeout = setTimeout(() => {
            isScrollingRef.current = false;
        }, 150);
    };

    useEffect(() => {
        const handleResize = () => {
            setCardWidth(window.innerWidth < 768 ? 170 : 290);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds for faster transitions

        return () => clearInterval(intervalId);
    }, []);

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleCardClick = (index: number) => {
        if (index === activeIndex) return;
        setDirection(1);
        setActiveIndex(index);
    };

    // Visible cards for Desktop (next 3)
    const getVisibleCards = () => {
        const visible = [];
        for (let i = 1; i <= 3; i++) {
            const index = (activeIndex + i) % slides.length;
            visible.push({ ...slides[index], originalIndex: index, position: i });
        }
        return visible;
    };

    const visibleCards = getVisibleCards();

    return (
        <section className="relative h-screen w-full flex flex-col bg-black z-20 overflow-hidden">
            <div className="absolute inset-0">

                {/* Background Images Crossfade */}
                {slides.map((slide, index) => (
                    <motion.div
                        key={`bg-${slide.id}`}
                        initial={false}
                        animate={{
                            opacity: activeIndex === index ? 1 : 0,
                            scale: activeIndex === index ? 1 : 1.05
                        }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 z-0 pointer-events-none"
                    >
                        <Image
                            src={slide.bgImage}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>
                    </motion.div>
                ))}

                {/* Animated Huge Background Title */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={`bg-title-${activeIndex}`}
                            initial={{ opacity: 0, scale: 0.9, x: 100 }}
                            animate={{ opacity: 0.05, scale: 1.1, x: 0 }}
                            exit={{ opacity: 0, scale: 1.2, x: -100 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-[30vw] font-black text-white leading-none uppercase select-none whitespace-nowrap"
                        >
                            {slides[activeIndex].title}
                        </motion.h2>
                    </AnimatePresence>
                </div>


                {/* Main Content Area */}
                <div className="relative z-50 pointer-events-none flex-1 flex items-center w-full px-6 md:px-12 lg:px-20 pt-20 md:pt-32 pb-[380px] sm:pb-[300px] md:pb-40">
                    <div className="flex flex-col justify-center max-w-lg lg:max-w-2xl relative pointer-events-none">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`text-${activeIndex}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="pointer-events-auto"
                            >

                                <h2 className="text-4xl md:text-[60px] lg:text-[75px] xl:text-[95px] font-black text-white/95 leading-[0.85] tracking-tighter mb-6 uppercase drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
                                    {slides[activeIndex].title}
                                </h2>
                                <p className="text-sm md:text-lg text-white/90 mb-8 max-w-lg leading-relaxed font-semibold drop-shadow-lg opacity-90 border-l-4 border-[#84194f] pl-6 italic">
                                    {slides[activeIndex].description}
                                </p>

                                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                    <Link href="/explore" className="bg-[#84194f] hover:bg-white text-white hover:text-[#84194f] px-8 py-3.5 md:px-10 md:py-4 rounded-xl md:rounded-2xl font-black text-base md:text-lg transition-all flex items-center gap-3 w-fit shadow-[0_15px_35px_rgba(132,25,79,0.3)] border border-white/10">
                                        Explore Now <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Desktop Preview Cards */}
                <div className="hidden md:block absolute top-[58%] left-[55%] lg:left-[58%] right-0 -translate-y-1/2 h-[450px] pointer-events-none z-20">
                    <div className="relative w-full h-full">
                        <AnimatePresence custom={direction}>
                            {visibleCards.map((card) => {
                                const xOffset = (card.position - 1) * (cardWidth + 30);
                                return (
                                    <motion.div
                                        key={card.id}
                                        custom={direction}
                                        variants={{
                                            enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? xOffset + 290 : xOffset - 290, scale: 0.8 }),
                                            center: { opacity: 1, x: xOffset, scale: 1 },
                                            exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? xOffset - 290 : xOffset + 290, scale: 0.8, zIndex: 0 })
                                        }}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute top-0 left-0 flex flex-col w-[260px] pointer-events-auto group"
                                    >
                                        <div
                                            onClick={() => handleCardClick(card.originalIndex)}
                                            className="relative w-full h-[320px] rounded-[2rem] overflow-hidden cursor-pointer shadow-3xl bg-gray-900 border border-white/10"
                                        >
                                            <Image src={card.thumbnailImage} alt={card.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" sizes="260px" />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                        </div>
                                        <div className="mt-4 pl-2">
                                            <h3 className="text-white text-xl font-bold tracking-wider">{card.title}</h3>
                                            <div className="flex gap-1 mt-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className={`w-1 h-1 rounded-full ${i < card.rating ? 'bg-white shadow-[0_0_8px_white]' : 'bg-white/30'}`} />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Improved Mobile Scroll Layout */}
                <div className="md:hidden absolute bottom-12 left-0 right-0 z-40 pointer-events-auto">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleMobileScroll}
                        className="flex gap-6 overflow-x-auto px-10 snap-x snap-mandatory py-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                onClick={() => handleCardClick(index)}
                                className={`flex-shrink-0 relative w-[200px] h-[280px] rounded-[2rem] overflow-hidden cursor-pointer snap-center transition-all duration-700 shadow-2xl border-2 ${
                                    index === activeIndex 
                                    ? 'scale-105 opacity-100 border-[#84194f] shadow-[0_20px_50px_rgba(132,25,79,0.3)]' 
                                    : 'scale-90 opacity-40 border-white/10'
                                }`}
                            >
                                <Image
                                    src={slide.thumbnailImage}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    sizes="240px"
                                />
                                <div className={`absolute inset-0 transition-colors duration-700 ${index === activeIndex ? 'bg-transparent' : 'bg-black/40'}`} />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/20 to-transparent">
                                    <h3 className="text-white font-black text-xl tracking-tighter uppercase italic">{slide.title}</h3>
                                    <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2">{slide.subtitle}</p>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < slide.rating ? 'bg-[#84194f] shadow-[0_0_8px_#84194f]' : 'bg-white/20'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
