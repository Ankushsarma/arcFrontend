
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { ProtectedRoute } from './components/ProtectedRoute.tsx';
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ZarvexPage from './pages/ZarvexPage.tsx';
import PranaPage from './pages/PranaPage.tsx';
import MorphPage from './pages/MorphPage.tsx';
import ContactPage from './pages/ContactPage.tsx';

/* Scroll to top on route change */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="relative min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
        {/* Cinematic Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 grid-pattern opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-600/10 rounded-full blur-[128px]"></div>
        </div>

        <Navbar />
        <ScrollToTop />

        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <div key={location.pathname}>
              <Routes location={location}>
                {/* Public routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Protected routes */}
                <Route path="/ecosystems/zarvex" element={
                  <ProtectedRoute><ZarvexPage /></ProtectedRoute>
                } />
                <Route path="/ecosystems/prana" element={
                  <ProtectedRoute><PranaPage /></ProtectedRoute>
                } />
                <Route path="/ecosystems/morph" element={
                  <ProtectedRoute><MorphPage /></ProtectedRoute>
                } />
              </Routes>
            </div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
