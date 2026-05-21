import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";
import HomePage from "./pages/HomePage.tsx";
import ZarvexPage from "./pages/ZarvexPage.tsx";
import PranaPage from "./pages/PranaPage.tsx";
import MorphPage from "./pages/MorphPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import EngineeringPage from "./pages/EngineeringPage.tsx";
import ComingSoonPage from "./pages/ComingSoonPage.tsx";
import ProjectDetailsRequestPage from "./pages/ProjectDetailsRequestPage.tsx";
import PolicyPage from "./pages/PolicyPage.tsx";

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
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/engineering" element={<EngineeringPage />} />
              <Route path="/ecosystems/zarvex" element={<ZarvexPage />} />
              <Route path="/ecosystems/prana" element={<PranaPage />} />
              <Route path="/ecosystems/morph" element={<MorphPage />} />
              <Route
                path="/product/:id/full-details"
                element={<ProjectDetailsRequestPage />}
              />
              <Route path="/product/:id" element={<ProjectPage />} />
              <Route
                path="/project/:id/full-details"
                element={<ProjectDetailsRequestPage />}
              />
              <Route path="/project/:id" element={<ProjectPage />} />
              <Route path="/security" element={<PolicyPage />} />
              <Route path="/privacy" element={<PolicyPage />} />
              <Route path="/terms" element={<PolicyPage />} />
              <Route path="/coming-soon/:topic" element={<ComingSoonPage />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />
            </Routes>
          </div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
