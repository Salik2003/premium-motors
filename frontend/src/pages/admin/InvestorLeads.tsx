import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'
import { CheckCircle, Clock, XCircle, Phone, MapPin, DollarSign, Calendar, AlertCircle, Trash2 } from 'lucide-react'
import type { InvestorLead } from '../../types'

export const InvestorLeads = () => {
    const queryClient = useQueryClient()

    const { data: leads, isLoading, error } = useQuery({
        queryKey: ['admin-leads'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('investor_leads')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data as InvestorLead[];
        }
    });

    const updateStatusMutation = useMutation({
        mutationFn: async ({ id, status }: { id: string, status: string }) => {
            const { error } = await supabase.from('investor_leads').update({ status }).eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-leads'] });
        },
        onError: (err: any) => {
            alert(`Failed to update status: ${err.message}`);
        }
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from('investor_leads').delete().eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-leads'] });
        },
        onError: (err: any) => {
            alert(`Failed to delete lead: ${err.message}`);
        }
    });

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this investor lead?')) {
            deleteMutation.mutate(id);
        }
    };

    const statusConfig: Record<string, any> = {
        new: { icon: Clock, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-100 dark:border-blue-500/20' },
        contacted: { icon: CheckCircle, color: 'text-brand-gold', bg: 'bg-brand-gold/10', border: 'border-brand-gold/20' },
        converted: { icon: CheckCircle, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-500/10', border: 'border-green-100 dark:border-green-500/20' },
        rejected: { icon: XCircle, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-500/10', border: 'border-red-100 dark:border-red-500/20' },
    };

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-3">
                <p className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-black italic mt-1">Investment Sector</p>
                <h1 className="text-4xl font-serif text-slate-900 dark:text-white font-black italic">Acquisition Leads</h1>
            </div>

            <div className="bg-white dark:bg-brand-dark rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50/50 dark:bg-white/[0.02] text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 dark:text-slate-500 border-b border-slate-50 dark:border-white/5">
                            <tr>
                                <th className="px-10 py-8">Investor Identity</th>
                                <th className="px-10 py-8">Capital Commitment</th>
                                <th className="px-10 py-8">Status</th>
                                <th className="px-10 py-8 text-right">Operations</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-32 text-center">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-10 h-10 border-4 border-slate-100 dark:border-white/5 border-t-brand-gold rounded-full animate-spin" />
                                            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-300 dark:text-slate-600 font-bold">Scanning Ledger...</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-32 text-center text-red-500">
                                        <div className="flex flex-col items-center gap-4">
                                            <AlertCircle size={32} />
                                            <p className="text-[10px] uppercase tracking-widest font-black">Ledger Access Denied: Sync Failure</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : leads?.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-32 text-center text-[10px] uppercase tracking-widest text-slate-300 dark:text-slate-600 font-black">
                                        No investor interactions recorded.
                                    </td>
                                </tr>
                            ) : leads?.map((lead) => (
                                <tr key={lead.id} className="group hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all duration-300">
                                    <td className="px-10 py-8">
                                        <div className="space-y-2">
                                            <div className="text-xs font-serif font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none">{lead.full_name}</div>
                                            <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-600 font-black">
                                                <span className="flex items-center gap-1.5"><Phone size={10} className="text-brand-gold" /> {lead.phone}</span>
                                                <span className="flex items-center gap-1.5"><MapPin size={10} className="text-brand-gold" /> {lead.city}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-2 text-xs font-serif font-black text-slate-800 dark:text-brand-silver uppercase tracking-widest">
                                            <DollarSign size={14} className="text-brand-gold" strokeWidth={3} />
                                            PKR {(lead.investment_amount / 1000000).toFixed(1)}M
                                        </div>
                                        <div className="text-[9px] uppercase tracking-widest text-brand-gold font-bold italic mt-1">{lead.plan_selected} Allocation</div>
                                    </td>
                                    <td className="px-10 py-8">
                                        {statusConfig[lead.status] && (
                                            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-sm ${statusConfig[lead.status].bg} ${statusConfig[lead.status].border}`}>
                                                {(() => {
                                                    const Icon = statusConfig[lead.status].icon;
                                                    return <Icon size={12} className={statusConfig[lead.status].color} />;
                                                })()}
                                                <span className={`text-[9px] font-black uppercase tracking-widest ${statusConfig[lead.status].color}`}>
                                                    {lead.status}
                                                </span>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex items-center justify-end gap-4">
                                            <select
                                                className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl px-4 py-2 text-[9px] uppercase tracking-[0.2em] font-black text-slate-600 dark:text-slate-400 focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/5 transition-all shadow-sm"
                                                value={lead.status}
                                                onChange={(e) => updateStatusMutation.mutate({ id: lead.id, status: e.target.value })}
                                            >
                                                <option value="new">New</option>
                                                <option value="contacted">Contacted</option>
                                                <option value="converted">Converted</option>
                                                <option value="rejected">Rejected</option>
                                            </select>
                                            <button
                                                onClick={() => handleDelete(lead.id)}
                                                className="p-3 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
                                                title="Delete Lead"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
