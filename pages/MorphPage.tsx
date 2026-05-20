import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Cog, ShieldCheck, Mountain, ArrowUpRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { GlassCard } from '../components/GlassCard.tsx';
import { Link } from 'react-router-dom';

/* ─── Animated hex grid ─── */
const HexGrid: React.FC = () => {
  const hexes = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 12,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 6,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hexes.map((h) => (
        <motion.div
          key={h.id}
          className="absolute border border-blue-400/10 rotate-45"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            width: h.size,
            height: h.size,
            borderRadius: 4,
          }}
          animate={{ opacity: [0.05, 0.25, 0.05], rotate: [45, 90, 45] }}
          transition={{ duration: h.duration, repeat: Infinity, ease: 'linear', delay: h.delay }}
        />
      ))}
    </div>
  );
};

const MorphPage: React.FC = () => {
  const features = [
    {
      icon: <Truck size={22} className="text-white" />,
      title: 'All-Terrain Mobility',
      description:
        'Configurable suspension and drivetrain modules that adapt to sand, mud, snow, rocks, and urban terrain. MORPH goes where wheels alone cannot.',
    },
    {
      icon: <MapPin size={22} className="text-white" />,
      title: 'Autonomous Navigation',
      description:
        'LiDAR + stereo vision SLAM with real-time path planning. MORPH builds and updates 3D maps as it traverses, enabling GPS-denied autonomous missions.',
    },
    {
      icon: <Cog size={22} className="text-white" />,
      title: 'Modular Payload Bay',
      description:
        'Universal mounting system for sensor pods, cargo containers, robotic arms, and communication relays. Reconfigure in the field in under 60 seconds.',
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      title: 'Ruggedized Build',
      description:
        'Rugged chassis architecture designed for dust, vibration, impact, and harsh field conditions with integrated thermal management and shock absorption.',
    },
  ];

  return (
    <PageTransition>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] pt-32 pb-24">
        {/* Animated gradient backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.10),transparent_50%)]" />
          <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
          <HexGrid />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 text-center max-w-5xl px-6">
          <ScrollReveal>
            <motion.div className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 glass text-[11px] font-bold tracking-[0.4em] text-blue-400 uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <Mountain size={12} className="fill-current animate-pulse" /> Ground Operations Platform
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-7xl md:text-[8.5rem] font-black font-heading tracking-tighter leading-[0.85] mb-8">
              <span className="text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)]">MOR</span>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">PH</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              All-terrain modular rovers for{' '}
              <span className="text-white font-medium">inspection, mapping, and heavy cargo</span>.
              MORPH adapts its body to the mission — not the other way around.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-black font-extrabold rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.08)] group"
              >
                REQUEST ACCESS <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 glass border-white/20 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-all"
              >
                REQUEST CHASSIS SPECS
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20" />
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="py-32 bg-[#020617] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(59,130,246,0.06),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[11px] font-bold tracking-[0.5em] text-blue-400/80 uppercase mb-4">
                Capabilities
              </p>
              <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-4">
                TERRAIN HAS NO <span className="text-blue-400">LIMITS</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Modular ground systems engineered for the harshest environments on Earth.
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
                accentColor="blue"
                glowColor="rgba(59, 130, 246, 0.12)"
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
                { value: 'Heavy', label: 'Payload Ready' },
                { value: 'Field', label: 'Endurance Focus' },
                { value: 'Rugged', label: 'Protection Design' },
                { value: 'Rapid', label: 'Reconfig Time' },
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
                  <div className="text-xs font-bold tracking-[0.3em] text-blue-400/60 uppercase">
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
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <Truck className="mx-auto text-blue-400 mb-8 w-12 h-12" />
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6">
              DEPLOY <span className="text-blue-400">EVERYWHERE</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              MORPH transforms ground operations. One chassis, infinite configurations —
              built for the missions that matter.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 tracking-widest uppercase hover:text-white transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default MorphPage;
