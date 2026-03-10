import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Refresh AOS to ensure elements on the new page are visible
        const timer = setTimeout(() => {
            AOS.refresh();
        }, 100);
        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};
