export default function WorkPage() {
    return (
        <div className="min-h-screen bg-[#0a0a1a] pt-32 pb-20 px-8 md:px-12 lg:px-20 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#84194f]/20 blur-[150px] rounded-full" />

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tight text-center">Our Signature Work</h1>
                <p className="text-xl text-white/50 max-w-3xl mx-auto text-center mb-12 font-medium leading-relaxed">
                    Explore the incredible spiritual and leisure journeys curated by <span className="text-white">Hifaza Travels Kozhikode</span>.
                    From private pilgrimages to global group departures, we define the <span className="text-white italic underline decoration-[#84194f]">best travels in Kozhikode</span>.
                </p>
                <div className="w-24 h-1.5 bg-[#84194f] rounded-full shadow-[0_0_20px_rgba(132,25,79,0.5)]"></div>
            </div>
        </div>
    );
}
