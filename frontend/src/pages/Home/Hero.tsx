import heroVideo from '../../assets/hero-sec-video.mp4'

export const Hero = () => {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-brand-dark px-8">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 max-w-5xl text-center space-y-6 md:space-y-8 lg:space-y-10">
                <div className="space-y-4 md:space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 md:py-2 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 rounded-full" data-aos="fade-down">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
                        <h2 className="text-white text-[7px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-black italic">The Gold Standard of Pakistan</h2>
                    </div>
                    <h1 className="text-4xl md:text-7xl lg:text-9xl font-serif leading-[1.1] md:leading-[1.05] tracking-tight text-white mb-6 md:mb-10 lg:mb-12">
                        Luxury <br className="hidden md:block" />
                        <span className="text-brand-gold italic">Redefined</span> In <br className="hidden md:block" />
                        Portugal
                    </h1>
                </div>

                <p className="text-slate-200 text-[8px] md:text-[10px] max-w-xl mx-auto leading-relaxed font-black uppercase tracking-[0.3em] md:tracking-[0.4em] drop-shadow-lg opacity-80">
                    A Curated Selection of the Nation's Most Exclusive <br className="hidden md:block" />
                    Vehicles. Discovery Simplified. Connection Direct.
                </p>

                <div className="pt-8" data-aos="fade-left">
                    <button className="px-10 py-5 bg-brand-gold text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white hover:text-brand-dark transition-all duration-500 shadow-2xl shadow-brand-gold/20">
                        Explore Collection
                    </button>
                </div>

            </div>

            {/* Side Accents */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 text-white/20 text-[10px] uppercase tracking-[0.5em] font-black rotate-180 [writing-mode:vertical-lr]">
                <span>Automotive Excellence</span>
                <div className="w-[1px] h-24 bg-white/10 mx-auto" />
                <span>Since 2024</span>
            </div>
        </section>
    )
}
