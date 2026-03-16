export const Hero = () => {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-brand-dark px-8">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                    poster="/videos/video-cover.jpg"
                >
                    <source src="/videos/hero-sec-video.webm" type="video/webm" />
                    <source src="/videos/hero-sec-video.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 max-w-5xl text-center space-y-6 md:space-y-8 lg:space-y-10">
                <div className="space-y-4 md:space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 md:py-2 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
                        <h2 className="text-white text-[7px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-black italic">THE GOLD STANDARD OF PORTUGAL</h2>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.2] tracking-tight drop-shadow-2xl">
                        Acquire Your <br />
                        <span className="text-brand-gold italic">Automotive</span> Masterpiece
                    </h1>
                </div>

                <p className="text-slate-200 text-[8px] md:text-[10px] max-w-xl mx-auto leading-relaxed font-black uppercase tracking-[0.3em] md:tracking-[0.4em] drop-shadow-lg opacity-80">
                    A CURATED SELECTION OF THE NATION'S MOST EXCLUSIVE <br className="hidden md:block" />
                    VEHICLES. DISCOVERY SIMPLIFIED. CONNECTION DIRECT.
                </p>

                <div className="pt-8">
                    <button className="px-10 py-5 bg-brand-gold text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white hover:text-brand-dark transition-all duration-500 shadow-2xl shadow-brand-gold/20">
                        Explore Collection
                    </button>
                </div>

            </div>

            {/* Side Accents */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 text-white/20 text-[10px] uppercase tracking-[0.5em] font-black rotate-180 [writing-mode:vertical-lr]">
                <span>AUTOMOTIVE EXCELLENCE</span>
                <div className="w-[1px] h-24 bg-white/10 mx-auto" />
                <span>SINCE 2024</span>
            </div>
        </section>
    )
}
