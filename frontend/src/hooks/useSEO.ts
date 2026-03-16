import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
}

export const useSEO = ({ title, description }: SEOProps) => {
    useEffect(() => {
        // Update Title
        const prevTitle = document.title;
        document.title = `${title} | Vamo Drive`;

        // Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        let prevDescription = '';

        if (metaDescription) {
            prevDescription = metaDescription.getAttribute('content') || '';
            if (description) {
                metaDescription.setAttribute('content', description);
            }
        } else if (description) {
            // Create if doesn't exist (safety override)
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }

        // Cleanup on unmount to restore page default state
        return () => {
            document.title = prevTitle;
            if (metaDescription && prevDescription) {
                metaDescription.setAttribute('content', prevDescription);
            }
        }
    }, [title, description]);
};
