import { useQuery } from '@tanstack/react-query'
import { useState, useMemo, lazy, Suspense } from 'react'
import { supabase } from '../../lib/supabase'
import { Hero } from './Hero'
import { FilterBar } from './FilterBar'
import { CarCard } from './CarCard'
import { Skeleton } from '../../components/ui/Skeleton'
import type { Car } from '../../types'
import { DUMMY_CARS } from '../../constants/dummyData'
import { useSEO } from '../../hooks/useSEO'

// Lazy load PartnerSlider as it's below the fold
const PartnerSlider = lazy(() => import('../../components/home/PartnerSlider').then(m => ({ default: m.PartnerSlider })))

export const Home = () => {
    useSEO({
        title: 'Boutique Automotive Registry',
        description: 'Explore Vamo Drive\'s curated selection of the finest luxury vehicles and exclusive direct marketplace in Portugal.'
    });

    const [searchQuery, setSearchQuery] = useState('')
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({})
    const [sortOrder, setSortOrder] = useState('newest')

    const { data: cars, isLoading, error } = useQuery<Car[]>({
        queryKey: ['cars'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('cars')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error
            return data as Car[]
        }
    })

    const displayCars = (!cars || cars.length === 0) ? DUMMY_CARS : cars;

    const filteredAndSortedCars = useMemo(() => {
        let result = [...displayCars];

        // Search
        if (searchQuery) {
            result = result.filter(car =>
                car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
                car.model.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filters
        Object.entries(activeFilters).forEach(([key, value]) => {
            if (value) {
                if (key === 'fuel_type') {
                    result = result.filter(car => {
                        const carFuel = (car.fuel_type || '').toLowerCase();
                        const filterFuel = value.toLowerCase();
                        if (filterFuel === 'hybrid') return carFuel.includes('hybrid');
                        return carFuel === filterFuel;
                    });
                } else {
                    result = result.filter(car => (car as any)[key] === value);
                }
            }
        });

        // Sort
        result.sort((a, b) => {
            if (sortOrder === 'price_asc') return a.price - b.price;
            if (sortOrder === 'price_desc') return b.price - a.price;
            if (sortOrder === 'mileage_asc') return a.mileage - b.mileage;
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });

        return result;
    }, [displayCars, searchQuery, activeFilters, sortOrder]);

    const handleFilterChange = (type: string, value: string) => {
        setActiveFilters(prev => {
            const next = { ...prev };
            if (value) next[type] = value;
            else delete next[type];
            return next;
        });
    };

    return (
        <div className="bg-white min-h-screen">
            <Hero />

            <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
                    <div className="space-y-4" data-aos="fade-right">
                        <div className="inline-flex items-center gap-3 text-brand-gold">
                            <span className="w-8 h-[1px] bg-brand-gold" />
                            <p className="text-[10px] uppercase tracking-[0.4em] font-black italic">Curated Selection</p>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-serif text-slate-900 leading-tight">Elite Showcase <br className="hidden md:block" /> Private Registry</h3>
                    </div>
                    <div className="max-w-md">
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                            Explore our hand-picked collection of world-class vehicles. Each asset is verified for mechanical perfection and aesthetic excellence.
                        </p>
                    </div>
                </div>

                <FilterBar
                    activeFilters={activeFilters}
                    onFilterChange={handleFilterChange}
                    sortOrder={sortOrder}
                    onSortChange={setSortOrder}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />

                {isLoading && (!(cars as any) || (cars as any).length === 0) ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[...Array(6)].map((_, i) => (
                            <Skeleton key={i} className="aspect-[16/20] rounded-[2.5rem]" />
                        ))}
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center gap-4 py-6 px-10 bg-slate-50 rounded-2xl border border-slate-100 mb-16 max-w-fit mx-auto">
                        <div className="w-2 h-2 rounded-full bg-slate-200 animate-pulse" />
                        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[8px]">Accessing Archival Database</p>
                        <div className="h-4 w-[1px] bg-slate-100" />
                        <p className="text-brand-gold font-bold text-[8px] uppercase tracking-[0.3em]">Historical Cache Active</p>
                    </div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                    {filteredAndSortedCars.map((car, i) => (
                        <div key={car.id} data-aos="fade-up" data-aos-delay={i * 100}>
                            <CarCard car={car} />
                        </div>
                    ))}
                </div>

                {!isLoading && filteredAndSortedCars.length === 0 && (
                    <div className="text-center py-40 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-100">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200/50">
                            <span className="text-2xl">🔍</span>
                        </div>
                        <p className="text-slate-900 font-serif text-xl font-bold italic mb-2">No Matching Assets Found</p>
                        <p className="text-slate-400 font-medium text-xs uppercase tracking-widest leading-loose">
                            Adjust your filters or broaden <br /> your search criteria.
                        </p>
                        <button
                            onClick={() => {
                                setActiveFilters({});
                                setSearchQuery('');
                            }}
                            className="mt-8 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] hover:underline"
                        >
                            Reset All Parameters
                        </button>
                    </div>
                )}
            </section>

            <Suspense fallback={null}>
                <PartnerSlider />
            </Suspense>
        </div>
    )
}
