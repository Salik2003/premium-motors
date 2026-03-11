import { ArrowRight, CheckCircle2, MessageSquare, Users, FileText, Car as CarIcon, CreditCard, GraduationCap, ClipboardList, Key, TrendingUp, ChevronRight } from 'lucide-react'
import { WhatsAppIcon } from '../../components/layout/MainLayout'
import lp from "../../assets/BYD & Tesla.png"
import cp from "../../assets/kia, kuna c5.jpg"

const investmentPackages = [
    {
        id: 'comfort',
        title: 'COMFORT PACKAGE',
        carNames: 'Citroen C5 Aircross, Hyundai Kona, Kia Niro',
        roi: '€600/month',
        investment: '€17,000',
        image: cp,
        features: ['Fuel efficient hybrid models', 'High reliability and low maintenance', 'Perfect for urban rideshare services']
    },
    {
        id: 'limousine',
        title: 'LIMOUSINE PACKAGE',
        carNames: 'BYD Auto 3, Tesla Model 3',
        roi: '€1,000/month',
        investment: '€25,000',
        image: lp,
        features: ['Executive electric vehicles', 'Premium interior specifications', 'Targeted at corporate and VIP clients']
    }
]

const procedureSteps = [
    { id: '01', title: 'Initial Inquiry', icon: MessageSquare, desc: 'Contact our investment advisory team' },
    { id: '02', title: 'Sales Meeting', icon: Users, desc: 'Detailed briefing on asset performance' },
    { id: '03', title: 'Documentation', icon: FileText, desc: 'Legal verification and agreement signing' },
    { id: '04', title: 'Select Asset', icon: CarIcon, desc: 'Choose your preferred vehicle and driver' },
    { id: '05', title: 'Down Payment', icon: CreditCard, desc: 'Secure your spot in the investment pool' },
    { id: '06', title: 'RTA Training', icon: GraduationCap, desc: 'Driver vetting and specialized training' },
    { id: '07', title: 'Registration', icon: ClipboardList, desc: 'Vehicle licensing and permit processing' },
    { id: '08', title: 'Vehicle Handover', icon: Key, desc: 'Assets deployed for active operations' },
    { id: '09', title: 'Start Earning', icon: TrendingUp, desc: 'Receive your first monthly distribution' },
]

export const Invest = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+923132723938';

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark text-white">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Investment Background" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/80" />

                <div className="relative z-10 text-center space-y-6 max-w-5xl px-8">
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full backdrop-blur-md">
                        <TrendingUp className="text-brand-gold" size={14} />
                        <span className="text-[9px] uppercase tracking-[0.5em] font-black text-brand-gold italic">Secured Returns</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-serif leading-tight">
                        Wealth <span className="text-brand-gold italic">Engineering</span>
                    </h1>
                    <p className="text-slate-400 text-[10px] md:text-xs max-w-2xl mx-auto uppercase tracking-[0.4em] font-bold leading-loose opacity-70">
                        Asset-backed investment opportunities <br className="hidden md:block" />
                        providing consistent monthly yields.
                    </p>
                </div>
            </section>

            {/* Packages Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-24">
                <div className="text-center space-y-3 mb-20">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-gold italic">Elite Portfolios</p>
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight">Investment Packages</h2>
                </div>

                <div className="space-y-12 md:space-y-20">
                    {investmentPackages.map((pkg, idx) => {
                        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.title} investment package.`)}`;
                        const carList = pkg.carNames.split(',').map(name => name.trim());

                        return (
                            <div key={pkg.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-slate-50 border border-slate-100 rounded-[3rem] overflow-hidden hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-700 group`}>
                                {/* Content Area */}
                                <div className="flex-1 p-10 md:p-20 space-y-10">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl md:text-3xl font-serif text-brand-gold font-bold leading-tight uppercase tracking-wide">{pkg.title}</h3>
                                        <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black italic">{pkg.carNames}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 md:gap-12">
                                        <div className="space-y-2">
                                            <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">Monthly Yield</p>
                                            <p className="text-2xl md:text-3xl font-serif text-brand-dark font-bold">{pkg.roi}</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">Total Capital</p>
                                            <p className="text-2xl md:text-3xl font-serif text-brand-dark font-bold">{pkg.investment}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-[9px] text-brand-gold uppercase tracking-[0.4em] font-black italic">Cars Name</p>
                                        <ul className="space-y-4">
                                            {carList.map((car, cIdx) => (
                                                <li key={cIdx} className="flex items-start gap-4">
                                                    <CheckCircle2 size={16} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                                                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{car}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#25D366]/20"
                                    >
                                        <WhatsAppIcon size={20} />
                                        Inquire via WhatsApp
                                        <ChevronRight size={16} />
                                    </a>
                                </div>

                                {/* Image Area */}
                                <div className="flex-1 relative overflow-hidden min-h-[300px] md:min-h-auto">
                                    <img
                                        src={pkg.image}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt={pkg.title}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-${idx % 2 === 0 ? 'r' : 'l'} from-slate-50 to-transparent hidden md:block opacity-40`} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Procedure Flowchart */}
            <section className="bg-brand-dark py-32 md:py-48 px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold opacity-5 blur-[120px] -mr-64 -mt-64" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold opacity-5 blur-[120px] -ml-64 -mb-64" />

                <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                    <div className="text-center space-y-6">
                        <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
                        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">Investment <span className="text-brand-gold italic">Procedure</span></h2>
                        <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold italic max-w-xl mx-auto leading-relaxed">
                            A transparent 9-step journey from initial <br />
                            consultation to monthly yielding distribution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {procedureSteps.map((step, sIdx) => {
                            // User request: "upper row (1-2-3) should be at bottom"
                            // Row 1: 01, 02, 03 (lg:order 1,2,3)
                            // Row 2: 06, 05, 04 (lg:order 4,5,6)
                            // Row 3: 07, 08, 09 (lg:order 7,8,9)
                            const gridOrder =
                                sIdx === 0 ? 'lg:order-1' :
                                    sIdx === 1 ? 'lg:order-2' :
                                        sIdx === 2 ? 'lg:order-3' :
                                            sIdx === 5 ? 'lg:order-4' : // Step 06 at pos 4 (L)
                                                sIdx === 4 ? 'lg:order-5' : // Step 05 at pos 5 (M)
                                                    sIdx === 3 ? 'lg:order-6' : // Step 04 at pos 6 (R)
                                                        sIdx === 6 ? 'lg:order-7' :
                                                            sIdx === 7 ? 'lg:order-8' :
                                                                sIdx === 8 ? 'lg:order-9' : '';

                            return (
                                <div
                                    key={step.id}
                                    className={`group p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500 flex items-start gap-6 relative sm:order-none ${gridOrder}`}
                                >
                                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-dark border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-gold text-[10px] font-black z-20">
                                        {step.id}
                                    </div>

                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-gold transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-dark flex-shrink-0">
                                        <step.icon size={24} strokeWidth={1.5} />
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-base font-serif text-white group-hover:text-brand-gold transition-colors">{step.title}</h4>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black leading-relaxed">{step.desc}</p>
                                    </div>

                                    {/* Flow Arrows */}
                                    {/* Row 1: 01, 02 -> Right */}
                                    {(sIdx === 0 || sIdx === 1) && (
                                        <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-white group-hover:text-brand-gold transition-colors z-10">
                                            <ArrowRight size={24} />
                                        </div>
                                    )}

                                    {/* Row 2: 04, 05 -> Left */}
                                    {(sIdx === 3 || sIdx === 4) && (
                                        <div className="hidden lg:block absolute top-1/2 -left-6 -translate-y-1/2 text-white group-hover:text-brand-gold transition-colors z-10 rotate-180">
                                            <ArrowRight size={24} />
                                        </div>
                                    )}

                                    {/* Row 3: 07, 08 -> Right */}
                                    {(sIdx === 6 || sIdx === 7) && (
                                        <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-white group-hover:text-brand-gold transition-colors z-10">
                                            <ArrowRight size={24} />
                                        </div>
                                    )}

                                    {sIdx < procedureSteps.length - 1 && (
                                        <div className="hidden sm:block lg:hidden absolute top-1/2 -right-6 -translate-y-1/2 text-white group-hover:text-brand-gold transition-colors z-10">
                                            <ArrowRight size={24} />
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
