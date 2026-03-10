import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Car } from '../../types'

interface CarCardProps {
    car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
    return (
        <Link
            to={`/cars/${car.id}`}
            className="group block bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
        >
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={car.images[0]}
                    alt={car.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                    <span className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">{car.condition}</span>
                </div>
            </div>

            <div className="p-8 space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">
                        <span>{car.make}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200" />
                        <span className="text-slate-400">{car.year}</span>
                    </div>
                    <h3 className="text-xl font-serif text-slate-900 group-hover:text-brand-gold transition-colors leading-tight">{car.title}</h3>
                </div>

                <div className="flex items-center justify-between py-4 border-y border-slate-50">
                    <div className="text-center">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Mileage</p>
                        <p className="text-xs font-bold text-slate-700">{car.mileage.toLocaleString()} km</p>
                    </div>
                    <div className="w-[1px] h-8 bg-slate-100" />
                    <div className="text-center">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Fuel</p>
                        <p className="text-xs font-bold text-slate-700">{car.fuel_type}</p>
                    </div>
                    <div className="w-[1px] h-8 bg-slate-100" />
                    <div className="text-center">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Trans.</p>
                        <p className="text-xs font-bold text-slate-700">{car.transmission.substring(0, 4)}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div className="space-y-1 text-left">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Investment</p>
                        <p className="text-lg font-serif font-bold text-brand-dark">PKR {(car.price / 1000000).toFixed(1)}M</p>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-full group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                        <ArrowRight size={18} strokeWidth={2.5} />
                    </div>
                </div>
            </div>
        </Link>
    )
}
