import type { HTMLAttributes } from 'react';

export const Skeleton = ({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`animate-pulse bg-white/5 rounded ${className}`}
            {...props}
        />
    );
};
