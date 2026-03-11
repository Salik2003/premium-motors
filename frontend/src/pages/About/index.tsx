import { Award, Shield, Users, Globe, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-brand-dark text-white">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover"
                        alt="About Premium Motors"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/90" />

                <div className="relative z-10 text-center space-y-6 max-w-4xl px-8">
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full backdrop-blur-md">
                        <Award className="text-brand-gold" size={14} />
                        <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold italic">Our Legacy</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-serif">
                        Our <span className="text-brand-gold italic">Story</span>
                    </h1>
                    <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold leading-loose opacity-70">
                        Defining the pinnacle of luxury automotive <br className="hidden md:block" />
                        excellence in Karachi since inception.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10" data-aos="fade-right">
                    <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-gold italic">Philosophy</p>
                        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">Beyond The <span className="italic text-brand-gold">Drive</span></h2>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                        Premium Motors was founded on a simple yet profound principle: that acquiring a world-class vehicle should be as exceptional as the drive itself. Based in the heart of Karachi, we have cultivated a sanctuary for the discerning enthusiast who demands nothing less than perfection.
                    </p>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                        Our curation process is exhaustive. We don't just sell cars; we engineer investment-grade portfolios for our clients, ensuring that every asset we represent meets the highest standards of mechanical integrity and aesthetic prestige.
                    </p>
                </div>
                <div className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden shadow-2xl" data-aos="fade-left">
                    <img
                        src="https://images.unsplash.com/photo-1542362567-b058c02b9ac1?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover"
                        alt="Our Philosophy"
                    />
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-slate-50 py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-gold italic">Trust & Excellence</p>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Our Core Pillars</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Shield,
                                title: 'Integrity',
                                desc: 'Absolute transparency in every transaction, from valuation to final handover.'
                            },
                            {
                                icon: Globe,
                                title: 'Global Standard',
                                desc: 'Bringing international luxury automotive practices to the Pakistani market.'
                            },
                            {
                                icon: Users,
                                title: 'Exclusivity',
                                desc: 'A bespoke service tailored to the unique lifestyle of our elite inventory owners.'
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 space-y-8 hover:shadow-xl transition-all duration-500 group">
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                                    <pillar.icon size={28} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-serif text-slate-900">{pillar.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-8 py-32 text-center">
                <div className="bg-brand-dark rounded-[4rem] p-12 md:p-32 space-y-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold opacity-5 blur-[100px] -mr-48 -mt-48" />
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-6xl font-serif text-white">Join The Registry</h2>
                        <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold italic max-w-xl mx-auto leading-relaxed">
                            Experience the future of luxury automotive commerce in Karachi.
                        </p>
                        <div className="pt-6">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-4 px-10 py-5 bg-brand-gold text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all shadow-2xl shadow-brand-gold/20"
                            >
                                Contact Us <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
