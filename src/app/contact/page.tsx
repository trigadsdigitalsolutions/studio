"use client";

import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#0a0a1a] relative overflow-hidden">
            {/* Background Aesthetic Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#84194f]/10 blur-[120px] rounded-full -mr-64 -mt-64 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#84194f]/20 blur-[150px] rounded-full -ml-80 -mb-80" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

            <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                        <div className="w-2 h-2 rounded-full bg-[#84194f] animate-ping" />
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Contact Hifaza</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                        Connect with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84194f] to-[#ffffff]">Hifaza Travels</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                        Looking for the <span className="text-white italic">best travels in Kozhikode</span>? Hifaza Travels Calicut is here to help you
                        plan your next pilgrimage or holiday with precision and care.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Main WhatsApp Card */}
                    <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group hover:border-[#84194f]/50 transition-all duration-500 shadow-3xl text-center">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <MessageSquare size={160} className="text-white" />
                        </div>
                        <div className="relative z-10 flex flex-col items-center">
                            <span className="bg-[#25D366] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block shadow-[0_0_20px_rgba(37,211,102,0.4)]">Instant WhatsApp Booking</span>
                            <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Primary Business Line</h3>
                            <p className="text-white text-4xl md:text-6xl font-black mb-10 tracking-tighter">80892 96162</p>
                            <a href="https://wa.me/918089296162" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[#84194f] text-white px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-[#84194f] hover:scale-105 transition-all duration-300 shadow-2xl">
                                Start Conversation
                            </a>
                        </div>
                    </div>

                    {/* Secondary Numbers Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all text-center group">
                            <h4 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">Office Support</h4>
                            <p className="text-white text-2xl font-black tracking-wide group-hover:text-[#84194f] transition-colors italic">73061 09985</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all text-center group">
                            <h4 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">Technical Assistance</h4>
                            <p className="text-white text-2xl font-black tracking-wide group-hover:text-[#84194f] transition-colors italic">93834 91478</p>
                        </div>
                    </div>

                    {/* Info Card - Centered */}
                    <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 p-10 md:p-14 rounded-[3.5rem] shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-[#84194f]/10 border border-[#84194f]/20 rounded-[1.5rem] flex items-center justify-center mb-6 group-hover:bg-[#84194f] transition-all duration-500">
                                    <MapPin size={32} className="text-[#84194f] group-hover:text-white" />
                                </div>
                                <h4 className="text-white font-black text-xl mb-2 italic">Hifaza Travels Kozhikode</h4>
                                <p className="text-white/60 font-medium leading-relaxed">
                                    Kozhikode, Kerala,<br />India
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-[#84194f]/10 border border-[#84194f]/20 rounded-[1.5rem] flex items-center justify-center mb-6 group-hover:bg-[#84194f] transition-all duration-500">
                                    <Mail size={32} className="text-[#84194f] group-hover:text-white" />
                                </div>
                                <h4 className="text-white font-black text-xl mb-2 italic">Electronic Mail</h4>
                                <p className="text-white/60 font-medium leading-relaxed">
                                    hifazatravels@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Social Links - Bottom Centered */}
                        <div className="mt-12 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
                            <h5 className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">Follow Our Adventures</h5>
                            <div className="flex gap-6">
                                <a href="https://www.instagram.com/hifaza_travels/" target="_blank" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-[#84194f] hover:scale-110 transition-all border border-white/5 shadow-xl transition-all duration-300"><Instagram size={24} /></a>
                                <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-[#84194f] hover:scale-110 transition-all border border-white/5 shadow-xl transition-all duration-300"><Facebook size={24} /></a>
                                <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-[#84194f] hover:scale-110 transition-all border border-white/5 shadow-xl transition-all duration-300"><Twitter size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
