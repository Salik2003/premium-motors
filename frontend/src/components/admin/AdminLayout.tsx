import { useEffect, useState } from 'react'
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useTheme } from '../../context/ThemeContext'
import {
    LayoutDashboard,
    Car,
    Users,
    MessageSquare,
    LogOut,
    ChevronRight,
    Sun,
    Moon,
    PanelLeftClose,
    PanelLeft
} from 'lucide-react'

export const AdminLayout = () => {
    const { user, loading, signOut } = useAuth()
    const { theme, toggleTheme } = useTheme()
    const navigate = useNavigate()
    const location = useLocation()
    const [isCollapsed, setIsCollapsed] = useState(false)

    useEffect(() => {
        if (!loading && !user) {
            navigate('/admin/login')
        }
    }, [user, loading, navigate])

    if (loading) return (
        <div className="min-h-screen bg-slate-50 dark:bg-brand-dark flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin" />
            <p className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold">Authenticating Session...</p>
        </div>
    )

    if (!user) return null

    const isActive = (path: string) => location.pathname === path

    const menuItems = [
        { label: 'Overview', path: '/admin', icon: LayoutDashboard },
        { label: 'Inventory', path: '/admin/cars', icon: Car },
        { label: 'Invest Leads', path: '/admin/investors', icon: Users },
        { label: 'Messages', path: '/admin/messages', icon: MessageSquare },
    ]

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] flex transition-colors duration-500">
            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 bottom-0 bg-white dark:bg-brand-dark border-r border-slate-100 dark:border-white/5 flex flex-col shadow-2xl shadow-slate-200/50 dark:shadow-none z-[100] transition-all duration-500 ease-in-out ${isCollapsed ? 'w-24' : 'w-72'
                    }`}
            >
                {/* Logo Section */}
                <div className={`p-8 mb-4 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-brand-gold rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-gold/20 shrink-0">
                            <Car size={18} strokeWidth={2.5} />
                        </div>
                        {!isCollapsed && (
                            <div className="animate-in fade-in slide-in-from-left-2 duration-500">
                                <span className="block text-xs font-serif font-black tracking-widest text-slate-900 dark:text-white leading-none">PREMIUM</span>
                                <span className="block text-[8px] font-bold tracking-[0.3em] text-brand-gold uppercase italic mt-1 leading-none">Management</span>
                            </div>
                        )}
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-grow px-4 space-y-1.5 overflow-y-hidden">
                    <p className={`px-4 text-[8px] uppercase tracking-[0.4em] text-slate-300 dark:text-slate-500 font-black mb-6 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                        Main Dashboard
                    </p>
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-4 px-4 py-4 rounded-xl text-[10px] uppercase tracking-widest font-black transition-all duration-300 group ${isActive(item.path)
                                ? 'bg-brand-gold text-white shadow-xl shadow-brand-gold/20'
                                : 'text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5'
                                }`}
                        >
                            <item.icon size={18} strokeWidth={isActive(item.path) ? 2.5 : 2} className={isActive(item.path) ? 'text-white' : 'text-slate-300 dark:text-slate-600 group-hover:text-brand-gold'} />
                            {!isCollapsed && (
                                <span className="flex-grow animate-in fade-in slide-in-from-left-1 duration-300">{item.label}</span>
                            )}
                            {isActive(item.path) && !isCollapsed && <ChevronRight size={14} className="text-white/50" />}
                        </Link>
                    ))}
                </nav>

                {/* Footer Actions */}
                <div className="p-4 mt-auto border-t border-slate-50 dark:border-white/5 space-y-2">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-4 px-4 py-4 rounded-xl text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 hover:text-brand-gold dark:hover:text-brand-gold hover:bg-slate-50 dark:hover:bg-white/5 transition-all w-full group"
                    >
                        {theme === 'light' ? (
                            <Moon size={18} strokeWidth={2} className="group-hover:rotate-12 transition-transform" />
                        ) : (
                            <Sun size={18} strokeWidth={2} className="group-hover:rotate-90 transition-transform" />
                        )}
                        {!isCollapsed && <span>{theme === 'light' ? 'Night Shift' : 'Late Shift'}</span>}
                    </button>
                    <button
                        onClick={() => signOut()}
                        className="flex items-center gap-4 px-4 py-4 rounded-xl text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all w-full group"
                    >
                        <LogOut size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                        {!isCollapsed && <span>Term Session</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main
                className={`flex-grow min-h-screen transition-all duration-500 ease-in-out ${isCollapsed ? 'pl-24' : 'pl-72'
                    }`}
            >
                {/* Header */}
                <header className="h-20 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-xl border-b border-slate-100 dark:border-white/5 flex items-center justify-between px-8 md:px-12 sticky top-0 z-[90]">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="p-2.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl text-slate-400 dark:text-slate-500 hover:text-brand-gold transition-all"
                        >
                            {isCollapsed ? <PanelLeft size={20} /> : <PanelLeftClose size={20} />}
                        </button>
                        <div className="space-y-0.5 hidden md:block">
                            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-300 dark:text-slate-500 font-black">Current Sector</p>
                            <h2 className="text-base font-serif font-black text-slate-900 dark:text-white uppercase tracking-widest">
                                {menuItems.find(i => isActive(i.path))?.label || 'Dashboard'}
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-[9px] font-black text-slate-900 dark:text-white uppercase tracking-widest leading-none mb-1">{user.email?.split('@')[0]}</p>
                            <span className="text-[7px] font-black text-brand-gold uppercase tracking-[0.3em] italic">Master Admin</span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center font-serif font-black text-brand-gold text-base shadow-sm group hover:scale-105 transition-transform duration-300 cursor-pointer">
                            {user.email?.[0].toUpperCase()}
                        </div>
                    </div>
                </header>

                {/* Viewport Content */}
                <div className="p-8 md:p-12 max-w-[1600px] mx-auto animate-in fade-in duration-1000">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
