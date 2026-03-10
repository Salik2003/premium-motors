import { useQuery } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'
import { Car, Users, MessageSquare, TrendingUp, ShieldCheck, Activity } from 'lucide-react'

export const Dashboard = () => {
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const [cars, investors, messages] = await Promise.all([
                supabase.from('cars').select('id', { count: 'exact' }),
                supabase.from('investor_leads').select('id', { count: 'exact' }),
                supabase.from('contact_messages').select('id', { count: 'exact' }),
            ])
            return {
                cars: cars.count || 0,
                investors: investors.count || 0,
                messages: messages.count || 0,
            }
        }
    })

    const cards = [
        { label: 'Active Inventory', value: stats?.cars || 0, icon: Car, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10' },
        { label: 'Investment Leads', value: stats?.investors || 0, icon: Users, color: 'text-brand-gold', bg: 'bg-brand-gold/10' },
        { label: 'Global Inquiries', value: stats?.messages || 0, icon: MessageSquare, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-500/10' },
    ]

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card) => (
                    <div key={card.label} className="bg-white dark:bg-brand-dark p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center justify-between group hover:-translate-y-1 transition-all duration-500">
                        <div className="space-y-3">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 font-black">{card.label}</p>
                            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white font-black tracking-tight">{card.value}</h3>
                        </div>
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl ${card.bg} ${card.color} flex items-center justify-center shadow-inner transition-transform group-hover:rotate-12`}>
                            <card.icon size={26} strokeWidth={1.5} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Performance & Security Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-white dark:bg-brand-dark p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none space-y-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-50 dark:bg-green-500/10 rounded-xl text-green-600 dark:text-green-400">
                                <Activity size={20} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white italic">Sector Performance</h3>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-[10px] font-black uppercase tracking-widest italic animate-pulse">
                            <TrendingUp size={14} /> +12.5% Yield
                        </div>
                    </div>
                    <div className="h-64 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5 flex items-center justify-center text-slate-300 dark:text-slate-600 uppercase tracking-[0.5em] text-[10px] font-black italic">
                        Real-time Data Visualizer Loading...
                    </div>
                </div>

                <div className="bg-slate-900 dark:bg-[#0c1425] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl space-y-8 border border-white/5">
                    <div className="flex items-center gap-4 text-brand-gold">
                        <ShieldCheck size={24} />
                        <h3 className="text-xl font-serif font-bold italic">System Security</h3>
                    </div>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-6 border-b border-white/5 pb-6 last:border-0">
                                <div className="relative">
                                    <div className="w-2 h-2 rounded-full bg-brand-gold animate-ping absolute inset-0" />
                                    <div className="w-2 h-2 rounded-full bg-brand-gold relative" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Node Connection Stable</p>
                                    <p className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Primary DB Cluster - APAC-South-0{i}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
