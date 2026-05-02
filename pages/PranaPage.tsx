import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Battery, Activity, Gauge, Workflow, Zap, Heart, ArrowUpRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { GlassCard } from '../components/GlassCard.tsx';
import { Link } from 'react-router-dom';

/* ─── Animated energy lines ─── */
const EnergyLines: React.FC = () => {
  const lines = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        width: Math.random() * 80 + 40,
        y: Math.random() * 100,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lines.map((l) => (
        <motion.div
          key={l.id}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          style={{ left: `${l.x}%`, top: `${l.y}%`, width: l.width }}
          animate={{ opacity: [0, 0.5, 0], x: [0, 60, 0] }}
          transition={{ duration: l.duration, repeat: Infinity, ease: 'linear', delay: l.delay }}
        />
      ))}
    </div>
  );
};

const PranaPage: React.FC = () => {
  const features = [
    {
      icon: <Battery size={22} className="text-white" />,
      title: 'Adaptive Power Core',
      description:
        'Intelligent battery management with predictive charge cycling. PRANA dynamically redistributes power across modules based on mission priority and thermal state.',
    },
    {
      icon: <Activity size={22} className="text-white" />,
      title: 'Real-Time Vitals',
      description:
        'Continuous health monitoring of every connected subsystem — voltage, current, temperature, and cycle-life — streamed to the ArcVion command layer.',
    },
    {
      icon: <Gauge size={22} className="text-white" />,
      title: 'Regenerative Harvesting',
      description:
        'Solar, kinetic, and thermal energy capture modules that extend operational endurance by up to 40% in the field without resupply.',
    },
    {
      icon: <Workflow size={22} className="text-white" />,
      title: 'Hot-Swap Architecture',
      description:
        'Zero-downtime power module replacement. Swap depleted cells for charged ones in under 15 seconds without interrupting mission operations.',
    },
  ];

  return (
    <PageTransition>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] pt-32 pb-24">
        {/* Animated gradient backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.08),transparent_50%)]" />
          <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
          <EnergyLines />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 text-center max-w-5xl px-6">
          <ScrollReveal>
            <motion.div className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/30 glass text-[11px] font-bold tracking-[0.4em] text-cyan-400 uppercase shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <Heart size={12} className="fill-current animate-pulse" /> Intelligent Energy Platform
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-7xl md:text-[8.5rem] font-black font-heading tracking-tighter leading-[0.85] mb-8">
              <span className="text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)]">PRA</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">NA</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              The breath of every ArcVion machine.{' '}
              <span className="text-white font-medium">Intelligent power management</span> that adapts,
              regenerates, and sustains — keeping your fleet operational when it matters most.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="px-10 py-4 bg-white text-black font-extrabold rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.08)] group">
                REQUEST ACCESS <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
              <button className="px-10 py-4 glass border-white/20 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-all">
                POWER SPECS v1.8
              </button>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20" />
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="py-32 bg-[#020617] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(34,211,238,0.06),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[11px] font-bold tracking-[0.5em] text-cyan-400/80 uppercase mb-4">
                Capabilities
              </p>
              <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-4">
                POWER THAT <span className="text-cyan-400">ADAPTS</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Intelligent energy architecture that learns, optimizes, and sustains your operations.
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
                accentColor="cyan"
                glowColor="rgba(34, 211, 238, 0.12)"
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
                { value: '40%', label: 'Extended Runtime' },
                { value: '<15s', label: 'Hot-Swap Time' },
                { value: '99.7%', label: 'Uptime SLA' },
                { value: '∞', label: 'Charge Cycles' },
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
                  <div className="text-xs font-bold tracking-[0.3em] text-cyan-400/60 uppercase">
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
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <Zap className="mx-auto text-cyan-400 mb-8 w-12 h-12" />
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6">
              NEVER RUN <span className="text-cyan-400">DRY</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              PRANA keeps your fleet breathing. Integrate intelligent energy
              management into every ArcVion deployment.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 tracking-widest uppercase hover:text-white transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default PranaPage;
