import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, DollarSign, ShieldCheck, ChevronRight, Calculator } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { DUMMY_CARS } from '../../constants/dummyData'
import { slugify } from '../../lib/utils'


const investmentDetails: Record<string, any> = {
    'limousine': {
        title: 'Limousine',
        tagline: 'Elite Chauffeur Fleet Management',
        heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80',
        roi: '18-22%',
        entry: 'PKR 1.2M',
        tenure: '3-5 Years',
        benefits: [
            'Fixed Monthly Rental Payouts',
            'Full Comprehensive Insurance Coverage',
            'Professional Chauffeur Management',
            'Corporate Contract Security',
            'Buy-Back Guarantee After 36 Months'
        ],
        overview: 'Our Limousine division specializes in providing top-tier vehicles to corporate clients and luxury hotels across Pakistan. By investing in a vehicle, you secure a stake in a high-demand service with predictable monthly returns and professional asset management.'
    },
    'private-jet': {
        title: 'Private Jet',
        tagline: 'High-Velocity Fractional Ownership',
        heroImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a75c3?auto=format&fit=crop&q=80',
        roi: '25%+',
        entry: 'PKR 15M',
        tenure: '5-7 Years',
        benefits: [
            'Hourly Revenue Sharing Model',
            'Fractional Asset Ownership Deed',
            'International Charter Access',
            'Tax-Efficient Investment Structure',
            'Professional Aviation Maintenance'
        ],
        overview: 'The Private Jet Fractional Ownership model allows investors to own a portion of a premium aircraft. Revenue is generated through charter hours, providing exceptional returns fueled by the growing demand for private aviation in the region.'
    },
    'car-rental': {
        title: 'Car Rental',
        tagline: 'Dynamic Daily Fleet Operations',
        heroImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80',
        roi: '14-18%',
        entry: 'PKR 800K',
        tenure: '2-4 Years',
        benefits: [
            'Daily/Weekly Revenue Accrual',
            'Real-Time Fleet Tracking Access',
            'Automated Maintenance Scheduling',
            'Verified Driver Selection',
            'Flexible Exit Strategies'
        ],
        overview: 'Our Daily Rental division focuses on high-turnover luxury and executive vehicles. This asset class offers high liquidity and consistent revenue streams driven by tourism and corporate travel needs.'
    }
}

export const InvestDetail = () => {
    const { id } = useParams()
    const data = id ? investmentDetails[id] : null

    if (!data) return (
        <div className="pt-40 text-center space-y-8">
            <h2 className="text-4xl font-serif">Asset Class Not Found</h2>
            <Link to="/invest" className="text-brand-gold font-black uppercase tracking-widest text-xs inline-flex items-center gap-2">
                <ArrowLeft size={14} /> Return to Portfolio
            </Link>
        </div>
    )

    return (
        <div className="pt-24 min-h-screen bg-white pb-20">
            {/* Header / Nav */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between border-b border-slate-50">
                <Link to="/invest" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand-gold transition-colors">
                    <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                    Back to Portfolio
                </Link>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Invest</span>
                    <ChevronRight size={10} className="text-slate-200" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{data.title}</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 items-center">
                <div className="space-y-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
                            <ShieldCheck className="text-brand-gold" size={14} />
                            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold italic">Verified Managed Asset</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                            {data.title} <br />
                            <span className="text-brand-gold italic">Investment</span>
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-xl">
                            {data.tagline}. Secure your position in Pakistan's premier asset group.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                        <div className="space-y-2">
                            <p className="text-[8px] uppercase tracking-widest text-slate-400 font-black">Target ROI</p>
                            <div className="text-2xl font-serif text-brand-gold font-bold">{data.roi}</div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[8px] uppercase tracking-widest text-slate-400 font-black">Min Entry</p>
                            <div className="text-2xl font-serif text-slate-900 font-bold">{data.entry}</div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[8px] uppercase tracking-widest text-slate-400 font-black">Term</p>
                            <div className="text-2xl font-serif text-slate-900 font-bold">{data.tenure}</div>
                        </div>
                    </div>
                </div>

                <div className="aspect-[4/5] lg:aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative group">
                    <img src={data.heroImage} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={data.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                    <div className="absolute bottom-12 left-12 right-12">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Asset Status</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Active Pool</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-[75%] h-full bg-brand-gold" />
                            </div>
                            <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">75% Capacity Reached</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-Depth */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 border-t border-slate-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-serif text-slate-900 leading-tight underline decoration-brand-gold/30 underline-offset-8">Strategy Overview</h3>
                            <p className="text-slate-500 text-base leading-relaxed font-medium">
                                {data.overview}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: 'Asset Protection', icon: ShieldCheck, desc: 'Legal and physical security for your capital.' },
                                { title: 'Yield Optimization', icon: TrendingUp, desc: 'Maximum performance via advanced fleet logistics.' },
                                { title: 'Dividend Payouts', icon: DollarSign, desc: 'Automated monthly returns to your preferred account.' },
                                { title: 'Predictive ROI', icon: Calculator, desc: 'Performance transparency via smart analytics.' }
                            ].map(feat => (
                                <div key={feat.title} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                                    <feat.icon className="text-brand-gold" size={20} />
                                    <div>
                                        <h4 className="text-base font-serif text-slate-900">{feat.title}</h4>
                                        <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mt-1 leading-relaxed">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-dark rounded-[3.5rem] p-12 md:p-20 text-white space-y-12 shadow-2xl shadow-brand-dark/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />

                        <div className="space-y-4">
                            <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black italic">Key Privileges</h3>
                            <h2 className="text-4xl font-serif leading-tight">Investor <span className="text-brand-gold italic">Benefits</span></h2>
                        </div>

                        <div className="space-y-8">
                            {data.benefits.map((benefit: string) => (
                                <div key={benefit} className="flex items-start gap-6 group">
                                    <CheckCircle2 className="text-brand-gold mt-1 shrink-0" size={20} />
                                    <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed group-hover:text-white transition-colors">{benefit}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Button size="lg" className="w-full h-20 text-xs uppercase tracking-[0.4em] bg-brand-gold text-brand-dark hover:bg-white transition-all shadow-xl" icon={ArrowRight}>
                                Apply For Membership
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Matched Registry Preview */}
            <section className="bg-slate-50 py-32 px-6 md:px-12 border-t border-slate-100">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-black italic">Curated Selection</h2>
                        <h3 className="text-4xl font-serif text-slate-900">Vehicles in this <span className="text-brand-gold italic">Asset Class</span></h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DUMMY_CARS.slice(0, 6).map(car => (
                            <Link to={`/cars/${slugify(car.title)}--${car.id}`} key={car.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-700">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img src={car.images[0]} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={car.title} />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-brand-dark">
                                        PKR {(car.price / 1000000).toFixed(1)}M
                                    </div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <h4 className="text-xl font-serif text-slate-900 line-clamp-1">{car.title}</h4>
                                    <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest font-bold text-slate-400">
                                        <span>{car.year}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-200" />
                                        <span>{car.transmission}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center pt-8">
                        <Link to="/home" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-brand-gold transition-colors group">
                            Explore Full Registry <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
