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
        description: "Explore the emerald backwaters of Kerala. Our premium tour packages in Kozhikode offer a serene escape into nature's finest landscapes.",
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

    // Sync mobile scroll container with active index
    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const activeCard = container.children[activeIndex] as HTMLElement;
            if (activeCard) {
                const scrollPos = activeCard.offsetLeft - container.clientWidth / 2 + activeCard.clientWidth / 2;
                container.scrollTo({ left: scrollPos, behavior: 'smooth' });
            }
        }
    }, [activeIndex]);

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
        }, 20000); // Wait 15 seconds before sliding

        return () => clearInterval(intervalId); // Cleanup interval on unmount
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
        setDirection(1); // Advancing to visual right cards
        setActiveIndex(index);
    };

    const handleDotClick = (index: number) => {
        if (index === activeIndex) return;
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    // Build a dynamically ordered array of the next 3 visible cards using math that gracefully wraps around
    const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 1; i <= 3; i++) {
            const index = (activeIndex + i) % slides.length;
            visibleCards.push({ ...slides[index], originalIndex: index, position: i });
        }
        return visibleCards;
    };

    const visibleCards = getVisibleCards();

    return (
        <section className="relative h-screen w-full flex flex-col bg-black z-20">
            <div className="absolute inset-0 overflow-hidden">

                {/* Background Images Container - Stacked for crossfade without blank screens */}
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
                        {/* Elegant dark wash */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>
                    </motion.div>
                ))}

                {/* Massive Animated Background Title */}
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


                {/* Main Hero Content */}
                <div className="relative z-30 pointer-events-none flex-1 flex items-center w-full px-8 md:px-12 lg:px-20 pt-24 md:pt-32 pb-[320px] sm:pb-[280px] md:pb-40">



                    {/* Text Content and Navigation Buttons */}
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
                                <div className="mb-6 flex items-center gap-4">
                                    <span className="text-[#84194f] font-bold tracking-widest text-sm">0{activeIndex + 1}</span>
                                    <div className="w-12 h-px bg-white/20" />
                                    <span className="text-white/40 text-xs font-medium tracking-widest">0{slides.length}</span>
                                </div>

                                <h1 className="text-4xl md:text-[60px] lg:text-[75px] xl:text-[95px] font-black text-white/95 leading-[0.85] tracking-tighter mb-6 uppercase drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
                                    {slides[activeIndex].title}
                                </h1>
                                <p className="text-sm md:text-lg text-white/90 mb-10 max-w-lg leading-relaxed font-medium drop-shadow-lg opacity-90 border-l-2 border-[#84194f] pl-6">
                                    {slides[activeIndex].description}
                                </p>

                                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                    <Link href="/explore" className="bg-[#84194f] hover:bg-white text-white hover:text-[#84194f] px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all flex items-center gap-3 w-fit shadow-2xl border border-white/10 backdrop-blur-sm">
                                        Explore <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Desktop Cards Container - Hidden on Mobile */}
                <div className="hidden md:block absolute md:bottom-auto md:top-[58%] md:left-[55%] lg:left-[58%] md:right-0 md:-translate-y-1/2 h-[300px] md:h-[450px] pointer-events-none z-20 overflow-visible">
                    <div className="relative w-full h-full pointer-events-none">
                        <AnimatePresence custom={direction}>
                            {visibleCards.map((card) => {
                                const xOffset = (card.position - 1) * (cardWidth + 30);

                                return (
                                    <motion.div
                                        key={card.id}
                                        custom={direction}
                                        variants={{
                                            enter: (dir: number) => ({
                                                opacity: 0,
                                                x: dir > 0 ? xOffset + 290 : xOffset - 290,
                                                scale: 0.8
                                            }),
                                            center: {
                                                opacity: 1,
                                                x: xOffset,
                                                scale: 1
                                            },
                                            exit: (dir: number) => ({
                                                opacity: 0,
                                                x: dir > 0 ? xOffset - 290 : xOffset + 290,
                                                scale: 0.8,
                                                zIndex: 0
                                            })
                                        }}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute top-0 left-8 md:left-0 flex flex-col w-[150px] md:w-[260px] pointer-events-auto group z-20"
                                    >
                                        {/* Image Card Element */}
                                        <div
                                            onClick={() => handleCardClick(card.originalIndex)}
                                            className="relative w-full h-[220px] md:h-[320px] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.6)] bg-gray-900 border border-white/10"
                                        >
                                            <Image
                                                src={card.thumbnailImage}
                                                alt={card.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                sizes="260px"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />


                                        </div>

                                        {/* Floating Title and Stars - Now Below Card */}
                                        <div className="mt-4 pl-2 opacity-90 transition-opacity hover:opacity-100 cursor-pointer" onClick={() => handleCardClick(card.originalIndex)}>
                                            <h3
                                                className="text-white text-lg font-bold tracking-wider"
                                                style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.9), 0px 4px 20px rgba(0,0,0,0.8)" }}
                                            >
                                                {card.title}
                                            </h3>
                                            <div className="flex gap-1 mt-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className={`w-1 h-1 rounded-full shadow-lg ${i < card.rating ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-white/30'}`} />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Cards - Horizontal Smooth Scroll Layout */}
                <div className="md:hidden absolute bottom-4 left-0 right-0 z-20 pointer-events-auto w-full">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto px-8 snap-x snap-mandatory pt-2 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                        style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                onClick={() => handleCardClick(index)}
                                className={`flex-shrink-0 relative w-[180px] h-[260px] rounded-[1.5rem] overflow-hidden cursor-pointer snap-center transition-all duration-500 shadow-2xl border border-white/10 ${index === activeIndex ? 'scale-100 opacity-100 shadow-[0_4px_30px_rgba(255,255,255,0.15)]' : 'scale-90 opacity-60'}`}
                            >
                                <Image
                                    src={slide.thumbnailImage}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    sizes="180px"
                                />
                                <div className={`absolute inset-0 transition-colors duration-500 ${index === activeIndex ? 'bg-transparent' : 'bg-black/50'}`} />
                                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                    <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">{slide.title}</h3>
                                    <div className="flex gap-1 mt-1.5 drop-shadow-md">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`w-1 h-1 rounded-full ${i < slide.rating ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-white/30'}`} />
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
