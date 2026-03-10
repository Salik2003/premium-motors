import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const MainLayout = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
