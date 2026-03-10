import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: LucideIcon;
    isLoading?: boolean;
    children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', icon: Icon, isLoading, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-[10px]';

        const variants = {
            primary: 'bg-brand-gold text-black hover:bg-white',
            secondary: 'bg-white text-black hover:bg-brand-gold',
            outline: 'border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold',
            ghost: 'text-white/70 hover:text-white',
        };

        const sizes = {
            sm: 'px-4 py-2 gap-2',
            md: 'px-8 py-4 gap-3',
            lg: 'px-12 py-5 gap-4 text-xs',
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            >
                {isLoading ? (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                    <>
                        {Icon && <Icon size={16} strokeWidth={1.5} />}
                        {children}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';
