import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import pmLogo from '../../assets/pm-logo.svg'

export const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'Invest', path: '/invest' },
        { name: 'Travel', path: '/travel' },
        { name: 'Chauffeur', path: '/chauffeur' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-slate-100 bg-white md:bg-white/90 md:backdrop-blur-md px-4 md:px-12 py-3 flex items-center justify-between transition-all duration-300">
            <Link to="/" className="flex items-center gap-2 group relative z-[110]" data-aos="fade-right">
                <div className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110">
                    <img src={pmLogo} alt="Premium Motors Logo" fetchPriority="high" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm md:text-lg font-serif font-black tracking-[0.1em] text-brand-dark leading-none">PREMIUM</span>
                    <span className="text-[7px] md:text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase leading-none mt-1">Motors</span>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-black">
                {navLinks.map((item, i) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        data-aos="fade-down"
                        data-aos-delay={i * 100}
                        className={`transition-all duration-300 hover:text-brand-gold relative py-1 ${isActive(item.path) ? 'text-brand-gold' : 'text-slate-500'
                            }`}
                    >
                        {item.name}
                        {isActive(item.path) && (
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full animate-in fade-in slide-in-from-left-2 duration-500" />
                        )}
                    </Link>
                ))}
            </div>

            <div className="hidden lg:flex items-center gap-6" data-aos="fade-left">
                <Link to="/contact" className="text-[10px] bg-brand-dark text-white uppercase tracking-widest font-black px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                    Inquire Now
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative z-[110] p-2 text-slate-900"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-[100] transition-all duration-500 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}>
                <div className="flex flex-col items-center justify-center h-full space-y-6 px-8 pt-20">
                    {navLinks.map((item, i) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`text-lg font-serif font-black tracking-widest uppercase transition-all duration-300 ${isActive(item.path) ? 'text-brand-gold' : 'text-slate-600'
                                }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-8 w-full space-y-4">
                        <Link to="/contact" className="block w-full text-center bg-brand-gold text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-brand-gold/20">
                            Book Inspection
                        </Link>
                        <a href="tel:+923132723938" className="flex items-center justify-center gap-3 w-full text-center border border-slate-100 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] text-slate-500">
                            <Phone size={14} /> Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
