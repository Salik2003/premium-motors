import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'
import { Mail, Phone, Calendar, Eye, EyeOff, Trash2, User, AlertCircle, Filter } from 'lucide-react'
import type { ContactMessage } from '../../types'

export const ContactMessages = () => {
    const queryClient = useQueryClient()
    const [showRead, setShowRead] = useState(true)

    const { data: messages, isLoading, error } = useQuery({
        queryKey: ['admin-messages'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('contact_messages')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data as ContactMessage[];
        }
    });

    const markReadMutation = useMutation({
        mutationFn: async ({ id, is_read }: { id: string, is_read: boolean }) => {
            const { error } = await supabase.from('contact_messages').update({ is_read }).eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-messages'] });
        },
        onError: (err: any) => {
            alert(`Failed to update status: ${err.message}`);
        }
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from('contact_messages').delete().eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-messages'] });
        },
        onError: (err: any) => {
            alert(`Failed to delete message: ${err.message}`);
        }
    });

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this inquiry?')) {
            deleteMutation.mutate(id);
        }
    };

    const filteredMessages = messages?.filter(msg => showRead ? true : !msg.is_read) || [];

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-3">
                <p className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-black italic mt-1">Communication Network</p>
                <h1 className="text-4xl font-serif text-slate-900 dark:text-white font-black italic">Client Inquiries</h1>
            </div>

            <div className="flex justify-between items-center bg-white dark:bg-brand-dark p-6 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-brand-gold">
                        <Filter size={18} />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Display Filter</p>
                </div>
                <button
                    onClick={() => setShowRead(!showRead)}
                    className="flex items-center gap-3 px-6 py-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/10 hover:border-brand-gold transition-all group"
                >
                    <div className={`w-8 h-4 rounded-full relative transition-colors duration-500 ${showRead ? 'bg-brand-gold' : 'bg-slate-200 dark:bg-slate-800'}`}>
                        <div className={`absolute top-1 w-2 h-2 bg-white rounded-full transition-all duration-500 ${showRead ? 'left-5' : 'left-1'}`} />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-black text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">
                        {showRead ? 'Showing All' : 'Hiding Read'}
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {isLoading ? (
                    <div className="p-32 rounded-[3rem] text-center border-2 border-dashed border-slate-100 dark:border-white/5 flex flex-col items-center gap-6">
                        <div className="w-12 h-12 border-4 border-slate-100 dark:border-white/5 border-t-brand-gold rounded-full animate-spin" />
                        <p className="text-[10px] uppercase tracking-[0.4em] text-slate-300 dark:text-slate-600 font-black italic">Decrypting Transmission...</p>
                    </div>
                ) : error ? (
                    <div className="p-32 rounded-[3rem] text-center border-2 border-dashed border-red-100 dark:border-red-500/10 flex flex-col items-center gap-6 text-red-500">
                        <AlertCircle size={32} />
                        <p className="text-[10px] uppercase tracking-widest font-black">Transmission Interrupted: Check Gateway</p>
                    </div>
                ) : filteredMessages.length === 0 ? (
                    <div className="p-32 rounded-[3rem] text-center border-2 border-dashed border-slate-100 dark:border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-slate-300 dark:text-slate-600 font-black italic">No active frequency detected.</p>
                    </div>
                ) : (
                    filteredMessages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`group p-8 md:p-10 rounded-[2.5rem] border transition-all duration-700 relative overflow-hidden ${msg.is_read
                                ? 'bg-white/50 dark:bg-brand-dark/50 border-slate-50 dark:border-white/5 opacity-60 hover:opacity-100 shadow-lg shadow-slate-100 dark:shadow-none'
                                : 'bg-white dark:bg-brand-dark border-brand-gold/30 dark:border-brand-gold/20 shadow-2xl shadow-brand-gold/10 dark:shadow-none ring-1 ring-brand-gold/5'
                                }`}
                        >
                            {!msg.is_read && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[4rem] rounded-full -mr-16 -mt-16" />
                            )}

                            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 justify-between relative z-10">
                                <div className="space-y-8 flex-grow">
                                    <div className="flex flex-wrap items-center gap-8 md:gap-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-brand-gold shadow-inner">
                                                <User size={20} strokeWidth={2.5} />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-sm font-serif font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none">{msg.name}</div>
                                                <div className="text-[9px] uppercase tracking-widest text-brand-gold font-bold italic">Authenticated Inquirer</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6 md:gap-8 text-[9px] uppercase tracking-[0.1em] text-slate-400 dark:text-slate-500 font-black">
                                            <span className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"><Phone size={12} className="text-slate-200 dark:text-slate-800" /> {msg.phone}</span>
                                            <span className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"><Mail size={12} className="text-slate-200 dark:text-slate-800" /> {msg.email}</span>
                                            <span className="flex items-center gap-2"><Calendar size={12} className="text-slate-200 dark:text-slate-800" /> {new Date(msg.created_at).toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8 bg-slate-50/50 dark:bg-white/[0.02] rounded-3xl border border-slate-50 dark:border-white/5 italic">
                                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium uppercase tracking-widest">
                                            "{msg.message}"
                                        </p>
                                    </div>
                                </div>

                                <div className="flex lg:flex-col items-center justify-center gap-4 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-white/5 pt-6 lg:pt-0 lg:pl-12">
                                    <button
                                        onClick={() => markReadMutation.mutate({ id: msg.id, is_read: !msg.is_read })}
                                        className={`w-14 h-14 rounded-2xl border transition-all duration-500 flex items-center justify-center shadow-sm ${msg.is_read
                                            ? 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10 text-slate-300 dark:text-slate-600 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 hover:shadow-xl'
                                            : 'bg-brand-gold border-brand-gold text-white hover:bg-brand-dark hover:border-brand-dark hover:shadow-xl shadow-brand-gold/20'
                                            }`}
                                    >
                                        {msg.is_read ? <EyeOff size={20} strokeWidth={2.5} /> : <Eye size={20} strokeWidth={2.5} />}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(msg.id)}
                                        className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-300 dark:text-slate-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-100 dark:hover:border-red-500/20 hover:shadow-xl transition-all duration-500 flex items-center justify-center shadow-sm"
                                    >
                                        <Trash2 size={20} strokeWidth={2.5} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
