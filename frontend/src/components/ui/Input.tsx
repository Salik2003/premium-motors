import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = '', ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-black">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`w-full bg-slate-50 dark:bg-brand-dark/50 border border-slate-100 dark:border-white/10 px-6 py-4 rounded-2xl text-xs text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:border-brand-gold focus:bg-white dark:focus:bg-brand-dark transition-all shadow-sm ${className}`}
                    {...props}
                />
                {error && <p className="text-red-500 text-[10px] uppercase font-medium">{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';
