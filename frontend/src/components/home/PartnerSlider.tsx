import { useEffect, memo } from 'react'
import AOS from 'aos'

import dnataLogo from '../../assets/trust/dnata.jpg'
import emiratesLogo from '../../assets/trust/emirates.png'
import hondaLogo from '../../assets/trust/honda.png'
import roverLogo from '../../assets/trust/rover.png'
import toyotaLogo from '../../assets/trust/toyota.png'

const partners = [
    { name: 'Emirates', logo: emiratesLogo },
    { name: 'dnata', logo: dnataLogo },
    { name: 'Honda', logo: hondaLogo },
    { name: 'Rover', logo: roverLogo },
    { name: 'Toyota', logo: toyotaLogo },
]

export const PartnerSlider = memo(() => {
    // Refresh AOS once on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            AOS.refresh();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
                <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black italic mb-4">Global Network</h2>
                <h3 className="text-4xl font-serif text-slate-900">Our Trusted Partners</h3>
            </div>

            <div className="relative group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                <div className="flex animate-scroll hover:[animation-play-state:paused] whitespace-nowrap py-8 will-change-transform">
                    {[...partners, ...partners, ...partners, ...partners].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center min-w-[200px] md:min-w-[300px] h-28 md:h-40 px-6 md:px-10 group/item"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                loading="lazy"
                                className="h-12 md:h-20 w-auto object-contain opacity-75 filter group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-500 ease-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

PartnerSlider.displayName = 'PartnerSlider';
