import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'
import { ArrowLeft, MapPin, MessageCircle, Share2, ShieldCheck } from 'lucide-react'
import { Skeleton } from '../../components/ui/Skeleton'
import type { Car } from '../../types'
import { DUMMY_CARS } from '../../constants/dummyData'

export const CarDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: car, isLoading } = useQuery({
        queryKey: ['car', id],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('cars')
                .select('*')
                .eq('id', id)
                .single()

            if (error) throw error
            return data as Car
        }
    })

    // Fallback to dummy data for demonstration if not found in DB
    const displayCar = car || DUMMY_CARS.find(c => c.id === id) || DUMMY_CARS[0];

    const handleWhatsApp = () => {
        const message = `Hello, I am interested in the following car listing:

*${displayCar.title}*
Price: PKR ${(displayCar.price / 1000000).toFixed(1)}M
City: ${displayCar.city}

Listing Link: ${window.location.href}

Is this vehicle still available?`;

        const whatsappUrl = `https://wa.me/+923132723938?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (isLoading) {
        return (
            <div className="bg-white min-h-screen pt-32 px-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    <Skeleton className="h-10 w-48 rounded-full" />
                    <Skeleton className="aspect-video w-full rounded-3xl shadow-lg" />
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen pb-20 pt-24">
            <div className="max-w-7xl mx-auto px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-400 hover:text-brand-gold transition-all mb-10 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Back to Inventory</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Media Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50">
                            <img
                                src={displayCar.images[0]}
                                alt={displayCar.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {displayCar.images.map((img, i) => (
                                <div key={i} className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 cursor-pointer hover:border-brand-gold transition-all hover:scale-105">
                                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>

                        <div className="space-y-8 pt-8 px-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-serif text-slate-900 border-b-2 border-brand-gold pb-2">Vehicle Description</h3>
                                <button className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-brand-gold transition-colors">
                                    <Share2 size={14} /> Share Listing
                                </button>
                            </div>
                            <p className="text-slate-500 leading-relaxed font-medium text-base first-letter:text-3xl first-letter:font-serif first-letter:mr-1 first-letter:float-left">
                                {displayCar.description}
                            </p>
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="space-y-8">
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 sticky top-32">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em] italic">
                                    <span>{displayCar.make}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-100" />
                                    <span>{displayCar.year}</span>
                                </div>
                                <h1 className="text-3xl font-serif text-slate-900 leading-tight">{displayCar.title}</h1>
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                                    <MapPin size={14} className="text-brand-gold" />
                                    {displayCar.city}
                                </div>
                            </div>

                            <div className="space-y-1 pt-6 border-t border-slate-50">
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Reserve Price</p>
                                <p className="text-4xl font-serif font-bold text-brand-dark">PKR {(displayCar.price / 1000000).toFixed(1)}M</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Mileage', value: `${displayCar.mileage.toLocaleString()} KM` },
                                    { label: 'Trans.', value: displayCar.transmission },
                                    { label: 'Fuel', value: displayCar.fuel_type },
                                    { label: 'Engine', value: `${displayCar.engine_cc} CC` },
                                ].map((spec) => (
                                    <div key={spec.label} className="bg-slate-50 p-4 rounded-2xl border border-slate-50">
                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">{spec.label}</p>
                                        <p className="text-xs font-bold text-slate-700">{spec.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-4">
                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full bg-[#25D366] text-white py-4 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-green-200 transition-all active:scale-95"
                                >
                                    <MessageCircle size={20} />
                                    Check Availability
                                </button>
                                <button className="w-full bg-brand-dark text-white py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200">
                                    Request Inspection
                                </button>
                            </div>

                            <div className="pt-8 px-2">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-50">
                                    <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-serif font-bold text-lg">
                                        PM
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">Premium Motors</p>
                                        <div className="flex items-center gap-1 text-[9px] text-brand-gold font-bold uppercase tracking-widest">
                                            <ShieldCheck size={10} /> Certified Boutique
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
