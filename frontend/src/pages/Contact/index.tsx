import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { supabase } from '../../lib/supabase'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            const { error: submitError } = await supabase
                .from('contact_messages')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                        is_read: false
                    }
                ])

            if (submitError) throw submitError

            setIsSuccess(true)
            setFormData({ name: '', email: '', phone: '', message: '' })
        } catch (err: any) {
            console.error('Submission error:', err)
            setError(err.message || 'Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="pt-24 min-h-screen bg-white flex items-center justify-center px-8">
                <div className="max-w-md w-full text-center space-y-8 animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 shadow-xl shadow-green-100">
                        <CheckCircle2 size={48} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl font-serif text-slate-900">Message Received</h2>
                        <p className="text-slate-500 font-medium uppercase tracking-widest text-[10px] leading-loose">
                            Our concierge team has been notified. <br />
                            Expect a response within 2 hours.
                        </p>
                    </div>
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full"
                        onClick={() => setIsSuccess(false)}
                    >
                        Send Another Inquiry
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-24 min-h-screen bg-white">
            <section className="max-w-7xl mx-auto px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Info */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold italic">Contact Concierge</h2>
                            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight">Let's Discuss Your <br /> Next <span className="text-brand-gold italic">Acquisition</span>.</h1>
                            <p className="text-slate-400 text-sm uppercase tracking-widest font-bold max-w-md opacity-80 leading-relaxed">
                                Our dedicated automotive consultants are available <br />
                                to assist you with every detail of your inquiry.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 w-fit rounded-2xl flex items-center justify-center text-brand-gold shadow-sm">
                                    <Phone size={24} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Direct Line</p>
                                    <p className="text-xl font-serif text-slate-900">+92 313 2723938</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 w-fit rounded-2xl flex items-center justify-center text-brand-gold shadow-sm">
                                    <MessageCircle size={24} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">WhatsApp Concierge</p>
                                    <p className="text-xl font-serif text-slate-900">Available 24/7</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 w-fit rounded-2xl flex items-center justify-center text-brand-gold shadow-sm">
                                    <Mail size={24} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email Desk</p>
                                    <p className="text-xl font-serif text-slate-900">sales@premium.pk</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 w-fit rounded-2xl flex items-center justify-center text-brand-gold shadow-sm">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Showroom</p>
                                    <p className="text-sm font-serif text-slate-900 leading-tight">Gulberg III, Main Boulevard, Lahore, Pakistan</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white space-y-8">
                            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold italic">Operating Hours</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Mon - Fri</span>
                                    <span className="text-[9px] uppercase tracking-widest font-bold">09:00 - 20:00</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Saturday</span>
                                    <span className="text-[9px] uppercase tracking-widest font-bold">10:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Sunday</span>
                                    <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold">Appointment Only</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-12 lg:p-16 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 space-y-12">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-serif text-slate-900">Send an Inquiry</h3>
                            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Expected response time: Under 2 hours</p>
                        </div>
                        <form className="space-y-10" onSubmit={handleSubmit}>
                            <Input
                                label="Your Full Name"
                                placeholder="EX: TAHIM KHAN"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <Input
                                    label="Email Address"
                                    placeholder="KHAN@CLIENT.COM"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                                <Input
                                    label="Phone Number"
                                    placeholder="+92 3XX XXXXXXX"
                                    required
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-black">Message</label>
                                <textarea
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-xs text-slate-700 font-bold focus:outline-none focus:border-brand-gold appearance-none uppercase tracking-widest placeholder:text-slate-300"
                                    placeholder="TELL US ABOUT THE VEHICLE OR PLAN YOU ARE INTERESTED IN"
                                />
                            </div>

                            {error && (
                                <p className="text-red-500 text-[10px] uppercase tracking-widest font-black text-center">{error}</p>
                            )}

                            <Button
                                size="lg"
                                type="submit"
                                className="w-full h-16 text-[10px] uppercase tracking-[0.3em]"
                                icon={Send}
                                isLoading={isSubmitting}
                            >
                                Dispatch Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="h-[500px] w-full border-t border-slate-100 overflow-hidden relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108914.88126765792!2d74.19548679726563!3d31.520369599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901a432b1356b%3A0x66849ca477444850!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="grayscale contrast-125 opacity-70"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </div>
    )
}
