import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'
import { ArrowLeft, MessageCircle, Share2, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react'
import { Skeleton } from '../../components/ui/Skeleton'
import type { Car } from '../../types'
import { DUMMY_CARS } from '../../constants/dummyData'

export const CarDetail = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    // Extract ID from slug (it's the part after the double hyphen)
    const id = slug?.includes('--') ? slug.split('--').pop() : slug

    const { data: car, isLoading } = useQuery({
        queryKey: ['car', id],
        queryFn: async () => {
            if (!id) return null
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

    const totalImages = displayCar.images.length

    const goToPrev = () => {
        setSelectedImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
    }

    const goToNext = () => {
        setSelectedImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
    }

    const handleWhatsApp = () => {
        const message = `Hello, I am interested in the following car listing:

*${displayCar.title}*
Price: €${displayCar.price.toLocaleString()}

Listing Link: ${window.location.href}

Is this vehicle still available?`;

        const whatsappUrl = `https://wa.me/+351937825370?text=${encodeURIComponent(message)}`;
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
                    <div className="lg:col-span-2 space-y-6">
                        {/* Main Image with Slider Arrows */}
                        <div className="relative group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50">
                            <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center bg-black/5">
                                <img
                                    src={displayCar.images[selectedImageIndex]}
                                    alt={displayCar.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Left Arrow */}
                            {totalImages > 1 && (
                                <button
                                    onClick={goToPrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-brand-gold hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            )}

                            {/* Right Arrow */}
                            {totalImages > 1 && (
                                <button
                                    onClick={goToNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-brand-gold hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            )}

                            {/* Image Counter */}
                            {totalImages > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                                    {selectedImageIndex + 1} / {totalImages}
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Grid */}
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
                            {displayCar.images.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedImageIndex(i)}
                                    className={`aspect-square bg-slate-50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${i === selectedImageIndex
                                        ? 'ring-2 ring-brand-gold border-brand-gold shadow-lg shadow-brand-gold/20'
                                        : 'border border-slate-100 hover:border-brand-gold/50'
                                        }`}
                                >
                                    <img src={img} alt={`Gallery ${i}`} loading="lazy" className="w-full h-full object-cover" />
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
                            </div>

                            <div className="space-y-1 pt-6 border-t border-slate-50">
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Reserve Price</p>
                                <p className="text-4xl font-serif font-bold text-brand-dark">€{displayCar.price.toLocaleString()}</p>
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
                                        <p className="text-xs font-bold text-slate-900">Vamo Drive</p>
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
