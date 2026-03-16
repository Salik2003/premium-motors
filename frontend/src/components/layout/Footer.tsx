import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import pmLogo from '../../assets/pm-logo.svg';

export const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10">
                                <img src={pmLogo} alt="Vamo Drive Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-serif font-black tracking-[0.1em] text-brand-dark leading-none uppercase">VAMO</span>
                                <span className="text-[7px] font-bold tracking-[0.3em] text-brand-gold uppercase leading-none mt-1">Drive</span>
                            </div>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                            Portugal's premier luxury automotive marketplace. We curate the finest vehicles for the discerning enthusiast.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-brand-gold hover:text-brand-gold transition-all">
                                    <Icon size={18} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-dark mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/home' },
                                { name: 'Invest', path: '/invest' },
                                { name: 'Travel', path: '/travel' },
                                { name: 'Chauffeur', path: '/chauffeur' },
                                { name: 'Contact Us', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-sm text-slate-500 hover:text-brand-gold transition-colors font-medium">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-dark mb-8">Contact</h4>
                        <ul className="space-y-6">
                            {[
                                { icon: Phone, text: '+351 937 825 370' },
                                { icon: Mail, text: 'largerthoughs@gmail.com' },
                                { icon: MapPin, text: 'parceta sao jorge de mina lisbon' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <item.icon size={18} className="text-brand-gold shrink-0" strokeWidth={1.5} />
                                    {item.icon === Mail ? (
                                        <a href={`mailto:${item.text}`} className="text-sm text-slate-500 hover:text-brand-gold transition-colors font-medium">{item.text}</a>
                                    ) : item.icon === Phone ? (
                                        <a href={`tel:${item.text.replace(/\s+/g, '')}`} className="text-sm text-slate-500 hover:text-brand-gold transition-colors font-medium">{item.text}</a>
                                    ) : (
                                        <span className="text-sm text-slate-500 font-medium">{item.text}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-dark mb-8">Newsletter</h4>
                        <p className="text-sm text-slate-500 mb-6 font-medium">Subscribe to receive updates on hand-picked inventory.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white border border-slate-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-brand-dark text-white text-[10px] uppercase tracking-widest font-bold px-4 rounded-full hover:bg-slate-800 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 relative">
                    <p className="text-xs text-slate-400 font-medium">
                        © {new Date().getFullYear()} Vamo Drive. All rights reserved.
                    </p>
                    <div className="flex gap-8 items-center">
                        <a href="#" className="text-xs text-slate-400 hover:text-brand-gold transition-colors font-medium">Privacy Policy</a>
                        <a href="#" className="text-xs text-slate-400 hover:text-brand-gold transition-colors font-medium">Terms of Service</a>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="w-10 h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold hover:-translate-y-1 transition-all shadow-sm"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
