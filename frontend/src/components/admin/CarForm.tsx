import { useState, useEffect } from 'react'
import { X, Upload, Save, Trash2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import type { Car } from '../../types'

interface CarFormProps {
    car?: Car | null;
    onSave: (car: Partial<Car>) => void;
    onCancel: () => void;
}

export const CarForm = ({ car, onSave, onCancel }: CarFormProps) => {
    const [formData, setFormData] = useState<Partial<Car>>({
        title: '',
        make: '',
        model: '',
        year: new Date().getFullYear(),
        price: 0,
        mileage: 0,
        fuel_type: 'Petrol',
        transmission: 'Automatic',
        condition: 'Used',
        color: '',
        engine_cc: 0,
        num_owners: 1,
        city: '',
        description: '',
        images: [],
        status: 'active'
    })

    useEffect(() => {
        if (car) {
            setFormData(car)
        }
    }, [car])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSave(formData)
    }

    const handleImageAdd = () => {
        const url = prompt('Enter Image URL (Temporary replacement for real upload):')
        if (url) {
            setFormData(prev => ({
                ...prev,
                images: [...(prev.images || []), url]
            }))
        }
    }

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onCancel} />

            <div className="relative w-full max-w-4xl bg-white dark:bg-brand-dark rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="flex items-center justify-between p-8 border-b border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                    <div>
                        <h2 className="text-xl font-serif font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none">
                            {car ? 'Edit Asset' : 'Register New Asset'}
                        </h2>
                        <p className="text-[9px] uppercase tracking-[0.4em] text-brand-gold font-black italic mt-2">Inventory Registry Unit</p>
                    </div>
                    <button onClick={onCancel} className="p-3 hover:bg-red-50 dark:hover:bg-red-500/10 text-slate-400 hover:text-red-500 rounded-2xl transition-all">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-8 overflow-y-auto max-h-[70vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Input
                            label="Listing Title"
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            required
                            placeholder="e.g. Mercedes Benz S-Class 2024"
                        />
                        <Input
                            label="Make / Brand"
                            value={formData.make}
                            onChange={e => setFormData({ ...formData, make: e.target.value })}
                            required
                            placeholder="BMW, Audi, Porsche..."
                        />
                        <Input
                            label="Model"
                            value={formData.model}
                            onChange={e => setFormData({ ...formData, model: e.target.value })}
                            required
                            placeholder="S-Class, 911, M4..."
                        />
                        <Input
                            label="Year"
                            type="number"
                            value={formData.year}
                            onChange={e => setFormData({ ...formData, year: parseInt(e.target.value) })}
                            required
                        />
                        <Input
                            label="Valuation (PKR)"
                            type="number"
                            value={formData.price}
                            onChange={e => setFormData({ ...formData, price: parseInt(e.target.value) })}
                            required
                        />
                        <Input
                            label="Color"
                            value={formData.color}
                            onChange={e => setFormData({ ...formData, color: e.target.value })}
                            required
                            placeholder="Black, White, Silver..."
                        />
                        <Input
                            label="Engine CC"
                            type="number"
                            value={formData.engine_cc}
                            onChange={e => setFormData({ ...formData, engine_cc: parseInt(e.target.value) })}
                            required
                            placeholder="1800, 3000..."
                        />
                        <Input
                            label="Owners"
                            type="number"
                            value={formData.num_owners}
                            onChange={e => setFormData({ ...formData, num_owners: parseInt(e.target.value) })}
                            required
                            placeholder="1, 2..."
                        />
                        <Input
                            label="Mileage"
                            type="number"
                            value={formData.mileage}
                            onChange={e => setFormData({ ...formData, mileage: parseInt(e.target.value) })}
                            required
                        />
                        <Input
                            label="Fuel Type"
                            value={formData.fuel_type}
                            onChange={e => setFormData({ ...formData, fuel_type: e.target.value })}
                            required
                            placeholder="Petrol, Hybrid..."
                        />
                        <Input
                            label="Transmission"
                            value={formData.transmission}
                            onChange={e => setFormData({ ...formData, transmission: e.target.value })}
                            required
                            placeholder="Automatic, Manual..."
                        />
                        <Input
                            label="Condition"
                            value={formData.condition}
                            onChange={e => setFormData({ ...formData, condition: e.target.value })}
                            required
                            placeholder="New, Used..."
                        />
                        <Input
                            label="City"
                            value={formData.city}
                            onChange={e => setFormData({ ...formData, city: e.target.value })}
                            required
                            placeholder="Karachi, Lahore, Islamabad..."
                        />
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500">Asset Gallery</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {formData.images?.map((img, i) => (
                                <div key={i} className="group relative aspect-video bg-slate-100 dark:bg-white/5 rounded-xl overflow-hidden border border-slate-100 dark:border-white/10 shadow-sm">
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, images: formData.images?.filter((_, idx) => idx !== i) })}
                                        className="absolute inset-0 bg-red-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleImageAdd}
                                className="aspect-video border-2 border-dashed border-slate-100 dark:border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-300 hover:text-brand-gold hover:border-brand-gold transition-all bg-slate-50/30 dark:bg-white/5"
                            >
                                <Upload size={18} />
                                <span className="text-[8px] font-black uppercase tracking-widest">Add Image</span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500">Asset Description</label>
                        <textarea
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            required
                            rows={4}
                            className="w-full bg-slate-50/50 dark:bg-brand-dark/50 border border-slate-100 dark:border-white/10 rounded-[1.5rem] p-4 text-[10px] text-slate-700 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all font-bold"
                        />
                    </div>
                </form>

                <div className="p-8 border-t border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 flex items-center justify-end gap-4">
                    <Button variant="outline" onClick={onCancel} className="px-8 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">Cancel</Button>
                    <Button icon={Save} onClick={handleSubmit} className="px-10 h-14 rounded-2xl shadow-xl shadow-brand-gold/20">Commit Changes</Button>
                </div>
            </div>
        </div>
    )
}
