import { useNavigate } from 'react-router-dom'
import { ArrowRight, Plane, Car, User, ShieldCheck, Clock, Layers, Briefcase, ShoppingBag, Globe } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

const investmentCategories = [
    {
        id: 'limousine',
        title: 'LIMOUSINE',
        description: 'Elite Chauffeur Portfolio',
        icon: <User className="text-brand-gold" size={24} />,
        roi: '18-22%',
    },
    {
        id: 'private-jet',
        title: 'PRIVATE JET',
        description: 'Fractional Asset Ownership',
        icon: <Plane className="text-brand-gold" size={24} />,
        roi: '25%+',
    },
    {
        id: 'travel-tourism',
        title: 'TRAVEL & TOURISM',
        description: 'Luxury Destination Assets',
        icon: <Globe className="text-brand-gold" size={24} />,
        roi: '15-20%',
    },
    {
        id: 'car-rental',
        title: 'CAR RENTAL',
        description: 'High-Demand Daily Fleet',
        icon: <Car className="text-brand-gold" size={24} />,
        roi: '14-18%',
    },
    {
        id: 'commercial-broker',
        title: 'COMMERCIAL BROKER',
        description: 'Corporate Asset Leasing',
        icon: <Briefcase className="text-brand-gold" size={24} />,
        roi: '12-16%',
    },
    {
        id: 'ecommerce',
        title: 'ECOMMERCE',
        description: 'Digital Automotive Retail',
        icon: <ShoppingBag className="text-brand-gold" size={24} />,
        roi: '20-25%',
    }
]

export const Invest = () => {
    const navigate = useNavigate()

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero */}
            <section className="relative px-8 py-20 md:py-32 flex items-center justify-center overflow-hidden bg-brand-dark text-white">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Investment Background" />
                </div>
                <div className="relative z-10 text-center space-y-6 max-w-5xl">
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
                        <ShieldCheck className="text-brand-gold" size={14} />
                        <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold italic">Secured Asset Group</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                        Be An <span className="text-brand-gold italic">Investor</span>
                    </h1>
                    <p className="text-slate-400 text-[10px] md:text-xs max-w-2xl mx-auto uppercase tracking-[0.4em] font-bold leading-loose opacity-70">
                        Choose high-yield asset classes <br className="hidden md:block" />
                        engineered for Pakistan's evolving economy.
                    </p>
                </div>
            </section>

            {/* Category Grid */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-32">
                <div className="text-center space-y-3 mb-20">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-300 italic">Diversify your portfolio</p>
                    <h2 className="text-4xl font-serif text-slate-900 underline decoration-brand-gold decoration-4 underline-offset-8">Investments</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {investmentCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => navigate(`/invest/${cat.id}`)}
                            className="group flex items-center justify-between p-10 md:p-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500 text-left"
                        >
                            <div className="flex items-center gap-8 md:gap-12">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-slate-200/50 transition-transform duration-500 group-hover:scale-110">
                                    {cat.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight">{cat.title}</h3>
                                    <p className="text-slate-400 text-[9px] md:text-[10px] uppercase tracking-widest font-black italic">{cat.description}</p>
                                </div>
                            </div>
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center border border-slate-100 group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-500 shadow-sm">
                                <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Lead Gen Registration */}
            <section className="bg-slate-50 py-32 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-12">
                    <div className="text-center space-y-4 mb-20">
                        <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
                        <h2 className="text-3xl font-serif text-brand-dark">Private Onboarding</h2>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold italic leading-relaxed">
                            Register your credentials to receive a detailed prospectus <br />
                            and performance audit for our available asset pools.
                        </p>
                    </div>

                    <form className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-slate-200/50 space-y-12 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold/20" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <Input label="FULL LEGAL NAME" placeholder="EX: HAMZA KHAN" />
                            <Input label="WHATSAPP NUMBER" placeholder="+92 3XX XXXXXXX" />
                            <Input label="EMAIL ADDRESS" placeholder="KHAN@INVEST.PK" />
                            <Input label="RESIDENCE CITY" placeholder="CITY NAME" />
                        </div>

                        <div className="space-y-4">
                            <label className="block text-[9px] uppercase tracking-[0.3em] font-black text-slate-300 px-2 italic">Select Primary Asset Interest</label>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {investmentCategories.map(cat => (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        className="py-4 px-6 rounded-2xl border border-slate-50 bg-slate-50 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:border-brand-gold/30 hover:text-brand-gold hover:bg-white transition-all text-center"
                                    >
                                        {cat.title.split(' ')[0]} Portfolio
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button size="lg" className="w-full h-18 text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-brand-gold/20 active:scale-95 transition-all" icon={ArrowRight}>
                            Access Registry
                        </Button>
                    </form>

                    <div className="mt-16 flex items-center justify-center gap-8 opacity-40">
                        <div className="flex items-center gap-3">
                            <Clock size={12} />
                            <span className="text-[8px] uppercase tracking-widest font-black">24H Advisor Response</span>
                        </div>
                        <div className="h-4 w-[1px] bg-slate-300" />
                        <div className="flex items-center gap-3">
                            <Layers size={12} />
                            <span className="text-[8px] uppercase tracking-widest font-black">Secured Custodial Accounts</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
