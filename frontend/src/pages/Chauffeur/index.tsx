import { Clock, CheckCircle2, ChevronRight, UserCheck, ShieldCheck } from 'lucide-react'
import { WhatsAppIcon } from '../../components/layout/MainLayout'
import { useSEO } from '../../hooks/useSEO'

const plans = [
    {
        title: 'Weekly Ride Plan',
        price: '€1,000',
        period: 'Weekly',
        billing: 'Billed one-time',
        features: [
            'Premium cars and verified chauffeurs',
            'Priority booking during peak hours',
            'Airport pickup & drop-off available',
            'Transparent pricing'
        ]
    },
    {
        title: '15 Days Ride Plan',
        price: '€2,000',
        period: '15 Days',
        billing: 'Billed one-time',
        features: [
            'Comfortable rides for work or personal use',
            'Professional chauffeurs',
            'Available across Portugal cities',
            'Flexible timing and easy booking',
            '24/7 customer support'
        ]
    }
]

export const Chauffeur = () => {
    useSEO({
        title: 'Chauffeur Services',
        description: 'Hire verified professional chauffeurs and premium luxury cars driving across Portugal with Vamo Drive.'
    });

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+351937825370';

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" loading="lazy" className="w-full h-full object-cover" alt="Premium Chauffeur Service" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-0" />

                <div className="relative z-10 max-w-5xl text-center space-y-6 md:space-y-8 lg:space-y-10 px-8">
                    <div className="space-y-4 md:space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 md:py-2 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
                            <h2 className="text-white text-[7px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-black italic">Premium Mobility</h2>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.2] tracking-tight drop-shadow-2xl">
                            Private <br />
                            <span className="text-brand-gold italic">Chauffeur</span> Service
                        </h1>
                    </div>

                    <p className="text-slate-200 text-[8px] md:text-[10px] max-w-xl mx-auto leading-relaxed font-black uppercase tracking-[0.3em] md:tracking-[0.4em] drop-shadow-lg opacity-80">
                        Professional logistics engineered for <br className="hidden md:block" />
                        corporate and private travelers in Portugal.
                    </p>
                </div>
            </section>

            {/* Plans */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 sm:py-48">
                <div className="text-center space-y-4 mb-24">
                    <p className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black italic">Ride Subscriptions</p>
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight">Executive Mobility Plans</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => {
                        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I'm interested in the ${plan.title} priced at ${plan.price}.`)}`;

                        return (
                            <div key={idx} className="group bg-slate-50 border border-slate-100 p-10 md:p-16 rounded-[3.5rem] hover:bg-white hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-700 relative overflow-hidden flex flex-col h-full">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 blur-[80px] -mr-24 -mt-24 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full space-y-12">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl md:text-3xl font-serif text-slate-900 group-hover:text-brand-gold transition-colors">{plan.title}</h3>
                                            <div className="px-4 py-1.5 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-widest rounded-full border border-brand-gold/20">
                                                {plan.period}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-5xl md:text-6xl font-serif text-brand-dark font-bold">{plan.price}</span>
                                                <span className="text-[11px] text-slate-400 uppercase tracking-widest font-black">/ Entry</span>
                                            </div>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black italic opacity-60">{plan.billing} protocol</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6 flex-grow">
                                        <p className="text-[10px] text-slate-300 uppercase tracking-[0.4em] font-black italic">Service Inventory</p>
                                        <ul className="space-y-5">
                                            {plan.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-4">
                                                    <CheckCircle2 size={18} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                                                    <span className="text-[11px] md:text-[12px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-10">
                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full h-18 bg-[#25D366] text-white rounded-[1.5rem] flex items-center justify-center gap-5 text-[11px] font-black uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#25D366]/20 group/btn"
                                        >
                                            <WhatsAppIcon size={22} />
                                            Activate Plan
                                            <ChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Why Us Section - Updated for better contrast */}
            <section className="bg-brand-dark py-32 md:py-48 relative overflow-hidden border-y border-white/5">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold opacity-5 blur-[120px] -mr-80 -mb-80" />

                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                        {[
                            { title: 'Verified Chauffeurs', icon: UserCheck, desc: 'Background checked and expertly trained professional drivers with multilingual capabilities.' },
                            { title: 'Elite Fleet', icon: ShieldCheck, desc: 'Selection of luxury sedans and premium SUVs maintained to the highest safety standards.' },
                            { title: 'Protocol Integrity', icon: Clock, desc: 'Your personal chauffeur available 24/7, maintaining absolute discretion and punctuality.' },
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-8 group">
                                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-brand-gold transition-all duration-500 group-hover:bg-brand-gold group-hover:text-brand-dark group-hover:scale-110 group-hover:-rotate-6">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-2xl font-serif text-white group-hover:text-brand-gold transition-colors">{item.title}</h4>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black leading-loose opacity-80">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
