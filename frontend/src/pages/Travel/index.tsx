import { Clock, Palmtree, TowerControl as Tower, Ship } from 'lucide-react'
import { WhatsAppIcon } from '../../components/layout/MainLayout'
import lisbon from "../../assets/lisbon.avif"
import porto from "../../assets/port-wine.webp"
import sintra from "../../assets/Sintra.jpg"
import algarve from "../../assets/algarve.webp"
import cascais from "../../assets/C&E.jpg"
import douro from "../../assets/cruise.avif"
import tagus from "../../assets/sail.jpg"
import tour from "../../assets/tour.avif"



const tours = [
    {
        id: 'city-tours',
        category: 'Portugal City Tours',
        items: [
            {
                name: 'Lisbon Coastal Heritage',
                duration: '4 Hours',
                price: '150€',
                desc: 'Explore the architectural marvels of Belém and the historic Alfama district.',
                image: lisbon
            },
            {
                name: 'Porto Wine Experience',
                duration: '6 Hours',
                price: '180€',
                desc: 'A premium tour through the Ribeira and the historic Port wine cellars.',
                image: porto
            },
            {
                name: 'Sintra Fairytale Tour',
                duration: '5 Hours',
                price: '220€',
                desc: 'Visit the Pena Palace and the mystical gardens of Quinta da Regaleira.',
                image: sintra
            }
        ]
    },
    {
        id: 'beach-tours',
        category: 'Coastal Adventures',
        items: [
            {
                name: 'Algarve Luxury Escape',
                duration: 'Full Day',
                price: '350€',
                desc: 'Private access to hidden caves and the most exclusive beaches in the south.',
                image: algarve
            },
            {
                name: 'Cascais & Estoril Drive',
                duration: '5 Hours',
                price: '190€',
                desc: 'Scenic coastal drive from Lisbon to the "Portuguese Riviera".',
                image: cascais
            }
        ]
    },
    {
        id: 'boat-trips',
        category: 'Ocean Voyages',
        items: [
            {
                name: 'Douro Valley Cruise',
                duration: '8 Hours',
                price: '450€',
                desc: 'Private luxury sailing through the heart of the Douro wine region.',
                image: douro
            },
            {
                name: 'Tagus Sunset Sailing',
                duration: '3 Hours',
                price: '120€',
                desc: 'Experience the Lisbon skyline from a private yacht at sunset.',
                image: tagus
            }
        ]
    }
]

export const Travel = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+923132723938';

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src={tour}
                        className="w-full h-full object-cover"
                        alt="Portugal Travel Hero"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark/80" />

                <div className="relative z-10 text-center space-y-6 px-8">
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-brand-gold/20 border border-brand-gold/30 rounded-full backdrop-blur-xl">
                        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand-gold italic">Curated Journeys</span>
                    </div>
                    <h1 className="text-5xl md:text-9xl font-serif text-white leading-tight">
                        Discover <span className="text-brand-gold italic">Portugal</span>
                    </h1>
                    <p className="text-slate-300 text-[10px] md:text-xs max-w-2xl mx-auto uppercase tracking-[0.5em] font-bold leading-relaxed opacity-90">
                        Luxury transportation and specialized <br className="hidden md:block" />
                        tours across the Portuguese coast.
                    </p>
                </div>
            </section>

            {/* Tours Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 sm:py-48">
                <div className="space-y-40">
                    {tours.map((section) => (
                        <div key={section.id} className="space-y-16">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                                <div className="space-y-2 text-left">
                                    <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-gold italic">{section.id === 'city-tours' ? 'Urban Heritage' : section.id === 'beach-tours' ? 'Arabian Coast' : 'Marine Voyages'}</p>
                                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight">{section.category}</h2>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-12 h-[1px] bg-slate-200" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">{section.items.length} Curated Experiences</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                                {section.items.map((item, idx) => {
                                    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I want to book the ${item.name} (${section.category}).`)}`;

                                    return (
                                        <div key={idx} className="group bg-white border border-slate-100 rounded-[3rem] overflow-hidden hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-700 hover:-translate-y-2 flex flex-col h-full">
                                            {/* Card Image Wrapper */}
                                            <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                                                <img
                                                    src={item.image}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    alt={item.name}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />

                                                {/* Coming Soon Pill */}
                                                <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-dark italic">Coming Soon</span>
                                                </div>

                                                <div className="absolute bottom-8 left-8 right-8">
                                                    <div className="flex items-center justify-between text-white">
                                                        <div className="space-y-1">
                                                            <p className="text-[9px] uppercase tracking-widest font-black opacity-70">Duration</p>
                                                            <p className="text-sm font-bold flex items-center gap-2">
                                                                <Clock size={14} className="text-brand-gold" />
                                                                {item.duration}
                                                            </p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-[9px] uppercase tracking-widest font-black opacity-70 italic">Starting From</p>
                                                            <p className="text-2xl font-serif font-bold text-brand-gold">{item.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-10 space-y-8 flex flex-col flex-grow">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold">
                                                            {section.id === 'city-tours' && <Tower size={14} />}
                                                            {section.id === 'beach-tours' && <Palmtree size={14} />}
                                                            {section.id === 'boat-trips' && <Ship size={14} />}
                                                        </div>
                                                        <h3 className="text-xl md:text-2xl font-serif text-slate-900 group-hover:text-brand-gold transition-colors">{item.name}</h3>
                                                    </div>
                                                    <p className="text-slate-400 text-[11px] leading-relaxed font-medium line-clamp-2">{item.desc}</p>
                                                </div>

                                                <div className="mt-auto">
                                                    <a
                                                        href={whatsappLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#25D366]/20"
                                                    >
                                                        <WhatsAppIcon size={20} />
                                                        Book via WhatsApp
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}
