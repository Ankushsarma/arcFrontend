import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext.tsx';
import { Navigate, useLocation } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition.tsx';

/* ─── Floating particles for visual depth ─── */
const AuthParticles: React.FC = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        duration: 8 + Math.random() * 16,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400/15"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -60, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'linear', delay: p.delay }}
        />
      ))}
    </div>
  );
};

const LoginPage: React.FC = () => {
  const { currentUser, loginWithGoogle, isFirebaseConfigured } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/';

  // If already logged in, redirect
  if (currentUser) {
    return <Navigate to={from} replace />;
  }

  const handleGoogleLogin = async () => {
    if (!isFirebaseConfigured) {
      setError('Firebase is not configured. Please add your VITE_FIREBASE_* keys to .env.local and restart the server.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
    } catch (err: any) {
      if (err?.code !== 'auth/popup-closed-by-user') {
        setError(err?.message || 'Authentication failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(34,211,238,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.06),transparent_50%)]" />
          <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
          <AuthParticles />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none" />

        {/* Login card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 w-full max-w-md mx-6"
        >
          <div
            className="relative rounded-3xl p-10 overflow-hidden"
            style={{
              background: 'rgba(8, 15, 30, 0.75)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(34, 211, 238, 0.12)',
              boxShadow: '0 0 60px rgba(34, 211, 238, 0.06), 0 25px 80px rgba(0,0,0,0.5)',
            }}
          >
            {/* Top glow line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            {/* Content */}
            <div className="text-center">
              {/* Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center justify-center gap-3 mb-8"
              >
                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center neon-glow-cyan">
                  <Cpu className="text-white w-7 h-7" />
                </div>
                <span className="text-2xl font-bold tracking-tighter font-heading text-white">
                  Arc<span className="text-cyan-400">Vion</span>
                </span>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 glass text-[10px] font-bold tracking-[0.4em] text-cyan-400 uppercase mb-6">
                  <Shield size={10} className="fill-current" /> Secure Access
                </div>

                <h1 className="text-3xl md:text-4xl font-bold font-heading tracking-tight mb-3 text-white">
                  Access ArcVion
                  <br />
                  <span className="text-cyan-400">Platform</span>
                </h1>

                <p className="text-slate-400 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
                  Authenticate with your Google account to access modular robotics infrastructure.
                </p>
              </motion.div>

              {/* Google Sign-In Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(34, 211, 238, 0.2)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full group relative flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(59, 130, 246, 0.15))',
                    border: '1px solid rgba(34, 211, 238, 0.25)',
                  }}
                >
                  {/* Hover glow background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 via-cyan-500/20 to-blue-500/10 pointer-events-none" />

                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full"
                    />
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  )}

                  <span className="relative z-10 text-white">
                    {isLoading ? 'CONNECTING...' : 'SIGN IN WITH GOOGLE'}
                  </span>

                  <ArrowRight
                    size={16}
                    className="relative z-10 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </motion.button>
              </motion.div>

              {/* Error message */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-400 text-xs font-medium"
                >
                  {error}
                </motion.p>
              )}

              {/* Footer note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 text-[10px] text-slate-600 tracking-wider"
              >
                ENCRYPTED • SECURE • ZERO DATA STORED
              </motion.p>
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

            {/* Corner accents */}
            <div className="absolute top-4 right-4 text-[9px] font-mono text-cyan-500/20">
              SYS::AUTH_v2.1
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default LoginPage;
