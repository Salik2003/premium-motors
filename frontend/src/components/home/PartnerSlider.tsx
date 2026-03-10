const partners = [
    { name: 'Emirates', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg' },
    { name: 'dnata', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dnata_logo.svg/2560px-Dnata_logo.svg.png' },
    { name: 'marhaba', logo: 'https://www.marhabaservices.com/assets/img/marhaba-logo.svg' },
    { name: 'Mall of the Emirates', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Mall_of_the_Emirates_logo.svg/1200px-Mall_of_the_Emirates_logo.svg.png' },
    { name: 'Bvlgari', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bvlgari_logo.svg/2560px-Bvlgari_logo.svg.png' },
    { name: 'Burj Al Arab', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Burj_Al_Arab_Logo.svg' },
]

export const PartnerSlider = () => {
    // Duplicate partners for seamless loop
    const doublePartners = [...partners, ...partners, ...partners];

    return (
        <section className="py-24 bg-white overflow-hidden border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-8 mb-16 text-center" data-aos="fade-up">
                <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black italic mb-4">Global Network</h2>
                <h3 className="text-4xl font-serif text-slate-900">Our Trusted Partners</h3>
                <div className="w-24 h-1 bg-brand-gold/20 mx-auto mt-8 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-brand-gold animate-shimmer" />
                </div>
            </div>

            <div className="relative group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                <div className="flex animate-scroll hover:[animation-play-state:paused] whitespace-nowrap py-4">
                    {doublePartners.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center min-w-[200px] md:min-w-[300px] h-24 md:h-32 px-6 md:px-12 group/item"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-8 md:h-12 w-auto object-contain grayscale opacity-60 filter group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-700 ease-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
