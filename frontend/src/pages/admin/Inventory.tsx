import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'
import { Button } from '../../components/ui/Button'
import { Plus, Edit2, Trash2, Search, Filter, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { CarForm } from '../../components/admin/CarForm'
import type { Car } from '../../types'

export const Inventory = () => {
    const queryClient = useQueryClient()
    const [searchTerm, setSearchTerm] = useState('')
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [editingCar, setEditingCar] = useState<Car | null>(null)

    const { data: cars, isLoading, error } = useQuery({
        queryKey: ['admin-cars'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('cars')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data as Car[];
        }
    });

    const saveMutation = useMutation({
        mutationFn: async (carData: Partial<Car>) => {
            if (editingCar) {
                const { error } = await supabase.from('cars').update(carData).eq('id', editingCar.id);
                if (error) throw error;
            } else {
                const { error } = await supabase.from('cars').insert([carData]);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-cars'] });
            setIsFormOpen(false);
            setEditingCar(null);
        },
        onError: (error) => {
            console.error('Save error:', error);
            alert(`Failed to save: ${error.message}`);
        }
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from('cars').delete().eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-cars'] });
        }
    });

    const handleEdit = (car: Car) => {
        setEditingCar(car);
        setIsFormOpen(true);
    };

    const handleAdd = () => {
        setEditingCar(null);
        setIsFormOpen(true);
    };

    const filteredCars = cars?.filter(car =>
        car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.make.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-3">
                    <p className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-black italic mt-1">Collection Manager</p>
                    <h1 className="text-4xl font-serif text-slate-900 dark:text-white font-black italic">Showroom Inventory</h1>
                </div>
                <Button
                    icon={Plus}
                    onClick={handleAdd}
                    className="h-14 px-10 rounded-2xl shadow-xl shadow-brand-gold/20"
                >
                    Create Listing
                </Button>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="relative flex-grow group w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600 group-focus-within:text-brand-gold transition-colors" size={18} strokeWidth={2} />
                    <input
                        type="text"
                        placeholder="SEARCH BY BRAND, MODEL OR SPEC DESCRIPTOR..."
                        className="w-full bg-white dark:bg-brand-dark border border-slate-100 dark:border-white/5 rounded-[1.5rem] px-16 py-5 text-[10px] uppercase tracking-widest text-slate-700 dark:text-white placeholder:text-slate-300 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all font-black shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="flex items-center gap-3 px-8 py-5 bg-white dark:bg-brand-dark border border-slate-100 dark:border-white/5 rounded-[1.5rem] text-[10px] uppercase tracking-widest font-black text-slate-400 hover:text-brand-gold dark:hover:text-brand-gold hover:border-brand-gold transition-all shadow-sm">
                    <Filter size={16} /> Advanced Filters
                </button>
            </div>

            {/* Main Registry Table / Mobile Cards */}
            <div className="bg-white dark:bg-brand-dark rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                {/* Desktop view */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 dark:bg-white/[0.02] text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 dark:text-slate-500 border-b border-slate-50 dark:border-white/5">
                            <tr>
                                <th className="px-10 py-8">Vehicle & Specification</th>
                                <th className="px-10 py-8">Asset Status</th>
                                <th className="px-10 py-8">Valuation</th>
                                <th className="px-10 py-8">Audience</th>
                                <th className="px-10 py-8 text-right">Operations</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-32 text-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-10 h-10 border-4 border-slate-100 dark:border-white/5 border-t-brand-gold rounded-full animate-spin" />
                                            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-300 dark:text-slate-600 font-bold">Synchronizing Vault...</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-32 text-center">
                                        <div className="flex flex-col items-center gap-4 text-red-500">
                                            <AlertCircle size={32} />
                                            <p className="text-[10px] uppercase tracking-widest font-black">Connection Failure: Check Supabase Cluster</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredCars?.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-32 text-center text-[10px] uppercase tracking-widest text-slate-300 dark:text-slate-600 font-black">
                                        No assets found in current registry.
                                    </td>
                                </tr>
                            ) : filteredCars?.map((car) => (
                                <tr key={car.id} className="group hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all duration-300">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-6">
                                            <div className="h-16 w-24 bg-slate-100 dark:bg-white/10 rounded-2xl border border-slate-100 dark:border-white/5 overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-500">
                                                <img src={car.images[0]} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-xs font-serif font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none">{car.title}</div>
                                                <div className="text-[9px] uppercase tracking-widest text-brand-gold font-bold italic">{car.make} • {car.year} • {car.city}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-sm border ${car.status === 'active'
                                            ? 'bg-green-50/50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-100 dark:border-green-500/20'
                                            : 'bg-slate-50 dark:bg-white/5 text-slate-300 dark:text-slate-600 border-slate-100 dark:border-white/5'
                                            }`}>
                                            {car.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8 text-xs font-serif font-black text-slate-800 dark:text-brand-silver uppercase tracking-widest">
                                        € {car.price.toLocaleString()}
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-600 font-black text-[10px] uppercase tracking-tighter">
                                            <Search size={12} className="text-brand-gold" /> {car.view_count || 0}
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <button
                                                onClick={() => handleEdit(car)}
                                                className="p-3 bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-brand-gold hover:bg-white dark:hover:bg-white/10 hover:shadow-lg rounded-xl transition-all"
                                            >
                                                <Edit2 size={16} strokeWidth={2} />
                                            </button>
                                            <button
                                                onClick={() => { if (confirm('Remove this asset?')) deleteMutation.mutate(car.id) }}
                                                className="p-3 bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 hover:shadow-lg rounded-xl transition-all"
                                            >
                                                <Trash2 size={16} strokeWidth={2} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile view */}
                <div className="lg:hidden p-4 space-y-4">
                    {isLoading ? (
                        <div className="py-20 flex flex-col items-center gap-4">
                            <div className="w-10 h-10 border-4 border-slate-100 dark:border-white/5 border-t-brand-gold rounded-full animate-spin" />
                            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-300 dark:text-slate-600 font-bold">Syncing Vault...</p>
                        </div>
                    ) : filteredCars?.map((car) => (
                        <div key={car.id} className="bg-slate-50/50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-3xl p-6 space-y-6">
                            <div className="flex gap-4">
                                <div className="h-20 w-32 bg-slate-100 dark:bg-white/10 rounded-2xl overflow-hidden flex-shrink-0">
                                    <img src={car.images[0]} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs font-serif font-black text-slate-900 dark:text-white uppercase tracking-widest">{car.title}</div>
                                    <div className="text-[9px] uppercase tracking-widest text-brand-gold font-bold italic">{car.make} • {car.year}</div>
                                    <div className="text-sm font-serif font-black text-brand-dark dark:text-brand-silver">€ {car.price.toLocaleString()}</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                                <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${car.status === 'active'
                                    ? 'bg-green-500/10 text-green-600 border-green-500/20'
                                    : 'bg-white/5 text-slate-600 border-white/5'
                                    }`}>
                                    {car.status}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(car)}
                                        className="p-3 bg-white dark:bg-white/5 text-slate-400 rounded-xl"
                                    >
                                        <Edit2 size={14} />
                                    </button>
                                    <button
                                        onClick={() => { if (confirm('Remove this asset?')) deleteMutation.mutate(car.id) }}
                                        className="p-3 bg-white dark:bg-white/5 text-slate-400 rounded-xl"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Asset Modal */}
            {isFormOpen && (
                <CarForm
                    car={editingCar}
                    onSave={(data) => saveMutation.mutate(data)}
                    onCancel={() => { setIsFormOpen(false); setEditingCar(null); }}
                />
            )}
        </div>
    )
}
