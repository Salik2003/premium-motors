import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface CustomDropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const CustomDropdown = ({ label, options, value, onChange, placeholder }: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="space-y-3" ref={dropdownRef}>
            <label className="block text-[8px] uppercase tracking-[0.3em] font-black text-slate-300 px-2">{label}</label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full flex items-center justify-between bg-white border px-6 py-4 rounded-2xl text-[9px] uppercase tracking-[0.15em] font-black transition-all shadow-sm ${value ? 'border-brand-gold text-brand-gold ring-4 ring-brand-gold/5' : 'border-slate-100 text-slate-500 hover:border-brand-gold/50'
                        }`}
                >
                    <span>{value || placeholder || `Any ${label}`}</span>
                    <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-gold' : 'text-slate-300'}`} />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-slate-100 rounded-[2rem] shadow-2xl shadow-slate-200/50 z-50 py-4 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="max-h-60 overflow-y-auto custom-scrollbar">
                            <button
                                type="button"
                                onClick={() => { onChange(''); setIsOpen(false); }}
                                className="w-full text-left px-8 py-4 text-[9px] uppercase tracking-widest font-black text-slate-300 hover:bg-slate-50 transition-colors"
                            >
                                Any {label}
                            </button>
                            {options.map((opt) => (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => { onChange(opt); setIsOpen(false); }}
                                    className={`w-full text-left px-8 py-4 text-[9px] uppercase tracking-widest font-black transition-all ${value === opt ? 'bg-brand-gold/10 text-brand-gold translate-x-1' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-gold'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
