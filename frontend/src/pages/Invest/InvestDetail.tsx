import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ChevronRight, TrendingUp, MapPin } from 'lucide-react'
import { DUMMY_CARS } from '../../constants/dummyData'
import { WhatsAppIcon } from '../../components/layout/MainLayout'

const investmentDetails: Record<string, any> = {
    'comfort': {
        title: 'COMFORT PACKAGE',
        roi: '€600/month',
        entry: '€17,000',
        carIds: ['1', '2', 'kianiro']
    },
    'limousine': {
        title: 'LIMOUSINE PACKAGE',
        roi: '€1,000/month',
        entry: '€25,000',
        carIds: ['bydatto3', '3']
    }
}

export const InvestDetail = () => {
    const { id } = useParams()
    const data = id ? investmentDetails[id] : null
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+923132723938';

    if (!data) return (
        <div className="pt-40 text-center space-y-8">
            <h2 className="text-4xl font-serif">Asset Class Not Found</h2>
            <Link to="/invest" className="text-brand-gold font-black uppercase tracking-widest text-xs inline-flex items-center gap-2">
                <ArrowLeft size={14} /> Return to Portfolio
            </Link>
        </div>
    )

    const matchedCars = DUMMY_CARS.filter(car => data.carIds.includes(car.id));

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

            {/* Simple Heading Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10 text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
                    <TrendingUp className="text-brand-gold" size={12} />
                    <span className="text-[8px] uppercase tracking-[0.4em] font-black text-brand-gold italic">Active Asset Pool</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight">
                    {data.title.split(' ')[0]} <span className="text-brand-gold italic">{data.title.split(' ')[1]}</span>
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-4">
                    <div className="text-center">
                        <p className="text-[8px] uppercase tracking-widest text-slate-400 font-black">Monthly Yield</p>
                        <p className="text-xl font-serif text-brand-gold font-bold">{data.roi}</p>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-slate-100" />
                    <div className="text-center">
                        <p className="text-[8px] uppercase tracking-widest text-slate-400 font-black">Total Capital</p>
                        <p className="text-xl font-serif text-slate-900 font-bold">{data.entry}</p>
                    </div>
                </div>
            </section>

            {/* Individual Car Cards */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {matchedCars.map(car => {
                        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I'm interested in investing in the ${car.title} part of the ${data.title}.`)}`;

                        return (
                            <div key={car.id} className="group bg-white rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-4 transition-all duration-700 flex flex-col h-full">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img src={car.images[0]} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={car.title} />
                                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-widest text-brand-gold border border-brand-gold/20 shadow-lg">
                                        {data.roi}
                                    </div>
                                </div>

                                <div className="p-10 space-y-8 flex-grow flex flex-col">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-black text-brand-gold">
                                            <TrendingUp size={12} /> ROI Yield Driven
                                        </div>
                                        <h4 className="text-2xl font-serif text-slate-900 leading-tight">{car.title}</h4>
                                        <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest font-black text-slate-400">
                                            <span className="flex items-center gap-1.5"><MapPin size={10} /> Managed</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                            <span>{car.year}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                            <span>{car.fuel_type}</span>
                                        </div>
                                    </div>

                                    <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold leading-relaxed line-clamp-3">
                                        {car.description}
                                    </p>

                                    <div className="pt-6 mt-auto space-y-6">
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-50 border border-slate-100 rounded-3xl text-center sm:text-left">
                                            <div className="space-y-1">
                                                <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Invest Capacity</p>
                                                <p className="text-xl font-serif font-black text-slate-900">{data.entry}</p>
                                            </div>
                                            <div className="sm:text-right space-y-1">
                                                <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Net ROI</p>
                                                <p className="text-lg font-serif font-black text-brand-gold">{data.roi}</p>
                                            </div>
                                        </div>

                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#25D366]/20"
                                        >
                                            <WhatsAppIcon size={18} />
                                            Inquire via WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
