
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, ChevronRight, ChevronDown, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.tsx';

const ecosystemItems = [
  { name: 'ZARVEX', path: '/project/zarvex', subtitle: 'Aerial Intelligence', color: 'text-emerald-400' },
  { name: 'AEGIS', path: '/project/aegis', subtitle: 'Identity System', color: 'text-blue-400' },
  { name: 'UNIMOUNT', path: '/project/unimount', subtitle: 'Universal Sensing', color: 'text-amber-400' },
  { name: 'ARISE', path: '/project/arise', subtitle: 'Land Maneuvering', color: 'text-cyan-400' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.97,
    filter: 'blur(4px)',
    transition: { duration: 0.2, ease: [0.55, 0.06, 0.68, 0.19] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

/* ─── Auth-aware desktop CTA section ─── */
const DesktopAuthSection: React.FC = () => {
  const { currentUser, logout } = useAuth();

  if (currentUser) {
    return (
      <div className="hidden md:flex items-center gap-3">
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full glass border-white/10">
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt=""
              className="w-7 h-7 rounded-full border border-cyan-500/30"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[10px] font-bold text-cyan-400">
              {currentUser.displayName?.[0] || currentUser.email?.[0] || '?'}
            </div>
          )}
          <span className="text-xs font-medium text-slate-300 max-w-[100px] truncate">
            {currentUser.displayName || currentUser.email}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={logout}
          className="p-2 rounded-lg glass border-white/10 text-slate-400 hover:text-red-400 hover:border-red-400/30 transition-all"
          title="Sign Out"
        >
          <LogOut size={16} />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-4">
      <Link to="/login" className="px-5 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
        LOG IN
      </Link>
      <button className="px-6 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:bg-cyan-400 transition-all flex items-center gap-2 energy-pulse">
        BUILD NOW <ChevronRight size={16} />
      </button>
    </div>
  );
};

/* ─── Auth-aware mobile CTA section ─── */
const MobileAuthSection: React.FC = () => {
  const { currentUser, logout } = useAuth();

  if (currentUser) {
    return (
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass border-white/10">
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt=""
              className="w-8 h-8 rounded-full border border-cyan-500/30"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-xs font-bold text-cyan-400">
              {currentUser.displayName?.[0] || currentUser.email?.[0] || '?'}
            </div>
          )}
          <span className="text-sm font-medium text-slate-300 truncate">
            {currentUser.displayName || currentUser.email}
          </span>
        </div>
        <button
          onClick={logout}
          className="w-full py-3 glass border-white/10 text-red-400 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-red-500/10 transition-all"
        >
          <LogOut size={16} /> SIGN OUT
        </button>
      </div>
    );
  }

  return (
    <Link to="/login" className="w-full py-4 bg-white text-black font-bold rounded-xl mt-2 block text-center">
      LOG IN
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileEcoOpen, setIsMobileEcoOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setIsDropdownOpen(false), 150);
  };

  const navItems = [
    { label: 'Platforms', href: '/#platforms' },
    { label: 'Ecosystems', href: '#', hasDropdown: true },
    { label: 'Engineering', href: '/#engineering' },
    { label: 'About Us', href: '/#about-us' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`glass rounded-2xl flex items-center justify-between px-6 py-3 transition-all ${isScrolled ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/20' : 'border-white/10'
            }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <motion.div
              whileHover={{ rotate: 90 }}
              className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center neon-glow-cyan transition-transform"
            >
              <Cpu className="text-white w-6 h-6" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tighter font-heading text-white">
              Arc<span className="text-cyan-400">Vion</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="text-slate-400 hover:text-white transition-colors relative group flex items-center gap-1">
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`}
                    />
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400"
                      whileHover={{ width: '100%' }}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 rounded-2xl overflow-hidden"
                        style={{
                          background: 'rgba(8, 15, 30, 0.85)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(34, 211, 238, 0.15)',
                          boxShadow: '0 0 30px rgba(34, 211, 238, 0.08), 0 20px 60px rgba(0,0,0,0.5)',
                        }}
                      >
                        {/* Top glow accent */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                        <div className="p-2">
                          {ecosystemItems.map((eco) => (
                            <motion.div key={eco.name} variants={itemVariants}>
                              <Link
                                to={eco.path}
                                className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group/item hover:bg-white/[0.06] relative overflow-hidden"
                              >
                                {/* Hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500/[0.04] to-transparent pointer-events-none" />

                                <div className="w-2 h-2 rounded-full bg-cyan-500/50 group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-300" />

                                <div className="relative z-10">
                                  <div className={`text-sm font-bold tracking-wider ${eco.color} group-hover/item:text-white transition-colors duration-300`}>
                                    {eco.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500 tracking-wider uppercase">
                                    {eco.subtitle}
                                  </div>
                                </div>

                                <ChevronRight
                                  size={14}
                                  className="ml-auto text-slate-600 group-hover/item:text-cyan-400 group-hover/item:translate-x-1 transition-all duration-300"
                                />
                              </Link>
                            </motion.div>
                          ))}
                        </div>

                        {/* Bottom accent */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-slate-400 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400"
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              ),
            )}
          </div>

          {/* Desktop CTA */}
          <DesktopAuthSection />

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass mt-2 p-6 md:hidden flex flex-col gap-4"
          >
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => setIsMobileEcoOpen(!isMobileEcoOpen)}
                    className="text-lg font-heading text-white flex items-center gap-2 w-full"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isMobileEcoOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileEcoOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 mt-2 flex flex-col gap-2"
                      >
                        {ecosystemItems.map((eco) => (
                          <Link
                            key={eco.name}
                            to={eco.path}
                            className={`text-sm font-bold tracking-wider ${eco.color} hover:text-white transition-colors py-1`}
                          >
                            {eco.name}
                            <span className="text-[10px] text-slate-500 ml-2">{eco.subtitle}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-lg font-heading text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
            <MobileAuthSection />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
