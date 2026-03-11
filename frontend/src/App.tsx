import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { CarDetail } from './pages/CarDetail/index'
import { Invest } from './pages/Invest/index'
import { InvestDetail } from './pages/Invest/InvestDetail'
import { Contact } from './pages/Contact/index'
import { Travel } from './pages/Travel/index'
import { Chauffeur } from './pages/Chauffeur/index'
import { AdminLayout } from './components/admin/AdminLayout'
import { Dashboard } from './pages/admin/Dashboard'
import { MainLayout } from './components/layout/MainLayout'
import { AuthProvider } from './hooks/useAuth'
import { Login } from './pages/admin/Login'
import { Inventory } from './pages/admin/Inventory'
import { InvestorLeads } from './pages/admin/InvestorLeads'
import { ContactMessages } from './pages/admin/ContactMessages'
import { ThemeProvider } from './context/ThemeContext'
import { ScrollToTop } from './components/utils/ScrollToTop'

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
            <Routes>
              {/* Public Routes */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cars/:id" element={<CarDetail />} />
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
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
