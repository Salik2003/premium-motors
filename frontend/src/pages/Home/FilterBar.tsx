import { SlidersHorizontal, X, Search } from 'lucide-react'
import { useState } from 'react'
import { CustomDropdown } from '../../components/ui/CustomDropdown'

interface FilterBarProps {
    onFilterChange: (type: string, value: string) => void;
    activeFilters: Record<string, string>;
    sortOrder: string;
    onSortChange: (value: string) => void;
    searchQuery: string;
    onSearchChange: (value: string) => void;
}

export const FilterBar = ({ onFilterChange, activeFilters, sortOrder, onSortChange, searchQuery, onSearchChange }: FilterBarProps) => {
    const [showFilters, setShowFilters] = useState(false);

    const filtersList = [
        { label: 'Transmission', options: ['Automatic', 'Manual'] },
        { label: 'Fuel Type', options: ['Petrol', 'Diesel', 'Hybrid', 'Electric'] },
        { label: 'Condition', options: ['New', 'Used'] },
    ];

    return (
        <div className="z-40 mb-12">
            <div className="flex items-center justify-between gap-4">
                {/* Compact Filter Toggle */}
                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all ${showFilters || Object.keys(activeFilters).length > 0
                            ? 'bg-brand-dark text-white border-brand-dark'
                            : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-brand-gold hover:text-brand-gold'
                            }`}
                    >
                        <SlidersHorizontal size={14} strokeWidth={3} />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-black hidden md:block">Refine Results</span>
                        {Object.keys(activeFilters).length > 0 && (
                            <span className="w-5 h-5 rounded-full bg-brand-gold text-white text-[9px] flex items-center justify-center font-black">
                                {Object.keys(activeFilters).length}
                            </span>
                        )}
                    </button>

                    <div className="hidden lg:flex items-center gap-6 border-l border-slate-100 ml-4 pl-10">
                        <CustomDropdown
                            label="Sort Order"
                            options={['Latest Arrivals', 'Price: Ascending', 'Price: Descending', 'Lowest Mileage']}
                            value={
                                sortOrder === 'newest' ? 'Latest Arrivals' :
                                    sortOrder === 'price_asc' ? 'Price: Ascending' :
                                        sortOrder === 'price_desc' ? 'Price: Descending' :
                                            sortOrder === 'mileage_asc' ? 'Lowest Mileage' : ''
                            }
                            onChange={(val) => {
                                if (val === 'Latest Arrivals') onSortChange('newest');
                                else if (val === 'Price: Ascending') onSortChange('price_asc');
                                else if (val === 'Price: Descending') onSortChange('price_desc');
                                else if (val === 'Lowest Mileage') onSortChange('mileage_asc');
                            }}
                        />
                    </div>
                </div>

                {/* Integrated Search Bar */}
                <div className="flex-grow max-w-sm md:max-w-md relative group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-gold transition-colors" size={16} />
                    <input
                        type="text"
                        placeholder="SEARCH INVENTORY..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-12 py-3.5 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-brand-gold/30 focus:bg-white transition-all shadow-sm"
                    />
                </div>
            </div>

            {/* Collapsible Mobile/Desktop Filters Panel */}
            {showFilters && (
                <div className="mt-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in slide-in-from-top-4 duration-300">
                    {filtersList.map((f) => (
                        <CustomDropdown
                            key={f.label}
                            label={f.label}
                            options={f.options}
                            value={activeFilters[f.label.toLowerCase().replace(' ', '_')] || ''}
                            onChange={(val) => onFilterChange(f.label.toLowerCase().replace(' ', '_'), val)}
                        />
                    ))}
                </div>
            )}

            {/* Active Chips Panel */}
            {Object.keys(activeFilters).length > 0 && (
                <div className="flex flex-wrap items-center gap-3 mt-6 pb-2">
                    {Object.entries(activeFilters).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-3 px-4 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20">
                            <span className="text-[8px] font-black text-brand-gold/40 uppercase tracking-widest">{key.replace('_', ' ')}:</span>
                            <span className="text-[9px] font-black text-brand-gold uppercase tracking-widest">{value}</span>
                            <button
                                onClick={() => onFilterChange(key, '')}
                                className="p-1 hover:bg-brand-gold/20 rounded-full transition-colors text-brand-gold"
                            >
                                <X size={10} strokeWidth={3} />
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => {
                            Object.keys(activeFilters).forEach(key => onFilterChange(key, ''));
                        }}
                        className="text-[9px] font-black text-brand-gold/60 uppercase tracking-[0.1em] hover:text-brand-gold px-4"
                    >
                        Reset All
                    </button>
                </div>
            )}
        </div>
    )
}
