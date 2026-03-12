import { lazy, Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { AuthProvider } from './hooks/useAuth'
import { ThemeProvider } from './context/ThemeContext'
import { ScrollToTop } from './components/utils/ScrollToTop'

// Public pages — lazy loaded for code splitting
const Home = lazy(() => import('./pages/Home/index').then(m => ({ default: m.Home })))
const CarDetail = lazy(() => import('./pages/CarDetail/index').then(m => ({ default: m.CarDetail })))
const Invest = lazy(() => import('./pages/Invest/index').then(m => ({ default: m.Invest })))
const InvestDetail = lazy(() => import('./pages/Invest/InvestDetail').then(m => ({ default: m.InvestDetail })))
const Contact = lazy(() => import('./pages/Contact/index').then(m => ({ default: m.Contact })))
const Travel = lazy(() => import('./pages/Travel/index').then(m => ({ default: m.Travel })))
const Chauffeur = lazy(() => import('./pages/Chauffeur/index').then(m => ({ default: m.Chauffeur })))

// Admin panel — separate chunk, only loads for admin users
const AdminLayout = lazy(() => import('./components/admin/AdminLayout').then(m => ({ default: m.AdminLayout })))
const Dashboard = lazy(() => import('./pages/admin/Dashboard').then(m => ({ default: m.Dashboard })))
const Login = lazy(() => import('./pages/admin/Login').then(m => ({ default: m.Login })))
const Inventory = lazy(() => import('./pages/admin/Inventory').then(m => ({ default: m.Inventory })))
const InvestorLeads = lazy(() => import('./pages/admin/InvestorLeads').then(m => ({ default: m.InvestorLeads })))
const ContactMessages = lazy(() => import('./pages/admin/ContactMessages').then(m => ({ default: m.ContactMessages })))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Suspense fallback={null}>
              <Routes>
                {/* Public Routes */}
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Navigate to="/home" replace />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/cars/:slug" element={<CarDetail />} />
                  <Route path="/invest" element={<Invest />} />
                  <Route path="/invest/:id" element={<InvestDetail />} />
                  <Route path="/travel" element={<Travel />} />
                  <Route path="/chauffeur" element={<Chauffeur />} />
                  <Route path="/contact" element={<Contact />} />
                </Route>

                {/* Protected Admin Routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="cars" element={<Inventory />} />
                  <Route path="investors" element={<InvestorLeads />} />
                  <Route path="messages" element={<ContactMessages />} />
                </Route>

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </Suspense>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
