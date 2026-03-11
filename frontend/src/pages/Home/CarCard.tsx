import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Car } from '../../types'
import { WhatsAppIcon } from '../../components/layout/MainLayout'

interface CarCardProps {
    car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+923132723938';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I'm interested in the ${car.make} ${car.model} (${car.year}) priced at PKR ${car.price.toLocaleString()}.`)}`;

    return (
        <div className="group block bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1">
            <Link
                to={`/cars/${car.id}`}
                className="relative block aspect-[16/10] overflow-hidden"
            >
                <img
                    src={car.images[0]}
                    alt={car.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                    <span className="text-[10px] font-bold text-brand-dark uppercase tracking-widest">{car.condition}</span>
                </div>
            </Link>

            <div className="p-8 space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">
                        <span>{car.make}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200" />
                        <span className="text-slate-400">{car.year}</span>
                    </div>
                    <Link to={`/cars/${car.id}`}>
                        <h3 className="text-xl font-serif text-slate-900 group-hover:text-brand-gold transition-colors leading-tight">{car.title}</h3>
                    </Link>
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
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Gearbox</p>
                        <p className="text-xs font-bold text-slate-700">{car.transmission}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div className="space-y-1 text-left">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Price</p>
                        <p className="text-lg font-serif font-bold text-brand-dark">PKR {car.price.toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white p-3 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg shadow-[#25D366]/20"
                            title="Contact on WhatsApp"
                        >
                            <WhatsAppIcon size={18} />
                        </a>
                        <Link
                            to={`/cars/${car.id}`}
                            className="bg-slate-50 p-2.5 rounded-full hover:bg-brand-dark hover:text-white transition-all duration-300 flex items-center justify-center"
                        >
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
