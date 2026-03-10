import { Shield, Award, Globe } from 'lucide-react'
import heroVideo from '../../assets/hero-sec-video.mp4'

export const About = () => {

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center px-8 text-center bg-brand-dark overflow-hidden">
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

                <div className="relative z-10 space-y-10 max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full animate-in fade-in slide-in-from-top-4 duration-700 mx-auto">
                        <span className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
                        <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black italic">The PM Heritage</h2>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 drop-shadow-2xl">
                        A Legacy of <br /> <span className="text-brand-gold italic">Automotive</span> Perfection
                    </h1>
                    <p className="text-slate-300 text-[11px] md:text-xs max-w-2xl mx-auto uppercase tracking-[0.4em] font-black opacity-80 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 drop-shadow-lg">
                        Curating the world's most desired <br className="hidden md:block" />
                        assets for Pakistan's elite collectors.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="max-w-7xl mx-auto px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold italic">The Legend</h2>
                            <h2 className="text-5xl lg:text-7xl font-serif text-slate-900 leading-tight">Pakistan's Premier <span className="text-brand-gold italic">Concierge</span>.</h2>
                        </div>
                        <p className="text-slate-500 text-sm uppercase tracking-[0.15em] font-bold leading-loose max-w-xl opacity-80">
                            Born from a passion for mechanical perfection and a commitment to unparalleled service,
                            Premium Motors has emerged as the nation's leading purveyor of high-end vehicles.
                            We don't just sell cars; we curate journeys.
                        </p>
                        <div className="flex items-center gap-8 border-l-2 border-brand-gold pl-8">
                            <div>
                                <p className="text-3xl font-serif text-slate-900">15+</p>
                                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">Years Excellence</p>
                            </div>
                            <div className="h-10 w-[1px] bg-slate-100" />
                            <div>
                                <p className="text-3xl font-serif text-slate-900">1.2K</p>
                                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-black">Vehicles Curated</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] bg-slate-50 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white p-4">
                            <img
                                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80"
                                alt="Showroom"
                                className="w-full h-full object-cover rounded-[3rem]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-slate-50 py-32">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center space-y-4 mb-24">
                        <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black italic">Our Foundation</h2>
                        <h3 className="text-4xl font-serif text-slate-900">The Pillars of Premium</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Quality Assurance', icon: Shield, desc: 'Every vehicle is hand-picked and verified by our master technicians.' },
                            { title: 'Global Access', icon: Globe, desc: 'Direct sourcing from international markets, bringing rare finds to Pakistan.' },
                            { title: 'VIP Advocacy', icon: Award, desc: 'Personalized consulting and white-glove after-sales care.' },
                        ].map((item) => (
                            <div key={item.title} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 space-y-8">
                                <div className="w-16 h-16 rounded-2xl bg-brand-gold flex items-center justify-center text-white shadow-lg shadow-brand-gold/20">
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-serif text-slate-900">{item.title}</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 leading-relaxed font-bold">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
