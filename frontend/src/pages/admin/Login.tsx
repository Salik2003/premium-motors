import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { LogIn, ShieldCheck, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import pmLogo from '../../assets/pm-logo.svg'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            navigate('/admin')
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200/20 blur-[120px] rounded-full -ml-64 -mb-64" />

            <div className="w-full max-w-lg space-y-6 md:space-y-10 relative z-10">
                <div className="text-center space-y-3 md:space-y-4">
                    <div className="inline-flex p-3 md:p-4 bg-white rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100 mb-1 group hover:scale-105 transition-transform duration-500">
                        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-1.5 rounded-2xl">
                            <img src={pmLogo} alt="Vamo Drive Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900 tracking-tight mb-1">Management Portal</h1>
                        <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-brand-gold font-black italic">Boutique Automotive Registry</p>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 md:p-12 space-y-6 md:space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold" />

                    <div className="space-y-2 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[8px] font-black text-slate-400 uppercase tracking-widest">
                            <ShieldCheck size={10} className="text-brand-gold" /> Authorized Personnel Only
                        </div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6 md:space-y-8">
                        <div className="space-y-4 md:space-y-6">
                            <Input
                                label="Security Email"
                                placeholder="ADMIN@VAMODRIVE.COM"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-14 md:h-16 rounded-2xl border-slate-100 focus:border-brand-gold focus:ring-brand-gold/5 bg-slate-50/50"
                            />
                            <Input
                                label="Access Key"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="h-14 md:h-16 rounded-2xl border-slate-100 focus:border-brand-gold focus:ring-brand-gold/5 bg-slate-50/50"
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center gap-2">
                                <Lock size={12} className="text-red-500" />
                                <p className="text-red-500 text-[8px] uppercase font-black tracking-widest">{error}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            isLoading={loading}
                            className="w-full h-14 md:h-16 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] shadow-xl shadow-brand-gold/20 active:scale-95 transition-all"
                            icon={LogIn}
                        >
                            Establish Authentication
                        </Button>
                    </form>

                    <div className="text-center">
                        <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-slate-300 font-black italic">
                            System Security Level: High • E2E Encrypted
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-brand-gold transition-colors"
                    >
                        Return to Public Marketplace
                    </button>
                </div>
            </div>
        </div>
    )
}
