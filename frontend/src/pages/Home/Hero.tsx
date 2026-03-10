import { ChevronDown } from 'lucide-react'
import heroVideo from '../../assets/hero-sec-video.mp4'

export const Hero = () => {
    return (
        <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-dark px-6 pt-24">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/70" />
            </div>

            <div className="relative z-10 max-w-5xl text-center space-y-6 md:space-y-8 lg:space-y-10">
                <div className="space-y-4 md:space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 md:py-2 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
                        <h2 className="text-white text-[7px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-black italic">The Gold Standard of Pakistan</h2>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.2] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 drop-shadow-2xl">
                        Acquire Your <br />
                        <span className="text-brand-gold italic">Automotive</span> Masterpiece
                    </h1>
                </div>

                <p className="text-slate-200 text-[8px] md:text-[10px] max-w-xl mx-auto leading-relaxed font-black uppercase tracking-[0.3em] md:tracking-[0.4em] animate-in fade-in slide-in-from-bottom-10 duration-1000 drop-shadow-lg opacity-80">
                    A Curated Selection of the Nation's Most Exclusive <br className="hidden md:block" />
                    Vehicles. Discovery Simplified. Connection Direct.
                </p>

            </div>

            {/* Side Accents */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 text-white/20 text-[10px] uppercase tracking-[0.5em] font-black rotate-180 [writing-mode:vertical-lr]">
                <span>Automotive Excellence</span>
                <div className="w-[1px] h-24 bg-white/10 mx-auto" />
                <span>Since 2024</span>
            </div>
        </section>
    )
}
