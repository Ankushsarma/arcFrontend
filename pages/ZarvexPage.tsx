import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Wind, Radar, Satellite, Cpu, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { GlassCard } from '../components/GlassCard.tsx';
import { Link } from 'react-router-dom';

/* ─── Floating HUD particles ─── */
const FloatingParticles: React.FC = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: 10 + Math.random() * 20,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-emerald-400/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -80, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  );
};

const ZarvexPage: React.FC = () => {
  const features = [
    {
      icon: <Wind size={22} className="text-white" />,
      title: 'Adaptive Aerodynamics',
      description:
        'Self-calibrating flight surfaces that adjust in real-time to wind conditions, turbulence, and mission altitude profiles for optimal endurance.',
    },
    {
      icon: <Radar size={22} className="text-white" />,
      title: 'Swarm Intelligence',
      description:
        'Autonomous multi-drone coordination with mesh networking. Deploy fleets of ZARVEX units that dynamically share sensor data and redistribute tasks.',
    },
    {
      icon: <Satellite size={22} className="text-white" />,
      title: 'Beyond-Line-of-Sight',
      description:
        'Integrated satellite uplink with encrypted telemetry for BVLOS operations. Maintain full command authority at ranges exceeding 200 km.',
    },
    {
      icon: <Cpu size={22} className="text-white" />,
      title: 'Edge AI Processing',
      description:
        'Onboard neural compute modules for real-time object detection, terrain mapping, and anomaly identification — no cloud dependency.',
    },
  ];

  return (
    <PageTransition>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] pt-32 pb-24">
        {/* Animated gradient backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.08),transparent_50%)]" />
          <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
          <FloatingParticles />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 text-center max-w-5xl px-6">
          <ScrollReveal>
            <motion.div className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-500/30 glass text-[11px] font-bold tracking-[0.4em] text-emerald-400 uppercase shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Zap size={12} className="fill-current animate-pulse" /> Aerial Intelligence Platform
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-7xl md:text-[8.5rem] font-black font-heading tracking-tighter leading-[0.85] mb-8">
              <span className="text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)]">ZAR</span>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">VEX</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              High-endurance UAV systems with{' '}
              <span className="text-white font-medium">rapid module swapping</span> for aerial intelligence,
              surveillance, and precision delivery — from urban canopy to contested airspace.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="px-10 py-4 bg-white text-black font-extrabold rounded-2xl flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.08)] group">
                REQUEST ACCESS <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
              <button className="px-10 py-4 glass border-white/20 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-all">
                VIEW SPECS v2.4
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20" />
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="py-32 bg-[#020617] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(16,185,129,0.06),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[11px] font-bold tracking-[0.5em] text-emerald-400/80 uppercase mb-4">
                Capabilities
              </p>
              <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-4">
                MISSION-GRADE <span className="text-emerald-400">AVIATION</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Every module purpose-built for the demands of high-stakes aerial operations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <GlassCard
                key={i}
                icon={f.icon}
                title={f.title}
                description={f.description}
                accentColor="emerald"
                glowColor="rgba(16, 185, 129, 0.12)"
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SPECS BAR ═══════ */}
      <section className="py-20 border-y border-white/5 bg-slate-950/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '12h+', label: 'Flight Endurance' },
                { value: '200km', label: 'BVLOS Range' },
                { value: '<30s', label: 'Module Swap' },
                { value: '8', label: 'Payload Slots' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl md:text-5xl font-black font-heading text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold tracking-[0.3em] text-emerald-400/60 uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-32 bg-[#020617] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <Shield className="mx-auto text-emerald-400 mb-8 w-12 h-12" />
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6">
              READY FOR <span className="text-emerald-400">DEPLOYMENT</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Partner with ArcVion to integrate ZARVEX into your aerial operations.
              From reconnaissance to logistics — one platform, infinite missions.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 tracking-widest uppercase hover:text-white transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default ZarvexPage;
