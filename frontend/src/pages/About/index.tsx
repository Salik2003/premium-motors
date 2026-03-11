import { MainLayout } from '../../components/layout/MainLayout'
import { CheckCircle2, Award, History, Users } from 'lucide-react'

export const About = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-dark text-white">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover"
                        alt="About Background"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark" />

                <div className="relative z-10 text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-serif">Our <span className="text-brand-gold italic">Legacy</span></h1>
                    <p className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black">Redefining Excellence Since 2024</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-black italic">The Vision</p>
                            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Crafting Unforgettable Automotive Journeys</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Established in 2024, our mission has always been clear: to provide the most exclusive automotive inventory in Pakistan, coupled with an unparalleled client experience. We believe that acquiring a car is not just a transaction; it's the beginning of a masterpiece.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-serif text-brand-gold">100+</h3>
                                <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Exclusive Vehicles</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-serif text-brand-gold">500+</h3>
                                <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c3d9?auto=format&fit=crop&q=80"
                            className="rounded-[3rem] shadow-2xl"
                            alt="Luxury Car Store"
                        />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-gold rounded-[2rem] p-8 flex flex-col justify-end text-white">
                            <Award size={32} className="mb-4" />
                            <p className="text-[10px] font-black uppercase tracking-widest">Premium Quality Certified</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-slate-50 py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-4xl font-serif text-slate-900">Our Core Principles</h2>
                        <div className="w-12 h-1 bg-brand-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Authenticity', desc: 'Every vehicle is verified and certified to meet the highest standards of excellence.', icon: CheckCircle2 },
                            { title: 'Legacy', desc: 'We are building a future based on trust, quality, and community.', icon: History },
                            { title: 'Exclusivity', desc: 'Offering only the most unique and sought-after models in the nation.', icon: Users },
                        ].map((v, i) => (
                            <div key={i} className="p-10 bg-white rounded-[2rem] space-y-6 hover:shadow-xl transition-shadow border border-slate-100">
                                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
                                    <v.icon size={24} />
                                </div>
                                <h3 className="text-xl font-serif text-slate-900">{v.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
